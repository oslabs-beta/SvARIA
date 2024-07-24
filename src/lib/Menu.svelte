<script lang="js">
	import { ariaLabelcheck, colorContrastCheck } from './ARIAChecks.js';

	export let buttonContent = 'Menu';
	export let items = [];
	export let buttonAriaLabel = buttonContent;
	export let buttonId = buttonContent;
	export let buttonStyle = '';
	export let buttonClass = 'bg-teal-800 hover:bg-teal-500 text-white font-bold border-b-4 border-teal-700 hover:border-teal-500 w-full rounded-none';
	export let listId = 'menu';
	export let listClass = 'absolute min-w-[180px] p-3 bg-white border border-gray-300 shadow-md rounded-none w-full';
	export let listStyle = '';
	export let menuContainerClass = 'container w-3/12';
	export let menuContainerStyle = ''
	export let menuContainerId = ''


	let showItems = false;

	function openMenu() {
		showItems = !showItems;
	}

	$: items.map((item, index) => {
		if (!item['linkID']) {
			item['linkID'] = `link-${index}`;
		}
	});

	$: for (let i = 0; i < items.length; i++) {
		items[i]['value'] = i;
	}
</script>

<div class={menuContainerClass} style={menuContainerStyle} id={menuContainerId}> 
	<button
		type="button"
		aria-haspopup="menu"
		aria-controls={listId}
		aria-label={buttonAriaLabel}
		on:click={openMenu}
		on:click
		id={buttonId}
		style={buttonStyle}
		class={buttonClass}
		use:ariaLabelcheck
		use:colorContrastCheck
	>
		{buttonContent}
	</button>
	{#if showItems}
		<ul id={listId} class={listClass} style={listStyle}>
			{#each items as item}
				<div>
					<button
						role="menuitem"
						id={item.linkID}
						on:click={item.onClick}
						class={item.linkClass}
						aria-label={item.label}
						style={item.linkStyle}
						use:ariaLabelcheck
						use:colorContrastCheck
						>{item.label}
					</button>
				</div>
			{/each}
		</ul>
	{/if}
</div>
