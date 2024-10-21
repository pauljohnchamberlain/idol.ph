'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';
import Cookies from 'js-cookie';
import { displayName } from '@/utils/string-helpers';

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

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const router = useRouter();
	const [userKey, setUserKey] = useState(0);
	const { data: session, status } = useSession();

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
									<DropdownMenuItem>
										<Link href={getAccountSettingsUrl()}>Account Settings</Link>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<Link href={`/${session.user.role}/profilesetup`}>Profile Setup</Link>
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
								{status === 'authenticated' ? (
									<>
										<Link
											href={getAccountSettingsUrl()}
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
												signOut();
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
}

export default Navbar;
