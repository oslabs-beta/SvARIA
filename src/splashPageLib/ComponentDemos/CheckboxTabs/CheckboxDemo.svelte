<!-- <script>
	import Checkbox from '$lib/input_types/Checkbox.svelte';

    let checked;
    $: console.log("is checked? ", checked)
</script>

<Checkbox
	inputId="updatesCheckboxInput"
	labelId="updatesCheckboxLabel"
    inputClass = 'w-5 h-5 accent-emerald-500/25'
    labelClass = 'ms-2 text-lg font-medium text-gray-900 dark:text-white'
	content="Please select for updates"
    bind:checked
/> -->

<!-- inputStyle='accent-color:purple' -->
<!-- labelStyle='color:orange' -->

<script>
	import  Checkbox  from '$lib/input_types/Checkbox.svelte';

	let radioGroupOptions = ['Option 1', 'Option 2', 'Option 3'];
    let selectedOption;
    $: console.log("selected option", selectedOption)
</script>

<Checkbox options={radioGroupOptions} bind:selectedOption id="radio" ariaLabel="Radio Selector" />
