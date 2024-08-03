<script>
	import Checkbox from 'svaria-toolkit';

	let options = [
		{ label: 'Subscribe for updates', labelClass: 'text-green-600 text-md' },
		{ label: 'Subscribe to listserv', labelClass: 'accent-pink-500', labelId: 'listserv'},
		{ label: 'Subscribe to newsletter', inputClass: 'cursor-pointer w-5 h-5'}
	];
	let selectedOption;
	$: console.log(`selected option: ${selectedOption}`);
</script>

<Checkbox
	{options}
	bind:selectedOption
	id="checkbox"
	ariaLabel="checkbox options"
	className="flex flex-col"
	groupInputClass = 'w-5 h-5'
	groupLabelClass = 'text-lg'
/>

