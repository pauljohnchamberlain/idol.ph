import { PrismaClient } from '@prisma/client';
import { verifyAuth } from '@/utils/auth'; // Assuming you have an auth utility
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
	if (!verifyAuth(req)) {
		return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
	}

	try {
		const { name, email, profileImage, category, location, description } = await req.json();

		const brand = await prisma.brand.upsert({
			where: { email },
			update: {
				name,
				profileImage: profileImage || undefined,
				category: category || undefined,
				location: location || undefined,
				description: description || undefined,
			},
			create: {
				name,
				email,
				role: 'brand',
			},
		});

		return NextResponse.json({
			success: true,
			message: brand.createdAt === brand.updatedAt ? 'Brand Added' : 'Brand Updated',
		});
	} catch (err) {
		console.error(err);
		return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
	}
}
