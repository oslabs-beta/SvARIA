<script>
	import { Menu } from 'svaria-toolkit';

	function blue() {
		console.log('blue')
	}

	function yellow() {
		console.log('yellow')
	}

	let menuItems = [
		{
			label: 'purple',
			link: "https://en.wikipedia.org/wiki/Purple",
            linkID: 'purple',
			linkClass: 'text-purple-800'
		},
		{
			label: 'blue',
            linkID: 'blue',
			onClick: blue,
			linkClass: 'text-blue-800'
		},
		{
			label: 'yellow',
            linkID: 'yellow',
			onClick: yellow,
			linkClass: 'text-yellow-800'
		},
		{
			label: 'green',
			link: "https://en.wikipedia.org/wiki/Green",
            linkID: 'green',
			linkClass: 'text-green-800'
		}
	];

	
</script>

<Menu
	{menuItems}
	buttonContent="Menu"
	buttonId="menuButton"
	buttonAriaLabel="menu button"
	buttonClass="w-32 h-9 text-xl bg-slate-200 items-center justify-between  py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:focus:text-black dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
    listId='menuItems'
	listClass="bg-blue-200 text-lg w-32 text-center	rounded-md"
/>