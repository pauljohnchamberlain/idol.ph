import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
	}

	try {
		// Fetch user data from both creator and brand tables
		let user = await prisma.creator.findUnique({
			where: { email: session.user.email },
			select: {
				id: true,
				name: true,
				email: true,
				role: true,
			},
		});

		if (!user) {
			user = await prisma.brand.findUnique({
				where: { email: session.user.email },
				select: {
					id: true,
					name: true,
					email: true,
					role: true,
				},
			});
		}

		if (!user) {
			return NextResponse.json({ message: 'User not found' }, { status: 404 });
		}

		return NextResponse.json(user);
	} catch (error) {
		console.error('Error fetching user data:', error);
		return NextResponse.json({ message: 'Server error' }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
}
