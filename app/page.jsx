// app/page.jsx

import MaxWidthWrapper from '../components/MaxWidthWrapper';
import HowItWorks from '../components/home/HowItWorks';
import HomeCard from '../components/home/HomeCard';
import Link from 'next/link';
import { connectToDatabase } from '../lib/mongoose'; // We'll create this utility function
import Creator from '../model/Creator';

export default async function HomePage() {
	// Connect to MongoDB
	await connectToDatabase();

	// Fetch data
	let creators = await Creator.find({}).lean();

	return (
		<>
			<MaxWidthWrapper className='mb-12 mt-20 sm:mt-40 flex flex-col items-center justify-center text-center'>
				<div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-[#7042f88b] bg-white px-7 py-2 shadow-md transition-all Welcome-box'>
					<p className='Welcome-text text-sm font-semibold cursor-pointer'>idol is now public!</p>
				</div>
				<h1 className='max-w-6xl text-5xl h-14 font-bold md:text-6xl lg:text-5xl bg-gradient-to-l from-[#e73ade] to-[#f6517d] bg-clip-text text-transparent'>
					Influencer Marketing Made Easy.
				</h1>
				<p className='mt-5 max-w-prose text-zinc-400 sm: text-lg'>
					Find and hire top Instagram, YouTube and Facebook influencers to create unique content for your brand
				</p>
			</MaxWidthWrapper>

			{/* Rest of your code */}
			<div className='mt-20'>{/* Additional content */}</div>

			{/* Value proposition section */}
			<div>
				<div className='relative isolate'>
					<div>
						<div className='mx-auto max-w-7xl px-6 my-4'>
							<h1 className='text-xl font-semibold'>Featured</h1>
							<p className='max-w-prose text-zinc-400'>Hire top influencers across all platforms</p>
							<div className='mt-10 flow-root'>
								<div className='m-2 grid grid-cols-1 md:grid-cols-4 gap-4 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
									{creators.slice(0, 4).map((item) => (
										<Link key={item._id} href={`/creator/${item.username}`}>
											<HomeCard
												imageLink={item.profileImage}
												platform={item.platforms.map((cur) => cur.platform).join(', ')}
												price={item.packages[0].price}
												categories={[item.category]}
											/>
										</Link>
									))}
								</div>
							</div>
						</div>
						{/* Instagram Section */}
						<div className='mx-auto max-w-7xl px-6 my-16'>
							<h1 className='text-xl font-semibold'>Instagram</h1>
							<p className='max-w-prose text-zinc-400'>Hire Instagram influencers</p>
							<div className='mt-10 flow-root'>
								<div className='m-2 grid grid-cols-1 md:grid-cols-4 gap-4 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
									{creators.slice(4, 8).map((item) => (
										<Link key={item._id} href={`/creator/${item.username}`}>
											<HomeCard
												imageLink={item.profileImage}
												platform={item.platforms.map((cur) => cur.platform).join(', ')}
												price={item.packages[0].price}
												categories={[item.category]}
											/>
										</Link>
									))}
								</div>
							</div>
						</div>
						{/* YouTube Section */}
						<div className='mx-auto max-w-7xl px-6 my-16'>
							<h1 className='text-xl font-semibold'>YouTube</h1>
							<p className='max-w-prose text-zinc-400'>Hire YouTube influencers</p>
							<div className='mt-10 flow-root'>
								<div className='m-2 grid grid-cols-1 md:grid-cols-4 gap-4 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
									{creators.slice(8, 12).map((item) => (
										<Link key={item._id} href={`/creator/${item.username}`}>
											<HomeCard
												imageLink={item.profileImage}
												platform={item.platforms.map((cur) => cur.platform).join(', ')}
												price={item.packages[0].price}
												categories={[item.category]}
											/>
										</Link>
									))}
								</div>
							</div>
							<HowItWorks />
							{/* <Faq /> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
