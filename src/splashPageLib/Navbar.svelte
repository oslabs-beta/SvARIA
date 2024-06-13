<!-- This is where the header lives...
components used that we might need to make:
* menu button aka hamburger

-->
<script>
	import logo from './assets/SvARIALogo.png';
	import { openModal } from '../store';
	import Nav from '../lib/navigation/Navigation.svelte';

	const links = [
		{
			href: '#WhySvARIA',
			name: 'Why SvARIA',
			linkClass: 'duration-200 hover:text-indigo-400 cursor-pointer'
		},
		{
			href: '#GettingStarted',
			name: 'Getting Started',
			linkClass: 'duration-200 hover:text-indigo-400 cursor-pointer'
		},
		{
			href: '#CompTab',
			name: 'Components',
			linkClass: 'duration-200 hover:text-indigo-400 cursor-pointer'
		},
		{
			href: 'https://github.com/oslabs-beta/SvARIA',
			name: 'GitHub',
			linkClass: 'duration-200 hover:text-indigo-400 cursor-pointer'
		},
		{
			href: '#GitHubFAQ',
			name: 'FAQ/News',
			linkClass: 'duration-200 hover:text-indigo-400 cursor-pointer'
		}
	];
</script>

<header class="flex flex-col relative z-20">
	<Nav
		routes={links}
		navListClass ="hidden pr-8 text-2xl md:flex items-center gap-4 lg:gap-6"
        navBarClass = "max-w-[1400] mx-auto w-full flex items-center justify-between px-4"
        ariaLabel='Website navigation bar'
        id='SvARIAnavBar'
	>
		<div slot="headingPlus">

			<a href="/">
				<img class="min-w-[250px] h-[125px] w-[250px]" alt="SvARIA Logo" src={logo} />
			</a>
			<button on:click={() => $openModal = true} class="md:hidden grid place-items-center">
				<i class="fa-solid fa-bars"></i>
			</button>
		</div>
	</Nav>
</header>

<!-- <header class="flex flex-col relative z-20">
    <div class="max-w-[1400] mx-auto w-full flex items-center justify-between px-4">
        <a href="/">
            <img class="min-w-[250px] h-[175px] w-[250px] -mt-8" alt="SvARIA Logo" src={logo} />
        </a>
        <nav>
            <ul class='hidden pr-8 text-2xl md:flex items-center gap-4 lg:gap-6 navbar'>
                <li><a href="#WhySvARIA" class="duration-200 hover:text-indigo-400 cursor-pointer" >Why SvARIA</a></li>
                <li><a href="#GettingStarted" class="duration-200 hover:text-indigo-400 cursor-pointer" >Getting Started</a></li>
                <li><a href="#CompTab" class="duration-200 hover:text-indigo-400 cursor-pointer"
                >Components</a></li>
                <li><a href="#GitHubFAQ"  class="duration-200 hover:text-indigo-400 cursor-pointer">GitHub/FAQ</a></li>
            </ul>         
        </nav>
        <button on:click={() => $openModal = true} class="md:hidden grid place-items-center">
            <i class="fa-solid fa-bars"></i>
        </button>
    </div>
</header > -->

<style>
    /* css goes here */
</style>