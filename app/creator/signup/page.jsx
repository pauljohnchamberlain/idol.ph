// app/creator/signup/page.jsx

import SignupForm from '@/components/CreatorSignupForm';

export default function CreatorSignupPage() {
	return (
		<div className='h-max text-center py-20'>
			<h1 className='text-3xl font-semibold mt-10'>Join as a creator</h1>
			<div className='w-full'>
				<SignupForm />
			</div>
		</div>
	);
}
