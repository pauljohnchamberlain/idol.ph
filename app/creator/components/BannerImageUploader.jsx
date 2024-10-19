import Image from 'next/image';
import { UploadButton } from '@/utils/uploadthing';
import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';
import { useSession } from 'next-auth/react';

const DEFAULT_BANNER_IMAGE = '/default-banner-image.jpeg';

export default function BannerImageUploader({ userinfo, setUserinfo, handleBannerImage }) {
	const [imageUrl, setImageUrl] = useState(userinfo?.bannerImage || DEFAULT_BANNER_IMAGE);
	const [isLoading, setIsLoading] = useState(false);
	const { data: session, status } = useSession();

	useEffect(() => {
		console.log('Banner Image: ', userinfo.bannerImage);
		setImageUrl(userinfo?.bannerImage || DEFAULT_BANNER_IMAGE);
	}, [userinfo?.bannerImage]);

	const handleUploadComplete = async (res) => {
		setIsLoading(true);
		console.log('Files:', res);
		console.log('First file details:', res[0]);
		console.log('Server data:', res[0].serverData);

		if (!res || res.length === 0 || !res[0].url) {
			console.error('No file URL received');
			setIsLoading(false);
			return;
		}

		const newImageUrl = res[0].url;
		console.log('Uploading new banner image:', newImageUrl);

		try {
			const response = await fetch('/api/creator/bannerimage', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ bannerImage: newImageUrl }),
			});

			const data = await response.json();
			console.log('Response from server:', data);

			if (response.ok && data.success) {
				console.log('Banner image updated successfully');
				setUserinfo((prevState) => ({
					...prevState,
					bannerImage: newImageUrl,
				}));
				setImageUrl(newImageUrl);
			} else {
				console.error('Failed to update banner image:', data.message || 'Unknown error');
			}
		} catch (error) {
			console.error('Error updating banner image:', error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='w-full block gap-5 items-center justify-between px-20'>
			<Image
				key={imageUrl}
				src={imageUrl}
				width={800}
				height={200}
				alt='Banner'
				className='w-[1000px] h-28 object-cover rounded-sm mx-auto m-2 bg-gray-300'
			/>
			<UploadButton
				endpoint='imageUploader'
				className=''
				onClientUploadComplete={handleUploadComplete}
				onUploadError={(error) => {
					console.error('Upload error:', error);
					alert(`Upload failed: ${error.message}. Please try a smaller image file.`);
				}}
			/>
			{isLoading && <Loading />}
		</div>
	);
}
