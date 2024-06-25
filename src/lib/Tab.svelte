<script>
	export let items = [];
	export let activeTabValue = 0;
	export let itemComponents = [];
	export let tabLabelClass =
		'inline-block bg-gray-100 p-2 rounded-t hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:ring ';
	export let tabContentClass =
		'p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded w-full';
	export let tabLabelStyle = '';
	export let tabContentStyle = '';
	export let tabListClass = 'flex flex-wrap';
	import { ariaLabelcheck, colorContrastCheck } from './ARIAchecks.js';
	export let className = '';
	export let style = '';
	export let id = '';

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

<div class={className} {style} {id}>
	<ul class={tabListClass}>
		{#each items as item}
			<li class={activeTabValue === item.value ? 'active' : ''}>
				<button
					role="tab"
					aria-selected={item.value == activeTabValue}
					aria-controls={item.tabContentId}
					id={item.tabLabelId}
					tabindex={item.value == activeTabValue ? '0' : '-1'}
					on:click={handleClick(item.value)}
					bind:this={itemComponents[item.value]}
					on:keydown={(e) => handleKeyPress(e, item.value)}
					class={tabLabelClass}
					style={tabLabelStyle}
					use:colorContrastCheck
					on:click
					>{item.label}
				</button>
			</li>
		{/each}
	</ul>
	{#each items as item}
		<div
			class={tabContentClass}
			style={tabContentStyle}
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
