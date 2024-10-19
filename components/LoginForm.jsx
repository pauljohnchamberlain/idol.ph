// components/LoginForm.jsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';

// Ensure this import is present
import 'react-toastify/dist/ReactToastify.css';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
	const router = useRouter();
	const [userInfo, setUserInfo] = useState({
		email: '',
		password: '',
	});
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserInfo((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const result = await signIn('credentials', {
				email: userInfo.email,
				password: userInfo.password,
				redirect: false,
			});

			if (result.error) {
				toast.error(result.error, {
					position: 'bottom-left',
					autoClose: 5000,
					theme: 'light',
				});
			} else {
				// Show success toast
				toast.success('Logged in successfully!', {
					position: 'bottom-left',
					autoClose: 3000,
					theme: 'light',
				});

				// Fetch user data to get the role
				const userResponse = await fetch('/api/user', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				});

				if (userResponse.ok) {
					const userData = await userResponse.json();
					if (userData.role === 'creator') {
						router.push('/creator/profilesetup');
					} else if (userData.role === 'brand') {
						router.push('/brand/profilesetup');
					} else {
						router.push('/dashboard');
					}
				} else {
					toast.error('Failed to fetch user data', {
						position: 'bottom-left',
						autoClose: 5000,
						theme: 'light',
					});
				}
			}
		} catch (error) {
			console.error('An error occurred:', error);
			toast.error('An unexpected error occurred. Please try again.', {
				position: 'bottom-left',
				autoClose: 5000,
				theme: 'light',
			});
		} finally {
			setIsLoading(false);
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
					<p className='text-primary hover:underline'>Forgot password?</p>
				</Link>
				<Button type='submit' disabled={isLoading}>
					{isLoading ? (
						<>
							<span className='mr-2'>Loading...</span>
							<span className='animate-spin'>&#8987;</span>
						</>
					) : (
						'Login'
					)}
				</Button>
			</form>
			<div>
				<p className='text-sm text-gray-500'>
					Don't have an account?{' '}
					<Link href='/signup'>
						<span className='text-primary hover:underline'>Sign up</span>
					</Link>
				</p>
			</div>
		</>
	);
}
