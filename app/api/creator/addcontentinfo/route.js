import { PrismaClient } from '@prisma/client';
import { verifyAuth } from '@/utils/auth'; // Assuming you have an auth utility
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
	if (!verifyAuth(req)) {
		return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
	}

	try {
		const { email, category, description, platforms } = await req.json();

		const updatedCreator = await prisma.creator.update({
			where: { email },
			data: { category, description, platforms },
		});

		if (updatedCreator) {
			return NextResponse.json({ success: true, message: 'Content Info Updated' });
		} else {
			return NextResponse.json({ success: false, message: 'Creator not found' }, { status: 400 });
		}
	} catch (err) {
		console.error(err);
		return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
	}
}
