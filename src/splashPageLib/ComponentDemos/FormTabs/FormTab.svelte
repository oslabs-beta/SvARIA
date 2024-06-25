<script>
	import Tab from '$lib/Tab.svelte';
	import FormDemoTab from './FormDemo.svelte';
	import FormCodeTab from './FormCode.svelte';
	import FormSandBoxTab from './FormSandbox.svelte';
	import FormDocsTab from './FormDocs.svelte';

	let tabItems = [
		{
			label: 'Demo',
			component: FormDemoTab
		},
		{
			label: 'Code',
			component: FormCodeTab
		},
		{
			label: 'Sandbox',
			component: FormSandBoxTab
		},
		{
			label: 'Docs',
			component: FormDocsTab
		}
	];
</script>

<div class="flex justify-center w-full">
	<Tab
		items={tabItems}
		tabContainerClass=""
		tabLabelClass="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:text-gray-600 focus:bg-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-300 "
		tabContentClass="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg "
	/>
</div>
