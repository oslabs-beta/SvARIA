<script lang='ts'>
	import Tab from '$lib/Tab_ts.svelte';
	import RadioGroupDemoTab from './RadioGroupDemo.svelte';
	import RadioGroupCodeTab from './RadioGroupCode.svelte';
	import RadioGroupSandBoxTab from './RadioGroupSandbox.svelte';
	import RadioGroupDocsTab from './RadioGroupDocs.svelte';

	let items = [
		{
			label: 'Demo',
			component: RadioGroupDemoTab,
			tabLabelClass:"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:text-gray-600 focus:bg-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-300 ",
			tabContentClass:"p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg"	
		},
		{
			label: 'Code',
			component: RadioGroupCodeTab,
			tabLabelClass:"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:text-gray-600 focus:bg-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-300 ",
			tabContentClass:"p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg"
		},
		{
			label: 'Sandbox',
			component: RadioGroupSandBoxTab,
			tabLabelClass:"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:text-gray-600 focus:bg-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-300 ",
			tabContentClass:"p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg"
		},
		{
			label: 'Docs',
			component: RadioGroupDocsTab,
			tabLabelClass:"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:text-gray-600 focus:bg-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-300 ",
			tabContentClass:"p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg"
		}
	];
</script>

<div class="flex justify-center w-full">
	<Tab
		{items}
	/>
</div>