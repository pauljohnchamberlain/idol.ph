import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js';

const prisma = new PrismaClient();

export async function POST(req, res) {
	if (req.method === 'POST' && req.headers.authorization) {
		const base64Credentials = req.headers.authorization?.split(' ')[1];
		const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
		if (credentials === process.env.USER_ID + ':' + process.env.PASSWORD) {
			const { password, cpassword, token } = req.body;
			if (password === cpassword) {
				try {
					let decoded = jwt.verify(token, process.env.JWT_SECRET);
					let user = await prisma.user.findUnique({ where: { email: decoded.email } });
					if (user) {
						let encryptedPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();
						await prisma.user.update({
							where: { email: decoded.email },
							data: { password: encryptedPassword },
						});
						res.status(200).json({ success: true, message: 'Password Updated Successfully' });
					} else {
						res.status(404).json({ success: false, message: 'User not found' });
					}
				} catch (error) {
					res.status(400).json({ success: false, message: 'Invalid token' });
				}
			} else {
				res.status(400).json({ success: false, message: 'Password and Confirm Password are not the same' });
			}
		} else {
			res.status(401).json({ message: 'Unauthorized' });
		}
	} else {
		res.status(405).json({ message: 'Method not allowed' });
	}
}
