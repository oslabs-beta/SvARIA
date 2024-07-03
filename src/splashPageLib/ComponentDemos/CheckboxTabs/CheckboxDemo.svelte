<script lang='ts'>
	import type { CheckboxObj } from '../../../types.ts'
	import Checkbox from '$lib/input_types/Checkbox.svelte';

	let checkboxOptions: CheckboxObj[] = [
		{ label: 'Subscribe for updates', inputClass: 'w-5 h-5 accent-emerald-500/25' },
		{ label: 'Subscribe to listserv', inputClass: 'w-5 h-5 accent-emerald-500/25' },
		{ label: 'Subscribe to newsletter', inputClass: 'w-5 h-5 accent-emerald-500/25' }
	];
	let selectedOption: string[]|undefined;
	$: console.log(`selected option: ${selectedOption}`);
</script>

<Checkbox
	options={checkboxOptions}
	bind:selectedOption
	id="checkbox"
	ariaLabel="checkbox options"
/>
