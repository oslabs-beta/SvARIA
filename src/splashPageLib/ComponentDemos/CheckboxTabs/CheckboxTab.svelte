<script lang='ts'>
	import type { TabItems } from '../../../types.ts';
	import Tab from '$lib/Tab_ts.svelte';
	import CheckboxDemoTab from './CheckboxDemo.svelte';
	import CheckboxCodeTab from './CheckboxCode.svelte';
	import CheckboxSandBoxTab from './CheckboxSandbox.svelte';
	import CheckboxDocsTab from './CheckboxDocs.svelte';

	let tabItems: TabItems[] = [
		{
			label: 'Demo',
			component: CheckboxDemoTab,
			tabLabelClass:"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:text-gray-600 focus:bg-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-300 ",
			tabContentClass:"p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg"
		},
		{
			label: 'Code',
			component: CheckboxCodeTab,
			tabLabelClass:"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:text-gray-600 focus:bg-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-300 ",
			tabContentClass:"p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg"
		},
		{
			label: 'Sandbox',
			component: CheckboxSandBoxTab,
			tabLabelClass:"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:text-gray-600 focus:bg-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-300 ",
			tabContentClass:"p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg"
		},
		{
			label: 'Docs',
			component: CheckboxDocsTab,
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
