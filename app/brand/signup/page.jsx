// app/brand/signup/page.jsx

import BrandSignupForm from '@/components/BrandSignupForm';

export const metadata = {
	title: 'Join as a Brand',
	description: 'Sign up to become a brand on our platform.',
};

export default function BrandSignupPage() {
	return (
		<div className='h-max text-center py-20'>
			<h1 className='text-3xl font-semibold mt-10'>Join as a brand</h1>
			<BrandSignupForm />
		</div>
	);
}
