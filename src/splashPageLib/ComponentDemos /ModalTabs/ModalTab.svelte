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

<Tab items={tabItems}/>