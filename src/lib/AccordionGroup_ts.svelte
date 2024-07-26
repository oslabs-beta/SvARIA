<script lang="ts">
	import Accordion from './Accordion_ts.svelte';
	import type { AccordionObj } from '../types.ts';

	export let className: string = '';
	export let group: AccordionObj[] = [];
	export let ariaLabel = '';

	// const exampleGroup = [{name: 'This Accordion', heading: 'A Group', slot: }]
</script>

<div class={className} aria-label={ariaLabel}>
	{#each group as curr}
		<Accordion heading={curr.heading}>
			<div slot="content" class="lib-display">
				<h3>{curr.heading}</h3>
				<svelte:component this={curr.slot} />
			</div>
		</Accordion>
	{/each}
</div>
