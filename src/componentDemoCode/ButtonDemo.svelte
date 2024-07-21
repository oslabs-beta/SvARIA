<script>
	import Button from '$lib/Button_ts.svelte';
	function handleClick() {
		alert('button clicked');
	}
</script>

<Button
	content="Click"
	on:click={handleClick}
	className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
	ariaLabel="clickMeButton"
	id='demobutton'
/>