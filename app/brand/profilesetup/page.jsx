'use client';
import { UploadButton } from '@/utils/uploadthing';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function BrandProfileSetup() {
	const [userInfo, setUserInfo] = useState({
		name: '',
		email: '',
		password: '',
		role: 'creator',
		profileImage: '',
		apartment: '',
		officeAddress: '',
		city: '',
		region: '',
		zipCode: '',
	});
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			fetch('/api/creator/getcreator', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Basic ${btoa(user.email + ':' + user.token)}`,
				},
				body: JSON.stringify({ email: user.email }),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setUserInfo(data);
				});
		}
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserInfo((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div className='min-h-screen '>
			<div className='space-y-6 p-10'>
				<div className='  px-4 py-5 sm:rounded-lg sm:p-6'>
					<div className='md:grid md:grid-cols-3 md:gap-6'>
						<div className='md:col-span-1'>
							<h3 className='text-lg font-medium leading-6 text-gray-900'>Brand Information</h3>
							<p className='mt-1 text-sm text-gray-500'>Use a permanent address where you can receive mails.</p>
						</div>
						<div className='mt-5 md:mt-0 md:col-span-2'>
							<form action='#' method='POST'>
								<div className='flex w-full'>
									<div className='w-1/2 flex gap-5  items-center justify-between px-20 '>
										<Image
											src={userInfo.profileImage || '/default-profile-image.png'}
											width={200}
											height={200}
											alt=''
											className='w-28 h-28 object-cover rounded-full mx-auto m-2 bg-gray-300'
										/>
										<UploadButton
											endpoint='imageUploader'
											className=''
											onClientUploadComplete={(res) => {
												// Do something with the response
												console.log('Files: ', res);
												setUserInfo({
													...userInfo,
													profileImage: res[0].fileUrl,
												});
												// alert("Upload Completed");
											}}
											onUploadError={(error) => {
												// Do something with the error.
												alert(`ERROR! ${error.message}`);
											}}
										/>
									</div>
									<div className='w-1/2'>
										<div className='col-span-6 sm:col-span-3'>
											<label htmlFor='name' className='block text-sm font-medium text-gray-700'>
												Brand Name
											</label>
											<Input
												type='text'
												name='name'
												id='name'
												value={userInfo.name}
												onChange={handleChange}
												className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
											/>
										</div>

										<div className='col-span-6 sm:col-span-3'>
											<label htmlFor='email-address' className='block text-sm font-medium text-gray-700'>
												Email address
											</label>
											<Input
												type='text'
												name='email'
												id='email-address'
												value={userInfo.email}
												onChange={handleChange}
												className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
											/>
										</div>
									</div>
								</div>
								<div className='grid grid-cols-6 gap-6'>
									<div className='col-span-6'>
										<label htmlFor='street-address' className='block text-sm font-medium text-gray-700'>
											Apartment, suite, etc.
										</label>
										<Input
											type='text'
											name='apartment'
											id='apartment'
											value={userInfo.apartment}
											onChange={handleChange}
											className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
										/>
									</div>
									<div className='col-span-6'>
										<label htmlFor='street-address' className='block text-sm font-medium text-gray-700'>
											Office Address
										</label>
										<Input
											type='text'
											name='officeAddress'
											id='office-address'
											value={userInfo.officeAddress}
											onChange={handleChange}
											className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
										/>
									</div>

									<div className='col-span-6 sm:col-span-6 lg:col-span-2'>
										<label htmlFor='city' className='block text-sm font-medium text-gray-700'>
											City
										</label>
										<Input
											type='text'
											name='city'
											id='city'
											value={userInfo.city}
											onChange={handleChange}
											className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
										/>
									</div>

									<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
										<label htmlFor='region' className='block text-sm font-medium text-gray-700'>
											Region
										</label>
										<select
											name='region'
											id='region'
											value={userInfo.region}
											onChange={handleChange}
											required
											className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
										>
											<option value='Metro Manila'>Metro Manila</option>
											<option value='Cebu'>Cebu</option>
											<option value='Davao'>Davao</option>
										</select>
									</div>

									<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
										<label htmlFor='postal-code' className='block text-sm font-medium text-gray-700'>
											Zip Code
										</label>
										<input
											type='text'
											name='zipCode'
											id='zip-code'
											value={userInfo.zipCode}
											onChange={handleChange}
											className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
										/>
									</div>
								</div>
								<div className='flex justify-start my-4'>
									<Button
										type='submit'
										className=' inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
									>
										Save
									</Button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
