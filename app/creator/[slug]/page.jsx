import Image from 'next/image';
import { notFound } from 'next/navigation';
import Creator from '@/model/Creator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BiLogoInstagramAlt, BiLogoYoutube } from 'react-icons/bi';
import { connectToDatabase } from '@/lib/mongoose';

export async function generateMetadata({ params }) {
	const { slug } = params;

	await connectToDatabase();
	const creator = await Creator.findOne({ username: slug }).lean();

	if (!creator) {
		return {
			title: 'Creator Not Found',
			description: 'The creator you are looking for does not exist.',
		};
	}

	return {
		title: `${creator.name} - Profile`,
		description: creator.description || 'Creator profile page',
	};
}

export default async function CreatorPage({ params }) {
	const { slug } = params;

	await connectToDatabase();
	const creator = await Creator.findOne({ username: slug }).lean();

	if (!creator) {
		notFound();
	}

	const { name, profileImage, category, city, state, bannerImage, description, packages, platforms } = creator;

	return <div className='w-3/4 mx-auto flex flex-col gap-y-3'>{/* ... your JSX code ... */}</div>;
}
