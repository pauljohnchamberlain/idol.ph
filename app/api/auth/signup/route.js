import { PrismaClient } from '@prisma/client';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function POST(req) {
	console.log('Authorization header:', req.headers.get('authorization'));

	if (req.headers.get('authorization')) {
		const base64Credentials = req.headers.get('authorization')?.split(' ')[1];
		const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');

		console.log('Decoded credentials:', credentials);
		console.log('Expected credentials:', process.env.USER_ID + ':' + process.env.PASSWORD);

		if (credentials === process.env.USER_ID + ':' + process.env.PASSWORD) {
			const { name, email, password, role, username } = await req.json();

			try {
				// Validate input
				if (!name || !email || !password || !role) {
					return new Response(JSON.stringify({ success: false, error: 'Please fill all required fields' }), {
						status: 400,
					});
				}
				if (role === 'creator' && !username) {
					return new Response(JSON.stringify({ success: false, error: 'Username is required for creators' }), {
						status: 400,
					});
				}
				if (password.length < 8) {
					return new Response(
						JSON.stringify({ success: false, error: 'Password must be at least 8 characters long' }),
						{ status: 400 }
					);
				}

				// Check if user already exists
				let user = await prisma.creator.findUnique({ where: { email } });
				if (!user) {
					user = await prisma.brand.findUnique({ where: { email } });
				}
				if (user) {
					return new Response(JSON.stringify({ success: false, error: 'User already exists' }), { status: 400 });
				}

				// Check if username already exists (only for creators)
				if (role === 'creator' && username) {
					let useName = await prisma.creator.findUnique({ where: { username } });
					if (useName) {
						return new Response(JSON.stringify({ success: false, error: 'Username already exists' }), { status: 400 });
					}
				}

				// Create new user
				const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();
				let newUser;
				if (role === 'creator') {
					newUser = await prisma.creator.create({
						data: { name, email, username, password: encryptedPassword, role },
					});
				} else if (role === 'brand') {
					newUser = await prisma.brand.create({
						data: { name, email, role },
					});
				} else {
					return new Response(JSON.stringify({ success: false, error: 'Invalid role' }), { status: 400 });
				}

				// Generate JWT token
				let token = jwt.sign({ name, email, role, ...(username && { username }) }, process.env.JWT_SECRET, {
					expiresIn: '28d',
				});

				return new Response(
					JSON.stringify({
						success: true,
						message: 'Account Created successfully. Now you can login',
						token,
						role,
						email,
						name,
					}),
					{ status: 200 }
				);
			} catch (error) {
				console.error(error);
				return new Response(JSON.stringify({ success: false, error: 'Internal server error' }), { status: 500 });
			}
		} else {
			console.log('Authentication failed');
			return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
		}
	} else {
		console.log('No authorization header found');
		return new Response(JSON.stringify({ message: 'Method not allowed' }), { status: 405 });
	}
}

const signup = async (req, res) => {
	if (req.method === 'POST' && req.headers.authorization) {
		const base64Credentials = req.headers.authorization?.split(' ')[1];
		const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
		if (credentials === process.env.USER_ID + ':' + process.env.PASSWORD) {
			const { name, email, password, role, username } = req.body;

			try {
				// Check if user already exists
				let user = await prisma.creator.findUnique({ where: { email } });
				if (user) {
					return res.status(400).json({ success: false, error: 'User already exists' });
				}

				// Validate input
				if (!name || !email || !password || !role || !username) {
					return res.status(400).json({ success: false, error: 'Please fill all the fields' });
				}
				if (password.length < 8) {
					return res.status(400).json({ success: false, error: 'Password must be at least 8 characters long' });
				}

				// Check if username already exists
				let useName = await prisma.creator.findUnique({ where: { username } });
				if (useName) {
					return res.status(400).json({ success: false, error: 'Username already exists' });
				}
				// Create new user
				const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();
				const newUser = await prisma.creator.create({
					data: { name, email, username, password: encryptedPassword, role },
				});

				// Generate JWT token
				let token = jwt.sign({ name, email, role, username }, process.env.JWT_SECRET, { expiresIn: '28d' });

				res.status(200).json({
					success: true,
					message: 'Account Created successfully. Now you can login',
					token,
					role,
					email,
					name,
				});
			} catch (error) {
				console.error(error);
				res.status(500).json({ success: false, error: 'Internal server error' });
			}
		} else {
			res.status(401).json({ message: 'Unauthorized' });
		}
	} else {
		res.status(405).json({ message: 'Method not allowed' });
	}
};
