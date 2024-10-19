import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET(req) {
	const session = await getServerSession(authOptions);

	if (!session || !session.user || !session.user.email) {
		return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
	}

	try {
		const creator = await prisma.creator.findUnique({
			where: { email: session.user.email },
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

export async function POST(req) {
	const session = await getServerSession(authOptions);

	if (!session) {
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
