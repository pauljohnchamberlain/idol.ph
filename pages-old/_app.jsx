

import { ThemeProvider } from '@/components/ThemeProvider';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';



export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider


      attribute="class"
      defaultTheme="light"
      // enableSystem

      disableTransitionOnChange
    >
      <Navbar />
      <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]' />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
