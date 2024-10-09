// components/LoginForm.jsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' in 'app' directory
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './ui/button'; // Adjust import paths as needed
import { Input } from './ui/input';

export default function LoginForm() {
	const router = useRouter();
	const [userInfo, setUserInfo] = useState({
		email: '',
		password: '',
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
			const res = await fetch('/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Basic ${btoa(
						process.env.NEXT_PUBLIC_API_USERNAME + ':' + process.env.NEXT_PUBLIC_API_PASSWORD
					)}`,
				},
				body: JSON.stringify(userInfo),
			});

			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`);
			}

			const data = await res.json();

			if (data.success) {
				toast.success('Login Success', {
					position: 'top-left',
					autoClose: 5000,
					theme: 'light',
				});

				if (typeof window !== 'undefined') {
					localStorage.setItem(
						'user',
						JSON.stringify({
							email: data.email,
							role: data.role,
							token: data.token,
						})
					);
				}

				setTimeout(() => {
					if (data.role === 'brand') {
						router.push('/brand');
					} else if (data.role === 'creator') {
						router.push('/creator');
					} else {
						router.push('/');
					}
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
				<Input
					onChange={handleChange}
					id='email'
					name='email'
					required
					type='email'
					value={userInfo.email}
					placeholder='Email address'
				/>
				<Input
					onChange={handleChange}
					id='password'
					name='password'
					type='password'
					required
					minLength={1}
					value={userInfo.password}
					placeholder='Password'
				/>
				<Link href='/forgot'>
					<p className='text-blue-500 hover:underline'>Forgot password?</p>
				</Link>
				<Button type='submit'>Login</Button>
			</form>
			<div>
				<p className='text-sm text-gray-500'>
					Don't have an account?{' '}
					<Link href='/signup'>
						<span className='text-blue-500 hover:underline'>Sign up</span>
					</Link>
				</p>
			</div>
		</>
	);
}
