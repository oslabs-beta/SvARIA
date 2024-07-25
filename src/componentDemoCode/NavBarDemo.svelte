<script>
	import Nav from 'svaria-toolkit';
    import { colorContrastCheck } from 'svaria-toolkit'


	let navElem = [
		{
			href: 'https://en.wikipedia.org/wiki/Home',
			name: "Home",
			linkClass: 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'
		},
		{
			href: 'https://en.wikipedia.org/wiki/Login',
			name: "Login",
            linkClass: 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'
        },

        {
			href: 'https://en.wikipedia.org/wiki/About',
			name: "About Us",
			linkClass: 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'
		},
        {
			href: 'https://en.wikipedia.org/wiki/Contact',
			name: "Contact Us",
			linkClass: 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'
		},
        {
			href: 'https://en.wikipedia.org/wiki/Service',
			name: "Our Services",
			linkClass: 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'
		}
	];
</script>

<Nav
	routes={navElem}
	navBarClass="bg-white border-gray-200 dark:bg-gray-900 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    navListClass='text-base font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'
    id='demoNavBar'
    navHeadingClass='bg-white border-gray-200 dark:bg-gray-900'
>
	<div slot="headingPlus" class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
		<a href="/" class='flex items-center space-x-3 rtl:space-x-reverse'>
			<img
				src="https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1"
				alt="a cat"
				class="h-8 w-8 object-cover rounded-full "
			/>
            <span use:colorContrastCheck class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Navigation</span>
		</a>
	</div>
</Nav>

