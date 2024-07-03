<script>
	import Tab from '$lib/Tab.svelte';
	import TabDemoTab from './TabDemo.svelte';
	import TabCodeTab from './TabCode.svelte';
	import TabSandBoxTab from './TabSandbox.svelte';
	import TabDocsTab from './TabDocs.svelte';

	let tabItems = [
		{
			label: 'Demo',
			component: TabDemoTab,
			tabLabelClass:"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:text-gray-600 focus:bg-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-300 ",
			tabContentClass:"p-6 bg-gray-50 text-medium text-black dark:text-gray-400 dark:bg-gray-800 rounded-lg"
		},
		{
			label: 'Code',
			component: TabCodeTab,
			tabLabelClass:"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:text-gray-600 focus:bg-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-300 ",
			tabContentClass:"text-left text-lg p-6 bg-gray-50 text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg"
		},
		{
			label: 'Sandbox',
			component: TabSandBoxTab,
			tabLabelClass:"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:text-gray-600 focus:bg-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-300 ",
			tabContentClass:"p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg"
		},
		{
			label: 'Docs',
			component: TabDocsTab,
			tabLabelClass:"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:text-gray-600 focus:bg-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-300 ",
			tabContentClass:"p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg"
		}
	];
</script>

<div class="flex justify-center w-full">
	<Tab
		items={tabItems}
	/>
</div>
