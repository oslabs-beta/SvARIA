<script>
    import "../app.css";
    import Nav from '$lib/navigation/Navigation.svelte'
    import Navbar from "../splashPageLib/Navbar.svelte";
    import Footer from "../splashPageLib/Footer.svelte";
    import logo from "../splashPageLib/assets/SvAriaLogo.png";

    import {openModal} from "../store";

    let y;
    $: outerHeight = 0;

    function reroute(href){
       $openModal = false;
       window.location.href = href; 
    }

    let links= [{ link: '/', name: 'Home' }, { link: 'https://github.com/oslabs-beta/SvARIA', name: 'GitHub' }, { link: '/components', name: 'Components' }, { link: '/about', name: 'About'} ]
</script>
<!-- <Nav heading='SvARIA' link={links} /> -->
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
        <button on:click={() => reroute('#WhySvARIA')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
            <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold ">Why SvARIA <i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
        </button>
        <button on:click={() => reroute('#GettingStarted')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
            <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold ">Getting Started <i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
        </button>
        <button on:click={() => reroute('#CompTab')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
            <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold ">Components <i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
        </button>
        <button on:click={() => reroute('https://github.com/oslabs-beta/SvARIA')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
            <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold ">GitHub <i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
        </button>
        <button on:click={() => reroute('#GitHubFAQ')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
            <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold ">FAQ <i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
        </button>
    </div>
</div>
{/if}

<div class="top-0 left-0 w-full flex flex-col z-20 px-4">
    <Navbar/>
</div>
{#if y > outerHeight}
<div class="fixed top-0 left-0 w-full flex bg-white flex-col z-20 px-4 fadeIn">
    <Navbar/>
</div>
{/if}
<slot />

<Footer/>
<svelte:window bind:scrollY={y} bind:outerHeight/>
<!-- 
    *General Page Structure*
    header/navbar
    hero
    product description
    Getting Started 
    CompTab: Components/Docs/Code
    Github/faq
    footer ()

 -->