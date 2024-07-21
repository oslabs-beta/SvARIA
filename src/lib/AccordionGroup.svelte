<script>
    import Accordion from "./Accordion_ts.svelte";

	export let groupComponentClass = '';
    export let groupHeadingClass = '';
    export let group = [];
    export let ariaLabel = '';
</script>

<div aria-label={ariaLabel} {group}>
	{#each group as curr}
		<Accordion heading={curr.heading}>
			<div slot="content" class={curr.componentClass ? curr.componentClass: groupComponentClass} style={curr.style} id={curr.id}>
				<h3 class={curr.headingClass ? curr.headingClass : groupHeadingClass} style={curr.headingStyle} id={curr.headingId}>
					{curr.heading}
				</h3>
				<svelte:component this={curr.slot} />
			</div>
		</Accordion>
	{/each}
</div>