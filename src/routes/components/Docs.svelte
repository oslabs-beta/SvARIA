<script lang='ts'>
    export let componentName: string|undefined;
    export let propsDetails: string[] = ["Example: this is an example"];
async function handleClick () {
    try {
        await navigator.clipboard.writeText('npm install SvARIA-toolkit');
    }
    catch (e) {
        console.error('Error copying to clipboard')
    }
}
</script>

<div style='margin-bottom: 15% ; margin-top:5%; font-size: 1.25em; line-height:1.6'>
    <h1 style="font-weight: bold; font-size: 1.5em">SvARIA {componentName}</h1>
    <h3 style="margin-top: 20px">All SvARIA components must be installed through the NPM package by running the command below in <a href="https://nodejs.org/en" target="_blank" title="Visit Nodejs.org for installation info">Node.js</a>:</h3><br>
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
    <br>
    <h3>Tailwind CSS styling is enabled by default, if you have it installed on your project. You can override
        this with your own class names, or by using the style property for inline styling. For more
        information on using Tailwind Classes, check out the
        <a href='https://tailwindcss.com/docs/installation' target='_blank' title='Visit tailwindcss.com for installation & use info'>Tailwind CSS website</a>.
    </h3>
    <br>
    <h2 style="font-weight: bold; margin-top:20px; margin-bottom: 20px">Properties</h2>
    <h3>Below you'll find the properties available on the {componentName} component. Some of these are required
        for the component to appear or function, while others may have a default value that does not need to be
        changed at all. Feel free to experiment with the props in the sandbox above if you want to see how your
        changes will affect your implementation.
    </h3>
    <br>
    <ul>
        {#each propsDetails as prop}
        <br><li style={"font-weight: bold"}>{prop}</li>
        {/each}
    </ul>
    <br>
    {#if $$slots.details}
        <h2 style="font-weight: bold">Details</h2>
        <slot name='details'></slot>
    {/if}
</div>