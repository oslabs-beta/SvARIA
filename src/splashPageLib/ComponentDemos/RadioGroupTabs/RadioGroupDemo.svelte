<script lang="ts">
	import type { RadioObj } from '../../../types.ts';
	import RadioGroup from '$lib/RadioGroup_ts.svelte';

	let selectedOption: string|undefined; // Allows you to access the current value or set an option as selected by default
	$: console.log('selected option', selectedOption);

	let radioGroupOptions: RadioObj[] = [
		{
			label: 'Button',
			labelId: 'Button_Radio'
		},
		{
			label: 'NavBar',
			labelId: 'NavBar_Radio',
			labelClass: 'ms-2 text-2xl font-medium text-gray-900 dark:text-gray-200',
			inputClass: 'w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 accent-emerald-500/25',
			inputStyle: ''
		},
		{
			label: 'Modal',
			labelId: 'Modal_Radio',
			labelClass: 'ms-2 text-2xl font-medium text-gray-900 dark:text-gray-200',
			inputClass: 'w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 accent-emerald-500/25',
			inputStyle: ''
		}
	];

	// This array defines the options inside the Radio Group. label labelId are required.
	// label: The text that appears by the option
	// labelId: A unique id used to identify this option
	
</script>

<RadioGroup
	bind:selectedOption
	options={radioGroupOptions}
	id="radio"
	ariaLabel="Radio Selector"
	className="flex flex-col items-start mb-4 mx-96"
	style=''
	groupLabelStyle=''
	groupLabelClass='ms-2 text-2xl font-medium text-gray-900 dark:text-gray-200'
	groupInputClass='w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 accent-emerald-500/25'
	groupInputStyle=''
/>
