<script>
	import Checkbox from '$lib/input_types/Checkbox.svelte';

    function handleCheck() {
        alert('checkbox clicked')
    }
</script>

<Checkbox
	inputId="updatesCheckboxInput"
	labelId="updatesCheckboxLabel"
    inputClass = 'w-5 h-5 accent-emerald-500/25'
    labelClass = 'ms-2 text-lg font-medium text-gray-900 dark:text-white'
	content="Please select for updates"
    on:click={handleCheck}
/>

<!-- inputStyle='accent-color:purple' -->
<!-- labelStyle='color:orange' -->


