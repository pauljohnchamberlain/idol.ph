'use client';

import { UploadButton } from '@/utils/uploadthing';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import BannerImageUploader from '../components/BannerImageUploader';
import ProfileImageUploader from '../components/ProfileImageUploader';
import PersonalInfoForm from '../components/PersonalInfoForm';
import PackagesForm from '../components/PackagesForm';
import ContentInfoForm from '../components/ContentInfoForm';
import { useSession } from 'next-auth/react';
import Loading from '@/components/Loading';

export default function CreatorProfileSetup() {
	const { data: session, status } = useSession();
	const [userinfo, setUserinfo] = useState({
		name: '',
		email: '',
		role: '',
		profileImage: '',
		bannerImage: '',
		phone: '',
		city: '',
		region: '',
		category: '',
		description: '',
		platforms: [
			{
				platform: 'instagram',
				followers: '1000',
				profile: 'https://www.instagram.com/pauljohnchamberlain/',
			},
			{
				platform: 'youtube',
				followers: '1000',
				profile: 'https://www.facebook.com/pauljohnchamberlain/',
			},
			{
				platform: 'facebook',
				followers: '1000',
				profile: 'https://www.youtube.com/@pauljohnchamberlain/',
			},
		],
		packages: [
			{
				platform: 'instagram',
				followers: '1000',
				price: '1000',
				title: 'fwkjsdh,j',
				description: 'I will post your product on my instagram',
			},
		],
	});
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
						const phoneNumber =
							typeof data.creator.phone === 'string' && data.creator.phone.startsWith('+63')
								? data.creator.phone.slice(3)
								: data.creator.phone || '';
						setUserinfo({ ...data.creator, phone: phoneNumber });
					} else {
						console.error('Failed to fetch creator data:', data.message);
					}
					setLoading(false);
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

	const handlePersonalInfo = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('/api/creator/profileupdate', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: userinfo.name,
					phone: userinfo.phone,
					city: userinfo.city,
					region: userinfo.region,
				}),
			});

			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error('Error updating personal info:', error);
		}
	};

	const handleContentInfo = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('/api/creator/addcontentinfo', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					category: userinfo.category,
					description: userinfo.description,
					platforms: userinfo.platforms,
				}),
			});

			const data = await response.json();
			console.log(data);
			if (data.success) {
				console.log('Content info updated successfully');
			} else {
				console.error('Failed to update content info:', data.message);
			}
		} catch (error) {
			console.error('Error updating content info:', error);
		}
	};

	const handlePackagesInfo = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('/api/creator/addpackages', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					packages: userinfo.packages,
				}),
			});

			const data = await response.json();
			console.log(data);
			if (data.success) {
				console.log('Packages info updated successfully');
			} else {
				console.error('Failed to update packages info:', data.message);
			}
		} catch (error) {
			console.error('Error updating packages info:', error);
		}
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<div className='min-h-screen'>
			<div className='space-y-6 p-10'>
				{/* Personal Information Section */}
				<div className='px-4 py-5 sm:rounded-lg sm:p-6'>
					<div className='md:grid md:grid-cols-3 md:gap-6'>
						<div className='md:col-span-1'>
							<h3 className='text-lg font-medium leading-6 text-gray-900'>Personal Information</h3>
							<p className='mt-1 text-sm text-gray-500'>Use a permanent address where you can receive mail.</p>
						</div>
						<div className='mt-5 md:mt-0 md:col-span-2'>
							<BannerImageUploader userinfo={userinfo} setUserinfo={setUserinfo} />
							<ProfileImageUploader userinfo={userinfo} setUserinfo={setUserinfo} />
							<PersonalInfoForm userinfo={userinfo} setUserinfo={setUserinfo} handlePersonalInfo={handlePersonalInfo} />
						</div>
					</div>
				</div>

				{/* Content Information Section */}
				<div className='px-4 py-5 sm:rounded-lg sm:p-6 border-t'>
					<ContentInfoForm userinfo={userinfo} setUserinfo={setUserinfo} handleContentInfo={handleContentInfo} />
				</div>

				{/* Packages Information Section */}
				<PackagesForm userinfo={userinfo} setUserinfo={setUserinfo} handlePackagesInfo={handlePackagesInfo} />
			</div>
		</div>
	);
}
