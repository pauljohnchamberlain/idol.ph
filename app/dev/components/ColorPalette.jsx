export function ColorPalette({ isDark = false }) {
	const colors = [
		{ name: 'background', variable: '--background' },
		{ name: 'foreground', variable: '--foreground' },
		{ name: 'card', variable: '--card' },
		{ name: 'card-foreground', variable: '--card-foreground' },
		{ name: 'popover', variable: '--popover' },
		{ name: 'popover-foreground', variable: '--popover-foreground' },
		{ name: 'primary', variable: '--primary' },
		{ name: 'primary-foreground', variable: '--primary-foreground' },
		{ name: 'secondary', variable: '--secondary' },
		{ name: 'secondary-foreground', variable: '--secondary-foreground' },
		{ name: 'muted', variable: '--muted' },
		{ name: 'muted-foreground', variable: '--muted-foreground' },
		{ name: 'accent', variable: '--accent' },
		{ name: 'accent-foreground', variable: '--accent-foreground' },
		{ name: 'destructive', variable: '--destructive' },
		{ name: 'destructive-foreground', variable: '--destructive-foreground' },
		{ name: 'border', variable: '--border' },
		{ name: 'input', variable: '--input' },
		{ name: 'ring', variable: '--ring' },
		{ name: 'neutral', variable: '--neutral' },
	];

	return (
		<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
			{colors.map((color) => (
				<div key={color.name} className='flex flex-col items-center'>
					<div
						className='w-20 h-20 rounded-full shadow-md'
						style={{ backgroundColor: `hsl(var(${color.variable}))` }}
					></div>
					<p className={`mt-2 text-sm font-medium ${isDark ? 'text-white' : ''}`}>{color.name}</p>
					<p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{`var(${color.variable})`}</p>
				</div>
			))}
		</div>
	);
}
