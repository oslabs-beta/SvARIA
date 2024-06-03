<script>
	import { ariaLabelcheck, colorContrastCheck } from './ARIAchecks.js';
	import Button from './Button.svelte';

	export let showModal; // boolean
	export let modalId='';
	export let modalClass = 'bg-white rounded-lg shadow dark:bg-white-700 p-4 md:p-5 space-y-4'
	//export let modalClass = ''
	export let closeModalMessage = 'Close Modal';
	export let modalHeaderId = 'modalHeader';
	export let modalDescribeId = 'modalContent';
	export let closeButtonId = 'closeModalButtonId';
	export let closeButtonClass = 'closeModalButton';
	export let style = '';

	let dialog; // HTMLDialogElement
	$: if (dialog && showModal) dialog.showModal();

	function handleKeyDown(event) {
		if (event.key === 'Escape') {
			showModal = false;
		}
	}

	$: if (showModal) {
		//document.body.style.overflowY = 'hidden';
		document.body.style.overflow = 'hidden';
		// const modal = document.getElementById(modalId);
		// modal.style.overflow = 'hidden';
		dialog.focus();
	}

</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->

<dialog
	id = {modalId}
	{style}
	bind:this={dialog}
	on:close={() => {
		showModal = false;
		document.body.style.overflow = '';
	}}
	on:click|self={() => dialog.close()}
	use:colorContrastCheck
	on:keydown={handleKeyDown}
	class = {modalClass}
>
	<div
		role="dialog"
		aria-modal="true"
		aria-labelledby={modalHeaderId}
		aria-describedby={modalDescribeId}
		on:click|stopPropagation
		on:keypress|stopPropagation
	>
		<slot name="header" />
		<slot></slot>
		<Button
			on:click={() => {
				showModal = false;
				dialog.close();
			}}
			ariaLabel="Close Modal"
			content={closeModalMessage}
			id={closeButtonId}
			className={closeButtonClass}
		></Button>
	</div>
</dialog>

<style>
	:global(.closeModalButton) {
		color: blue;
		height: 30px;
		font-size: small;
	}
</style>
