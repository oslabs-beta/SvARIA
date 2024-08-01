<!-- use this page to test out components with URL "/testPage" -->

<script land="ts">
	import RadioGroup from '$lib/RadioGroup_ts.svelte';
	import Checkbox from '$lib/input_types/Checkbox_ts.svelte';
	import Button from '../../lib/Button_ts.svelte';
	import Modal from '$lib/Modal_ts.svelte';
	import Form from '$lib/input_types/Form_ts.svelte';
	import Nav from '$lib/navigation/Navigation_ts.svelte';
	import Tab from '$lib/Tab_ts.svelte';
	import Tab1 from './tabsForTestPage/Tab1.svelte';
	import Tab2 from './tabsForTestPage/Tab2.svelte';
	import Menu from '$lib/Menu_ts.svelte';
	import Accordion from '$lib/Accordion_ts.svelte';
	import ProgressBar from '$lib/ProgressBar.svelte';
	import Switch from '$lib/Switch.svelte';
	import Popover from '$lib/Popover.svelte';
	import AccordionDemo from '../../splashPageLib/ComponentDemos/AccordionGroupTabs/AccordionGroupDemo.svelte';
	import RadioGroupDemo from '../../splashPageLib/ComponentDemos/RadioGroupTabs/RadioGroupDemo.svelte';
	import Docs from '../../splashPageLib/Docs.svelte';
	import Tree from '$lib/Tree.svelte';
	import SpinButton from '$lib/SpinButton.svelte';


	let formElements = [
		{ name: 'address', type: 'input', labelValue: 'New Address' },
		{ name: 'firstName', type: 'input', labelValue: 'New First Name' },
		{ name: 'userName', type: 'input', labelValue: 'New User Name' },
		{
			name: 'password',
			type: 'password',
			labelValue: 'New Password',
			inputId: 'newPw',
			labelId: 'pwLabel',
			inputClass: 'bg-black'
		}
	];

	let navElem = [
		{
			href: 'https://github.com/oslabs-beta/SvARIA/tree/dev',
			name: "SvARIA's git repo",
			linkStyle: 'color: yellow',
			linkClass: 'Class 1'
		},
		{
			href: 'https://github.com/oslabs-beta/SvARIA/tree/dev',
			name: "SvARIA's second test",
			linkClass: 'text-2xl text-orange-500'
		}
	];

	let options = [
		{ label: 'Subscribe for updates'},
		{ label: 'Subscribe to listserv'},
		{ label: 'Subscribe to newsletter'}
	];

	let selectedOption = [];

	let docsProps=[
		"popoverId: Uniquely identifies the popover as a whole. Everything else is nested inside this element.",
		"popoverClass: Class for the popover as a whole, use this for styling the entire element.",
		"popoverHeaderId: uniquely identifies the header element",
		"popoverDescribeId"
	]
	let currentProgress = 50; // Example: set the current progress

	function updateProgress() {
		// Example: update progress over time
		setInterval(() => {
			currentProgress += 10; // Increase progress by 10%
			if (currentProgress > 100) currentProgress = 0; // Reset if exceeds 100%
		}, 1000); // Update every second
	}

	updateProgress(); // Start updating progress

	const tree = {
		label: 'Wine',
		children: [
			{
				label: 'Red',
				children: [
					{ label: 'California', link: "https://en.wikipedia.org/wiki/California_wine", labelId:"california", arrowId:"californiaArrow"},
					{
						label: 'Bordeaux', link: 'https://en.wikipedia.org/wiki/Bordeaux',
						children: [{ label: 'Cab Franc', onClick:cabfranc }, { label: 'Merlot', link:"https://en.wikipedia.org/wiki/Merlot" }, { label: 'Malbec', labelId:"malbec" }],
						arrowId: 'bordeauxArrow'
					},
					{ label: 'Rioja', onClick:rioja }
				]
			},
			{
				label: 'White',
				children: [{ label: 'Burgundy', onClick: burgundy }, { label: 'Champagne', link:"https://en.wikipedia.org/wiki/Champagne" }, { label: 'Piedmont', link: "https://en.wikipedia.org/wiki/Piedmont" }],
				labelId: "white",
				arrowId: 'whiteArrow'
			}
		]
	};

	function burgundy () {
		console.log('Burgundy clicked')
	}

	function rioja () {
		console.log('rioja clicked')
	}

	function cabfranc () {
		console.log('cab franc clicked')
	}

	function blue() {
		console.log('blue')
	}

	function yellow() {
		console.log('yellow')
	}

	let menuItems = [
		{
			label: 'purple',
			link: "https://en.wikipedia.org/wiki/Purple",
            linkID: 'purple',
		},
		{
			label: 'blue',
            linkID: 'blue',
			onClick: blue,

		},
		{
			label: 'yellow',
            linkID: 'yellow',
			onClick: yellow,
		},
		{
			label: 'green',
			link: "https://en.wikipedia.org/wiki/Green",
            linkID: 'green',
		}
	];

	let tabItems = [
	{
		label: 'Demo',
		component: Tab1,
	},
	{
		label: 'Sandbox',
		component: Tab2,
	}
];

// let values = []
// for (let i = 0; i <= 50; i++) {
// 	values.push(i)
// }



let values = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


</script>
<SpinButton
{values}
></SpinButton>

<!-- <Tab
items={tabItems}
/> -->

<!-- <Form {formElements}
groupInputClass = 'bg-yellow-400'
></Form> -->
<!-- <Docs componentName="Popover" propsDetails={docsProps}>

</Docs> -->
<!-- <RadioGroupDemo {options}/> -->


<!-- <Tree 
	{tree}
/> -->

<!-- <Menu
	{menuItems}
/> -->

<!-- <Checkbox {options}></Checkbox> -->

<!-- <Menu
	items={menuItems}
	buttonContent="Menu"
	buttonId="menuButton"
	buttonAriaLabel="menu button"
	buttonClass="w-32 h-9 text-xl bg-slate-200 items-center justify-between  py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:focus:text-black dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
    listId='menuItems'
	listClass="bg-blue-200 text-lg w-32 text-center	rounded-md"
/> -->



<title>Our testing page</title>
<br />
<br />
<br />
<br />
<br />
<br />
<br />

<!-- <Popover
	popoverId="dialog"
	popoverHeaderId="PopoverHeader"
	popoverDescribeId="dialoginfo"
	closeButtonId="close"
>
	<h3
	id="popoverHeader"
	slot="header"
	>
	Popover Opened
	</h3>
	<div slot="content">
		<p id="dialoginfo">
			<br>You have successfully opened the Popover,
			<br/>Now you can close the Popover with "X".
		</p>
	</div>
</Popover> -->
<!-- <Switch defValue='On' altValue='off' ariaDefValue="Turned On" ariaAltValue="Turned Off"/>
<AccordionDemo/> -->

