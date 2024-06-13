<script>
    import Accordion from "./Accordion.svelte";
    
    export let className = '';
    export let buttonId = '';
    export let group = [];

	// const group = [{name: 'This Accordion', heading: 'A Group', tab: Button}]
</script>

<div class={className} {group}>
    {#each group as curr}
        <Accordion heading={curr.heading} class={className} {buttonId} >
            <div slot='content' class={curr.contentClass}>
                <h3>{curr.heading}</h3>
                <!-- <div class="component"></div> -->
                <svelte:component this={curr.slot} />
            </div>
        </Accordion>
    {/each}
</div>