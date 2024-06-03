<script>
	import { ariaLabelcheck, colorContrastCheck } from './ARIAchecks.js';

	export let buttonContent = 'Menu';
	export let items = [];
	export let buttonAriaLabel = buttonContent;
	export let buttonId = '';
	export let buttonStyle = '';
	export let buttonClass =
		'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded';
	export let listId = 'menu';
	export let listClass = '';
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
		<ul id={listId} class={listClass} style={listStyle}>
			{#each items as item}
				<li>
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
				</li>
			{/each}
		</ul>
	{/if}
</div>
