<script>
    import { openModal } from '../store';


    function reroute(href) {
		$openModal = false;
		window.location.href = href;
	}

</script>

{#if $openModal}
    <div
        id='MobileNav'
        class="fixed top-0 left-0 w-screen h-screen border-b bg-white z-50 flex flex-col gap-8 px-8 md:hidden"
    >
        <div class="flex items-center justify-between gap-4 border-b pb-4">
            <a href="/">
                <img class="min-w-[250px] h-[125px] w-[250px smallLogo" alt="SvARIA Logo" src="/SvAriaLogo.png" />
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
                on:click={() => reroute('/#News')}
                class="border-none outline-none p-2 group duration-200 cursor-pointer text-left"
            >
                <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">
                    News <i class="fa-solid fa-chevron-right text-xl pl-4" />
                </p>
            </button>
        </div>
    </div>
{/if}