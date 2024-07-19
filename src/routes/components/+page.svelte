<script>
    // get the store
    import { currentComponent } from "../../store/index.js";
    // get the comoponent to be renderd from the furniture factory s
    import FurnitureFactory from "./FurnitureFactory.svelte";
    // DEV TASK => add component to array
    const componentsArray = [
        {docs: 'buttonDocs', label: 'Button', source: "https://svelte.dev/repl/963bf9cd29244ab0a52f5b788293f95f?version=4.2.18"}, 
        {docs: 'accordionDocs', label: "Accordion", source:'https://svelte.dev/repl/6f215987234e471fbe241df938789695?version=4.2.18'}
    ]
    let source;
    const handleClick = (e) => {
        // set the store to contain the current selection
        currentComponent.set({docs: e.docs, label: e.comp, source: e.source})
        source = e.source;
    }
</script>

<!-- iterate over the components array to populate the list, each with a handle click that updates the store -->
<ul>
    {#each componentsArray as comp}
        <li on:click={() => handleClick(comp)}>SvARIA {comp.label}</li>
    {/each}
</ul>


<!-- conditionally render the selected component from Furniture Factory-->
{#if currentComponent}
    <FurnitureFactory/> 
{/if}