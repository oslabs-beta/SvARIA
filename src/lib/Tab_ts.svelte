<script lang='ts'>
	export let items: TabItems[] = [];
	export let activeTabValue: number = 0;
	export let itemComponents: HTMLButtonElement[] = [];
	export let tabLabelClass: string =
		'inline-block bg-gray-100 p-2 rounded-t hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:ring ';
	export let tabContentClass: string =
		'p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded w-full';
	export let tabLabelStyle: string = '';
	export let tabContentStyle: string = '';
	export let tabListClass: string = 'flex flex-wrap';

	import { ariaLabelcheck, colorContrastCheck } from './ARIAchecks.js';
    import type { TabItems } from '../types.js'

	const handleClick = (tabValue: number) => ():void => {
		activeTabValue = tabValue;
	};

	function handleKeyPress(e, tabValue: number) {
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

<ul class={tabListClass}>
	{#each items as item}
		<li class={activeTabValue === item.value ? 'active' : ''}>
			<button
				role="tab"
				aria-selected={item.value == activeTabValue}
				aria-controls={item.tabContentId}
				id={item.tabLabelId}
				tabindex={item.value == activeTabValue ? Number('0') : Number('-1')}
				on:click={handleClick(item.value)}
				bind:this={itemComponents[item.value]}
				on:keydown={(e) => handleKeyPress(e, item.value)}
				class={tabLabelClass}
				style={tabLabelStyle}
				use:colorContrastCheck
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