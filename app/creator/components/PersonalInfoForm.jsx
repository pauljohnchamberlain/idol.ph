export default function PersonalInfoForm({ userinfo, setUserinfo, handlePersonalInfo }) {
	return (
		<form action='#' method='POST' onSubmit={handlePersonalInfo}>
			<div className='grid grid-cols-6 gap-6'>
				<div className='col-span-6'>
					<label htmlFor='name' className='block text-sm font-medium text-gray-700'>
						Full Name
					</label>
					<input
						type='text'
						name='name'
						id='name'
						onChange={(e) => {
							setUserinfo({
								...userinfo,
								name: e.target.value,
							});
						}}
						value={userinfo.name}
						autoComplete='name'
						className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
					/>
				</div>

				<div className='col-span-6 sm:col-span-3'>
					<label htmlFor='email-address' className='block text-sm font-medium text-gray-700'>
						Email address
					</label>
					<input
						type='email'
						name='email'
						id='email'
						disabled
						onChange={(e) => {
							setUserinfo({
								...userinfo,
								email: e.target.email,
							});
						}}
						value={userinfo.email}
						autoComplete='email'
						className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200 cursor-not-allowed'
					/>
				</div>
				<div className='col-span-6 sm:col-span-3 relative'>
					<label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
						Phone No.
					</label>
					<div className='mt-1 relative rounded-md shadow-sm'>
						<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
							<span className='text-gray-500 sm:text-sm'>+63</span>
						</div>
						<input
							type='text'
							name='phone'
							id='phone'
							onChange={(e) => {
								setUserinfo({
									...userinfo,
									phone: e.target.value,
								});
							}}
							value={userinfo.phone || ''}
							autoComplete='tel'
							className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-12 sm:text-sm border-gray-300 rounded-md'
							placeholder='Phone Number'
						/>
					</div>
				</div>

				<div className='col-span-6 sm:col-span-3 '>
					<label htmlFor='city' className='block text-sm font-medium text-gray-700'>
						City
					</label>
					<input
						type='text'
						name='city'
						id='city'
						onChange={(e) => {
							setUserinfo({
								...userinfo,
								city: e.target.value,
							});
						}}
						value={userinfo.city || ''}
						autoComplete='address-level2'
						className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
					/>
				</div>

				<div className='col-span-6 sm:col-span-3 '>
					<label htmlFor='region' className='block text-sm font-medium text-gray-700'>
						Region
					</label>
					<div className='mt-1'>
						<select
							name='region'
							id='region'
							onChange={(e) => {
								setUserinfo({
									...userinfo,
									region: e.target.value,
								});
							}}
							value={userinfo.region || ''}
							required
							autoComplete='shipping address-level1'
							className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						>
							<option value='null'>Select Region</option>
							<option value='Metro Manila'>Metro Manila</option>
							<option value='Cebu'>Cebu</option>
							<option value='Davao'>Davao</option>
						</select>
					</div>
				</div>
			</div>
			<div className='flex justify-start my-4'>
				<button
					type='submit'
					className=' inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
				>
					Save
				</button>
			</div>
		</form>
	);
}
