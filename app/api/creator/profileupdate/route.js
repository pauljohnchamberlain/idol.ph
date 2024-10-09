import { PrismaClient } from '@prisma/client';
import { verifyAuth } from '@/utils/auth';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
	if (!verifyAuth(req)) {
		return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
	}

	try {
		const { email, name, phone, city, state, username } = await req.json();

		const creator = await prisma.creator.findUnique({
			where: { email },
		});

		if (creator) {
			// Update existing creator
			await prisma.creator.update({
				where: { email },
				data: {
					name,
					phone,
					city,
					state,
				},
			});
			return NextResponse.json({ success: true, message: 'Creator Updated' });
		} else {
			// Create new creator
			await prisma.creator.create({
				data: {
					name,
					email,
					username,
					platforms: {
						create: [
							{ platform: 'Instagram', followers: '', profile: '' },
							{ platform: 'Youtube', followers: '', profile: '' },
							{ platform: 'Facebook', followers: '1000', profile: '' },
						],
					},
					role: 'creator',
				},
			});
			return NextResponse.json({ success: true, message: 'Creator Added' });
		}
	} catch (err) {
		console.error(err);
		return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
	}
}
