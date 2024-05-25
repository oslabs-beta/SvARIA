<!-- use this page to test out components with URL "/testPage" -->

<script>
	import Button from '../../lib/Button.svelte'
	function handleClick() {
		console.log('button clicked')
	}
	let ID = 'five'
	let className = "button2"
</script>

<style>
	:global(#five) { 
		color: white;
		background-color: black;
	}
</style>

<!-- <h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<div class='testDiv'>
    <!-- your component goes here -->
    <Button id={ID} ariaLabel='test aria label' on:click={handleClick}></Button>
</div>