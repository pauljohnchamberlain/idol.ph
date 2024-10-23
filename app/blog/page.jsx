'use client';

import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { Resend } from 'resend';

const resend = new Resend('re_YOUR_API_KEY');

export default function Component() {
	const [email, setEmail] = useState('');
	const [subscribed, setSubscribed] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError('');

		try {
			const { data, error } = await resend.emails.send({
				from: 'onboarding@resend.dev',
				to: email,
				subject: 'Welcome to Our Blog!',
				html: "<p>Thanks for subscribing to our blog. We'll keep you updated on our latest posts!</p>",
			});

			if (error) {
				console.error('Error sending email:', error);
				setError('Failed to send email. Please try again.');
			} else {
				console.log('Email sent successfully:', data);
				setSubscribed(true);
				setEmail('');
			}
		} catch (err) {
			console.error('Error:', err);
			setError('An unexpected error occurred. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='min-h-screen flex flex-col bg-gray-100'>
			<main className='flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
				<div className='max-w-md w-full space-y-8'>
					<div>
						<h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Blog Coming Soon</h1>
						<p className='mt-2 text-center text-sm text-gray-600'>
							We're working hard to bring you amazing content. Stay tuned!
						</p>
					</div>
					<div className='mt-8 space-y-6'>
						{!subscribed ? (
							<form onSubmit={handleSubmit} className='space-y-4'>
								<div className='rounded-md shadow-sm -space-y-px'>
									<div>
										<label htmlFor='email-address' className='sr-only'>
											Email address
										</label>
										<div className='relative'>
											<input
												id='email-address'
												name='email'
												type='email'
												autoComplete='email'
												required
												className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm'
												placeholder='Enter your email address'
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
											<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
												<FaEnvelope className='h-5 w-5 text-gray-400' aria-hidden='true' />
											</div>
										</div>
									</div>
								</div>

								<div>
									<button
										type='submit'
										disabled={loading}
										className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
									>
										{loading ? 'Sending...' : 'Notify Me'}
									</button>
								</div>
							</form>
						) : (
							<p className='text-center text-sm text-green-600 font-medium'>
								Thanks for subscribing! We'll keep you updated.
							</p>
						)}
						{error && <p className='text-center text-sm text-red-600'>{error}</p>}
					</div>
				</div>
			</main>
		</div>
	);
}
