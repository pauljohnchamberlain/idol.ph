import { PrismaClient } from '@prisma/client';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
	const authHeader = req.headers.get('authorization');
	if (req.method === 'POST' && authHeader) {
		const base64Credentials = authHeader?.split(' ')[1];
		const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
		if (credentials === process.env.USER_ID + ':' + process.env.PASSWORD) {
			const body = await req.json();
			let token = body.token;
			try {
				const user = jwt.verify(token, process.env.JWT_SECRET);
				const dbuser = await prisma.user.findUnique({
					where: { email: user.email },
					select: { name: true, role: true, email: true },
				});

				if (dbuser) {
					return NextResponse.json({ success: true, user: dbuser });
				}

				return NextResponse.json({ success: false, user: null });
			} catch (err) {
				return NextResponse.json({ success: false, error: 'Invalid token' });
			}
		} else {
			return NextResponse.json({ message: 'Hello bhai padhai karlo' });
		}
	} else {
		return NextResponse.json({ message: 'Abeyy Padhai likhai karo IAS~YAS Bano' });
	}
}
