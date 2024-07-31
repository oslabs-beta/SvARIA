<script context="module" lang="ts">
	// retain module scoped expansion state for each tree node
	const _expansionState: { label?: string; state?: boolean } = {
		// /* treeNodeId: expanded <boolean> */
	};
</script>

<script lang="ts">
	import type { TreeValue } from '../types.ts';
	import { colorContrastCheck } from './ARIAChecks.js';

	export let tree: TreeValue;
	export let arrows: string[] = ['▼', '►'];
	export let liId:string | undefined = ''
	export let liClassName: string | undefined = 'px-5 text-black';
	export let liStyle: string | undefined = '';
	export let arrowClass: string | undefined = 'arrow';
	export let arrowStyle: string | undefined = '';
	export let labelClass: string | undefined = '';
	export let labelStyle: string | undefined = '';

	const { label, children, link, onClick, labelId, arrowId } = tree;

	let expanded: boolean = _expansionState[label] || false;
	let selected: boolean = false;
	let treeitem: HTMLElement;

	const toggleExpansion = () => {
		expanded = _expansionState[label] = !expanded;
	};

	const toggleSelection = () => {
		selected = !selected;
	};

	// $: arrowDown = expanded;

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'ArrowRight' && !expanded && children) {
			toggleExpansion();
		} else if (event.key === 'ArrowLeft' && expanded) {
			toggleExpansion();
		}
	};

	const handleOnClick = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			onClick();
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
		style={liStyle}
		id={liId}
		use:colorContrastCheck
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
				<span class={arrowClass} style={arrowStyle} id={arrowId}
					>{expanded ? `${arrows[0]}` : `${arrows[1]}`}</span
				>
				<a
					id={labelId}
					class={labelClass}
					style={labelStyle}
					href={link}
					on:click={onClick}
					on:keypress={handleOnClick}
					use:colorContrastCheck>{label}</a
				>
			</span>
			{#if expanded}
				<ul>
					{#each children as child}
						<svelte:self
							tree={child}
							{arrows}
							{liClassName}
							{liStyle}
							{arrowClass}
							{arrowStyle}
							{labelClass}
							{labelStyle}
						/>
					{/each}
				</ul>
			{/if}
		{:else}
			<a
				role="button"
				href={link}
				aria-label={label}
				tabindex="0"
				class={labelClass}
				style={labelStyle}
				on:click={onClick}
				on:keypress={handleOnClick}
				use:colorContrastCheck
				id={labelId}>{label}</a
			>
		{/if}
	</li>
</ul>
