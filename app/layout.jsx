// app/layout.js
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from 'uploadthing/server';
import { ourFileRouter } from './api/uploadthing/core';
import { Providers } from './providers';
import SellingPoints from '@/components/home/SellingPoints';
import JobsBoard from '@/components/home/JobsBoard';
import MediaKit from '@/components/home/MediaKit';
import CollabHub from '@/components/home/CollabHub';
import PitchLikeAPro from '@/components/home/PitchLikeAPro';
import Faqs from '@/components/home/Faqs';

export const metadata = {
	title: 'Idol',
	description: 'Influencer Marketing Made Easy.',
};

export default function App({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body>
				<Providers>
					<NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
					<ThemeProvider attribute='class' defaultTheme='light' enableSystem={false} disableTransitionOnChange>
						<Navbar />
						<div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]' />
						{children}

						<Footer />
					</ThemeProvider>
				</Providers>
			</body>
		</html>
	);
}
