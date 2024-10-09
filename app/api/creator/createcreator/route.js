import { PrismaClient } from '@prisma/client';
import { verifyAuth } from '@/utils/auth';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
	if (!verifyAuth(req)) {
		return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
	}

	try {
		const { email } = await req.json();

		const creator = await prisma.creator.findUnique({
			where: { email },
		});

		if (creator) {
			return NextResponse.json({ success: true, creator: creator });
		} else {
			return NextResponse.json({ success: false, message: 'Creator does not exist' }, { status: 400 });
		}
	} catch (err) {
		console.error(err);
		return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
	}
}
