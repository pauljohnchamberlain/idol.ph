import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Component() {
	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='grid md:grid-cols-2 gap-8 items-start'>
				<div className='md:sticky md:top-8'>
					<h1 className='text-4xl md:text-6xl font-bold leading-tight'>Frequently Asked Questions</h1>
				</div>
				<div>
					<Accordion type='single' collapsible className='w-full'>
						<AccordionItem value='item-1'>
							<AccordionTrigger>What is The Idol?</AccordionTrigger>
							<AccordionContent>
								The Idol is an American drama television series created by Sam Levinson, Abel "The Weeknd" Tesfaye, and
								Reza Fahim. It premiered on HBO in 2023 and follows the story of a self-help guru and cult leader who
								develops a complicated relationship with a rising pop idol.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-2'>
							<AccordionTrigger>Who are the main actors in The Idol?</AccordionTrigger>
							<AccordionContent>
								The main actors in The Idol include Lily-Rose Depp, who plays Jocelyn, an aspiring pop star, and Abel
								"The Weeknd" Tesfaye, who plays Tedros, a self-help guru and nightclub owner. Other notable cast members
								include Troye Sivan, Dan Levy, and Jane Adams.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-3'>
							<AccordionTrigger>How many episodes are in The Idol?</AccordionTrigger>
							<AccordionContent>
								The Idol consists of five episodes in its first season. Initially planned for six episodes, the series
								was reportedly reworked and shortened during production.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-4'>
							<AccordionTrigger>Is The Idol based on a true story?</AccordionTrigger>
							<AccordionContent>
								No, The Idol is not based on a true story. It is a fictional drama series created by Sam Levinson, Abel
								Tesfaye, and Reza Fahim. However, it does draw inspiration from and critiques various aspects of the
								music industry and celebrity culture.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>
	);
}
