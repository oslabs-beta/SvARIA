<script>
    // get the store
    import { currentComponent } from "../../store/index.js";
    // get the comoponent to be renderd from the furniture factory
    import FurnitureFacroty from "./FurnitureFacroty.svelte";
    // write a handle click that updates the store
    const handleClick = (e) => {
        currentComponent.set(e)
    }
    // ===> I dont know if I can automate this array, I think we will have to manually hard code in each string
    // itterate over the possible options to create the list elements
    const componentsArray = ['Button', 'Accordion']
</script>

<!-- itterate over the components array to populate the list, each with a handle click that updates the store -->
<ul>
    {#each componentsArray as comp}
        <li on:click={() => handleClick(comp)}>SvARIA {comp}</li>
    {/each}
</ul>


<!-- conditionally render the selected component from Furniture Factory-->
{#if currentComponent}
    <FurnitureFacroty/> 
{/if}