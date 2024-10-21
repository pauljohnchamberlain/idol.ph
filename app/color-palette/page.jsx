import { ColorPalette } from '@/components/ColorPalette';

export default function ColorPalettePage() {
	return (
		<div className='container mx-auto py-8'>
			<h1 className='text-2xl font-bold mb-4'>Color Palette</h1>
			<ColorPalette />
		</div>
	);
}
