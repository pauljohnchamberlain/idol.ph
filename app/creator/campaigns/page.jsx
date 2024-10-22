'use client';

import { useState, useMemo, useEffect } from 'react';
import { ChevronLeft, Grid, List, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

// Extended dummy data
const generateCampaigns = (count) => {
	const tags = [
		'Product',
		'Influencer',
		'UGC',
		'Tech',
		'App',
		'Lifestyle',
		'Beauty',
		'Travel',
		'Content',
		'Fashion',
		'Food',
	];
	return Array.from({ length: count }, (_, i) => ({
		id: i + 1,
		title: `Campaign ${i + 1}`,
		image: `/placeholder.svg?height=200&width=300&text=Campaign ${i + 1}`,
		tags: [tags[i % tags.length], tags[(i + 1) % tags.length]],
		giftValue: i % 3 === 0 ? 0 : Math.floor((i + 1) * 50),
		type: i % 3 === 0 ? 'gifting' : 'paid',
	}));
};

const allCampaigns = generateCampaigns(100);

export default function CampaignPage() {
	const [sidebarOpen, setSidebarOpen] = useState(true);
	const [viewMode, setViewMode] = useState('grid');
	const [offerType, setOfferType] = useState('any');
	const [minGiftValue, setMinGiftValue] = useState(0);
	const [searchTerm, setSearchTerm] = useState('');
	const [displayedCampaigns, setDisplayedCampaigns] = useState(allCampaigns.slice(0, 9));
	const [hasMore, setHasMore] = useState(true);

	const { ref, inView } = useInView({
		threshold: 0,
	});

	const filteredCampaigns = useMemo(() => {
		return displayedCampaigns.filter((campaign) => {
			const matchesOfferType =
				offerType === 'any' ||
				(offerType === 'paid' && campaign.giftValue > 0) ||
				(offerType === 'gifting' && campaign.giftValue === 0);
			const matchesGiftValue = campaign.giftValue >= minGiftValue;
			const matchesSearchTerm =
				campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				campaign.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
			return matchesOfferType && matchesGiftValue && matchesSearchTerm;
		});
	}, [offerType, minGiftValue, searchTerm, displayedCampaigns]);

	useEffect(() => {
		if (inView && hasMore) {
			const nextBatch = allCampaigns.slice(displayedCampaigns.length, displayedCampaigns.length + 9);
			setDisplayedCampaigns((prev) => [...prev, ...nextBatch]);
			if (displayedCampaigns.length + nextBatch.length >= allCampaigns.length) {
				setHasMore(false);
			}
		}
	}, [inView, hasMore, displayedCampaigns]);

	return (
		<div className='flex h-screen bg-gray-100 overflow-hidden'>
			{/* Sidebar */}
			<div
				className={cn(
					'relative z-30 bg-white shadow-lg transition-all duration-300 ease-in-out',
					sidebarOpen ? 'w-64' : 'w-16'
				)}
			>
				<div className={cn('h-full flex flex-col', sidebarOpen ? 'px-6 py-8' : 'items-center py-8')}>
					{sidebarOpen ? (
						<>
							<div className='flex justify-between items-center mb-8'>
								<h2 className='text-2xl font-bold text-gray-800'>Filters</h2>
								<Button
									variant='ghost'
									size='icon'
									onClick={() => setSidebarOpen(false)}
									className='text-gray-500 hover:text-gray-700'
								>
									<ChevronLeft className='h-6 w-6' />
								</Button>
							</div>
							<div className='space-y-8'>
								<div className='space-y-4'>
									<Label className='text-lg font-semibold text-gray-700'>Offer</Label>
									<RadioGroup value={offerType} onValueChange={setOfferType} className='space-y-2'>
										{['any', 'paid', 'gifting'].map((type) => (
											<div key={type} className='flex items-center space-x-3'>
												<RadioGroupItem value={type} id={type} className='text-primary' />
												<Label htmlFor={type} className='text-base capitalize'>
													{type}
												</Label>
											</div>
										))}
									</RadioGroup>
								</div>
								<div className='space-y-4'>
									<Label className='text-lg font-semibold text-gray-700'>Minimum gift value</Label>
									<Slider
										min={0}
										max={1000}
										step={10}
										value={[minGiftValue]}
										onValueChange={(value) => setMinGiftValue(value[0])}
										className='mt-2'
									/>
									<Input
										type='number'
										value={minGiftValue}
										onChange={(e) => setMinGiftValue(Number(e.target.value))}
										className='mt-2'
									/>
								</div>
							</div>
						</>
					) : (
						<Button
							variant='ghost'
							size='icon'
							onClick={() => setSidebarOpen(true)}
							className='text-gray-500 hover:text-gray-700'
						>
							<Filter className='h-6 w-6' />
						</Button>
					)}
				</div>
			</div>
			{/* Main Content */}
			<div className='flex-1 overflow-auto'>
				<div className='p-8'>
					<div className='flex justify-between items-center mb-8'>
						<h1 className='text-3xl font-bold text-gray-800'>Campaigns</h1>
						<div className='flex items-center space-x-4'>
							<Input
								type='text'
								placeholder='Search campaigns...'
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className='max-w-xs'
							/>
							<Button variant='outline' size='icon' onClick={() => setViewMode('grid')} className='p-2.5'>
								<Grid className='h-5 w-5' />
							</Button>
							<Button variant='outline' size='icon' onClick={() => setViewMode('list')} className='p-2.5'>
								<List className='h-5 w-5' />
							</Button>
						</div>
					</div>

					<div
						className={cn(
							'grid gap-8',
							viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
						)}
					>
						{filteredCampaigns.map((campaign) => (
							<Link href='/creator/campaigns/details' key={campaign.id}>
								<div className='bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg cursor-pointer'>
									<img src={campaign.image} alt={campaign.title} className='w-full h-48 object-cover' />
									<div className='p-6'>
										<div className='flex justify-between items-start mb-3'>
											<h3 className='font-semibold text-xl text-gray-800'>{campaign.title}</h3>
											<span
												className={cn(
													'text-xs font-medium px-2.5 py-0.5 rounded',
													campaign.type === 'paid' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'
												)}
											>
												{campaign.type}
											</span>
										</div>
										<div className='flex flex-wrap gap-2 mb-3'>
											{campaign.tags.map((tag, index) => (
												<span
													key={index}
													className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded'
												>
													{tag}
												</span>
											))}
										</div>
										{campaign.giftValue > 0 && (
											<p className='text-sm font-medium text-gray-600 bg-gray-100 rounded-full px-3 py-1 inline-block'>
												Gift Value: <span className='text-primary'>${campaign.giftValue}</span>
											</p>
										)}
									</div>
								</div>
							</Link>
						))}
					</div>
					{hasMore && (
						<div ref={ref} className='flex justify-center mt-8'>
							<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary'></div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
