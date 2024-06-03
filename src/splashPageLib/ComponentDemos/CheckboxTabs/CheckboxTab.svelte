<script>
    import Tab from '$lib/Tab.svelte'
    import CheckboxDemoTab from './CheckboxDemo.svelte'
    import CheckboxCodeTab from './CheckboxCode.svelte'
    import CheckboxSandBoxTab from './CheckboxSandbox.svelte'
    import CheckboxDocsTab from './CheckboxDocs.svelte'

    let tabItems = [
		{
			label: 'Demo',
			component: CheckboxDemoTab,
		},
		{
			label: 'Code',
			component: CheckboxCodeTab ,
		},
        {
			label: 'Sandbox',
			component: CheckboxSandBoxTab,

		},
		{
			label: 'Docs',
			component: CheckboxDocsTab,

		}
	];

</script>

<Tab items={tabItems} tabLabelClass = 'inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:ring ';
tabContentClass = 'p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full'/>