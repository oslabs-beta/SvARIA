<!-- This is where the 'Getting Started" info lives -->

<script>
    import SectionWrapper from "./SectionWrapper.svelte";

    async function handleClick () {
    try {
        await navigator.clipboard.writeText('npm install SvARIA-toolkit');
    }
    catch (e) {
        console.error('Error copying to clipboard')
    }
}
</script>
<SectionWrapper id="GettingStarted">
    <div class="flex flex-col gap-5 sm:gap-10 md:gap-15 flex-1 items-center justify-center pb-10 md:pb-14">
        <div class="flex flex-col gap-2">
      <br>
            <h4 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">
                Getting Started
            </h4>
        </div>
        <span class="text-xl sm:text-2xl md:text-3xl max-w-[1000px] mx-auto w-full italic font-light text-center">  
        Visit the <a href="/components"> <img src="src/splashPageLib/assets/Playground Label.png" title="Visit SvAria Playground" alt="SvARIA Playground Logo" style="width:15.25em; height: 1.5em; display:inline-block"></a> for customized component demos in the sandbox, to obtain/share code, or to read the docs.
        </span>
        <h5 class="text-2xl sm:text-3xl md:text-4xl max-w-[1000px] mx-auto w-full  text-center">
            Installation
            <p class="text-xl sm:text-2xl md:text-3xl max-w-[1000px] mx-auto w-full italic font-light text-center">
                <br>
                First, make sure you have <a href="https://svelte.dev/docs/introduction" target="_blank" title="Visit Svelte.dev for installation info">Svelte</a>, <a href="https://nodejs.org/en" target="_blank" title="Visit Nodejs.org for installation info">Node</a>, and <a href="https://tailwindcss.com/docs/installation" target="_blank" title="Visit tailwindcss.com for installation info">Tailwind CSS (optional)</a> installed. <br>
                Then, install SvARIA using the following command:
            </p>
        </h5> 
        <div class="pt-4 rounded-lg sm:rounded-xl [[data-dialog]_&amp;]:rounded-md leading-[21px] relative z-10 flex w-3/4 max-h-[inherit] text-m text-black dark:text-white border border-black/[15%] ml-auto mr-auto dark:border-gray-650 bg-black dark:bg-gray-850"><code class="w-full grid h-9"><div class="sm:!pl-8 [[data-dialog]_&amp;]:!pl-4 px-4 pr-14 sm:pl-[26px] block dark:hidden"><span class="" style="color: rgb(121, 94, 38);">npm</span><span class="" style="color: rgb(0, 0, 0);"> </span><span class="" style="color: rgb(163, 21, 21);">install</span><span class="" style="color: rgb(0, 0, 0);"> </span><span class="" style="color: rgb(163, 21, 21);">svaria-toolkit</span>
        </div><div class="sm:!pl-8 [[data-dialog]_&amp;]:!pl-4 px-4 pr-14 sm:pl-[26px] hidden dark:block"><span class="" style="color: rgb(220, 220, 170);">npm </span><span class="" style="color: rgb(212, 212, 212);"> </span><span class="" style="color: rgb(206, 145, 120);">install </span><span class="" style="color: rgb(212, 212, 212);"> </span><span class="" style="color: rgb(206, 145, 120);">svaria-toolkit</span>
        </div>
    
        </code>
        <button on:click={handleClick} id="clipBoardButton" class="right-2 top-2 z-[11] h-[37px] rounded-md bg-transparent px-3 text-sm text-black/75 hover:bg-black/[7.5%] hover:text-black dark:text-white/75 dark:hover:bg-white/5 dark:hover:text-white absolute" type="button">
            
            <span id="toolTip">
                Copy to clipboard
            </span>
    
            <svg fill="none" viewBox="0 0 25 25" stroke="currentColor" stroke-width="1.5" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                </path>
            </svg>
        </button>
    </div> 
       
            
</SectionWrapper>