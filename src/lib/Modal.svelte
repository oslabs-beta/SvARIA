<script lang='js'>
	import { colorContrastCheck } from './ARIAchecks.js';
	import Button from './Button.svelte';

	export let showModal = false; // boolean
	export let modalId='';
	export let modalClass = 'bg-white rounded-lg shadow dark:bg-white-700 p-4 md:p-5 space-y-4'
	//export let modalClass = ''
	export let closeModalMessage = 'Close Modal';
	export let modalHeaderId = 'modalHeader';
	export let modalDescribeId = 'modalContent';
	export let contentClass = 'mb-10';
	export let contentId = 'modalContentId';
	export let closeButtonId = 'closeModalButtonId';
	export let closeButtonClass = 'bg-black text-white';
	export let closeButtonStyle = 'closeModalStyle';
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
		dialog.focus();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->

<dialog
	id={modalId}
	{style}
	bind:this={dialog}
	on:close={() => {
		showModal = false;
		document.body.style.overflow = '';
	}}
	on:click|self={() => dialog.close()}
	use:colorContrastCheck
	on:keydown={handleKeyDown}
	class={modalClass}
>
	<div
		role="dialog"
		class={contentClass}
		id={contentId}
		aria-modal="true"
		aria-labelledby={modalHeaderId}
		aria-describedby={modalDescribeId}
		on:click|stopPropagation
		on:keypress|stopPropagation
	>
		<slot name="header" />
		<slot name="content" />
		<Button
			on:click={() => {
				showModal = false;
				dialog.close();
			}}
			ariaLabel="Close Modal"
			content={closeModalMessage}
			id={closeButtonId}
			className={closeButtonClass}
			style={closeButtonStyle}
		></Button>
	</div>
</dialog>

<style>
	:global(.closeModalButton) {
		position: absolute;
		max-height: 3em;
		max-width: 3em;
		bottom: 1em;
		right: 1em;
		left: 1em;
		font-size: small;
	}
</style>
