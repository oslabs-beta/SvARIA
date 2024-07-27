<script>
	import { Alert, Button, createToggle } from '$lib/index.js';
	import Cat from '../components/CatIcon.svelte';
	const openDefaultAlert = createToggle();
	const openCustomAlert = createToggle();
	const openCustom = () => {
		openCustomAlert.open();
	};
	const openDefault = () => {
		openDefaultAlert.open();
	};
</script>

<Button
	id="default-button"
	content="Click to see Default Alert"
	className="bg-red-300 border shadow-lg text-red-900"
	on:click={openDefault}
/>
<Button
	id="costum-button"
	on:click={openCustom}
	className="bg-yellow-300 border shadow-lg text-yellow-900"
	content="Click to see Customized Alert"
/>
<Alert
	toggle={openCustomAlert}
	title="Warning"
	titleClass="text-black"
	message="you pushed a button!"
	alertClass="bg-yellow-300 border shadow-lg text-yellow-900 px-4 py-3 rounded relative w-max"
	alertId="button-push-alert"
	messageClass="italic"
>
	<Cat slot="icon" />
</Alert>
<Alert isOpen={openDefaultAlert} />
