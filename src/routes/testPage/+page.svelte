<!-- use this page to test out components with URL "/testPage" -->

<script>
	import RadioGroup from '$lib/RadioGroup.svelte';
	import Checkbox from '$lib/input_types/Checkbox.svelte';
	import Button from '../../lib/Button.svelte';
	import Modal from '$lib/Modal.svelte';
	import Form from '$lib/input_types/Form.svelte';
	import Nav from '$lib/navigation/Navigation.svelte';
	import Tab from '$lib/Tab.svelte';
	import Tab1 from './tabsForTestPage/Tab1.svelte';
	import Tab2 from './tabsForTestPage/Tab2.svelte';
	import Menu from '$lib/Menu.svelte';

	function handleClick() {
		console.log('button clicked');
	}

	function handleCheck() {
		console.log('checkbox checked');
	}
	let showModal = false;

	let formElements = [
		{ name: 'address', type: 'input', labelValue: 'New Address' },
		{ name: 'firstName', type: 'input', labelValue: 'New First Name' },
		{ name: 'userName', type: 'input', labelValue: 'New User Name' },
		{
			name: 'password',
			type: 'password',
			labelValue: 'New Password',
			inputId: 'newPw',
			labelId: 'pwLabel'
		}
	];

	let menuItems = [
		{
			label: 'purple',
			onClick: function click() {
				window.location.href = 'https://en.wikipedia.org/wiki/Purple';
			},
			linkStyle: 'color: black; background-color: orange'
		},
		{
			label: 'blue',
			onClick: function click() {
				alert(items[1].label);
			}
		},
		{
			label: 'yellow',
			onClick: function click() {
				alert(items[2].label);
			}
		},
		{
			label: 'green',
			onClick: function click() {
				window.location.href = 'https://en.wikipedia.org/wiki/Greene';
			}
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

	function onSubmit(e) {
		console.log(e.target.firstName.value);
	}
	let tabItems = [
		{
			label: 'Content',
			component: Tab1,
			tabContentId: 'test-0'
			//  tabLabelId,
		},
		{
			label: 'Interactions',
			component: Tab2,
			tabContentId: 'test-1',
			tabLabelId: 'label-1'
		}
	];
</script>

<title>Our testing page</title>

<Nav heading="welcome to the test page!" routes={navElem} id="newID">
	<img
		src="https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1"
		alt="a cat"
		class="h-16 w-16 object-cover rounded-full"
	/>
</Nav>

<!-- <div class="testDiv">
	<RadioGroup {options} id="radio" ariaLabel="Radio Selector" /> -->
<div>
	<!-- your component goes here -->
	<Button id="button" ariaLabel="test aria label" on:click={handleClick} content="Test button" />
	<br />
	<Checkbox
		inputId="checkboxInput"
		labelId="checkboxLabel"
		content="This is my checkbox"
		on:click={handleCheck}
	/>
	<br />
	<Button
		id="openModal"
		on:click={() => (showModal = true)}
		content="show Modal"
		ariaLabel="Open Modal"
	></Button>
	<Modal
		bind:showModal
		modalId="modal"
		modalHeaderId="modalHeader"
		modalDescribeId="dialoginfo"
		closeModalMessage="X"
		closeButtonId="close"
	>
		<h3 id="modalHeader">Modal</h3>
		<p id="dialoginfo">This is my modal content</p>
	</Modal>
	<Form
		{formElements}
		on:submit={onSubmit}
		submitForm="svaria rules"
		submitButtonId="submitButton11"
		formId="form"
		ariaLabel="User Information Form"
	/>

	<Tab items={tabItems}></Tab>
	<Menu
		items={menuItems}
		buttonContent={'Menu button'}
		buttonId="menuButton"
		buttonAriaLabel={'menu button'}
		buttonStyle="background-color:orange; color:black"
		listClass="text-gray-500"
		buttonClass="bg-300-oragne text-color-black "
	></Menu>
</div>

<style>
	/* :global(#button) {
		color: white;
		background-color: black;
	}
	:global(#checkboxLabel) {
		color: #ffd88f;
		background-color: #0000a8;
	}
	:global(#checkboxInput) {
		accent-color: purple;
	} */
	/* :global(#openModal) {
		font-size: smaller;
		background-color: #003d3d;
		color: aquamarine;
	} */
	/* :global(#modal) {
		background-color: #003d3d;
		color: #b3b351;
	} */
	/* :global(#close) {
		background-color: black;
		color: white;
	}
	:global(#submitButton11) {
		color: white;
		background-color: black;
		font-size: small;
	}

	:global(#form) {
		background-color: white;
	}

	:global(#labeladdress) {
		font-size: large;
		color: blue;
		background-color: white;
	}
	:global(#labeluserName) {
		font-size: large;
		background-color: blue;
	} */
</style>
