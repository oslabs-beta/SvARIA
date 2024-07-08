<script lang='ts'>
	import { ariaLabelcheck, colorContrastCheck } from '../ARIAchecks.ts';
	import type { CheckboxObj } from '../../types.ts'

	export let options: CheckboxObj[] = [];
	export let ariaLabel: string = 'checkbox';
	export let id: string = '';
	export let style: string = '';
	export let className: string = 'checkbox-group';
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
				type="checkbox"
				bind:group={selectedOption}
				value={option.label}
				id={`checkbox-` + index}
				aria-checked={selectedOption.includes(option.label)}
				class={option.inputClass}
				style={option.inputStyle}
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
