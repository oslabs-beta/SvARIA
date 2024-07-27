<!-- DEV NOTES:
    to add a component to the page:
    1. create the docs and add it in src/routes/components/lib
    2. create the demo and add it to (idk the file path but it should be in a top level)
    3. create the sandbox in the svelte REPL and save the url
    4. import in the docs to this page
    5. add it to components array
-->

<script lang="ts">
	import Sandbox from '../../splashPageLib/Sandbox.svelte';
	import type { CompObj } from './../../types.js';
	// ======================> Component Imports < ========================
	import ButtonDocs from './lib/ButtonDocs.svelte';
	import AccordionDocs from './lib/AccordionDocs.svelte';
	import AccordionGroupDocs from './lib/AccordionGroupDocs.svelte';
	import CheckboxDocs from './lib/CheckboxDocs.svelte';
	import FormDocs from './lib/FormDocs.svelte';
	import MenuDocs from './lib/MenuDocs.svelte';
	import ModalDocs from './lib/ModalDocs.svelte';
	import NavigationDocs from './lib/NavigationDocs.svelte';
	import PopoverDocs from './lib/PopoverDocs.svelte'
	import ProgressBarDocs from './lib/ProgressBarDocs.svelte';
	import RadioGroupDocs from './lib/RadioGroupDocs.svelte';
	import SwitchDocs from './lib/SwitchDocs.svelte';
	import TabDocs from './lib/TabDocs.svelte';
	// ====================================================================

	const componentsArray: CompObj[] = [
		{ docs: ButtonDocs, label: 'Button', source: 'https://svelte.dev/repl/963bf9cd29244ab0a52f5b788293f95f?version=4.2.18' },
		{ docs: AccordionDocs, label: 'Accordion', source: 'https://svelte.dev/repl/6f215987234e471fbe241df938789695?version=4.2.18' },
		{ docs: AccordionGroupDocs, label: 'Accordion Group', source: 'https://svelte.dev/repl/6f215987234e471fbe241df938789695?version=4.2.18' },
		{ docs: CheckboxDocs, label: 'Checkbox', source: 'https://svelte.dev/repl/' },
		{ docs: FormDocs, label: 'Form', source: 'https://svelte.dev/repl/' },
		{ docs: MenuDocs, label: 'Menu', source: 'https://svelte.dev/repl/' },
		{ docs: ModalDocs, label: 'Modal', source: 'https://svelte.dev/repl/' },
		{ docs: NavigationDocs, label: 'Navigation', source: 'https://svelte.dev/repl/' },
		{ docs: PopoverDocs, label: 'Popover', source: 'https://svelte.dev/repl/326ee2b9cc0f445c82354b2c166b58b4?version=4.2.18'},
		{ docs: ProgressBarDocs, label: 'Progress Bar', source: 'https://svelte.dev/repl/' },
		{ docs: RadioGroupDocs, label: 'Radio Group', source: 'https://svelte.dev/repl/a156fc8b39454aa7a573881f334a88b5?version=4.2.18' },
		{ docs: SwitchDocs, label: 'Switch', source: 'https://svelte.dev/repl/3d98cb99b89f476ebca51f5be484dde8?version=4.2.18' },
		{ docs: TabDocs, label: 'Tabs', source: 'https://svelte.dev/repl/' }
	];
	let component: CompObj = componentsArray[0];
	const handleClick = (comp: CompObj): void => {
		component = comp;
	};
</script>

<!-- <h3>Components</h3>
<div class="lib-display">
	<h3>Button Component</h3>
	<div class="component"></div>
	<ButtonTab />
</div>

<div class="lib-display">
	<h3>Modal Component</h3>
	<div class="component"></div>
	<ModalTab />
</div>

<h3>Components</h3>
<div class="lib-display">
	<h3>Button Component</h3>
	<div class="component"></div>
	<ButtonTab />
</div>

<div class="lib-display">
	<h3>Modal Component</h3>
	<div class="component"></div>
	<ModalTab />
</div> -->

<div class="flex">
	<aside
		id="default-sidebar"
		class="flex-shrink-0 w-64 h-screen bg-gray-50 dark:bg-gray-800 overflow-y-auto"
	>
		<ul class="py-4 space-y-2 font-medium">
			{#each componentsArray as comp}
				<li>
					<button
						class="block w-full px-4 py-2 text-left hover:bg-gray-300"
						on:click={() => handleClick(comp)}
					>
						{comp.label}
					</button>
				</li>
			{/each}
		</ul>
	</aside>

	<div class="ml-64 p-4 flex-1">
		<!-- <p
			class="text-xl sm:text-2xl md:text-3xl max-w-[1000px] mx-auto w-full italic font-light text-center"
		>
			<br />
			Select your component <br />and play around in the sandbox.
		</p> -->
		<div class="grid grid-cols-1 gap-4 mb-4">
			<Sandbox source={component.source} />
			<svelte:component this={component.docs} />
		</div>
	</div>
</div>
