// app/creator/signup/page.jsx

import CreatorSignupForm from '@/components/CreatorSignupForm';

export default function CreatorSignupPage() {
	return (
		<div className='h-max text-center py-20'>
			<h1 className='text-3xl font-semibold mt-10'>Join as a creator</h1>
			<div className='w-full'>
				<CreatorSignupForm />
			</div>
		</div>
	);
}
