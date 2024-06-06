<script>
    import Tab from '$lib/Tab.svelte'
    import ModalDemoTab from './ModalDemo.svelte'
    import ModalCodeTab from './ModalCode.svelte'
    import ModalSandBoxTab from './ModalSandbox.svelte'
    import ModalDocsTab from './ModalDocs.svelte'

    let tabItems = [
		{
			label: 'Demo',
			component: ModalDemoTab,
		},
		{
			label: 'Code',
			component: ModalCodeTab ,
		},
        {
			label: 'Sandbox',
			component: ModalSandBoxTab,

		},
		{
			label: 'Docs',
			component: ModalDocsTab,

		}
	];

</script>

<Tab items={tabItems}  tabLabelClass = 'inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:ring ';
tabContentClass = 'p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full'/>