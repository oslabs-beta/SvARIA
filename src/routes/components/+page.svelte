<!-- DEV NOTES:
    to add a component to the page:
    1. create the docs and add it in src/routes/components/lib
    2. create the demo and add it to src/componentDemoCode
    3. create the sandbox in the svelte REPL and save the url
    4. import in the docs to this page
    5. add it to components array
-->

<script lang="ts">
	import SectionWrapper from '../../splashPageLib/SectionWrapper.svelte';
	import { openModal } from '../../store/index.js';
	import logo from '../../splashPageLib/assets/SvAriaLogo.png';
	import Sandbox from '../../splashPageLib/Sandbox.svelte';
	import type { CompObj } from './../../types.js';
	import sandboxicon from './lib/assets/sandbox_Flaticon.png';
	import landscapePhoneSwitch from './lib/assets/landscapePhoneSwitch.png';
	// import Menu from '../../lib/Menu.svelte';
	// ======================> Component Imports < ========================
	import ButtonDocs from './lib/ButtonDocs.svelte';
	import AccordionDocs from './lib/AccordionDocs.svelte';
	import AccordionGroupDocs from './lib/AccordionGroupDocs.svelte';
	import CheckboxDocs from './lib/CheckboxDocs.svelte';
	import FormDocs from './lib/FormDocs.svelte';
	import MenuDocs from './lib/MenuDocs.svelte';
	import ModalDocs from './lib/ModalDocs.svelte';
	import NavigationDocs from './lib/NavigationDocs.svelte';
	import PopoverDocs from './lib/PopoverDocs.svelte';
	import ProgressBarDocs from './lib/ProgressBarDocs.svelte';
	import RadioGroupDocs from './lib/RadioGroupDocs.svelte';
	import SpinButtonDocs from './lib/SpinButtonDocs.svelte';
	import SwitchDocs from './lib/SwitchDocs.svelte';
	import TabDocs from './lib/TabDocs.svelte';
	import TreeDocs from './lib/TreeDocs.svelte';
	import AlertDocs from './lib/AlertDocs.svelte';
	import ToastDocs from './lib/ToastDocs.svelte';
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
			source: 'https://svelte.dev/repl/8391f5d6f9fb4cafbdc6de9dc24624b6?version=4.2.18'
		},
		{
			docs: AccordionGroupDocs,
			label: 'Accordion Group',
			source: 'https://svelte.dev/repl/6f215987234e471fbe241df938789695?version=4.2.18'
		},
		{
			docs: AlertDocs,
			label: 'Alert',
			source: 'https://svelte.dev/repl/1161a113613840b1b765e384e734eadf?version=4.2.18'
		},
		{
			docs: CheckboxDocs,
			label: 'Checkbox',
			source: 'https://svelte.dev/repl/1655765010ce4ec287f1a41a92e0a42b?version=4.2.18'
		},
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
		{
			docs: NavigationDocs,
			label: 'Navigation',
			source: 'https://svelte.dev/repl/88f0fc1e880a4903bb30148c1beb52ba?version=4.2.18'
		},
		{
			docs: PopoverDocs,
			label: 'Popover',
			source: 'https://svelte.dev/repl/326ee2b9cc0f445c82354b2c166b58b4?version=4.2.18'
		},
		{
			docs: ProgressBarDocs,
			label: 'Progress Bar',
			source: 'https://svelte.dev/repl/8b768afeb4d0453da297275d2132dcf3?version=4.2.18'
		},
		{
			docs: RadioGroupDocs,
			label: 'Radio Group',
			source: 'https://svelte.dev/repl/a156fc8b39454aa7a573881f334a88b5?version=4.2.18'
		},
		{
			docs: SpinButtonDocs,
			label: 'Spin Button',
			source: 'https://svelte.dev/repl/be924261d3f041cb887584054989feef?version=4.2.18'
		},
		{
			docs: SwitchDocs,
			label: 'Switch',
			source: 'https://svelte.dev/repl/3d98cb99b89f476ebca51f5be484dde8?version=4.2.18'
		},
		{
			docs: TabDocs,
			label: 'Tabs',
			source: 'https://svelte.dev/repl/1bc4a75b73964591800ba13f44417a3b?version=4.2.18'
		},
		{
			docs: ToastDocs,
			label: 'Toast',
			source: 'https://svelte.dev/repl/dce213fa6c084fc193244bebd34900c9?version=4.2.18'
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

	function reroute(href) {
		$openModal = false;
		window.location.href = href;
	}

	// ======================> drop down menu for small screens < =============

	// let menuItems = [
	// 	{
	// 		label: 'Button',
	// 		link: 'https://svelte.dev/repl/3de22bc71e6c42f680c0e5dc80b42ba1?version=4.2.18',
	// 		onClick: handleClick,
	// 		linkID: 'Button',
	// 		linkClass: 'text-white'
	// 	},
	// 	{
	// 		label: 'blue',
    //   linkID: 'blue',
			
	// 		linkClass: 'text-blue-800'
	// 	},
	// 	{
	// 		label: 'yellow',
    //   linkID: 'yellow',
			
	// 		linkClass: 'text-yellow-800'
	// 	},
	// 	{
	// 		label: 'green',
	// 		link: "https://en.wikipedia.org/wiki/Green",
    //   linkID: 'green',
	// 		linkClass: 'text-green-800'
	// 	}
	// ];
</script>

{#if $openModal}
	<div
		class="fixed top-0 left-0 w-screen h-screen border-b bg-white z-50 flex flex-col gap-8 p-5 px-8 md:hidden"
	>
		<div class="flex items-center justify-between gap-4 border-b pb-2">
			<a href="/">
				<img class="min-w-[250px] h-[125px] w-[250px]" alt="SvARIA Logo" src={logo} />
			</a>
			<button
				on:click={() => {
					$openModal = false;
					console.log('clicked');
				}}
				class="outline-none border-none"
			>
				<i id='hamburgerLandscape' class="fa-solid fa-xmark text-2xl"> </i>
			</button>
		</div>
		<div class="flex flex-col gap-4 flex-1">
			<button
				on:click={() => reroute('/#WhySvARIA')}
				class="border-none outline-none p-2 group duration-200 cursor-pointer text-left"
			>
				<p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">
					Why SvARIA <i class="fa-solid fa-chevron-right text-xl pl-4" />
				</p>
			</button>
			<button
				on:click={() => reroute('/#GettingStarted')}
				class="border-none outline-none p-2 group duration-200 cursor-pointer text-left"
			>
				<p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">
					Getting Started <i class="fa-solid fa-chevron-right text-xl pl-4" />
				</p>
			</button>
			<button
				on:click={() => reroute('/components')}
				class="border-none outline-none p-2 group duration-200 cursor-pointer text-left"
			>
				<p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">
					Components <i class="fa-solid fa-chevron-right text-xl pl-4" />
				</p>
			</button>
			<button
				on:click={() => reroute('https://github.com/oslabs-beta/SvARIA')}
				class="border-none outline-none p-2 group duration-200 cursor-pointer text-left"
			>
				<p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">
					GitHub <i class="fa-solid fa-chevron-right text-xl pl-4" />
				</p>
			</button>
			<button
				on:click={() => reroute('/#GitHubFAQ')}
				class="border-none outline-none p-2 group duration-200 cursor-pointer text-left"
			>
				<p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">
					News <i class="fa-solid fa-chevron-right text-xl pl-4" />
				</p>
			</button>
		</div>
	</div>

	<div
		class="fixed top-0 left-0 w-screen h-screen border-b bg-white z-50 flex flex-col gap-8 p-5 px-8 md:hidden"
	>
		<div class="flex items-center justify-between gap-4 border-b pb-2">
			<a href="/">
				<img class="min-w-[250px] h-[125px] w-[250px] smallLogo" alt="SvARIA Logo" src={logo} />
			</a>
			<button
				on:click={() => {
					$openModal = false;
					console.log('clicked');
				}}
				class="outline-none border-none"
			>
				<i class="fa-solid fa-xmark text-2xl"> </i>
			</button>
		</div>
		<div class="flex flex-col gap-4 flex-1">
			<button
				on:click={() => reroute('/#WhySvARIA')}
				class="border-none outline-none p-2 group duration-200 cursor-pointer text-left"
			>
				<p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">
					Why SvARIA <i class="fa-solid fa-chevron-right text-xl pl-4" />
				</p>
			</button>
			<button
				on:click={() => reroute('/#GettingStarted')}
				class="border-none outline-none p-2 group duration-200 cursor-pointer text-left"
			>
				<p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">
					Getting Started <i class="fa-solid fa-chevron-right text-xl pl-4" />
				</p>
			</button>
			<button
				on:click={() => reroute('/components')}
				class="border-none outline-none p-2 group duration-200 cursor-pointer text-left"
			>
				<p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">
					Components <i class="fa-solid fa-chevron-right text-xl pl-4" />
				</p>
			</button>
			<button
				on:click={() => reroute('https://github.com/oslabs-beta/SvARIA')}
				class="border-none outline-none p-2 group duration-200 cursor-pointer text-left"
			>
				<p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">
					GitHub <i class="fa-solid fa-chevron-right text-xl pl-4" />
				</p>
			</button>
			<button
				on:click={() => reroute('/#GitHubFAQ')}
				class="border-none outline-none p-2 group duration-200 cursor-pointer text-left"
			>
				<p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">
					News <i class="fa-solid fa-chevron-right text-xl pl-4" />
				</p>
			</button>
		</div>
	</div>
{/if}

<SectionWrapper id="components">
	<!-- <div
		class="flex flex-col gap-5 sm:gap-10 md:gap-15 flex-1 items-center justify-center pb-10 md:pb-5"
	></div> -->
	<div id='bigScreenComponentPage' class="flex">
		<aside id="default-sidebar" class="flex-shrink-0 w-64 h-screen overflow-y-auto">
			<ul class="py-4 font-medium">
				{#each componentsArray as comp}
					<li>
						<button
							class="block w-full px-4 py-2 text-left text-2xl hover:bg-gray-300"
							on:click={() => handleClick(comp)}
						>
							{comp.label}
						</button>
					</li>
				{/each}
			</ul>
		</aside>

		<div class="ml-6 mr-96 p-1 flex-1 ">
			<h1 id='HeaderWithIcons' class="text-4xl ml-6 sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center relative z-10">
				<img class="SandboxImage" alt="Sandbox Icon" src={sandboxicon} />
				SvARIA Playground
				<img class="SandboxImage" alt="Sandbox Icon" src={sandboxicon} />
			</h1>
			
			<Sandbox source={component.source} label={component.label}/>
			<svelte:component this={component.docs} />
		</div>
	</div>
	<!-- ================> drop down menu for small screens < ============= -->
	<!-- <div id='smallScreenComponentPage'>
		<Menu
				{menuItems}
				buttonContent="Menu"
				buttonId="menuButton"
				buttonAriaLabel="menu button"
				buttonClass="w-32 h-9 text-xl bg-blue-300 rounded-md items-center justify-between px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:focus:text-black dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
				listId='menuItems'
				listClass="bg-blue-200 text-lg w-32 text-center	rounded-md"
			/>
			<div class="ml-6 mr-96 p-1 flex-1 ">
				<h1 id='HeaderWithIcons' class="text-4xl ml-6 sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center relative z-10">
					<img class="SandboxImage" alt="Sandbox Icon" src={sandboxicon} />
					SvARIA Playground
					<img class="SandboxImage" alt="Sandbox Icon" src={sandboxicon} />
				</h1>
				
				<Sandbox source={component.link} label={component.label}/>
				<svelte:component this={component.docs} />
			</div>
	</div>	 -->
<!-- ================> small screens component page < ============= -->
<div id='landscapeComponentChoice'>
	Choose a component below:
</div>	
<div id='smallScreenComponentPage' class="flex">
		<aside id="smallSidebar" class="w-screen overflow-x-auto">
			<ul class="px-4 flex font-small">
				{#each componentsArray as comp}
					<li>
						<button
							class="block w-32 py-4 px-2 text-center text-sm hover:bg-gray-300"
							on:click={() => handleClick(comp)}
						>
							{comp.label}
						</button>
					</li>
				{/each}
			</ul>
		</aside>
		<br>
		<div class="mr-96 p-1 flex-1 ">
			<h1 id='smallHeaderWithIcons' class="text-4xl ml-6 sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center relative z-10">
				<img class="SandboxImage" alt="Sandbox Icon" src={sandboxicon} />
				SvARIA Playground
				<img class="SandboxImage" alt="Sandbox Icon" src={sandboxicon} />
			</h1>
			<br>
			<Sandbox source={component.source} label={component.label}/>
			<svelte:component this={component.docs} />
		</div>
	</div>
</SectionWrapper>
<div id='portraitOverlay' >
	<h1 class='text-white text-center text-3xl mt-14'>
		Please rotate your phone to landscape
	</h1>
	<img alt="Switch phone from portrait to landscape" src={landscapePhoneSwitch} />
</div>
