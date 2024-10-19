// lib/auth.js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import CryptoJS from 'crypto-js';
import { capitalizeFirstLetter } from '@/utils/string-helpers';
import prisma from '@/lib/prisma';

async function signUp(credentials) {
	console.log('signUp function called with credentials:', credentials);
	const { name, email, password, role } = credentials;
	const capitalizedName = capitalizeFirstLetter(name);
	console.log('Signup attempt:', { name: capitalizedName, email, role });

	// Validate input
	if (!capitalizedName || !email || !password || !role) {
		console.log('Missing required fields');
		throw new Error('Please fill all required fields');
	}
	if (password.length < 8) {
		console.log('Password too short');
		throw new Error('Password must be at least 8 characters long');
	}

	try {
		// Check if user already exists
		let user = await prisma.creator.findUnique({ where: { email } });
		if (!user) {
			user = await prisma.brand.findUnique({ where: { email } });
		}
		if (user) {
			console.log('User already exists:', email);
			throw new Error('User already exists');
		}

		// Create new user
		const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();
		let newUser;
		if (role === 'creator') {
			console.log('Creating new creator');
			newUser = await prisma.creator.create({
				data: { name: capitalizedName, email, password: encryptedPassword, role },
			});
		} else if (role === 'brand') {
			console.log('Creating new brand');
			newUser = await prisma.brand.create({
				data: { name: capitalizedName, email, password: encryptedPassword, role },
			});
		} else {
			console.log('Invalid role:', role);
			throw new Error('Invalid role');
		}

		console.log('New user created:', newUser);
		return { ...newUser, role }; // Include role in the returned object
	} catch (error) {
		console.error('Error in signUp function:', error);
		throw error;
	}
}

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
				name: { label: 'Name', type: 'text' },
				role: { label: 'Role', type: 'text' },
				action: { label: 'Action', type: 'text' },
			},
			async authorize(credentials) {
				console.log('Authorize function called with credentials:', credentials);
				if (!credentials || !credentials.email || !credentials.password) {
					throw new Error('Please enter an email and password');
				}

				const { email, password, name, role, action } = credentials;

				if (action === 'signup') {
					// Handle signup
					return await signUp({ name, email, password, role });
				} else {
					// Handle signin
					let user = await prisma.creator.findUnique({ where: { email } });
					if (!user) {
						user = await prisma.brand.findUnique({ where: { email } });
					}

					if (!user) {
						throw new Error('No user found with this email');
					}

					const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY).toString(
						CryptoJS.enc.Utf8
					);
					if (decryptedPassword !== password) {
						throw new Error('Invalid password');
					}

					return user;
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.role = user.role;
				token.name = user.name;
				token.email = user.email;
			}
			return token;
		},
		async session({ session, token }) {
			if (token) {
				session.user.role = token.role;
				session.user.name = token.name;
				session.user.email = token.email;
			}
			return session;
		},
	},
	pages: {
		signIn: '/login',
	},
	secret: process.env.NEXTAUTH_SECRET,
};
