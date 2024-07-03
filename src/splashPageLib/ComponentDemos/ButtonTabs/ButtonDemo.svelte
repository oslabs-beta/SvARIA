<script lang='ts'>
	import Button from '$lib/Button_ts.svelte';
	function handleClick(): void {
		alert('button clicked');
	}
</script>

<Button
	content="Click"
	on:click={handleClick}
	className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
	ariaLabel="clickMeButton"
	id='demobutton'
/>