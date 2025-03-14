<script>
	import '../app.css';
	import ChatBotContainer from './components/lib/ChatBotContainer.svelte';
	import MobileNav from '../splashPageLib/MobileNav.svelte';
	import Navbar from '../splashPageLib/Navbar.svelte';
	import Footer from '../splashPageLib/Footer.svelte';

//these variables track page scrolling and are used to prompt header to fade in at fixed position
	//scrollY tracks current vertical scroll value
	let scrollY;
	//innerHeight tracks initial viewport
	$: innerHeight = 0;

</script>

<MobileNav />

<div class="top-0 left-0 w-full flex flex-col z-20 px-4">
	<Navbar />
</div>

{#if scrollY > innerHeight}
	<div class="fixed top-0 left-0 w-full flex bg-white flex-col z-20 px-4 fadeIn">
		<Navbar />
	</div>
{/if}

<div id="mainContent" class="h-full w-full">
	<slot />
</div>

<!-- <ChatBotContainer /> -->
<div class="bottom-0 left-0 w-full flex flex-col z-20 relative">
	<Footer />
</div>

<svelte:window bind:scrollY={scrollY} bind:innerHeight />
