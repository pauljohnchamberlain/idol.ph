import { PrismaClient } from '@prisma/client';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function POST(req) {
	// Get the Authorization header directly from the request
	const authHeader = req.headers.get('authorization');

	if (authHeader) {
		const base64Credentials = authHeader.split(' ')[1];
		const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
		if (credentials === process.env.NEXT_PUBLIC_API_USERNAME + ':' + process.env.NEXT_PUBLIC_API_PASSWORD) {
			try {
				// Parse the request body
				const body = await req.json();

				// Validate required fields
				if (!body.email || !body.password) {
					return new Response(JSON.stringify({ success: false, error: 'Email and password are required' }), {
						status: 400,
					});
				}

				// Check for creator first
				let user = await prisma.creator.findUnique({
					where: { email: body.email },
				});

				// If not found, check for brand
				if (!user) {
					user = await prisma.brand.findUnique({
						where: { email: body.email },
					});
				}

				if (!user) {
					return new Response(JSON.stringify({ success: false, error: 'User not found' }), { status: 404 });
				}

				// Add a check for user role
				const userRole = user.role || (user.constructor.name === 'Brand' ? 'brand' : 'creator');

				const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
				let decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
				if (body.email === user.email && body.password === decryptedPassword) {
					let token = jwt.sign(
						{
							name: user.name,
							email: user.email,
							role: userRole,
							// Include any other necessary fields
						},
						process.env.JWT_SECRET,
						{ expiresIn: '28d' }
					);
					return new Response(
						JSON.stringify({
							success: true,
							token: token,
							message: 'Login Successful',
							role: userRole,
							email: user.email,
						}),
						{ status: 200 }
					);
				} else {
					return new Response(JSON.stringify({ success: false, error: 'Invalid credentials' }), { status: 401 });
				}
			} catch (error) {
				console.error('Server error:', error);
				return new Response(JSON.stringify({ success: false, error: 'Server error', details: error.message }), {
					status: 500,
				});
			} finally {
				await prisma.$disconnect();
			}
		} else {
			return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
		}
	} else {
		return new Response(JSON.stringify({ success: false, message: 'Authorization header missing' }), { status: 401 });
	}
}
