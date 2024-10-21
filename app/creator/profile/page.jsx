'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {
	User,
	Link,
	Image,
	Package,
	ChevronDown,
	Plus,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	MapPin,
	X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Loading from '@/components/Loading';

export default function ProfilePage() {
	const { data: session, status } = useSession();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [showAlert, setShowAlert] = useState(true);
	const [userInfo, setUserInfo] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (status === 'authenticated' && session) {
			fetch('/api/creator/getcreator', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((res) => {
					if (!res.ok) {
						throw new Error(`HTTP error! status: ${res.status}`);
					}
					return res.json();
				})
				.then((data) => {
					console.log(data);
					if (data.success && data.creator) {
						setUserInfo(data.creator);
					} else {
						console.error('Failed to fetch creator data:', data.message);
					}
				})
				.catch((error) => {
					console.error('Error fetching creator data:', error);
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			setLoading(false);
		}
	}, [status, session]);

	const links = [
		{ name: 'Edit Profile', href: '#' },
		{ name: 'Share Profile', href: '#' },
		{ name: 'Create Media Kit', href: '#' },
		{ name: 'My Media Kits', href: '#' },
		{ name: 'View Public Profile', href: '#' },
	];

	const socialLinks = [
		{ icon: Facebook, href: '#', alt: 'Facebook' },
		{ icon: Twitter, href: '#', alt: 'Twitter' },
		{ icon: Instagram, href: '#', alt: 'Instagram' },
		{ icon: Linkedin, href: '#', alt: 'LinkedIn' },
	];

	const categories = ['Fashion', 'Lifestyle', 'Travel'];

	const galleryImages = [
		'/placeholder.svg?height=100&width=100',
		'/placeholder.svg?height=100&width=100',
		'/placeholder.svg?height=100&width=100',
	];

	if (loading) {
		return <Loading />;
	}

	return (
		<div className='min-h-screen bg-gray-100 p-8'>
			{showAlert && (
				<Alert className='mb-4 relative'>
					<AlertDescription>
						Your profile will not appear in idol creator search results. To change your profile visibility settings, you
						must connect a social account with more than 2K followers.
					</AlertDescription>
					<Button variant='ghost' className='absolute top-2 right-2 h-8 w-8 p-0' onClick={() => setShowAlert(false)}>
						<X className='h-4 w-4' />
						<span className='sr-only'>Close</span>
					</Button>
				</Alert>
			)}
			<Card className='max-w-4xl mx-auto'>
				<CardContent className='p-6'>
					<div className='flex flex-col items-center mb-6'>
						<div className='relative mb-4'>
							<div
								className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'
								style={{ padding: '3px' }}
							>
								<div className='absolute inset-0 bg-blue-100 rounded-full' style={{ margin: '2px' }}></div>
							</div>
							<Avatar className='w-24 h-24 relative'>
								<AvatarImage src={userInfo?.profileImage || '/placeholder.svg'} alt='Profile picture' />
								<AvatarFallback>
									<User className='w-12 h-12' />
								</AvatarFallback>
							</Avatar>
						</div>
						<h1 className='text-2xl font-bold mb-1'>{userInfo?.name || 'Creator Name'}</h1>
						<p className='text-gray-500 mb-2'>1k followers</p>
						<div className='flex space-x-2 mb-4'>
							{socialLinks.map((link, index) => (
								<a key={index} href={link.href} className='text-gray-400 hover:text-gray-600'>
									<link.icon className='w-5 h-5' aria-label={link.alt} />
								</a>
							))}
						</div>
						<div className='flex space-x-2 mb-4'>
							<Button variant='default'>Create Media Kit</Button>
							<Button variant='outline'>Share Profile</Button>
						</div>
						<div className='flex flex-wrap justify-center gap-2 mb-4'>
							{categories.map((category, index) => (
								<Badge key={index} variant='secondary'>
									{category}
								</Badge>
							))}
						</div>
						<div className='flex items-center text-gray-500 mb-4'>
							<MapPin className='w-4 h-4 mr-1' />
							<span>{userInfo?.city ? `${userInfo.city}, ${userInfo.region}` : 'Location not set'}</span>
						</div>
						<div className='relative'>
							<Button variant='outline' onClick={() => setIsMenuOpen(!isMenuOpen)}>
								Menu <ChevronDown className='ml-2 h-4 w-4' />
							</Button>
							{isMenuOpen && (
								<div className='absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
									<div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
										{links.map((link, index) => (
											<a
												key={index}
												href={link.href}
												className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
												role='menuitem'
											>
												{link.name}
											</a>
										))}
									</div>
								</div>
							)}
						</div>
					</div>

					<section className='mb-8'>
						<h2 className='text-xl font-semibold mb-4'>Gallery</h2>
						<div className='grid grid-cols-3 gap-4'>
							{galleryImages.map((src, index) => (
								<img
									key={index}
									src={src}
									alt={`Gallery image ${index + 1}`}
									className='rounded-lg object-cover w-full h-32'
								/>
							))}
							<Card className='bg-gray-50'>
								<CardContent className='p-4 flex flex-col items-center justify-center h-32'>
									<Plus className='w-8 h-8 text-gray-400 mb-2' />
									<p className='text-gray-500'>Add image</p>
								</CardContent>
							</Card>
						</div>
						<Button className='w-full mt-4' variant='outline'>
							MANAGE GALLERY
						</Button>
					</section>

					<section>
						<h2 className='text-xl font-semibold mb-4'>Packages</h2>
						<Card className='bg-gray-50'>
							<CardContent className='p-4 flex flex-col items-center justify-center h-40'>
								<Plus className='w-8 h-8 text-gray-400 mb-2' />
								<p className='text-gray-500'>Add package</p>
							</CardContent>
						</Card>
						<Button className='w-full mt-4' variant='outline'>
							MANAGE PACKAGES
						</Button>
					</section>
				</CardContent>
			</Card>
		</div>
	);
}
