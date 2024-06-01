<script>
	import { ariaLabelcheck, colorContrastCheck } from './ARIAchecks.js';
	import Button from './Button.svelte';

	export let showModal; // boolean
	export let id;
	export let closeModalMessage = 'Close Modal';
	export let modalHeaderId;
	export let modalDescribeId;
	export let closeButtonId = 'closeModalButtonId';
	export let closeButtonClassName = 'closeModalButton';
	export let style = '';

	let dialog; // HTMLDialogElement
	$: if (dialog && showModal) dialog.showModal();

	function handleKeyDown(event) {
		if (event.key === 'Escape') {
			showModal = false;
		}
	}

	$: if (showModal) {
		document.body.style.overflow = 'hidden';
		//const modal = document.getElementById(modalId);
		dialog.focus();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->

<dialog
	{id}
	{style}
	class="dialog"
	bind:this={dialog}
	on:close={() => {
		showModal = false;
		document.body.style.overflow = '';
	}}
	on:click|self={() => dialog.close()}
	use:colorContrastCheck
	on:keydown={handleKeyDown}
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
			className={closeButtonClassName}
		></Button>
	</div>
</dialog>

<style>
	:global(.dialog) {
		background-color: aqua;
		height: 300px;
		width: 500px;
		border-radius: 5px;
		border-color: black;
		border-width: 2px;
	}
	:global(.closeModalButton) {
		position: relative;
		margin-right: 100;
		font-size: small;
	}
</style>
