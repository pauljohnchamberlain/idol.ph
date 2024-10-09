import { PrismaClient } from '@prisma/client';
import { verifyAuth } from '@/utils/auth';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
	if (!verifyAuth(req)) {
		return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
	}

	try {
		const { email, bannerImage } = await req.json();

		const creator = await prisma.creator.findUnique({
			where: { email },
		});

		if (creator) {
			await prisma.creator.update({
				where: { email },
				data: { bannerImage },
			});
			return NextResponse.json({ success: true, message: 'Banner Image Updated' });
		} else {
			return NextResponse.json({ success: false, message: 'Creator not found' }, { status: 400 });
		}
	} catch (err) {
		console.error(err);
		return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
	}
}
