<script>
	import Button from '$lib/Button_ts.svelte';
	const handleClick = () => {
		console.log('click');
	};
</script>

<Button
	content="good button"
	className="bg-black text-white text-bold hover:bg-gray-700"
	id="good"
	on:click={handleClick}
/>
<Button
	content="bad button "
	className="bg-white text-yellow-700 text-bold hover:bg-gray-700"
	id="bad"
	on:click={handleClick}
/>
<Button
	content="okay button "
	className="bg-blue-700 text-white text-bold"
	id="ok"
	on:click={handleClick}
/>
