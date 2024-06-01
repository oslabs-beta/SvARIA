<script>
    import Tab from '$lib/Tab.svelte'
    import ButtonDemoTab from './ButtonDemo.svelte'
    import ButtonCodeTab from './ButtonCode.svelte'
    import ButtonSandBoxTab from './ButtonSandbox.svelte'
	import ButtonDocsTab from './ButtonDocs.svelte'

    let tabItems = [
		{
			label: 'Demo',
			component: ButtonDemoTab,
		},
		{
			label: 'Code',
			component: ButtonCodeTab ,
		},
        {
			label: 'Sandbox',
			component: ButtonSandBoxTab,
		},
		{
			label: 'Docs',
			component: ButtonDocsTab,
		}
	];

</script>

<Tab items={tabItems}/>