<script lang='ts'>
    import { ariaLabelcheck, colorContrastCheck } from './ARIAChecks.js'
    import type { RadioObj } from '../types.ts'
	export let options: RadioObj[];
	export let id: string|undefined = '';
    export let ariaLabel: string|undefined;
	export let className: string|undefined;
	export let style: string|undefined;
    export let groupStyle: string|undefined = '';
	export let groupLabelClass: string|undefined = '';
	export let groupInputClass: string|undefined = '';
	export let groupInputStyle: string|undefined = '';

	export let selectedOption: string = '';

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
		<label
			class={option.labelClass ? option.labelClass : groupLabelClass}
			id={option.labelId}
			style={option.labelStyle ? option.labelStyle : groupStyle}
		>
			<input
				type="radio"
				bind:group={selectedOption}
				value={option.label}
				id={`radio-` + index}
				aria-checked={selectedOption === option.label}
                class={option.inputClass ? option.inputClass : groupInputClass}
				style={option.inputStyle ? option.inputStyle : groupInputStyle}
                aria-labelledby={option.labelId}
			/>
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
