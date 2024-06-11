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
	import Checkbox from '$lib/input_types/Checkbox.svelte';

	let checkboxOptions = [
		{ label: 'Subscribe for updates', inputClass: 'w-5 h-5 accent-emerald-500/25' },
		{ label: 'Subscribe to listserv', inputClass: 'w-5 h-5 accent-emerald-500/25' },
		{ label: 'Subscribe to newsletter', inputClass: 'w-5 h-5 accent-emerald-500/25' }
	];
	let selectedOption;
	$: console.log(`selected option: ${selectedOption}`);
</script>

<Checkbox
	options={checkboxOptions}
	bind:selectedOption
	id="checkbox"
	ariaLabel="checkbox options"
/>
