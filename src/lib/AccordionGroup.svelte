<script>
    import Accordion from "./Accordion_ts.svelte";
    
    export let className = '';
    export let group = [];
    export let ariaLabel = '';

	// const group = [{name: 'This Accordion', heading: 'A Group', tab: Button}]
</script>

<div class={className} aria-label={ariaLabel} {group}>
	{#each group as curr}
		<Accordion heading={curr.heading}>
			<div slot="content" class={curr.componentClass} style={curr.style} id={curr.id}>
				<h3 class={curr.headingClass} style={curr.headingStyle} id={curr.headingId}>
					{curr.heading}
				</h3>
				<!-- <div class="component"></div> -->
				<svelte:component this={curr.slot} />
			</div>
		</Accordion>
	{/each}
</div>
