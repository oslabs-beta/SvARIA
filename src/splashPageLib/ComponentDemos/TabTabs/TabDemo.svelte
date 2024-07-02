<script>
	import Tab from '$lib/Tab.svelte';
	import DemoTab1 from './DemoTabs/DemoTab1.svelte'
    import DemoTab2 from './DemoTabs/DemoTab2.svelte'
    import DemoTab3 from './DemoTabs/DemoTab3.svelte'


	let tabItems = [
		{
			label: 'aria-label',
			component: DemoTab1,
            tabLabelClass: 'inline-block bg-gray-100 rounded-t bg-sky-700 focus:bg-sky-800 focus:ring text-black',
            tabContentClass: 'bg-blue-300 text-black'
		},
		{
			label: 'aria-labelledby',
			component: DemoTab2,
            tabLabelClass: 'inline-block bg-gray-100 rounded-t bg-sky-700 focus:bg-sky-800 focus:ring text-black',
            tabContentClass: 'bg-blue-300 text-black'
		},
		{
			label: 'aria-selected',
			component: DemoTab3,
            tabLabelClass: 'inline-block bg-gray-100 rounded-t bg-sky-700 focus:bg-sky-800 focus:ring text-black',
            tabContentClass: 'bg-blue-300 text-black'
		},

	];
</script>

<div class="flex justify-center w-full">
	<Tab
        className='mb-4 border-b border-blue-200 dark:border-blue-700'
		items={tabItems}
		tabListClass="flex flex-wrap inline-block bg-gray-100 p-2 rounded-t bg-sky-700 focus:bg-blue-900 focus:ring"
	/>
</div>