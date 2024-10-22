'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ChevronDown, Settings, Star, FileText, LogOut, MessageSquare, User } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';
import { displayName, getInitials } from '@/utils/string-helpers';

import MaxWidthWrapper from './MaxWidthWrapper';
import { buttonVariants } from './ui/button';
import TextShine from '@/components/TextShine';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const router = useRouter();
	const [userKey, setUserKey] = useState(0);
	const { data: session, status } = useSession();
	const pathname = usePathname();

	function closeMenu() {
		setIsOpen(false);
	}

	async function handleLogout() {
		await signOut({ redirect: false });
		router.push('/login');
	}

	function getAccountSettingsUrl() {
		if (session && session.user) {
			return `/${session.user.role}/account`;
		}
		return '/account'; // Fallback URL if role is not available
	}

	function getDashboardUrl() {
		if (session && session.user) {
			return `/${session.user.role}/dashboard`;
		}
		return '/dashboard'; // Fallback URL if role is not available
	}

	const showDashboardLink = status === 'authenticated' && !pathname.includes('/dashboard');

	return (
		<nav
			key={userKey}
			className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'
		>
			<MaxWidthWrapper>
				<div className='flex h-14 items-center justify-between border-b border-zinc-200'>
					<Link href='/' className='flex z-40 font-semibold items-center justify-center gap-x-2 rounded-md'>
						<Image src='/idol-logo.svg' alt='idol' width={0} height={0} className='w-auto h-7 max-w-[120px]' />
					</Link>

					<div className='hidden items-center space-x-4 sm:flex'>
						{showDashboardLink && (
							<Link
								href={getDashboardUrl()}
								className={buttonVariants({
									variant: 'ghost',
									size: 'sm',
								})}
							>
								Dashboard
							</Link>
						)}
						{session?.user?.role === 'creator' && (
							<>
								<Link
									href='/creator/collab-hub'
									className={buttonVariants({
										variant: 'ghost',
										size: 'sm',
										className: 'w-full justify-center',
									})}
									onClick={closeMenu}
								>
									Collab Hub
								</Link>
								<DropdownMenu>
									<DropdownMenuTrigger
										className={buttonVariants({
											variant: 'ghost',
											size: 'sm',
										})}
									>
										Campaigns <ChevronDown className='ml-1 h-4 w-4' />
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuItem>
											<Link href='/creator/campaigns' className='flex items-center w-full'>
												Campaign Feed
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Link href='/creator/campaigns/applications' className='flex items-center w-full'>
												Applications
											</Link>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
								<DropdownMenu>
									<DropdownMenuTrigger
										className={buttonVariants({
											variant: 'ghost',
											size: 'sm',
										})}
									>
										Creator Tools <ChevronDown className='ml-1 h-4 w-4' />
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuItem>
											<Link href='/creator/media-kit' className='flex items-center w-full'>
												Media Kit
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Link href='/creator/packages' className='flex items-center w-full'>
												Packages
											</Link>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</>
						)}
						{status !== 'authenticated' ? (
							<>
								<Link
									href='/explore'
									className={buttonVariants({
										variant: 'ghost',
										size: 'sm',
										className: 'w-full justify-start',
									})}
									onClick={closeMenu}
								>
									Explore
								</Link>
								<Link
									href='/#howitworks'
									className={buttonVariants({
										variant: 'ghost',
										size: 'sm',
										className: 'w-full justify-start',
									})}
									onClick={closeMenu}
								>
									How It Works
								</Link>
							</>
						) : null}
						{status === 'authenticated' ? (
							<DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
								<DropdownMenuTrigger
									className={buttonVariants({
										variant: 'ghost',
										size: 'sm',
									})}
								>
									{displayName(session.user.name) || 'My Account'} <ChevronDown className='ml-1 h-4 w-4' />
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<div className='flex items-center space-x-2 p-2'>
										<div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold'>
											{session.user.name ? getInitials(session.user.name) : 'U'}
										</div>
										<span className='font-medium'>{session.user.name}</span>
									</div>
									{showDashboardLink && (
										<DropdownMenuItem>
											<Link href={getDashboardUrl()} className='flex items-center'>
												<User className='mr-2 h-4 w-4' />
												Dashboard
											</Link>
										</DropdownMenuItem>
									)}
									{session.user.role === 'brand' && (
										<>
											<DropdownMenuItem>
												<Link href='/brand/go-plus' className='flex items-center'>
													<Star className='mr-2 h-4 w-4' />
													Go Plus
												</Link>
											</DropdownMenuItem>
											<DropdownMenuItem>
												<Link href='/brand/reviews' className='flex items-center'>
													<MessageSquare className='mr-2 h-4 w-4' />
													Reviews
												</Link>
											</DropdownMenuItem>
											<DropdownMenuItem>
												<Link href='/brand/invoices' className='flex items-center'>
													<FileText className='mr-2 h-4 w-4' />
													Invoices
												</Link>
											</DropdownMenuItem>
										</>
									)}
									{session.user.role === 'creator' && (
										<>
											<DropdownMenuItem>
												<Link href='/creator/profile' className='flex items-center'>
													<User className='mr-2 h-4 w-4' />
													View Profile
												</Link>
											</DropdownMenuItem>
										</>
									)}
									<DropdownMenuItem>
										<Link href={getAccountSettingsUrl()} className='flex items-center'>
											<Settings className='mr-2 h-4 w-4' />
											Settings
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<Link href='/feedback' className='flex items-center'>
											<MessageSquare className='mr-2 h-4 w-4' />
											Send Feedback
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem onClick={handleLogout}>
										<LogOut className='mr-2 h-4 w-4' />
										Logout
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						) : (
							<>
								<Link
									href='/login'
									className={buttonVariants({
										variant: 'ghost',
										size: 'sm',
									})}
								>
									Login
								</Link>
								<Link
									href='/brand/signup'
									className={buttonVariants({
										variant: 'ghost',
										size: 'sm',
									})}
								>
									<TextShine text={'Join as Brand'} />
								</Link>
								<Link
									href='/creator/signup'
									className={buttonVariants({
										variant: 'ghost',
										size: 'sm',
									})}
								>
									<TextShine text={'Join as Creator'} />
								</Link>
							</>
						)}
					</div>

					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger className='sm:hidden'>
							<Menu className='h-6 w-6' />
						</SheetTrigger>
						<SheetContent side='right'>
							<div className='flex flex-col space-y-2 mt-4'>
								{showDashboardLink && (
									<Link
										href={getDashboardUrl()}
										className={buttonVariants({
											variant: 'ghost',
											size: 'sm',
											className: 'w-full justify-center',
										})}
										onClick={closeMenu}
									>
										Dashboard
									</Link>
								)}
								{session?.user?.role === 'creator' && (
									<>
										<Link
											href='/creator/collab-hub'
											className={buttonVariants({
												variant: 'ghost',
												size: 'sm',
												className: 'w-full justify-center',
											})}
											onClick={closeMenu}
										>
											Collab Hub
										</Link>
										<Accordion type='single' collapsible className='w-full space-y-2'>
											<AccordionItem value='campaigns' className='border-none'>
												<AccordionTrigger
													className={buttonVariants({
														variant: 'ghost',
														size: 'sm',
														className: 'w-full justify-center',
													})}
												>
													Campaigns
												</AccordionTrigger>
												<AccordionContent className='space-y-2 pt-2'>
													<Link
														href='/creator/campaigns'
														className={buttonVariants({
															variant: 'ghost',
															size: 'sm',
															className: 'w-full justify-center',
														})}
														onClick={closeMenu}
													>
														Campaign Feed
													</Link>
													<Link
														href='/creator/campaigns/applications'
														className={buttonVariants({
															variant: 'ghost',
															size: 'sm',
															className: 'w-full justify-center',
														})}
														onClick={closeMenu}
													>
														Applications
													</Link>
												</AccordionContent>
											</AccordionItem>
											<AccordionItem value='creator-tools' className='border-none'>
												<AccordionTrigger
													className={buttonVariants({
														variant: 'ghost',
														size: 'sm',
														className: 'w-full justify-center',
													})}
												>
													Creator Tools
												</AccordionTrigger>
												<AccordionContent className='space-y-2 pt-2'>
													<Link
														href='/creator/media-kit'
														className={buttonVariants({
															variant: 'ghost',
															size: 'sm',
															className: 'w-full justify-center',
														})}
														onClick={closeMenu}
													>
														Media Kit
													</Link>
													<Link
														href='/creator/packages'
														className={buttonVariants({
															variant: 'ghost',
															size: 'sm',
															className: 'w-full justify-center',
														})}
														onClick={closeMenu}
													>
														Packages
													</Link>
												</AccordionContent>
											</AccordionItem>
										</Accordion>
									</>
								)}
								{status !== 'authenticated' ? (
									<>
										<Link
											href='/explore'
											className={buttonVariants({
												variant: 'ghost',
												size: 'sm',
												className: 'w-full justify-center',
											})}
											onClick={closeMenu}
										>
											Explore
										</Link>
										<Link
											href='/#howitworks'
											className={buttonVariants({
												variant: 'ghost',
												size: 'sm',
												className: 'w-full justify-center',
											})}
											onClick={closeMenu}
										>
											How It Works
										</Link>
									</>
								) : null}
								{status === 'authenticated' ? (
									<Accordion type='single' collapsible className='w-full'>
										<AccordionItem value='account'>
											<AccordionTrigger
												className={buttonVariants({
													variant: 'ghost',
													size: 'sm',
													className: 'w-full justify-center',
												})}
											>
												{displayName(session.user.name) || 'My Account'}
											</AccordionTrigger>
											<AccordionContent>
												{showDashboardLink && (
													<Link
														href={getDashboardUrl()}
														className={buttonVariants({
															variant: 'ghost',
															size: 'sm',
															className: 'w-full justify-center',
														})}
														onClick={closeMenu}
													>
														Dashboard
													</Link>
												)}
												{session.user.role === 'brand' && (
													<>
														<Link
															href='/brand/go-plus'
															className={buttonVariants({
																variant: 'ghost',
																size: 'sm',
																className: 'w-full justify-center',
															})}
															onClick={closeMenu}
														>
															Go Plus
														</Link>
														<Link
															href='/brand/reviews'
															className={buttonVariants({
																variant: 'ghost',
																size: 'sm',
																className: 'w-full justify-center',
															})}
															onClick={closeMenu}
														>
															Reviews
														</Link>
														<Link
															href='/brand/invoices'
															className={buttonVariants({
																variant: 'ghost',
																size: 'sm',
																className: 'w-full justify-center',
															})}
															onClick={closeMenu}
														>
															Invoices
														</Link>
													</>
												)}
												{session.user.role === 'creator' && (
													<Link
														href='/creator/profile'
														className={buttonVariants({
															variant: 'ghost',
															size: 'sm',
															className: 'w-full justify-center',
														})}
														onClick={closeMenu}
													>
														View Profile
													</Link>
												)}
												<Link
													href={getAccountSettingsUrl()}
													className={buttonVariants({
														variant: 'ghost',
														size: 'sm',
														className: 'w-full justify-center',
													})}
													onClick={closeMenu}
												>
													Settings
												</Link>
												<Link
													href='/feedback'
													className={buttonVariants({
														variant: 'ghost',
														size: 'sm',
														className: 'w-full justify-center',
													})}
													onClick={closeMenu}
												>
													Send Feedback
												</Link>
												<button
													onClick={() => {
														handleLogout();
														closeMenu();
													}}
													className={buttonVariants({
														variant: 'ghost',
														size: 'sm',
														className: 'w-full justify-center',
													})}
												>
													Logout
												</button>
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								) : (
									<>
										<Link
											href='/login'
											className={buttonVariants({
												variant: 'ghost',
												size: 'sm',
												className: 'w-full justify-center',
											})}
											onClick={closeMenu}
										>
											Login
										</Link>
										<Link
											href='/brand/signup'
											className={buttonVariants({
												variant: 'ghost',
												size: 'sm',
												className: 'w-full justify-center',
											})}
											onClick={closeMenu}
										>
											<TextShine text={'Join as Brand'} />
										</Link>
										<Link
											href='/creator/signup'
											className={buttonVariants({
												variant: 'ghost',
												size: 'sm',
												className: 'w-full justify-center',
											})}
											onClick={closeMenu}
										>
											<TextShine text={'Join as Creator'} />
										</Link>
									</>
								)}
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</MaxWidthWrapper>
		</nav>
	);
}

export default Navbar;
