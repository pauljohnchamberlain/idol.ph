'use client';
import { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Dummy data for each tab
const dummyData = {
	'In Progress': [
		{
			brand: 'Nike',
			status: 'Active',
			payment: '$5000',
			quote: '$6000',
			dates: '01/01/2024 - 03/31/2024',
			collabName: 'Spring Collection',
		},
		{
			brand: 'Adidas',
			status: 'Active',
			payment: '$4500',
			quote: '$5000',
			dates: '02/15/2024 - 04/15/2024',
			collabName: 'Summer Essentials',
		},
	],
	Requests: [
		{ brand: 'Puma', status: 'Pending', payment: 'N/A', quote: '$3000', dates: 'TBD', collabName: 'Fitness Line' },
		{ brand: 'Reebok', status: 'Pending', payment: 'N/A', quote: '$4000', dates: 'TBD', collabName: 'Retro Revival' },
	],
	Pending: [
		{
			brand: 'Under Armour',
			status: 'Reviewing',
			payment: 'N/A',
			quote: '$5500',
			dates: '05/01/2024 - 07/31/2024',
			collabName: 'Performance Gear',
		},
		{
			brand: 'New Balance',
			status: 'Negotiating',
			payment: 'N/A',
			quote: '$4800',
			dates: '06/15/2024 - 08/15/2024',
			collabName: 'Urban Runner',
		},
	],
	Completed: [
		{
			brand: 'Asics',
			status: 'Finished',
			payment: '$3800',
			quote: '$3800',
			dates: '10/01/2023 - 12/31/2023',
			collabName: 'Winter Marathon',
		},
		{
			brand: 'Brooks',
			status: 'Finished',
			payment: '$4200',
			quote: '$4200',
			dates: '11/15/2023 - 01/15/2024',
			collabName: 'Trail Blazer',
		},
	],
	Cancelled: [
		{
			brand: 'Skechers',
			status: 'Cancelled',
			payment: 'N/A',
			quote: '$3500',
			dates: 'N/A',
			collabName: 'Comfort Walk',
		},
		{ brand: 'Fila', status: 'Cancelled', payment: 'N/A', quote: '$4100', dates: 'N/A', collabName: 'Retro Sport' },
	],
};

export default function Component() {
	const [activeTab, setActiveTab] = useState('In Progress');
	const [searchQuery, setSearchQuery] = useState('');

	const filteredData = dummyData[activeTab].filter((item) =>
		Object.values(item).some((value) => value.toLowerCase().includes(searchQuery.toLowerCase()))
	);

	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='flex items-center mb-8'>
				<Button variant='ghost' size='icon' className='mr-4'>
					<ArrowLeft className='h-6 w-6' />
				</Button>
				<h1 className='text-4xl font-serif'>Collab Hub</h1>
			</div>
			<div className='flex justify-between items-center mb-8'>
				<nav className='space-x-4'>
					{Object.keys(dummyData).map((tab) => (
						<Button
							key={tab}
							variant='link'
							className={`text-gray-600 ${
								activeTab === tab ? 'text-primary font-semibold border-b-2 border-primary pb-2' : ''
							}`}
							onClick={() => setActiveTab(tab)}
						>
							{tab}
						</Button>
					))}
				</nav>
				<div className='flex items-center'>
					<Input
						type='text'
						placeholder='Search...'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className='mr-2'
					/>
					<Button variant='ghost' size='icon'>
						<Search className='h-5 w-5' />
					</Button>
				</div>
			</div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Brands</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Payment</TableHead>
						<TableHead>Quote</TableHead>
						<TableHead>Dates</TableHead>
						<TableHead>Collab Name</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{filteredData.length > 0 ? (
						filteredData.map((item, index) => (
							<TableRow key={index}>
								<TableCell>{item.brand}</TableCell>
								<TableCell>{item.status}</TableCell>
								<TableCell>{item.payment}</TableCell>
								<TableCell>{item.quote}</TableCell>
								<TableCell>{item.dates}</TableCell>
								<TableCell>{item.collabName}</TableCell>
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={6} className='text-center py-8 text-gray-500'>
								No data available
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
}
