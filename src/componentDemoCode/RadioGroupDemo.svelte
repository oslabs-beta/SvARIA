<script lang="ts">
	import RadioGroup from '$lib/RadioGroup_ts.svelte';

	let radioGroupOptions = [
		{
			label: 'Button',
			labelClass: 'ms-2 text-2xl font-medium text-gray-900 dark:text-gray-200',
			inputClass:
				'w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 accent-emerald-500/25'
		},
		{
			label: 'NavBar',
			labelClass: 'ms-2 text-2xl font-medium text-gray-900 dark:text-gray-200',
			inputClass:
				'w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 accent-emerald-500/25'
		},
		{
			label: 'Modal',
			labelClass: 'ms-2 text-2xl font-medium text-gray-900 dark:text-gray-200',
			inputClass:
				'w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 accent-emerald-500/25'
		}
	];
	let selectedOption;
	$: console.log('selected option', selectedOption);
</script>

<RadioGroup
	options={radioGroupOptions}
	bind:selectedOption
	id="radio"
	ariaLabel="Radio Selector"
	className="flex flex-col items-start mb-4 mx-96"
/>
