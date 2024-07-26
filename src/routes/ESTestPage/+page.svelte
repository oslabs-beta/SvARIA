<script>
	import { Alert, Button } from '$lib/index.js';
	import Cat from '../components/CatIcon.svelte';
	let isOpen;
	const openCustom = () => {
		isOpen = true;
	};
	const openDefault = () => {
		isOpen = true;
	};
</script>

<Button
	id="default-button"
	content="Click to see Default Alert"
	className="bg-red-100 border shadow-lg text-red-700"
	on:click={openDefault}
/>
<Button
	id="custum-button"
	on:click={openCustom}
	className="bg-yellow-100 border shadow-lg text-yellow-700"
	content="Click to see Customized Alert"
/>
<Alert
	bind:isOpen
	title="Warning"
	titleClass="text-orange-800"
	message="you pushed a button!"
	alertClass="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative w-max"
	alertId="button-push-alert"
	messageClass="italic"
>
	<Cat slot="icon" />
</Alert>
<Alert bind:isOpen />
