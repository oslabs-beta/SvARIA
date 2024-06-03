<!-- This is where the header lives...
components used that we might need to make:
* menu button aka hamburger

-->
<script>
    import logo from "./assets/SvARIALogo.png";
    import {openModal} from "../store";
</script>

<header class="flex flex-col relative z-20">
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
  
</header >

<style>
    /* css goes here */
</style>

<!-- <nav>
    <ul class='navbar'>
        <a href="/">Home</a>
        <a href="https://github.com/oslabs-beta/SvARIA">GitHub</a>
        <a href="/components">Components</a>
        <a href="/about">About</a>
    </ul>
</nav> -->