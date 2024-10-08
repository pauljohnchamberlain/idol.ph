// app/layout.js
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
	title: 'Idol',
	description: 'Influencer Marketing Made Easy.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<ThemeProvider attribute='class' defaultTheme='light' disableTransitionOnChange>
					<Navbar />
					<div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]' />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
