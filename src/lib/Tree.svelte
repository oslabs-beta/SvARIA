<script context="module" lang="ts">
	// retain module scoped expansion state for each tree node
	const _expansionState: {label?: string; state?: boolean} = {
		// /* treeNodeId: expanded <boolean> */
	};
</script>

<script lang="ts">
	import type {Tree} from '../types.ts'

	export let tree:Tree;
	export let arrows:string[] = ['▼', '►'];
	export let liClassName:string|undefined = "px-5";
	export let liId:string|undefined = '';
	export let liStyle:string|undefined = '';
	export let arrowClass:string|undefined = 'arrow';
	export let arrowId:string|undefined = '';
	export let arrowStyle:string|undefined = '';
	export let labelClass:string|undefined = '';
	export let labelId:string|undefined = '';
	export let labelStyle:string|undefined = '';

	const { label, children, link } = tree;

	let expanded:boolean = _expansionState[label] || false;
	let selected:boolean = false;
	let treeitem:HTMLElement;

	const toggleExpansion = () => {
		expanded = _expansionState[label] = !expanded;
	};

	const toggleSelection = () => {
		selected = !selected;
	};

	// $: arrowDown = expanded;

	const handleKeyDown = (event:KeyboardEvent) => {
		if (event.key === 'ArrowRight' && !expanded && children) {
			toggleExpansion();
		} else if (event.key === 'ArrowLeft' && expanded) {
			toggleExpansion();
		}
	};
</script>

<ul role="tree">
	<!-- transition:slide -->
	<li
		role="treeitem"
		aria-expanded={expanded ? 'true' : 'false'}
		aria-selected={selected}
		bind:this={treeitem}
		class={liClassName}
		id={liId}
		style={liStyle}
	>
		{#if children}
			<span
				role="button"
				aria-label={label}
				on:click={toggleExpansion}
				on:focus={toggleSelection}
				on:keydown={handleKeyDown}
				tabindex="0"
			>
				<span class={arrowClass} id={arrowId} style={arrowStyle}
					>{expanded ? `${arrows[0]}` : `${arrows[1]}`}</span
				>
				<a class={labelClass} id={labelId} style={labelStyle} href={link}>{label}</a>
			</span>
			{#if expanded}
				<ul>
					{#each children as child}
						<svelte:self
							tree={child}
							{arrows}
							{liClassName}
							{liId}
							{liStyle}
							{arrowClass}
							{arrowId}
							{arrowStyle}
							{labelClass}
							{labelId}
							{labelStyle}
						/>
					{/each}
				</ul>
			{/if}
		{:else}
			<a
				href={link}
				aria-label={label}
				tabindex="0"
				class={labelClass}
				id={labelId}
				style={labelStyle}>{label}</a
			>
		{/if}
	</li>
</ul>
