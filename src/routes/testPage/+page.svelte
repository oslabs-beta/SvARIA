<!-- use this page to test out components with URL "/testPage" -->

<script>
	import Checkbox from '$lib/input_types/Checkbox.svelte';
	import Button from '../../lib/Button.svelte';
	import Modal from '$lib/Modal.svelte';
	function handleClick() {
		console.log('button clicked');
	}

	function handleCheck() {
		console.log('checkbox checked');
	}
	let showModal = false;
	console.log()
</script>

<title>Our testing page</title>

<div class="testDiv">
	<!-- your component goes here -->
	<Button id='button' ariaLabel="test aria label" on:click={handleClick} content="Test button" />
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
		id="modal"
		modalHeaderId="modalHeader"
		modalDescribeId="dialoginfo"
		closeModalMessage="X"
		closeButtonId = 'close'
	>
		<h3 id="modalHeader">Modal</h3>
		<p id="dialoginfo">This is my modal content</p>
	</Modal>
</div>

<style>
	:global(#button) {
		color: white;
		background-color: black;
	}
	:global(#checkboxLabel) {
		color: #ffd88f;
		background-color: #0000a8;
	}
	:global(#checkboxInput) {
		accent-color: purple;
	}
	:global(#openModal) {
		font-size: smaller;
		background-color: #003d3d;
		color: aquamarine;
	}
	:global(#modal) {
		background-color: #003d3d;
		color: #b3b351;
	}
	:global(#close) {
		background-color: black;
		color: white
	}
</style>
