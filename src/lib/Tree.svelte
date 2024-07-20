<script context="module">
	// retain module scoped expansion state for each tree node
	const _expansionState = {
		// /* treeNodeId: expanded <boolean> */
	};
</script>

<script>
	export let tree;
	export let arrows = ['▼', '►'];
	export let liClassName = "px-5";
	export let liId = '';
	export let liStyle = '';
	export let arrowClass = 'arrow';
	export let arrowId = '';
	export let arrowStyle = '';
	export let labelClass = '';
	export let labelId = '';
	export let labelStyle = '';

	const { label, children } = tree;

	let expanded = _expansionState[label] || false;
	let selected = false;
	let treeitem;

	const toggleExpansion = () => {
		expanded = _expansionState[label] = !expanded;
	};

	const toggleSelection = () => {
		selected = !selected;
	};

	// $: arrowDown = expanded;

	const handleKeyDown = (event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			toggleExpansion();
		} else if (event.key === 'ArrowRight' && !expanded && children) {
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
				on:click
				on:keydown
			>
				<span class={arrowClass} id={arrowId} style={arrowStyle}
					>{expanded ? `${arrows[0]}` : `${arrows[1]}`}</span
				>
				<span class={labelClass} id={labelId} style={labelStyle}>{label}</span>
			</span>
			{#if expanded}
				<ul>
					{#each children as child, i}
						<svelte:self
							tree={child}
							on:click
							on:keydown
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
			<span
				role="button"
				aria-label={label}
				tabindex="0"
				on:click
				on:keydown
				class={labelClass}
				id={labelId}
				style={labelStyle}>{label}</span
			>
		{/if}
	</li>
</ul>
