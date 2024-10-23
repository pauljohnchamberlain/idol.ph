'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase, Users, Zap } from 'lucide-react';

export default function CareersPageComponent() {
	return (
		<div className='min-h-screen bg-background'>
			<header className='bg-primary text-primary-foreground py-12 md:py-24'>
				<div className='container mx-auto px-4'>
					<h1 className='text-4xl md:text-6xl font-bold mb-4'>Join Our Team</h1>
					<p className='text-xl md:text-2xl mb-8'>Shape the future of social commerce</p>
					<Button size='lg' className='bg-background text-primary hover:bg-background/90'>
						View Open Positions
						<ArrowRight className='ml-2 h-4 w-4' />
					</Button>
				</div>
			</header>
			<main className='container mx-auto px-4 py-12'>
				<section className='mb-16'>
					<h2 className='text-3xl font-bold mb-8'>Why Work With Us?</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{[
							{ icon: Zap, title: 'Innovation', description: 'Be at the forefront of social commerce technology' },
							{
								icon: Users,
								title: 'Collaborative Culture',
								description: 'Work with passionate individuals from diverse backgrounds',
							},
							{
								icon: Briefcase,
								title: 'Growth Opportunities',
								description: 'Continuous learning and career advancement',
							},
						].map((benefit, index) => (
							<Card key={index}>
								<CardHeader>
									<benefit.icon className='h-8 w-8 mb-2 text-primary' />
									<CardTitle>{benefit.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p>{benefit.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				<section className='mb-16'>
					<h2 className='text-3xl font-bold mb-8'>Open Positions</h2>
					<div className='grid gap-6'>
						{[
							{ title: 'Senior Frontend Developer', department: 'Engineering', location: 'Remote' },
							{ title: 'UX/UI Designer', department: 'Design', location: 'New York, NY' },
							{ title: 'Product Manager', department: 'Product', location: 'San Francisco, CA' },
							{ title: 'Data Scientist', department: 'Analytics', location: 'Remote' },
						].map((job, index) => (
							<Card key={index}>
								<CardHeader>
									<div className='flex justify-between items-start'>
										<div>
											<CardTitle>{job.title}</CardTitle>
											<CardDescription>{job.department}</CardDescription>
										</div>
										<Badge variant='secondary'>{job.location}</Badge>
									</div>
								</CardHeader>
								<CardContent>
									<Button variant='outline'>Learn More</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				<section className='mb-16'>
					<h2 className='text-3xl font-bold mb-8'>Our Culture</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
						<div>
							<p className='text-lg mb-4'>
								At our social media marketplace, we foster a culture of innovation, collaboration, and continuous
								learning. We believe in empowering our employees to take ownership of their work and make a real impact
								on the platform and the lives of our users.
							</p>
							<p className='text-lg'>
								Our diverse team brings together talents from all over the world, united by our mission to revolutionize
								social commerce. We value work-life balance, offer flexible working arrangements, and provide numerous
								opportunities for personal and professional growth.
							</p>
						</div>
						<div className='aspect-video rounded-lg overflow-hidden'>
							<img
								src='/placeholder.svg?height=400&width=600'
								alt='Team collaboration'
								className='w-full h-full object-cover'
							/>
						</div>
					</div>
				</section>

				<section className='mb-16'>
					<h2 className='text-3xl font-bold mb-8'>Employee Testimonial</h2>
					<Card>
						<CardContent className='flex flex-col md:flex-row items-center gap-6 py-6'>
							<img
								src='/placeholder.svg?height=200&width=200'
								alt='Employee portrait'
								className='rounded-full w-32 h-32 object-cover'
							/>
							<div>
								<p className='text-lg mb-4 italic'>
									"Joining this company was one of the best decisions of my career. The collaborative environment,
									cutting-edge projects, and opportunities for growth have exceeded my expectations. I'm excited to come
									to work every day and contribute to shaping the future of social commerce."
								</p>
								<p className='font-semibold'>Sarah Johnson</p>
								<p className='text-sm text-muted-foreground'>Senior Product Manager, 3 years at the company</p>
							</div>
						</CardContent>
					</Card>
				</section>

				<section className='text-center'>
					<h2 className='text-3xl font-bold mb-4'>Ready to Join Us?</h2>
					<p className='text-xl mb-8'>Explore our open positions and take the next step in your career</p>
					<Button size='lg' className='bg-primary text-primary-foreground hover:bg-primary/90'>
						View All Jobs
						<ArrowRight className='ml-2 h-4 w-4' />
					</Button>
				</section>
			</main>
		</div>
	);
}
