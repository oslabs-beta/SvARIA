<!-- This is where the header lives...
components used that we might need to make:
* menu button aka hamburger

-->
<script>
	import { openModal } from '../store';
	import logo from './assets/SvAriaLogo.png';
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
			linkClass: 'duration-200 hover:text-indigo-400 cursor-pointer'
		},
		{
			href: '/#GitHubFAQ',
			name: 'FAQ/News',
			linkClass: 'duration-200 hover:text-indigo-400 cursor-pointer'
		}
	];
</script>

<!-- ariaLabel='Website navigation bar' < this was a prop in "Nav" but Nav does not expect or handle this prop -->
<header class="flex flex-col relative z-20">
	<Nav
		routes={links}
		navListClass="hidden pr-8 text-2xl md:flex items-center gap-4 lg:gap-6"
		navBarClass="max-w-[1400] mx-auto w-full flex items-center justify-between px-4"
		id="SvARIAnavBar"
	>
		<div slot="headingPlus">
			<a href="/">
				<img class="min-w-[250px] h-[125px] w-[250px]" alt="SvARIA Logo" src={logo} />
			</a>
			<button on:click={() => ($openModal = true)} class="md:hidden grid place-items-center">
				<i class="fa-solid fa-bars"></i>
			</button>
		</div>
	</Nav>
</header>
