'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function UserSignupForm({ role }) {
	const router = useRouter();
	const [userInfo, setUserInfo] = useState({
		name: '',
		email: '',
		password: '',
		role: role,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserInfo((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log('Submitting signup form:', userInfo);
			const response = await fetch('/api/auth/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userInfo),
			});

			const data = await response.json();

			if (response.ok) {
				console.log('Signup successful');
				toast.success('Signup successful!', {
					position: 'top-left',
					autoClose: 5000,
					theme: 'light',
				});
				router.push(`/${userInfo.role}/profilesetup`);
			} else {
				console.error('Signup error:', data.error);
				toast.error(data.error, {
					position: 'top-left',
					autoClose: 5000,
					theme: 'light',
				});
			}
		} catch (error) {
			console.error('An error occurred:', error);
			toast.error('An unexpected error occurred. Please try again.', {
				position: 'top-left',
				autoClose: 5000,
				theme: 'light',
			});
		}
	};

	return (
		<form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 w-80 my-10 mx-auto'>
			<input
				onChange={handleChange}
				id='text'
				name='name'
				type='text'
				value={userInfo.name}
				className='border-2 border-gray-300 p-2 rounded-lg'
				placeholder='Full Name'
				required
			/>
			<input
				onChange={handleChange}
				id='email'
				name='email'
				required
				type='email'
				value={userInfo.email}
				className='border-2 border-gray-300 p-2 rounded-lg'
				placeholder='Email address'
			/>
			<input
				onChange={handleChange}
				required
				id='password'
				name='password'
				type='password'
				value={userInfo.password}
				className='border-2 border-gray-300 p-2 rounded-lg'
				placeholder='Password'
				minLength={8}
			/>
			<button type='submit' className='bg-black text-white p-2 rounded-lg hover:text-gray-300 hover:bg-gray-800'>
				Sign up
			</button>
		</form>
	);
}
