import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudies() {
	return (
		<div className='flex flex-col min-h-screen'>
			<main className='flex-1'>
				<section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted'>
					<div className='container px-4 md:px-6'>
						<div className='flex flex-col items-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
									Customer Success Stories
								</h1>
								<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
									Discover how idol.ph has helped businesses achieve their goals and reach new heights.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8'>Featured Case Studies</h2>
						<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
							<Card>
								<CardHeader>
									<CardTitle>TechNova Solutions</CardTitle>
									<CardDescription>Software Development Company</CardDescription>
								</CardHeader>
								<CardContent>
									<p className='mb-4'>Increased productivity by 40% with our talent matching services.</p>
									<Link className='inline-flex items-center text-primary' href='#'>
										Read more <ArrowRight className='ml-2 h-4 w-4' />
									</Link>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>GlobalReach Marketing</CardTitle>
									<CardDescription>Digital Marketing Agency</CardDescription>
								</CardHeader>
								<CardContent>
									<p className='mb-4'>Expanded their team by 60% in just 3 months using our platform.</p>
									<Link className='inline-flex items-center text-primary' href='#'>
										Read more <ArrowRight className='ml-2 h-4 w-4' />
									</Link>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>FinTech Innovators</CardTitle>
									<CardDescription>Financial Technology Startup</CardDescription>
								</CardHeader>
								<CardContent>
									<p className='mb-4'>Reduced hiring costs by 50% while improving candidate quality.</p>
									<Link className='inline-flex items-center text-primary' href='#'>
										Read more <ArrowRight className='ml-2 h-4 w-4' />
									</Link>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8'>Customer Testimonials</h2>
						<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
							<Card>
								<CardHeader>
									<div className='flex items-center gap-2'>
										<Star className='w-5 h-5 fill-primary text-primary' />
										<Star className='w-5 h-5 fill-primary text-primary' />
										<Star className='w-5 h-5 fill-primary text-primary' />
										<Star className='w-5 h-5 fill-primary text-primary' />
										<Star className='w-5 h-5 fill-primary text-primary' />
									</div>
								</CardHeader>
								<CardContent>
									<p className='mb-4'>
										"idol.ph has been instrumental in our growth. Their talent pool is unmatched, and their service is
										top-notch."
									</p>
									<p className='font-semibold'>- Maria Santos, CEO of TechNova Solutions</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<div className='flex items-center gap-2'>
										<Star className='w-5 h-5 fill-primary text-primary' />
										<Star className='w-5 h-5 fill-primary text-primary' />
										<Star className='w-5 h-5 fill-primary text-primary' />
										<Star className='w-5 h-5 fill-primary text-primary' />
										<Star className='w-5 h-5 fill-primary text-primary' />
									</div>
								</CardHeader>
								<CardContent>
									<p className='mb-4'>
										"We've been able to scale our operations faster than ever thanks to idol.ph's efficient talent
										matching."
									</p>
									<p className='font-semibold'>- John Lee, COO of GlobalReach Marketing</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<div className='flex items-center gap-2'>
										<Star className='w-5 h-5 fill-primary text-primary' />
										<Star className='w-5 h-5 fill-primary text-primary' />
										<Star className='w-5 h-5 fill-primary text-primary' />
										<Star className='w-5 h-5 fill-primary text-primary' />
										<Star className='w-5 h-5 fill-primary text-primary' />
									</div>
								</CardHeader>
								<CardContent>
									<p className='mb-4'>
										"The quality of candidates we've hired through idol.ph has exceeded our expectations. Highly
										recommended!"
									</p>
									<p className='font-semibold'>- Anna Chen, HR Director at FinTech Innovators</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32'>
					<div className='container px-4 md:px-6'>
						<div className='flex flex-col items-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
									Ready to Write Your Success Story?
								</h2>
								<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
									Join the ranks of satisfied customers who have transformed their businesses with idol.ph.
								</p>
							</div>
							<div className='space-x-4'>
								<Button>Get Started</Button>
								<Button variant='outline'>Contact Sales</Button>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
