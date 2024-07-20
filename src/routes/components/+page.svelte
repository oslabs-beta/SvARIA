<script lang=ts>
    import Sandbox from '../../splashPageLib/Sandbox.svelte';
    import Button from '$lib/Button.svelte';
// ======================> Component Imports < ========================
    import ButtonDocs from './lib/ButtonDocs.svelte';
    import AccordionDocs from './lib/AccordionDocs.svelte';
// ====================================================================

    const componentsArray = [
        {docs: ButtonDocs, label: 'Button', source: "https://svelte.dev/repl/963bf9cd29244ab0a52f5b788293f95f?version=4.2.18"}, 
        {docs: AccordionDocs, label: "Accordion", source:'https://svelte.dev/repl/6f215987234e471fbe241df938789695?version=4.2.18'}
    ]
    let component = componentsArray[0]
    const handleClick = (e) => {
        console.log(e)
        component = e;
    }

</script>

<div class="flex">
    <aside id="default-sidebar" class="flex-shrink-0 w-64 h-screen bg-gray-50 dark:bg-gray-800 overflow-y-auto">
        <ul class="py-4 space-y-2 font-medium">
            {#each componentsArray as comp}
            <li>
                <button class="block w-full px-4 py-2 text-left hover:bg-gray-300" on:click={() => handleClick(comp)}>
                    {comp.label}
                </button>
            </li>
            {/each}
        </ul>
    </aside>

    <div class="ml-64 p-4 flex-1">
        <div class="grid grid-cols-1 gap-4 mb-4">
            <svelte:component this={component.docs}/> 
            <Sandbox source={component.source}/> 
        </div>
    </div>
</div>