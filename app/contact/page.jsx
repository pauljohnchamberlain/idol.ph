'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
	const [interests, setInterests] = useState([]);
	const [isPending, setIsPending] = useState(false);

	const toggleInterest = (interest) => {
		setInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsPending(true);

		const formData = new FormData(event.currentTarget);
		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message');

		try {
			const response = await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, email, message, interests }),
			});

			if (response.ok) {
				alert('Message sent successfully!');
			} else {
				throw new Error('Failed to send message');
			}
		} catch (error) {
			console.error('Error sending message:', error);
			alert('Failed to send message. Please try again.');
		} finally {
			setIsPending(false);
		}
	};

	return (
		<div className='flex flex-col md:flex-row min-h-screen bg-[#2D0A31] text-white'>
			<div className='w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between'>
				<div>
					<h1 className='text-4xl md:text-5xl font-bold mb-8'>
						Let's discuss
						<br />
						how you can <span className='text-[#B4177E]'>influence</span>
						<br />
						the philippines
					</h1>
					<div className='space-y-8 mt-8 md:mt-12'>
						<p className='flex items-center'>
							<Mail className='mr-4' />
							idolph@gmail.com
						</p>
						<p className='flex items-center'>
							<Phone className='mr-4' />
							<span className='bg-[#3D1D41] px-4 py-2 rounded-full'>+63 499 246 360</span>
						</p>
						<p className='flex items-center'>
							<MapPin className='mr-4' /> Uptown Ritz, Fort Bonifacio, Taguig, Metro Manila
						</p>
					</div>
				</div>
				<div className='flex flex-wrap gap-4 mt-8 md:mt-0'>
					<Button variant='ghost' size='icon' className='rounded-full bg-[#3D1D41]'>
						<FaFacebookF className='h-5 w-5' />
					</Button>
					<Button variant='ghost' size='icon' className='rounded-full bg-[#3D1D41]'>
						<FaYoutube className='h-5 w-5' />
					</Button>
					<Button variant='ghost' size='icon' className='rounded-full bg-[#3D1D41]'>
						<FaXTwitter className='h-5 w-5' />
					</Button>
					<Button variant='ghost' size='icon' className='rounded-full bg-[#B4177E]'>
						<FaInstagram className='h-5 w-5' />
					</Button>
					<Button variant='ghost' size='icon' className='rounded-full bg-[#3D1D41]'>
						<FaTiktok className='h-5 w-5' />
					</Button>
					<Button variant='ghost' size='icon' className='rounded-full bg-[#3D1D41]'>
						<FaLinkedinIn className='h-5 w-5' />
					</Button>
				</div>
			</div>
			<div className='w-full md:w-1/2 bg-white text-[#2D0A31] p-8 md:p-12 md:rounded-l-3xl'>
				<form onSubmit={handleSubmit} className='space-y-6'>
					<div>
						<h2 className='text-xl mb-4'>I'm interested in...</h2>
						<div className='flex flex-wrap gap-2'>
							{['UI/UX design', 'Web design', 'Graphic design', 'Design system', 'Other'].map((interest) => (
								<Button
									key={interest}
									type='button'
									onClick={() => toggleInterest(interest)}
									className={`rounded-full ${
										interests.includes(interest)
											? 'bg-[#B4177E] text-white'
											: 'bg-white text-[#B4177E] border-[#B4177E] border'
									}`}
								>
									{interest}
								</Button>
							))}
						</div>
					</div>
					<div>
						<Input
							name='name'
							placeholder='Your name'
							className='border-b border-[#D3D3D3] rounded-none px-0 placeholder-[#D3D3D3] focus:border-[#B4177E] focus:border-b-2 transition-all'
						/>
					</div>
					<div>
						<Input
							name='email'
							type='email'
							placeholder='Your email'
							className='border-b border-[#D3D3D3] rounded-none px-0 placeholder-[#D3D3D3] focus:border-[#B4177E] focus:border-b-2 transition-all'
						/>
					</div>
					<div>
						<Textarea
							name='message'
							placeholder='Your message'
							className='border-b border-[#D3D3D3] rounded-none px-0 placeholder-[#D3D3D3] resize-none focus:border-[#B4177E] focus:border-b-2 transition-all'
							rows={4}
						/>
					</div>
					<Button type='submit' className='w-full bg-[#B4177E] text-white rounded-full py-6' disabled={isPending}>
						<Send className='mr-2' />
						{isPending ? 'Sending...' : 'Send Message'}
					</Button>
				</form>
			</div>
		</div>
	);
}
