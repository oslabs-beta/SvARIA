<script>
	import  RadioGroup  from '$lib/RadioGroup.svelte';

	let radioGroupOptions = ['Option 1', 'Option 2', 'Option 3'];
    let selectedOption;
    $: console.log("selected option", selectedOption)
</script>

<RadioGroup options={radioGroupOptions} bind:selectedOption id="radio" ariaLabel="Radio Selector" />