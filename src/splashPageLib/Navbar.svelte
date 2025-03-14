<script>
	import { openModal } from '../store';
	import Nav from '../lib/Navigation.svelte';

	const links = [
		{
			href: '/#WhySvARIA',
			name: 'Why SvARIA',
			linkClass: 'duration-200 hover:text-indigo-400 cursor-pointer'
		},
		{
			href: '/#GettingStarted',
			name: 'Getting Started',
			linkClass: 'duration-200 hover:text-indigo-400 cursor-pointer'
		},
		{
			href: '/components',
			name: 'Components',
			linkClass: 'duration-200 hover:text-indigo-400 cursor-pointer'
		},
		{
			href: 'https://github.com/oslabs-beta/SvARIA',
			name: 'GitHub',
			linkClass: 'duration-200 hover:text-indigo-400 cursor-pointer',
			target:"_blank"
		},
		{
			href: '/#News',
			name: 'News',
			linkClass: 'duration-200 hover:text-indigo-400 cursor-pointer'
		}
	];
</script>

<header class="flex flex-col relative w-full z-20">
	<Nav
		routes={links}
		navListClass="hidden lg:flex pr-8 text-2xl items-center gap-4 lg:gap-6 landscapeNavList"
		navBarClass="mx-auto w-full flex items-center justify-between px-4 landscapeNavBar"
		navHeadingClass="lg:w-min w-full"
		id="SvARIAnavBar"
	>
		<div id='headingPlus' slot="headingPlus" class="flex flex-row w-full justify-between">
			<a href="/">
				<img class="min-w-[250px] h-[125px] w-[250px] smallLogo" alt="SvARIA Logo" src="/SvAriaLogo.png" />
			</a>
			<button on:click={() => ($openModal = true)} class="lg:hidden">
				<div class="fa-solid fa-bars fa-2xl mt-6"></div>
			</button>
		</div>
	</Nav>
</header>
