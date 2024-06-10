<!-- This is where the tab with the components/code/sandbox live -->
<script lang="js">
	import SectionWrapper from './SectionWrapper.svelte';
	import ButtonTab from './ComponentDemos/ButtonTabs/ButtonTab.svelte';
	import ModalTab from './ComponentDemos/ModalTabs/ModalTab.svelte';
	import CheckboxTab from './ComponentDemos/CheckboxTabs/CheckboxTab.svelte';
	import FormTab from './ComponentDemos/FormTabs/FormTab.svelte';
	import NavBarTab from './ComponentDemos/NavBarTabs/NavBarTab.svelte';
	import MenuTab from './ComponentDemos/MenuTabs/MenuTab.svelte';
	import RadioGroupTab from './ComponentDemos/RadioGroupTabs/RadioGroupTab.svelte';


	import Accordion from '$lib/Accordion.svelte';
	import Button from '$lib/Button.svelte';
	import AccordionGroup from '$lib/AccordionGroup.svelte';

	const accordions = [
		{ name: 'Button', heading: 'Button Component', slot: ButtonTab },
		{ name: 'Modal', heading: 'Modal Component', slot: ModalTab },
		{ name: 'Accordion', heading: 'Checkbox Component', slot: CheckboxTab },
		{ name: 'Accordion', heading: 'Form Component', slot: FormTab },
		{ name: 'Accordion', heading: 'NavBar Component', slot: NavBarTab },
		{ name: 'Accordion', heading: 'Menu Component', slot: MenuTab },
		{ name: 'Accordion', heading: 'RadioGroup Component', slot: RadioGroupTab }
	];
</script>

<SectionWrapper id="CompTab">
	<div
		class="flex flex-col gap-5 sm:gap-10 md:gap-15 flex-1 items-center justify-center pb-10 md:pb-14"
	>
		<div class="flex flex-col gap-2">
			<h6
				class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
			>
				Components
			</h6>
		</div>
		<h7 class="text-2xl sm:text-3xl md:text-4xl max-w-[1000px] mx-auto w-full text-center">
			Welcome to the SvARIA Playground
			<p
				class="text-xl sm:text-2xl md:text-3xl max-w-[1000px] mx-auto w-full italic font-light text-center"
			>
				<br />
				Select your component and toggle the tabs to experience <br />a demo, obtain code, read the
				docs, or play around in the sandbox.
			</p>
			<br /><br />
			<AccordionGroup group={accordions} ariaLabel="Component Accordion"></AccordionGroup>
		</h7>
	</div>
</SectionWrapper>
