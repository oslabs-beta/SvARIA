<script>
	import Modal from 'svaria-toolkit';
	import Button from 'svaria-toolkit';
	import { colorContrastCheck } from '$lib/ARIAChecks.js';

	let showModal;
</script>

<Button
	id="openModal"
	on:click={() => (showModal = true)}
	content="Open Modal"
	ariaLabel="Open Modal"
	className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
/>

<Modal
	bind:showModal
	modalId="dialog"
	modalClass="bg-white text-black rounded-lg shadow dark:bg-gray-700 dark:text-white p-4 md:p-5 space-y-4"
	modalHeaderId="header"
	modalDescribeId="content"
	closeModalMessage="X"
	closeButtonId="close"
	closeButtonClass="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
>
	<h3
		id="modalHeader"
		class="text-xl font-semibold text-gray-900 dark:text-white"
		slot="header"
		use:colorContrastCheck
	>
		Modal Opened
	</h3>
	<div slot="content">
		<p
			id="dialoginfo"
			class="text-base text-lg leading-relaxed text-gray-500 dark:text-white"
			use:colorContrastCheck
		>
			You have successfully opened the modal
		</p>
		<p
			id="dialoginfo"
			class="text-base text-lg leading-relaxed text-red-500 dark:text-red-400"
			use:colorContrastCheck
		>
			Now you can close the modal below
		</p>
	</div>
</Modal>
