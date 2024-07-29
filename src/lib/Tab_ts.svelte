<script lang='ts'>
	export let items: TabItems[] = [];
	export let tabListClass: string = 'flex flex-wrap';
	export let tabListId: string = '';
	export let tabListStyle: string = '';
	export let id:string = '';
	export let style:string = '';
	export let className:string = '';
	export let groupLabelClass:string = 'inline-block bg-gray-400 rounded-t focus:bg-sky-800 focus:ring text-black w-32';
	export let groupLabelStyle: string = ''
	export let groupContentClass: string = 'bg-blue-300 text-black'
	export let groupContentStyle: string = ''
	import { colorContrastCheck } from './ARIAChecks.js';
	import type { TabItems } from '../types.js'

	let activeTabValue: number = 0;
	let itemComponents: HTMLButtonElement[] = [];


	const handleClick = (tabValue: number):void => {
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

<div {id} {style} class={className}>
	<ul class={tabListClass} id={tabListId} style={tabListStyle}>
		{#each items as item}
			<li class={activeTabValue === item.value ? 'active' : ''}>
				<button
					role="tab"
					aria-selected={item.value == activeTabValue}
					aria-controls={item.tabContentId}
					tabindex={item.value == activeTabValue ? 0 : -1}
					on:click={handleClick(item.value)}
					bind:this={itemComponents[item.value]}
					on:keydown={(e) => handleKeyPress(e, item.value)}
					class={item.tabLabelClass ? item.tabLabelClass : groupLabelClass}
					style={item.tabLabelStyle ? item.tabLabelStyle : groupLabelStyle}
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
			class={item.tabContentClass ? item.tabContentClass : groupContentClass}
			style={item.tabContentStyle ? item.tabContentStyle : groupContentStyle}
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