<script>
	import { ariaLabelcheck, colorContrastCheck } from '../ARIAchecks.ts';

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
