<script lang="ts">
	import Accordion from './Accordion_ts.svelte';
	import type { AccordionObj } from '../types.ts';

	export let className: string = '';
	export let style: string = '';
	export let ariaLabel = '';
	export let groupHeadingClass = '';
	export let group: AccordionObj[] = [];

	// const exampleGroup = [{name: 'This Accordion', heading: 'A Group', slot: }]
</script>

<div class={className} {style} aria-label={ariaLabel}>
	{#each group as curr}
		<Accordion heading={curr.heading}>
			<div id={curr.id} slot="content" class="lib-display">
				<h3 class={curr.headingClass || groupHeadingClass} style={curr.headingStyle}>
					{curr.heading}
				</h3>
				<svelte:component this={curr.slot} />
			</div>
		</Accordion>
	{/each}
</div>
