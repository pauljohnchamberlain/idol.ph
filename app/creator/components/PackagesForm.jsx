export default function PackagesForm({ userinfo, setUserinfo, handlePackagesInfo }) {
	return (
		<div className='  px-4 py-5 sm:rounded-lg sm:p-6 border-t'>
			<div className='md:grid md:grid-cols-3 md:gap-6'>
				<div className='md:col-span-1'>
					<h3 className='text-lg font-medium leading-6 text-gray-900'>Packages You provide</h3>
					<p className='mt-1 text-sm text-gray-500'>add your packages here for brands to see</p>
				</div>
				<div className='mt-5 md:mt-0 md:col-span-2'>
					<form action='#' method='POST' onSubmit={handlePackagesInfo}>
						<div className='grid grid-cols-6 gap-6'>
							<div className='col-span-6 sm:col-span-6 '>
								<label htmlFor='category' className='block text-sm font-medium text-gray-700'>
									Packages
								</label>
								{userinfo?.packages?.map((item, index) => {
									return (
										<div className='mt-1 grid grid-cols-6 gap-2' key={index}>
											<input
												type='text'
												name='title'
												id='title'
												value={item.title}
												onChange={(e) => {
													setUserinfo({
														...userinfo,
														packages: [
															{
																...userinfo.packages[index],
																title: e.target.value,
															},
														],
													});
												}}
												placeholder='title of package'
												autoComplete='title'
												className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block  col-span-2 shadow-sm sm:text-sm border-gray-300 rounded-md'
											/>
											<select
												name='platform'
												id='platform'
												onChange={(e) => {
													setUserinfo({
														...userinfo,
														packages: [
															{
																...userinfo.packages[index],
																platform: e.target.value,
															},
														],
													});
												}}
												value={item.platform}
												required
												autoComplete='platform'
												className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block  col-span-2 shadow-sm sm:text-sm border-gray-300 rounded-md'
											>
												<option value='instagram'>Instagram</option>
												<option value='facebook'>Facebook</option>
												<option value='youtube'>Youtube</option>
											</select>

											<input
												type='text'
												name='price'
												id='price'
												value={item.price}
												placeholder='price'
												onChange={(e) => {
													setUserinfo({
														...userinfo,
														packages: [
															{
																...userinfo.packages[index],
																price: e.target.value,
															},
														],
													});
												}}
												autoComplete='price'
												className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block col-span-2  shadow-sm sm:text-sm border-gray-300 rounded-md'
											/>
											<textarea
												placeholder='describe your package'
												name='description'
												id='description'
												onChange={(e) => {
													setUserinfo({
														...userinfo,
														packages: [
															{
																...userinfo.packages[index],
																description: e.target.value,
															},
														],
													});
												}}
												value={item.description}
												rows='3'
												className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block col-span-6 sm:text-sm border-gray-300 rounded-md'
											></textarea>
										</div>
									);
								})}
								<p
									className='flex justify-end cursor-pointer px-2 py-1 bg-gray-200 w-max m-1 rounded-md ml-auto'
									onClick={() =>
										setUserinfo({
											...userinfo,
											packages: [
												...userinfo.packages,
												{
													title: '',
													platform: '',
													price: '',
													description: '',
												},
											],
										})
									}
								>
									+
								</p>
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
				</div>
			</div>
		</div>
	);
}
