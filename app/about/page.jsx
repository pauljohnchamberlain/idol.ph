'use client';

import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect } from 'react';

const TypingAnimation = ({ text }) => {
	const controls = useAnimation();

	useEffect(() => {
		const animate = async () => {
			await controls.start({
				opacity: 1,
				transition: { duration: 0.5 },
			});
			await controls.start((i) => ({
				opacity: 1,
				transition: { delay: i * 0.1 },
			}));
		};
		animate();
	}, [controls]);

	return (
		<motion.h1 className='text-4xl font-bold mb-4'>
			{text.split('').map((char, index) => (
				<motion.span key={`${char}-${index}`} custom={index} animate={controls} initial={{ opacity: 0 }}>
					{char}
				</motion.span>
			))}
		</motion.h1>
	);
};

export default function InfluencerMarketplaceComponent() {
	const fadeIn = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	};

	return (
		<div className='min-h-screen bg-gradient-to-b from-purple-800 to-purple-600 text-white'>
			<main>
				<section className='py-20'>
					<motion.div className='container mx-auto px-4 text-center' {...fadeIn}>
						<TypingAnimation text='About Us' />
						<p className='max-w-2xl mx-auto text-xl'>
							Welcome to the premier marketplace where influencers connect with brands and get paid for their creative
							content.
						</p>
					</motion.div>
				</section>

				<motion.section className='py-20' {...fadeIn}>
					<div className='container mx-auto px-4'>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
							{[
								{ number: '10k+', label: 'Active Influencers' },
								{ number: '500+', label: 'Brand Partnerships' },
								{ number: '$1M+', label: 'Paid to Creators' },
								{ number: '50M+', label: 'Audience Reach' },
							].map((stat, index) => (
								<motion.div
									key={index}
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ delay: index * 0.1 }}
								>
									<h2 className='text-4xl font-bold'>{stat.number}</h2>
									<p className='text-purple-200'>{stat.label}</p>
								</motion.div>
							))}
						</div>
					</div>
				</motion.section>

				<section className='bg-white text-purple-800 py-20'>
					<motion.div className='container mx-auto px-4' {...fadeIn}>
						<h2 className='text-3xl font-bold mb-8 text-center'>Top Influencers</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							{[
								{ name: 'Alex Johnson', niche: 'Travel & Lifestyle' },
								{ name: 'Samantha Lee', niche: 'Beauty & Fashion' },
								{ name: 'Mike Chen', niche: 'Tech & Gaming' },
							].map((influencer, index) => (
								<motion.div
									key={index}
									className='text-center'
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.2 }}
								>
									<Image
										src={`/placeholder.svg?height=200&width=200`}
										alt={influencer.name}
										width={200}
										height={200}
										className='rounded-full mx-auto mb-4'
									/>
									<h3 className='font-bold text-xl'>{influencer.name}</h3>
									<p className='text-purple-600'>{influencer.niche}</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</section>

				<motion.section className='py-20' {...fadeIn}>
					<div className='container mx-auto px-4'>
						<h2 className='text-3xl font-bold mb-8 text-center'>How It Works</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							{[
								{
									title: 'Create Your Profile',
									description: 'Showcase your niche, audience, and content style to attract the right brands.',
								},
								{
									title: 'Connect with Brands',
									description: 'Browse opportunities and collaborate with brands that align with your values.',
								},
								{ title: 'Get Paid', description: 'Earn money for your creative content and grow your influence.' },
							].map((step, index) => (
								<motion.div
									key={index}
									className='text-center'
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.2 }}
								>
									<div className='bg-purple-700 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center'>
										<span className='text-2xl font-bold'>{index + 1}</span>
									</div>
									<h3 className='font-bold mb-2 text-xl'>{step.title}</h3>
									<p className='text-purple-200'>{step.description}</p>
								</motion.div>
							))}
						</div>
					</div>
				</motion.section>

				<section className='bg-white text-purple-800 py-20'>
					<motion.div className='container mx-auto px-4 text-center' {...fadeIn}>
						<h2 className='text-3xl font-bold mb-4'>Ready to Monetize Your Influence?</h2>
						<p className='mb-8 text-xl'>Join our community of creators and start earning from your passion today.</p>
						<Button className='bg-purple-600 hover:bg-purple-700 text-white text-lg py-2 px-6'>Get Started</Button>
					</motion.div>
				</section>
			</main>
		</div>
	);
}
