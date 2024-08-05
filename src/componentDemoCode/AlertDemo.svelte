<script>
	import { Alert, Button, createToggle } from 'svaria-toolkit';
	import Cat from '../components/CatIcon.svelte';
	const openCustomAlert = createToggle();
	const openCustom = () => {
		openCustomAlert.open();
	};
</script>

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
