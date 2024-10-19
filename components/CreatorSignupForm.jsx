'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { signIn } from 'next-auth/react';

// Add this line if not already present
import 'react-toastify/dist/ReactToastify.css';

export default function CreatorSignupForm() {
	const router = useRouter();
	const [userInfo, setUserInfo] = useState({
		name: '',
		email: '',
		password: '',
		role: 'creator',
		username: '',
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
		console.log('Submitting form with userInfo:', userInfo);
		try {
			const result = await signIn('credentials', {
				email: userInfo.email,
				password: userInfo.password,
				name: userInfo.name,
				role: 'creator',
				username: userInfo.username,
				action: 'signup',
				redirect: false,
			});

			if (result.error) {
				toast.error(result.error, {
					position: 'top-left',
					autoClose: 5000,
					theme: 'light',
				});
			} else {
				toast.success('Account created successfully!', {
					position: 'top-left',
					autoClose: 5000,
					theme: 'light',
				});

				setTimeout(() => {
					router.push('/creator/profilesetup');
				}, 1000);
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
			<ToastContainer />
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
					minLength={6}
					required
				/>
				<button type='submit' className='bg-primary text-white p-2 rounded-lg hover:bg-secondary'>
					Sign up
				</button>
			</form>
			<div>
				<p className='text-sm text-gray-500'>
					Already have an account?{' '}
					<Link href='/login'>
						<span className='text-primary cursor-pointer hover:text-gray-800'>Sign in</span>
					</Link>
				</p>
			</div>
		</>
	);
}
