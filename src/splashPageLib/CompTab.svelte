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
		{
			name: 'Button',
			heading: 'Button Component',
			slot: ButtonTab,
			headingClass: 'p-9',
			componentClass: 'min-h-96'
		},
		{
			name: 'Modal',
			heading: 'Modal Component',
			slot: ModalTab,
			headingClass: 'p-9',
			componentClass: 'min-h-96'
		},
		{
			name: 'Accordion',
			heading: 'Checkbox Component',
			slot: CheckboxTab,
			headingClass: 'p-9',
			componentClass: 'min-h-96'
		},
		{
			name: 'Accordion',
			heading: 'Form Component',
			slot: FormTab,
			headingClass: 'p-9',
			componentClass: 'min-h-96'
		},
		{
			name: 'Accordion',
			heading: 'NavBar Component',
			slot: NavBarTab,
			headingClass: 'p-9',
			componentClass: 'min-h-96'
		},
		{
			name: 'Accordion',
			heading: 'Menu Component',
			slot: MenuTab,
			headingClass: 'p-9',
			componentClass: 'min-h-96'
		},
		{
			name: 'Accordion',
			heading: 'RadioGroup Component',
			slot: RadioGroupTab,
			headingClass: 'p-9',
			componentClass: 'min-h-96'
		}
	];
</script>

<SectionWrapper id="CompTab">
	<div
		class="flex flex-col gap-5 sm:gap-10 md:gap-15 flex-1 items-center justify-center pb-10 md:pb-14"
	>
		<div class="flex flex-col gap-2">
			<br /><br /><br />
			<h6
				class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
			>
				Components
			</h6>
		</div>
		<h7 class="text-2xl sm:text-3xl md:text-4xl max-w-[1000px] mx-auto w-full text-center">
			<img src="" alt="" />
			Welcome to the SvARIA Playground
			<img src="" alt="" />
			<p
				class="text-xl sm:text-2xl md:text-3xl max-w-[1000px] mx-auto w-full italic font-light text-center"
			>
				<br />
				Select your component and toggle the tabs to experience <br />a demo, obtain code, read the
				docs, or play around in the sandbox.
			</p>
			<br />
			<div class=" max-h-95% overflow-scroll">
				<AccordionGroup group={accordions} ariaLabel="Component Accordion"></AccordionGroup>
			</div>
		</h7>
	</div>
</SectionWrapper>
