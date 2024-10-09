'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

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

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const user = localStorage.getItem('user');
		setIsLoggedIn(!!user);
	}, []);

	const closeMenu = () => setIsOpen(false);

	const handleLogout = () => {
		localStorage.removeItem('user');
		setIsLoggedIn(false);
		router.push('/');
	};

	return (
		<nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
			<MaxWidthWrapper>
				<div className='flex h-14 items-center justify-between border-b border-zinc-200'>
					<Link href='/' className='flex z-40 font-semibold items-center justify-center gap-x-2 rounded-md'>
						<Image src='/idol-logo.svg' alt='idol' width={100} height={20} />
					</Link>

					<div className='hidden items-center space-x-4 sm:flex'>
						<Link
							href='/explore'
							className={buttonVariants({
								variant: 'ghost',
								size: 'sm',
							})}
						>
							Explore
						</Link>
						<Link
							href='/#howitworks'
							className={buttonVariants({
								variant: 'ghost',
								size: 'sm',
							})}
						>
							How It Works
						</Link>
						{isLoggedIn ? (
							<DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
								<DropdownMenuTrigger
									className={buttonVariants({
										variant: 'ghost',
										size: 'sm',
									})}
								>
									My Account <ChevronDown className='ml-1 h-4 w-4' />
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem>
										<Link href='/account'>Account Settings</Link>
									</DropdownMenuItem>
									<DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
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
							<div className='flex flex-col space-y-4 mt-4'>
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
								{isLoggedIn ? (
									<>
										<Link
											href='/account'
											className={buttonVariants({
												variant: 'ghost',
												size: 'sm',
												className: 'w-full justify-start',
											})}
											onClick={closeMenu}
										>
											Account Settings
										</Link>
										<button
											onClick={() => {
												handleLogout();
												closeMenu();
											}}
											className={buttonVariants({
												variant: 'ghost',
												size: 'sm',
												className: 'w-full justify-start',
											})}
										>
											Logout
										</button>
									</>
								) : (
									<>
										<Link
											href='/login'
											className={buttonVariants({
												variant: 'ghost',
												size: 'sm',
												className: 'w-full justify-start',
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
												className: 'w-full justify-start',
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
												className: 'w-full justify-start',
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
};

export default Navbar;
