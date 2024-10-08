import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';

export default function Footer() {
	return (
		<footer className='bg-background text-foreground border-t'>
			<div className='container mx-auto px-6 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Quick Links</h3>
						<ul className='space-y-2'>
							<li>
								<Link href='/find-influencers' className='hover:underline'>
									Find Influencers
								</Link>
							</li>
							<li>
								<Link href='/become-influencer' className='hover:underline'>
									Become an Influencer
								</Link>
							</li>
							<li>
								<Link href='/pricing' className='hover:underline'>
									Pricing
								</Link>
							</li>
							<li>
								<Link href='/case-studies' className='hover:underline'>
									Case Studies
								</Link>
							</li>
						</ul>
					</div>
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Company</h3>
						<ul className='space-y-2'>
							<li>
								<Link href='/about' className='hover:underline'>
									About Us
								</Link>
							</li>
							<li>
								<Link href='/careers' className='hover:underline'>
									Careers
								</Link>
							</li>
							<li>
								<Link href='/press' className='hover:underline'>
									Press
								</Link>
							</li>
							<li>
								<Link href='/contact' className='hover:underline'>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Legal</h3>
						<ul className='space-y-2'>
							<li>
								<Link href='/terms' className='hover:underline'>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link href='/privacy' className='hover:underline'>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link href='/cookies' className='hover:underline'>
									Cookie Policy
								</Link>
							</li>
						</ul>
					</div>
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Newsletter</h3>
						<p className='text-sm'>Stay up to date with the latest news and trends in influencer marketing.</p>
						<NewsletterForm />
					</div>
				</div>
				<div className='mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center'>
					<p className='text-sm text-muted-foreground'>&copy; {new Date().getFullYear()} idol. All rights reserved.</p>
					<div className='flex space-x-4 mt-4 md:mt-0'>
						<a href='#' aria-label='Facebook' className='text-muted-foreground hover:text-foreground'>
							<Facebook className='h-5 w-5' />
						</a>
						<a href='#' aria-label='Instagram' className='text-muted-foreground hover:text-foreground'>
							<Instagram className='h-5 w-5' />
						</a>
						<a href='#' aria-label='Twitter' className='text-muted-foreground hover:text-foreground'>
							<Twitter className='h-5 w-5' />
						</a>
						<a href='#' aria-label='YouTube' className='text-muted-foreground hover:text-foreground'>
							<Youtube className='h-5 w-5' />
						</a>
						<a href='#' aria-label='LinkedIn' className='text-muted-foreground hover:text-foreground'>
							<Linkedin className='h-5 w-5' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
