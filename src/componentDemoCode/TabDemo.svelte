<script>
	import Tab from 'svaria-toolkit';
	import DemoTab1 from './DemoTabs/DemoTab1.svelte'
    import DemoTab2 from './DemoTabs/DemoTab2.svelte'
    import DemoTab3 from './DemoTabs/DemoTab3.svelte'


	let items = [
		{
			label: 'aria-label',
			component: DemoTab1,
			tabLabelId: 'aria-label',
			tabContentId: 'aria-label-content',
			tabLabelClass: 'inline-block bg-blue-400 rounded-t focus:bg-sky-800 focus:ring text-black w-32',
            tabContentClass: 'bg-blue-300 text-black'
		},
		{
			label: 'aria-labelledby',
			component: DemoTab2,
			tabLabelId: 'aria-labelledby',
			tabContentId: 'aria-labelledby-content',
			tabLabelClass: 'inline-block bg-purple-400 rounded-t focus:bg-sky-800 focus:ring text-black w-32',
            tabContentClass: 'bg-blue-300 text-black'
		},
		{
			label: 'aria-selected',
			component: DemoTab3,
			tabLabelId: 'aria-selected',
			tabContentId: 'aria-selected-content',
            tabLabelClass: 'inline-block bg-gray-100 rounded-t bg-sky-700 focus:bg-sky-800 focus:ring text-black',
            tabContentClass: 'bg-blue-300 text-black'
		},

	];
</script>

<div class="flex justify-center w-full">
	<Tab
		id = 'tab-component'
        className='mb-4 border-b border-blue-200 dark:border-blue-700'
		{items}
		tabListStyle="flex flex-wrap inline-block p-2 rounded-t bg-sky-200 focus:bg-black focus:ring"
		tabListId = 'tab-labels'
		groupLabelClass = 'inline-block bg-gray-400 rounded-t focus:bg-sky-800 focus:ring text-black w-32'
		groupContentClass = 'bg-blue-300 text-black'
	/>
</div>