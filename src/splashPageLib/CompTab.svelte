<!-- This is where the tab with the components/code/sandbox live -->
<script lang="ts">
	import SectionWrapper from './SectionWrapper.svelte';
	import AccordionGroupTab from './ComponentDemos/AccordionGroupTabs/AccordionGroupTab.svelte';
	import ButtonTab from './ComponentDemos/ButtonTabs/ButtonTab.svelte';
	import CheckboxTab from './ComponentDemos/CheckboxTabs/CheckboxTab.svelte';
	import FormTab from './ComponentDemos/FormTabs/FormTab.svelte';
	import MenuTab from './ComponentDemos/MenuTabs/MenuTab.svelte';
	import ModalTab from './ComponentDemos/ModalTabs/ModalTab.svelte';
	import NavBarTab from './ComponentDemos/NavBarTabs/NavBarTab.svelte';
	import RadioGroupTab from './ComponentDemos/RadioGroupTabs/RadioGroupTab.svelte';
	import TabTab from './ComponentDemos/TabTabs/TabTab.svelte'
	import AccordionGroup from '$lib/AccordionGroup_ts.svelte';
	import SwitchTabs from './ComponentDemos/SwitchTabs/SwitchTab.svelte';
	import PopoverTab from './ComponentDemos/PopoverTabs/PopoverTab.svelte';
	import ProgressBarTab from './ComponentDemos/ProgressBarTabs/ProgressBarTab.svelte';

	const accordions = [
		{
			name: 'Accordion Group',
			heading: "Accordion Group Component",
			slot: AccordionGroupTab,
			headingClass: 'p-9',
			componentClass: 'min-h-96'
		},
		{
			name: 'Button',
			heading: 'Button Component',
			slot: ButtonTab,
			headingClass: 'p-9',
			componentClass: 'min-h-96'
		},
		{
			name: 'Checkbox',
			heading: 'Checkbox Component',
			slot: CheckboxTab,
			headingClass: 'p-9',
			componentClass: 'min-h-96'
		},
		{
			name: 'Form',
			heading: 'Form Component',
			slot: FormTab,
			headingClass: 'p-9',
			componentClass: 'min-h-96'
		},
		{
			name: 'Menu',
			heading: 'Menu Component',
			slot: MenuTab,
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
			name: 'NavBar',
			heading: 'NavBar Component',
			slot: NavBarTab,
			headingClass: 'p-9',
			componentClass: 'min-h-96'
		},
		{
			name: 'Popover',
			heading: 'Popover Component',
			slot: PopoverTab,
			headingClass: 'p-9',
			componentClass: 'min-h-96'
		},
		{
			name: 'RadioGroup',
			heading: 'RadioGroup Component',
			slot: RadioGroupTab,
			headingClass: 'p-9',
			componentClass: 'min-h-96'
		},
		{
			name: "Switch",
			heading: "Switch Component",
			slot: SwitchTabs,
			headingClass: 'p-9',
			componentClass: 'min-h-96'
		},
		{
			name: 'Tab',
			heading: 'Tab Component',
			slot: TabTab,
			headingClass: 'p-9',
			componentClass: 'min-h-96'
		},
		{
			name: 'Progress Bar',
			heading: 'Progress Bar Component',
			slot: ProgressBarTab,
			headingClass: 'p-9',
			componentClass: 'min-h-96'
		},
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
</SectionWrapper> -->


<script>
	import { goto } from '$app/navigation'
	import SectionWrapper from './SectionWrapper.svelte';
	import Button from '$lib/Button_ts.svelte'
	const handleClick = () => {
		console.log('route to components')
		goto('/components')
	}
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
		<h7 class="text-2xl sm:text-3xl md:text-4xl max-w-[1000px] mx-auto w-full  text-center">
			<img src="" alt="" />
			Welcome to the SvARIA Playground
			<img src="" alt="" />
			<p
				class="text-xl sm:text-2xl md:text-3xl max-w-[1000px] mx-auto w-full italic font-light text-center"
			>
				<br />
				Svaria Componets are fully customizable <br /> check out our live sandbox and docs to see how our components will look in your project.
			</p>
			<br />
			<div class=" max-h-95% overflow-scroll">
				
				<Button content="Components Sandbox" on:click={handleClick}/> 
			</div>
		</h7>
	</div>
</SectionWrapper>

