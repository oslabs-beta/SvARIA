<script lang='ts'>
	import type { MenuItems } from '../../../types.ts';
	import Menu from '$lib/Menu_ts.svelte';

	function handleClick(): void {
		alert('Menu button clicked');
	}

	let menuItems: MenuItems[] = [
		{
			label: 'purple',
			onClick: function click(): void {
				window.location.href = 'https://en.wikipedia.org/wiki/Purple';
			},
            linkID: 'purple',
			linkClass:
				'mx-96 w-32  bg-slate-300 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black'
		},
		{
			label: 'blue',
			onClick: function click(): void {
				alert(menuItems[1].label);
			},
            linkID: 'blue',
			linkClass:
				'mx-96 w-32  bg-slate-300 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black'
		},
		{
			label: 'yellow',
			onClick: function click(): void {
				alert(menuItems[2].label);
			},
            linkID: 'yellow',
			linkClass:
				'mx-96 w-32 bg-slate-300 px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
		},
		{
			label: 'green',
			onClick: function click(): void {
				window.location.href = 'https://en.wikipedia.org/wiki/Greene';
			},
            linkID: 'green',
			linkClass:
			'mx-96 w-32 bg-slate-300 px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
		}
	];
</script>

<Menu
	items={menuItems}
	buttonContent="Menu"
	buttonId="menuButton"
	buttonAriaLabel="menu button"
	buttonClass="w-32 h-16 text-2xl bg-slate-400 items-center justify-between  py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:focus:text-black dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
    listId='menuItems'
	listClass="py-2 text-sm text-gray-700 dark:text-black "
	on:click={handleClick}
/>
