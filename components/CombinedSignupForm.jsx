'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { signIn } from 'next-auth/react';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '@/components/Loading';
import { BadgeCheck, Building2 } from 'lucide-react';
export default function CombinedSignupForm() {
	const router = useRouter();
	const [userType, setUserType] = useState('creator');
	const [userInfo, setUserInfo] = useState({
		name: '',
		email: '',
		password: '',
		role: 'creator',
	});
	const [loading, setLoading] = useState(false);

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
			const result = await signIn('credentials', {
				email: userInfo.email,
				password: userInfo.password,
				name: userInfo.name,
				role: userType,
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
					router.push(userType === 'creator' ? '/creator/profilesetup' : '/brand/profilesetup');
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

	if (loading) {
		return <Loading />;
	}

	return (
		<>
			<ToastContainer />
			<form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 w-full max-w-md mx-auto my-10 px-4'>
				<div className='flex flex-col sm:flex-row gap-4'>
					<div
						className={`flex-1 p-4 border-2 rounded-lg cursor-pointer mb-4 sm:mb-0 ${
							userType === 'creator' ? 'border-primary bg-primary/10' : 'border-gray-300'
						}`}
						onClick={() => setUserType('creator')}
					>
						<input
							type='radio'
							className='hidden'
							name='userType'
							value='creator'
							checked={userType === 'creator'}
							onChange={() => setUserType('creator')}
						/>
						<div className='flex items-center mb-2'>
							<span className='mr-2'>
								<BadgeCheck className='w-4 h-4' />
							</span>
							<span className='font-bold'>I'm a creator</span>
						</div>
						<p className='text-sm text-gray-500'>I'm a content creator or influencer</p>
					</div>
					<div
						className={`flex-1 p-4 border-2 rounded-lg cursor-pointer ${
							userType === 'brand' ? 'border-primary bg-primary/10' : 'border-gray-300'
						}`}
						onClick={() => setUserType('brand')}
					>
						<input
							type='radio'
							className='hidden'
							name='userType'
							value='brand'
							checked={userType === 'brand'}
							onChange={() => setUserType('brand')}
						/>
						<div className='flex items-center mb-2'>
							<span className='mr-2'>
								<Building2 className='w-4 h-4' />
							</span>
							<span className='font-bold'>I'm looking for talent</span>
						</div>
						<p className='text-sm text-gray-500'>I'm a brand or agency</p>
					</div>
				</div>
				<input
					onChange={handleChange}
					id='name'
					name='name'
					type='text'
					value={userInfo.name}
					className='w-full border-2 border-gray-300 p-2 rounded-lg focus:ring-primary focus:ring-2 focus:border-0'
					placeholder='Full Name'
					required
				/>
				<input
					onChange={handleChange}
					id='email'
					name='email'
					type='email'
					value={userInfo.email}
					className='w-full border-2 border-gray-300 p-2 rounded-lg focus:ring-primary focus:ring-2 focus:border-0'
					placeholder='Email address'
					required
				/>
				<input
					onChange={handleChange}
					id='password'
					name='password'
					type='password'
					value={userInfo.password}
					className='w-full border-2 border-gray-300 p-2 rounded-lg focus:ring-primary focus:ring-2 focus:border-0'
					placeholder='Password'
					minLength={6}
					required
				/>
				<button type='submit' className='w-full bg-primary text-white p-2 rounded-lg hover:bg-secondary'>
					Create Account
				</button>
				<p className='text-sm text-gray-500 text-center mt-4'>
					By registering you confirm that you accept the Terms and Conditions and Privacy Policy
				</p>
			</form>
			<div className='text-center mt-4'>
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
