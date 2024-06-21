<script lang='ts'>
    import { ariaLabelcheck, colorContrastCheck } from './ARIAChecks.js'
    import type { RadioObj } from '../types.ts'
    export let options: RadioObj[];
    export let ariaLabel: string|undefined;
    export let id: string|undefined = '';
    export let style: string|undefined = '';
    export let className: string|undefined = 'radio-group'
    export let selectedOption: string[] = [];

    $: options.map((option, index) => {
		if (!option['labelId']) {
			option['labelId'] = option.label;
		}
	});
</script>

<div
	use:ariaLabelcheck
	use:colorContrastCheck
	{id}
	aria-label={ariaLabel}
	class={className}
	{style}
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
