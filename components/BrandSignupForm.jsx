// components/BrandSignupForm.jsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' in the app directory
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BrandSignupForm() {
	const router = useRouter();
	const [userInfo, setUserInfo] = useState({
		name: '',
		email: '',
		password: '',
		role: 'brand',
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
		console.log(userInfo);

		try {
			const res = await fetch('/api/auth/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Basic ${btoa(
						process.env.NEXT_PUBLIC_API_USERNAME + ':' + process.env.NEXT_PUBLIC_API_PASSWORD
					)}`,
				},
				body: JSON.stringify(userInfo),
			});

			const data = await res.json();
			console.log(data);

			if (data.success) {
				toast.success(data.message, {
					position: 'top-left',
					autoClose: 5000,
					theme: 'light',
				});

				if (typeof window !== 'undefined') {
					localStorage.setItem('user', JSON.stringify(data.token));
				}

				setTimeout(() => {
					router.push('/brand');
				}, 1000);
			} else {
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
		<>
			<ToastContainer position='bottom-left' autoClose={5000} theme='light' />
			<form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 w-80 my-10 mx-auto'>
				<input
					onChange={handleChange}
					id='name'
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
					type='email'
					value={userInfo.email}
					className='border-2 border-gray-300 p-2 rounded-lg'
					placeholder='Email address'
					required
				/>
				<input
					onChange={handleChange}
					id='password'
					name='password'
					type='password'
					value={userInfo.password}
					className='border-2 border-gray-300 p-2 rounded-lg'
					placeholder='Password'
					minLength={8}
					required
				/>
				<button type='submit' className='bg-black text-white p-2 rounded-lg hover:text-gray-300 hover:bg-gray-800'>
					Sign up
				</button>
			</form>
			<div>
				<p className='text-sm text-gray-500'>
					Already have an account?{' '}
					<Link href='/login'>
						<span className='text-black cursor-pointer hover:text-gray-800'>Sign in</span>
					</Link>
				</p>
			</div>
		</>
	);
}
