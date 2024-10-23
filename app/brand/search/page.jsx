'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Check, ChevronsUpDown, Heart, Star, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

// Generate 30 dummy talents
const generateDummyTalents = () => {
	const professions = ['Model', 'Actor', 'Creator', 'Influencer', 'Musician'];
	const platforms = ['Instagram', 'TikTok', 'YouTube', 'Twitter'];
	const countries = ['Australia', 'USA', 'UK', 'Canada'];
	const states = ['New South Wales', 'Victoria', 'Queensland', 'Western Australia'];
	const ethnicities = ['Caucasian', 'Asian', 'African', 'Hispanic', 'Middle Eastern'];
	const hairColors = ['Blonde', 'Brunette', 'Black', 'Red', 'Colored'];
	const bodyTypes = ['Slim', 'Athletic', 'Curvy', 'Plus-size'];
	const genders = ['Male', 'Female', 'Non-binary'];

	return Array.from({ length: 30 }, (_, i) => ({
		id: i + 1,
		name: `Talent ${i + 1}`,
		location: `${states[Math.floor(Math.random() * states.length)]}, ${
			countries[Math.floor(Math.random() * countries.length)]
		}`,
		profession: professions[Math.floor(Math.random() * professions.length)],
		platforms: [
			platforms[Math.floor(Math.random() * platforms.length)],
			platforms[Math.floor(Math.random() * platforms.length)],
		],
		followers: Math.floor(Math.random() * 1000000),
		ethnicity: ethnicities[Math.floor(Math.random() * ethnicities.length)],
		hairColor: hairColors[Math.floor(Math.random() * hairColors.length)],
		height: Math.floor(Math.random() * (200 - 150) + 150),
		bodyType: bodyTypes[Math.floor(Math.random() * bodyTypes.length)],
		rating: Math.floor(Math.random() * 5) + 1,
		jobsBooked: Math.floor(Math.random() * 100),
		image: `/placeholder.svg?height=300&width=300`,
		gender: genders[Math.floor(Math.random() * genders.length)],
		age: Math.floor(Math.random() * (50 - 18) + 18),
	}));
};

const talents = generateDummyTalents();

const genders = ['Male', 'Female', 'Non-binary'];
const platforms = ['Instagram', 'TikTok', 'YouTube', 'Twitter'];
const countries = ['Australia', 'USA', 'UK', 'Canada'];
const states = ['New South Wales', 'Victoria', 'Queensland', 'Western Australia'];
const ethnicities = ['Caucasian', 'Asian', 'African', 'Hispanic', 'Middle Eastern'];
const hairColors = ['Blonde', 'Brunette', 'Black', 'Red', 'Colored'];
const bodyTypes = ['Slim', 'Athletic', 'Curvy', 'Plus-size'];

export default function TalentSearch() {
	const [filters, setFilters] = useState({
		keyword: '',
		profession: '',
		gender: '',
		minAge: '',
		maxAge: '',
		platforms: [],
		minFollowers: '',
		maxFollowers: '',
		country: 'Australia',
		state: '',
		ethnicity: '',
		hairColor: '',
		minHeight: '',
		maxHeight: '',
		bodyType: '',
	});
	const [filteredTalents, setFilteredTalents] = useState(talents.slice(0, 10));
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(1);
	const [totalListings, setTotalListings] = useState(talents.length);
	const loader = useRef(null);

	const handleSearch = useCallback(() => {
		const filtered = talents.filter(
			(talent) =>
				talent.name.toLowerCase().includes(filters.keyword.toLowerCase()) &&
				(filters.profession === '' || talent.profession.toLowerCase().includes(filters.profession.toLowerCase())) &&
				(filters.gender === '' || talent.gender === filters.gender) &&
				(filters.minAge === '' || talent.age >= parseInt(filters.minAge)) &&
				(filters.maxAge === '' || talent.age <= parseInt(filters.maxAge)) &&
				(filters.platforms.length === 0 || filters.platforms.some((p) => talent.platforms.includes(p))) &&
				(filters.minFollowers === '' || talent.followers >= parseInt(filters.minFollowers)) &&
				(filters.maxFollowers === '' || talent.followers <= parseInt(filters.maxFollowers)) &&
				(filters.country === '' || talent.location.includes(filters.country)) &&
				(filters.state === '' || talent.location.includes(filters.state)) &&
				(filters.ethnicity === '' || talent.ethnicity === filters.ethnicity) &&
				(filters.hairColor === '' || talent.hairColor === filters.hairColor) &&
				(filters.minHeight === '' || talent.height >= parseInt(filters.minHeight)) &&
				(filters.maxHeight === '' || talent.height <= parseInt(filters.maxHeight)) &&
				(filters.bodyType === '' || talent.bodyType === filters.bodyType)
		);
		setFilteredTalents(filtered.slice(0, 10));
		setTotalListings(filtered.length);
		setPage(1);
		setHasMore(filtered.length > 10);
	}, [filters]);

	const loadMore = useCallback(() => {
		const nextPage = page + 1;
		const start = (nextPage - 1) * 10;
		const end = start + 10;
		const newTalents = filteredTalents.concat(talents.slice(start, end));
		setFilteredTalents(newTalents);
		setPage(nextPage);
		setHasMore(newTalents.length < totalListings);
	}, [page, filteredTalents, totalListings]);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '20px',
			threshold: 1.0,
		};
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && hasMore) {
				loadMore();
			}
		}, options);

		if (loader.current) {
			observer.observe(loader.current);
		}

		return () => {
			if (loader.current) {
				observer.unobserve(loader.current);
			}
		};
	}, [hasMore, loadMore]);

	const resetFilters = () => {
		setFilters({
			keyword: '',
			profession: '',
			gender: '',
			minAge: '',
			maxAge: '',
			platforms: [],
			minFollowers: '',
			maxFollowers: '',
			country: 'Australia',
			state: '',
			ethnicity: '',
			hairColor: '',
			minHeight: '',
			maxHeight: '',
			bodyType: '',
		});
		setFilteredTalents(talents.slice(0, 10));
		setTotalListings(talents.length);
		setPage(1);
		setHasMore(true);
	};

	return (
		<div className='container mx-auto p-4'>
			<div className='flex justify-between items-center mb-6'>
				<div>
					<h1 className='text-2xl font-bold'>Find Talent</h1>
					<p className='text-sm text-muted-foreground mt-1'>Total talent listings: {totalListings}</p>
				</div>
				<div className='flex gap-2'>
					<Button className='md:hidden' onClick={() => setSidebarOpen(!sidebarOpen)}>
						{sidebarOpen ? <X /> : <Menu />}
					</Button>
					<Button>Invite to job</Button>
				</div>
			</div>

			<div className='grid gap-6 md:grid-cols-[250px_1fr]'>
				<div
					className={`${
						sidebarOpen ? 'block' : 'hidden'
					} md:block space-y-4 bg-background p-4 md:p-0 fixed md:static top-0 left-0 h-full md:h-auto w-64 md:w-auto z-50 overflow-y-auto`}
				>
					<Input
						placeholder='Search keyword'
						value={filters.keyword}
						onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
					/>
					<Input
						placeholder='Filter By Profession'
						value={filters.profession}
						onChange={(e) => setFilters({ ...filters, profession: e.target.value })}
					/>
					<Select value={filters.gender} onValueChange={(value) => setFilters({ ...filters, gender: value })}>
						<SelectTrigger>
							<SelectValue placeholder='Filter By Gender' />
						</SelectTrigger>
						<SelectContent>
							{genders.map((gender) => (
								<SelectItem key={gender} value={gender}>
									{gender}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<div className='flex gap-2'>
						<Input
							placeholder='Min Age'
							type='number'
							value={filters.minAge}
							onChange={(e) => setFilters({ ...filters, minAge: e.target.value })}
						/>
						<Input
							placeholder='Max Age'
							type='number'
							value={filters.maxAge}
							onChange={(e) => setFilters({ ...filters, maxAge: e.target.value })}
						/>
					</div>
					<Popover>
						<PopoverTrigger asChild>
							<Button variant='outline' className='w-full justify-between'>
								{filters.platforms.length > 0
									? filters.platforms.length > 2
										? `${filters.platforms.length} selected`
										: filters.platforms.join(', ')
									: 'Select Platforms'}
								<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
							</Button>
						</PopoverTrigger>
						<PopoverContent className='w-[200px] p-0'>
							<Command>
								<CommandInput placeholder='Search platform...' />
								<CommandEmpty>No platform found.</CommandEmpty>
								<CommandGroup>
									{platforms.map((platform) => (
										<CommandItem
											key={platform}
											onSelect={() => {
												setFilters((prev) => {
													const newPlatforms = prev.platforms.includes(platform)
														? prev.platforms.filter((x) => x !== platform)
														: [...prev.platforms, platform];
													return { ...prev, platforms: newPlatforms };
												});
											}}
										>
											<Check
												className={cn(
													'mr-2 h-4 w-4',
													filters.platforms.includes(platform) ? 'opacity-100' : 'opacity-0'
												)}
											/>
											{platform}
										</CommandItem>
									))}
								</CommandGroup>
							</Command>
						</PopoverContent>
					</Popover>
					<div className='flex flex-wrap gap-2'>
						{filters.platforms.map((platform) => (
							<Badge key={platform} variant='secondary'>
								{platform}
								<button
									className='ml-1 hover:text-destructive'
									onClick={() =>
										setFilters((prev) => ({
											...prev,
											platforms: prev.platforms.filter((p) => p !== platform),
										}))
									}
								>
									×
								</button>
							</Badge>
						))}
					</div>
					<div className='flex gap-2'>
						<Input
							placeholder='Min Followers'
							type='number'
							value={filters.minFollowers}
							onChange={(e) => setFilters({ ...filters, minFollowers: e.target.value })}
						/>
						<Input
							placeholder='Max Followers'
							type='number'
							value={filters.maxFollowers}
							onChange={(e) => setFilters({ ...filters, maxFollowers: e.target.value })}
						/>
					</div>
					<Select value={filters.country} onValueChange={(value) => setFilters({ ...filters, country: value })}>
						<SelectTrigger>
							<SelectValue placeholder='Select Country' />
						</SelectTrigger>
						<SelectContent>
							{countries.map((country) => (
								<SelectItem key={country} value={country}>
									{country}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Select value={filters.state} onValueChange={(value) => setFilters({ ...filters, state: value })}>
						<SelectTrigger>
							<SelectValue placeholder='Select State' />
						</SelectTrigger>
						<SelectContent>
							{states.map((state) => (
								<SelectItem key={state} value={state}>
									{state}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Select value={filters.ethnicity} onValueChange={(value) => setFilters({ ...filters, ethnicity: value })}>
						<SelectTrigger>
							<SelectValue placeholder='Select Ethnicity' />
						</SelectTrigger>
						<SelectContent>
							{ethnicities.map((ethnicity) => (
								<SelectItem key={ethnicity} value={ethnicity}>
									{ethnicity}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Select value={filters.hairColor} onValueChange={(value) => setFilters({ ...filters, hairColor: value })}>
						<SelectTrigger>
							<SelectValue placeholder='Select Hair Color' />
						</SelectTrigger>
						<SelectContent>
							{hairColors.map((color) => (
								<SelectItem key={color} value={color}>
									{color}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<div className='flex gap-2'>
						<Input
							placeholder='Min Height'
							type='number'
							value={filters.minHeight}
							onChange={(e) => setFilters({ ...filters, minHeight: e.target.value })}
						/>
						<Input
							placeholder='Max Height'
							type='number'
							value={filters.maxHeight}
							onChange={(e) => setFilters({ ...filters, maxHeight: e.target.value })}
						/>
					</div>
					<Select value={filters.bodyType} onValueChange={(value) => setFilters({ ...filters, bodyType: value })}>
						<SelectTrigger>
							<SelectValue placeholder='Select Body Type' />
						</SelectTrigger>
						<SelectContent>
							{bodyTypes.map((type) => (
								<SelectItem key={type} value={type}>
									{type}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Button onClick={handleSearch} className='w-full'>
						Update Search
					</Button>
					<Button variant='outline' onClick={resetFilters} className='w-full'>
						Reset
					</Button>
				</div>

				<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{filteredTalents.map((talent) => (
						<Card key={talent.id}>
							<CardHeader className='p-0'>
								<div className='relative'>
									<img src={talent.image} alt={talent.name} className='w-full h-48 object-cover' />
									<Button size='icon' variant='ghost' className='absolute top-2 right-2'>
										<Heart className='h-4 w-4' />
									</Button>
								</div>
							</CardHeader>
							<CardContent className='p-4'>
								<CardTitle className='text-lg mb-2'>{talent.name}</CardTitle>
								<p className='text-sm text-muted-foreground mb-2'>{talent.location}</p>
								<p className='text-sm font-medium mb-2'>{talent.profession}</p>
								<div className='flex flex-wrap gap-1 mb-2'>
									{talent.platforms.map((platform) => (
										<Badge key={platform} variant='secondary'>
											{platform}
										</Badge>
									))}
								</div>
								<p className='text-sm mb-2'>{talent.followers.toLocaleString()} followers</p>
								<p className='text-sm mb-2'>Age: {talent.age}</p>
								<p className='text-sm mb-2'>Gender: {talent.gender}</p>
								<p className='text-sm mb-2'>Height: {talent.height} cm</p>
								<p className='text-sm mb-2'>{talent.bodyType}</p>
								<div className='flex items-center justify-between'>
									<div className='flex items-center'>
										{[...Array(5)].map((_, i) => (
											<Star key={i} className={`h-4 w-4 ${i < talent.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
										))}
									</div>
									<span className='text-sm font-medium'>{talent.jobsBooked} Jobs booked</span>
								</div>
							</CardContent>
						</Card>
					))}
					{hasMore && <div ref={loader}>Loading more...</div>}
				</div>
			</div>
		</div>
	);
}
