import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

export default function JobsBoard() {
	return (
		<div className='bg-blue-50 rounded-xl p-8 flex flex-col md:flex-row gap-8'>
			<div className='flex-1 space-y-6'>
				<div>
					<h3 className='text-sm font-bold tracking-wider text-blue-600'>JOBS BOARD</h3>
					<h2 className='text-3xl font-bold mt-2'>Book Collabs. No commission fee.</h2>
				</div>
				<p className='text-gray-600'>
					Find, filter, and receive alerts for opportunities tailored to you. With clear job details and zero booking
					commissions, the Jobs Board is your go-to hub for discovering and securing collaborations to boost your
					career.
				</p>
				<Button variant='outline' className='rounded-full'>
					LEARN MORE
				</Button>
			</div>
			<div className='flex-1 space-y-6'>
				<div className='relative'>
					<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none' />
					<Input
						className='pl-10 rounded-full bg-gray-100 text-gray-500 cursor-not-allowed'
						placeholder='Search Jobs'
						disabled
					/>
				</div>
				<Card className='overflow-hidden'>
					<img
						src='/no-commission-fees.png'
						alt='Person applying skincare product'
						className='w-full h-48 object-cover'
					/>
					<CardContent className='p-4 space-y-4'>
						<div className='flex gap-2'>
							<Badge variant='secondary' className='rounded-full'>
								Paid
							</Badge>
							<Badge variant='secondary' className='rounded-full'>
								Product
							</Badge>
						</div>
						<p className='text-sm'>Looking for influencers to promote our cruelty free skincare product</p>
						<Button className='w-full bg-yellow-400 hover:bg-yellow-500 text-black'>APPLY</Button>
					</CardContent>
				</Card>
			</div>
			<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
				<div className='w-40 h-40 border-4 border-dotted border-gray-300 rounded-full'></div>
			</div>
		</div>
	);
}
