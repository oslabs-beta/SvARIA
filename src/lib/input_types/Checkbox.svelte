<!-- <script lang='js'>
	import { ariaLabelcheck, colorContrastCheck } from '../ARIAchecks.js';

	export let content =
		'Edit style and content properties to edit check box. Run test() to check for compliance';
	export let ariaLabel = `${content}, is unchecked`;
	export let labelId;
	export let inputId;
	export let labelStyle = '';
	export let inputStyle = '';
	export let checked;
	export let inputClass = 'w-4 h-4';
	// i took out the dark more text style because we arent styling on a dark background... so its hard to test
	export let labelClass = 'ms-2 text-lg font-medium text-gray-900';

	// function for checking if its checked
	function toggleCheck(e) {
		checked = e.target.checked;
		checked ? (ariaLabel = `${content}, is checked`) : (ariaLabel = `${content}, is unchecked`);
	}
	$: checked ? (ariaLabel = `${content}, is checked`) : (ariaLabel = `${content}, is unchecked`);

</script>

<div>
	<input
		class={inputClass}
		type="checkbox"s
		aria-label={`checkbox for, ${content}`}
		id={inputId}
		on:click={toggleCheck}
		use:ariaLabelcheck
		style={inputStyle}
		bind={checked}
	/>

	<label
		class={labelClass}
		id={labelId}
		for="sv-checkbox"
		aria-label={ariaLabel}
		use:ariaLabelcheck={2}
		use:colorContrastCheck
		style={labelStyle}
	>
		{content}
	</label>
</div> -->

<script>
	import { ariaLabelcheck, colorContrastCheck } from '../ARIAchecks.js';

	export let options = [];
	export let ariaLabel = 'checkbox';
	export let id = '';
	export let style = '';
	export let className = 'checkbox-group';
	export let selectedOption = [];

	$: options.map((option, index) => {
		if (!option['labelId']) {
			option['labelId'] = option.label;
		}
	});
</script>

<div
	use:ariaLabelcheck={2}
	use:colorContrastCheck
	{id}
	aria-label={ariaLabel}
	class={className}
	{style}
	{options}
>
	{#each options as option, index}
		<label class={option.labelClass} id={option.labelId} style={option.labelStyle}>
			<input
				type="checkbox"
				bind:group={selectedOption}
				value={option.label}
				id={`checkbox-` + index}
				aria-checked={selectedOption.includes(option.label)}
				class={option.inputClass}
				style={options.inputStyle}
				aria-labelledby={option.labelId}
			/>
			{option.label}
		</label>
	{/each}
</div>

<style>
	.checkbox-group {
		display: flex;
		flex-direction: column;
	}
</style>
