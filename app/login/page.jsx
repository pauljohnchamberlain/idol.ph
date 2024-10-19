'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LoginForm from '@/components/LoginForm';
import Loading from '@/components/Loading';

export default function LoginPage() {
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === 'authenticated') {
			router.push('/dashboard');
		}
	}, [status, router]);

	if (status === 'loading') {
		return <Loading />;
	}

	if (status === 'unauthenticated') {
		return (
			<div className='h-max text-center py-20'>
				<h1 className='text-3xl font-semibold mt-20'>Login to your account</h1>
				<div className='w-full'>
					<LoginForm />
				</div>
			</div>
		);
	}

	return null;
}
