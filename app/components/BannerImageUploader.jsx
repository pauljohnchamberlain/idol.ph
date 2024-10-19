import Image from 'next/image';
import { UploadButton } from '@/utils/uploadthing';

export default function BannerImageUploader({ userinfo, setUserinfo, handleBannerImage }) {
	return (
		<div className='w-full block gap-5 items-center justify-between px-20'>
			{userinfo?.bannerImage && (
				<Image
					key={userinfo.bannerImage}
					src={userinfo.bannerImage}
					width={800}
					height={200}
					alt=''
					className='w-[1000px] h-28 object-cover rounded-sm mx-auto m-2 bg-gray-300'
				/>
			)}
			<UploadButton
				endpoint='imageUploader'
				className=''
				onClientUploadComplete={async (res) => {
					console.log('Files: ', res);
					if (userinfo && userinfo.email) {
						await handleBannerImage(userinfo.email, res[0].fileUrl);
						setUserinfo({ ...userinfo, bannerImage: res[0].fileUrl });
					} else {
						console.error('User info or email is missing');
					}
				}}
				onUploadError={(error) => {
					alert(`ERROR! ${error.message}`);
				}}
			/>
		</div>
	);
}
