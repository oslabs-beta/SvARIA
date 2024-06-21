<script lang='ts'>
    import Accordion from "./Accordion.svelte";
    import type { AccordionObj } from '../types.ts'
    
    export let className: string = '';
    export let group: AccordionObj[] = [];
    export let ariaLabel = '';

	// const group = [{name: 'This Accordion', heading: 'A Group', slot: Button}]
</script>

<div class={className} aria-label={ariaLabel} >
    {#each group as curr}
        <Accordion heading={curr.heading} >
            <div slot='content' class="lib-display">
                <h3>{curr.heading}</h3>
                <!-- <div class="component"></div> -->
                <svelte:component this={curr.slot} />
            </div>
        </Accordion>
    {/each}
</div>