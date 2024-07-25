<script>
	import Alert from '$lib/Alert.svelte';
	import Toast from '$lib/Toast.svelte';
	import Button from '$lib/Button_ts.svelte';
	import Cat from '../components/CatIcon.svelte';
	import Modal from '$lib/Modal_ts.svelte';
	import Accordion from '$lib/Accordion.svelte';
	let isOpen;
	const handleClick = () => {
		isOpen = true;
		console.log(isOpen);
	};
</script>

<Button
	content="good button"
	className="bg-black text-white text-bold hover:bg-gray-700"
	id="good"
	on:click={handleClick}
/>
<Button
	content="bad button"
	className="bg-yellow-200 text-white text-bold hover:bg-gray-700"
	id="bad"
/>
<Toast autoShutDown="3000" />
<Toast containerClass="absolute top-60" />
<Button content="okay button" className="bg-blue-700 text-white text-bold" id="ok" />
<Alert bind:isOpen />
<!-- <Modal /> -->
