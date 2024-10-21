'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useSession } from 'next-auth/react';
import { User } from 'lucide-react';

export default function CreatorDashboardPage() {
	const { data: session } = useSession();
	const [creatorData, setCreatorData] = useState(null);

	useEffect(() => {
		if (session?.user?.email) {
			fetchCreatorData();
		}
	}, [session]);

	const fetchCreatorData = async () => {
		try {
			const response = await fetch('/api/creator/getcreator', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error('Failed to fetch creator data');
			}

			const data = await response.json();
			if (data.success && data.creator) {
				setCreatorData(data.creator);
			}
		} catch (error) {
			console.error('Error fetching creator data:', error);
		}
	};

	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-4xl font-bold mb-8'>Welcome {creatorData?.name || session?.user?.name || 'Creator'}!</h1>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
				<DashboardCard
					title='Media Kit'
					description='Put your best self forward'
					action='MANAGE'
					icon={<MediaKitIcon />}
					href='/creator/media-kit'
				/>
				<DashboardCard
					title='Packages'
					description='Save time with pre-defined services'
					action='MANAGE'
					icon={<PackagesIcon />}
					href='/creator/packages'
				/>
				<DashboardCard
					title='Collab Hub'
					description='All your collaborations in one place'
					action='OPEN'
					icon={<CollabHubIcon />}
					href='/creator/collab-hub'
				/>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<MessagesCard />
				<ProfileCard
					userImage={creatorData?.profileImage || session?.user?.image}
					userName={creatorData?.name || session?.user?.name}
				/>
			</div>
		</div>
	);
}

function DashboardCard({ title, description, action, icon, href }) {
	return (
		<Card>
			<CardContent className='flex flex-col items-start p-6'>
				<div className='mb-4'>{icon}</div>
				<h2 className='text-xl font-semibold mb-2'>{title}</h2>
				<p className='text-gray-600 mb-4'>{description}</p>
				<Link href={href}>
					<Button variant='outline'>{action}</Button>
				</Link>
			</CardContent>
		</Card>
	);
}

function MessagesCard() {
	return (
		<Card>
			<CardContent className='p-6'>
				<h2 className='text-xl font-semibold mb-2'>Messages</h2>
				<p className='text-gray-600 mb-4'>You have unread messages. Chat with brands that want to work with you.</p>
				<Button>GO TO MESSAGES</Button>
			</CardContent>
		</Card>
	);
}

function ProfileCard({ userImage, userName }) {
	return (
		<Card>
			<CardContent className='p-6'>
				<h2 className='text-xl font-semibold mb-2'>Profile</h2>
				<p className='text-gray-600 mb-4'>Complete your profile to showcase your talent.</p>
				<div className='flex items-center mb-4'>
					<div className='relative mr-4'>
						<div
							className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'
							style={{ padding: '2px' }}
						>
							<div className='absolute inset-0 bg-white rounded-full' style={{ margin: '1px' }}></div>
						</div>
						<div className='w-16 h-16 relative rounded-full overflow-hidden'>
							{userImage ? (
								<Image src={userImage} alt={`${userName || 'Profile'} avatar`} layout='fill' objectFit='cover' />
							) : (
								<div className='w-full h-full flex items-center justify-center bg-gray-200'>
									<User className='w-8 h-8 text-gray-500' />
								</div>
							)}
						</div>
					</div>
					<Link href='/creator/profile'>
						<Button variant='outline'>VIEW</Button>
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}

function MediaKitIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
			<polyline points='14 2 14 8 20 8'></polyline>
			<line x1='16' y1='13' x2='8' y2='13'></line>
			<line x1='16' y1='17' x2='8' y2='17'></line>
			<polyline points='10 9 9 9 8 9'></polyline>
		</svg>
	);
}

function PackagesIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<line x1='16.5' y1='9.4' x2='7.5' y2='4.21'></line>
			<path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'></path>
			<polyline points='3.27 6.96 12 12.01 20.73 6.96'></polyline>
			<line x1='12' y1='22.08' x2='12' y2='12'></line>
		</svg>
	);
}

function CollabHubIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
			<circle cx='9' cy='7' r='4'></circle>
			<path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
			<path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
		</svg>
	);
}
