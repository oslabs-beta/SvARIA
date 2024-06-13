<script>
	import { ariaLabelcheck, colorContrastCheck } from './ARIAchecks.js';

	export let options = [];
	export let ariaLabel = 'radiogroup';
	export let id = '';
	export let style = '';
	export let className = 'radio-group';
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
				type="radio"
				bind:group={selectedOption}
				value={option.label}
				id={`radio-` + index}
				aria-checked={selectedOption === option.label}
                class={option.inputClass}
				style={options.inputStyle}
                aria-labelledby={option.labelId}
			/>
			<!-- {option.label} -->
            {option.label}
		</label>
	{/each}
</div>

<style>
	.radio-group {
		display: flex;
		flex-direction: column;
	}
</style>
