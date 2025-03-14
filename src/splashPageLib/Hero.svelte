<!-- This is where the hero imagery lives -->
<script>
	import { fade } from "svelte/transition";    

    const lgTextClass = "xl:text-7xl lg:text-6xl md:text-5xl sm:text-[44px] sm:leading-[50px] xsText "

    let isHovered = false;
</script>
    
    <div id='bgCont' transition:fade={{delay: 100, duration: 500}} class="bg-[url(/A11yImage.png)] bg-cover bg-center bg-no-repeat w-full h-[80vh] flex justify-center items-center" alt="A11y Accessibility Image">
        <div id="HeroCont" class='h-2/3 w-[80vw] flexjustify-center items-center relative'>
            <div class="h-full w-full absolute bg-white opacity-90 rounded-xl"></div>
            <div id="textCont" class='flex flex-col w-full h-full justify-around items-center gap-2 p-4 lg:p-8 relative'>
                <div class={lgTextClass + "text-start"}>
                    “98% of U.S.-based webpages are not accessible to the disability community from a legal perspective…”
                </div>
                <div class="w-full lg:text-3xl md:text-2xl text-xl italic text-wrap">
                    - 2020 Web Accessibility Annual Report
                </div>
                <div class="flex flex-row w-fit justify-center items-center text-white"
                    role="button"
                    tabindex=0
                    on:mouseenter={() => isHovered = true}
                    on:mouseleave={() => isHovered = false}
                >
                <a href='#WhySvARIA'>
                    <div class="flex flex-row">
                        <div class={"lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold bg-[#04abdb] px-4 py-2 rounded-3xl border-2 border-[#143d66] opacity-90 hover:contrast-150 hover:opacity-100"}>
                            <span class:animate-wiggleSm-hover={isHovered}>SvARIA</span> can help.
                        </div>
                        <!-- <svg class="hidden sm:flex sm:text-[60px] text-[78px] font-bold" stroke-width="2.5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 21 21" {...$$props}>Icon from Recent by undefined - undefined<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.5 13.499l4 4.001l4-4.001m-4 4.001v-13"/></svg> -->
                    </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
             