import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
	return (
		<div className='h-max text-center py-20'>
			<h1 className='text-3xl font-semibold mt-20'>Login to your account</h1>
			<div className='w-full'>
				<LoginForm />
			</div>
		</div>
	);
}
