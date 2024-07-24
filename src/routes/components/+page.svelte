<!-- DEV NOTES:
    to add a component to the page:
    1. create the docs and add it in src/routes/components/lib
    2. create the demo and add it to (idk the file path but it should be in a top level)
    3. create the sandbox in the svelte REPL and save the url
    4. import in the docs to this page
    5. add it to components array
-->

<script lang=ts>
	import SectionWrapper from '../../splashPageLib/SectionWrapper.svelte';
    import {openModal} from "../../store/index.js";
    import logo from "../../splashPageLib/assets/SvAriaLogo.png";
    import Sandbox from '../../splashPageLib/Sandbox.svelte';
	import type { CompObj } from './../../types.js';

// ======================> Component Imports <========================
	import ButtonDocs from './lib/ButtonDocs.svelte';
	import AccordionDocs from './lib/AccordionDocs.svelte';
	import AccordionGroupDocs from './lib/AccordionGroupDocs.svelte';
	import CheckboxDocs from './lib/CheckboxDocs.svelte';
	import FormDocs from './lib/FormDocs.svelte';
	import MenuDocs from './lib/MenuDocs.svelte';
	import ModalDocs from './lib/ModalDocs.svelte';
	import NavigationDocs from './lib/NavigationDocs.svelte';
	import ProgressBarDocs from './lib/ProgressBarDocs.svelte';
	import RadioGroupDocs from './lib/RadioGroupDocs.svelte';
	import SwitchDocs from './lib/SwitchDocs.svelte';
	import TabDocs from './lib/TabDocs.svelte';
	import TreeDocs from './lib/TreeDocs.svelte';

	// ====================================================================

	const componentsArray: CompObj[] = [
		{
			docs: ButtonDocs,
			label: 'Button',
			source: 'https://svelte.dev/repl/3de22bc71e6c42f680c0e5dc80b42ba1?version=4.2.18'
		},
		{
			docs: AccordionDocs,
			label: 'Accordion',
			source: 'https://svelte.dev/repl/6f215987234e471fbe241df938789695?version=4.2.18'
		},
		{ docs: AccordionGroupDocs, label: 'Accordion Group', source: 'https://svelte.dev/repl/' },
		{ docs: CheckboxDocs, label: 'Checkbox', source: 'https://svelte.dev/repl/' },
		{
			docs: FormDocs,
			label: 'Form',
			source: 'https://svelte.dev/repl/e390654778f54982875cae674e39f646?version=4.2.18'
		},
		{
			docs: MenuDocs,
			label: 'Menu',
			source: 'https://svelte.dev/repl/cfc5475329ec4bf7a39597d7ed304629?version=4.2.18'
		},
		{
			docs: ModalDocs,
			label: 'Modal',
			source: 'https://svelte.dev/repl/67d050ac1ddd41d2be31d5921d29e288?version=4.2.18'
		},
		{ docs: NavigationDocs, label: 'Navigation', source: 'https://svelte.dev/repl/' },
		{
			docs: ProgressBarDocs,
			label: 'Progress Bar',
			source: 'https://svelte.dev/repl/8b768afeb4d0453da297275d2132dcf3?version=4.2.18'
		},
		{ docs: RadioGroupDocs, label: 'Radio Group', source: 'https://svelte.dev/repl/' },
		{ docs: SwitchDocs, label: 'Switch', source: 'https://svelte.dev/repl/' },
		{
			docs: TabDocs,
			label: 'Tabs',
			source: 'https://svelte.dev/repl/1bc4a75b73964591800ba13f44417a3b?version=4.2.18'
		},
		{
			docs: TreeDocs,
			label: 'Tree',
			source: 'https://svelte.dev/repl/d18158eaa68a450aa62e8e4ae6c98f75?version=4.2.18'
		}
	];
	let component: CompObj = componentsArray[0];
	const handleClick = (comp: CompObj): void => {
		component = comp;
	};

    function reroute(href){
       $openModal = false;
       window.location.href = href; 
    }

</script>

{#if $openModal}
<div class="fixed top-0 left-0 w-screen h-screen border-b bg-white z-50 flex flex-col gap-8 p-5 px-8 md:hidden">
    <div class="flex items-center justify-between gap-4 border-b pb-2">
        <a href="/">
            <img class="min-w-[250px] h-[125px] w-[250px] " alt="SvARIA Logo" src={logo} />
        </a>
        <button on:click={() => {$openModal = false; console.log('clicked')}} class="outline-none border-none">
            <i class="fa-solid fa-xmark text-2xl">
            </i>
        </button> 
    </div>
    <div class="flex flex-col gap-4 flex-1">
        <button on:click={() => reroute('/#WhySvARIA')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
            <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold ">Why SvARIA <i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
        </button>
        <button on:click={() => reroute('/#GettingStarted')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
            <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold ">Getting Started <i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
        </button>
        <button on:click={() => reroute('/components')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
            <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold ">Components <i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
        </button>
        <button on:click={() => reroute('https://github.com/oslabs-beta/SvARIA')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
            <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold ">GitHub <i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
        </button>
        <button on:click={() => reroute('/#GitHubFAQ')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
            <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold ">FAQ/News <i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
        </button>
    </div>
</div>
{/if}

<SectionWrapper id="components">
	<div
		class="flex flex-col gap-5 sm:gap-10 md:gap-15 flex-1 items-center justify-center pb-10 md:pb-14"
	>
		
    </div>

    <div class="flex">
        <aside id="default-sidebar" class="flex-shrink-0 w-64 h-screen   overflow-y-auto">
            <ul class="py-4 font-medium">
                {#each componentsArray as comp}
                <li>
                    <button class="block w-full px-4 py-2 text-left text-2xl hover:bg-gray-300" on:click={() => handleClick(comp)}>
                        {comp.label}
                    </button>
                </li>
                {/each}
            </ul>
        </aside>

        <div class="ml-6 p-4 flex-1">
				<Sandbox source={component.source}/> 
                <svelte:component this={component.docs}/> 
        </div>
    </div>

</SectionWrapper>

<!-- <style>
    .lib-display {
        align-items: center;
        width: 50%;
        height: 50%;
    }
</style>

<h3>Components</h3>
<div class='lib-display'>
    <h3>Button Component</h3>
    <div class='component'>
    </div>
        <ButtonTab/>
</div>

<div class='lib-display'>
    <h3>Modal Component</h3>
    <div class='component'>
    </div>
        <ModalTab/>
</div> -->