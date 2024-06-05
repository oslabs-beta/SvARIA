<script>
	import { ariaLabelcheck, colorContrastCheck } from './ARIAchecks.js';

	export let buttonContent = 'Menu';
	export let items = [];
	export let buttonAriaLabel = buttonContent;
	export let buttonId = '';
	export let buttonStyle = '';
	export let buttonClass =
		'bg-teal-600 hover:bg-teal-500 text-teal-100 font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded-sm';
	export let listId = 'menu';
	// style the list
	export let listClass =
		'container flex-col max-w-sm bg-white border border-gray-300 shadow-md rounded-lg';
	export let listStyle;

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

<div>
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
		<nav id={listId} class={listClass} style={listStyle}>
			{#each items as item}
				<div>
					<button
						role="menuitem"
						id={item.linkID}
						on:click={item.onClick}
						aria-label={item.label}
						class={item.linkClass}
						style={item.linkStyle}
						use:ariaLabelcheck
						use:colorContrastCheck
						>{item.label}
					</button>
				</div>
			{/each}
		</nav>
	{/if}
</div>

<style>
	.linkClass,
	button {
		width: 100%;
		max-width: 24rem;
	}
</style>
