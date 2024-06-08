<script>
	import Button from '$lib/Button.svelte';
	function handleClick() {
		alert('button clicked');
	}
</script>

<Button
	id=''
	content="Click"
	on:click={handleClick}
	className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
	ariaLabel="clickMeButton"
/>