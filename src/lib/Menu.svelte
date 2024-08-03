<script lang="ts">
	import { ariaLabelcheck, colorContrastCheck, parentColorContrastCheck } from './ARIAchecks.js';
	import type { MenuItems } from '../types.js';
	export let buttonContent: string | undefined = 'Menu';
	export let menuItems: MenuItems[] = [];
	export let buttonAriaLabel: string | undefined = buttonContent;
	export let buttonId: string | undefined = '';
	export let buttonStyle: string | undefined = '';
	export let buttonClass: string | undefined =
		'bg-teal-800 hover:bg-teal-500 text-white font-bold border-b-4 border-teal-700 hover:border-teal-500 w-full rounded-none';
	export let listId: string | undefined = 'menu';
	// style the list
	export let listClass: string | undefined =
		'absolute min-w-[180px] p-3 bg-white border border-gray-300 shadow-md rounded-none w-full';
	export let listStyle: string | undefined = '';
	export let menuContainerClass: string | undefined = 'container w-3/12';
	export let menuContainerStyle: string | undefined = '';
	export let menuContainerId: string | undefined = '';

	let showItems = false;

	function openMenu(): void {
		showItems = !showItems;
	}

	$: menuItems.map((item, index) => {
		if (!item['linkID']) {
			item['linkID'] = `link-${index}`;
		}
	});

	$: for (let i = 0; i < menuItems.length; i++) {
		menuItems[i]['value'] = i;
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
		use:parentColorContrastCheck
	>
		{buttonContent}
	</button>
	{#if showItems}
		<ul id={listId} class={listClass} style={listStyle} role="menu">
			{#each menuItems as item}
				<li>
					<a
						role="menuitem"
						id={item.linkID}
						href={item.link}
						class={item.linkClass}
						aria-label={item.label}
						style={item.linkStyle}
						use:ariaLabelcheck
						use:colorContrastCheck
						tabindex="0"
						on:click={item.onClick}
						on:keypress={(e) => {
							if (e.key == 'Enter') {
								item.onClick();
							}
						}}
						>{item.label}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
