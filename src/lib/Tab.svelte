<script>
	export let items = [];
	export let activeTabValue = 0;
	export let itemComponents = [];
	export let tabListClass = 'flex flex-wrap';
	export let tabListId = '';
	export let tabListStyle = '';
	export let id = '';
	export let style = '';
	export let className = '';
	import { colorContrastCheck } from './ARIAchecks.js';

	const handleClick = (tabValue) => () => {
		activeTabValue = tabValue;
	};

	function handleKeyPress(e, tabValue) {
		// Move right
		if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
			if (e.key === 'ArrowRight') {
				activeTabValue = tabValue + 1;
			} else if (e.key === 'ArrowLeft') {
				activeTabValue = tabValue - 1;
			}
		}

		if (activeTabValue >= items.length) {
			activeTabValue = 0;
		}
		if (activeTabValue < 0) {
			activeTabValue = items.length - 1;
		}
	}
	$: if (itemComponents.length > 0) {
		itemComponents[activeTabValue].focus();
	}

	$: for (let i = 0; i < items.length; i++) {
		items[i]['value'] = i;
	}

	$: items = items.map((row) => {
		if (!row['tabLabelId']) {
			row['tabLabelId'] = `tab-${row.value}`;
		}
		if (!row['tabContentId']) {
			row['tabContentId'] = `tabcontent-${row.value}`;
		}
		return row;
	});
</script>

<div {id} {style} class={className}>
	<ul class={tabListClass} id={tabListId} style={tabListStyle}>
		{#each items as item}
			<li class={activeTabValue === item.value ? 'active' : ''}>
				<button
					role="tab"
					aria-selected={item.value == activeTabValue}
					aria-controls={item.tabContentId}
					tabindex={item.value == activeTabValue ? '0' : '-1'}
					on:click={handleClick(item.value)}
					bind:this={itemComponents[item.value]}
					on:keydown={(e) => handleKeyPress(e, item.value)}
					class={item.tabLabelClass}
					style={item.tabLabelStyle}
					id={item.tabLabelId}
					use:colorContrastCheck
					on:click
					>{item.label}
				</button>
			</li>
		{/each}
	</ul>
	{#each items as item}
		<div
			class={item.tabContentClass}
			style={item.tabContentStyle}
			id={item.tabContentId}
			role="tabpanel"
			aria-labelledby={item.id}
			use:colorContrastCheck
			tabindex="0"
			hidden={item.value != activeTabValue}
		>
			<svelte:component this={item.component} />
		</div>
	{/each}
</div>

<!-- <style>
	.box {
		margin-bottom: 10px;
		padding: 40px;
		border: 1px solid #dee2e6;
		border-radius: 0 0 0.5rem 0.5rem;
		border-top: 0;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		padding-left: 0;
		margin-bottom: 0;
		list-style: none;
		border-bottom: 1px solid #dee2e6;
	}
	li {
		margin-bottom: -1px;
	}
</style> -->
