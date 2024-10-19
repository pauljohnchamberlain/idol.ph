import Image from 'next/image';
import { UploadButton } from '@/utils/uploadthing';
import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';

const DEFAULT_PROFILE_IMAGE = '/default-profile-image.png';

export default function ProfileImageUploader({ userinfo, setUserinfo }) {
	const [imageUrl, setImageUrl] = useState(userinfo?.profileImage || DEFAULT_PROFILE_IMAGE);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		console.log('Profile Image: ', userinfo.profileImage);
		setImageUrl(userinfo?.profileImage || DEFAULT_PROFILE_IMAGE);
	}, [userinfo?.profileImage]);

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
		console.log('Uploading new profile image:', newImageUrl);

		try {
			const response = await fetch('/api/creator/profileimageupdate', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ profileImage: newImageUrl }),
			});

			const data = await response.json();
			console.log('Response from server:', data);

			if (response.ok && data.success) {
				console.log('Profile image updated successfully');
				setUserinfo((prevState) => ({
					...prevState,
					profileImage: newImageUrl,
				}));
				setImageUrl(newImageUrl);
			} else {
				console.error('Failed to update profile image:', data.message || 'Unknown error');
			}
		} catch (error) {
			console.error('Error updating profile image:', error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='w-full block gap-5 items-center justify-between px-20'>
			{isLoading ? (
				<Loading />
			) : (
				<Image
					src={imageUrl.startsWith('http') ? imageUrl : `/${imageUrl.replace(/^\//, '')}`}
					width={200}
					height={200}
					alt='Profile'
					className='w-28 h-28 object-cover rounded-full mx-auto m-2 bg-gray-300'
				/>
			)}
			<UploadButton
				endpoint='imageUploader'
				className=''
				onClientUploadComplete={handleUploadComplete}
				onUploadError={(error) => {
					console.error('Upload error:', error);
					alert(`ERROR! ${error.message}`);
				}}
			/>
		</div>
	);
}
