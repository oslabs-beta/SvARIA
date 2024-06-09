<script>
    import Accordion from "./Accordion.svelte";
    
    export let className = '';
    export let ariaLabel = '';
    export let group = [];

	// const group = [{name: 'This Accordion', heading: 'A Group', tab: Button}]
</script>

<div class={className} ariaLabel={ariaLabel} {group} >
    {#each group as curr}
        <Accordion heading={curr.heading} >
            <div slot='content' class="lib-display">
                <h3>{curr.heading}</h3>
                <div class="component"></div>
                <svelte:component this={curr.slot} />
            </div>
        </Accordion>
    {/each}
</div>