<script lang='ts'>
	import { ariaLabelcheck, colorContrastCheck } from '../ARIAChecks.js';
	import type { CheckboxObj } from '../../types.ts'

	export let options: CheckboxObj[] = [];
	export let ariaLabel: string = 'checkbox';
	export let id: string|undefined = '';
	export let style: string|undefined = '';
	export let className: string|undefined = 'checkbox-group';
	export let selectedOption: string[]|undefined = [];
	export let groupInputClass: string|undefined = ''
	export let groupInputStyle: string|undefined = ''
	export let groupLabelClass : string | undefined = ''
	export let groupLabelStyle : string | undefined = ''

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
		<label class={option.labelClass ? option.labelClass : groupLabelClass} id={option.labelId} style={option.labelStyle ? option.labelStyle : groupLabelStyle} use:colorContrastCheck>
			<input
				type="checkbox"
				bind:group={selectedOption}
				value={option.label}
				id={`checkbox-` + index}
				aria-checked={selectedOption.includes(option.label)}
				class={option.inputClass ? option.inputClass : groupInputClass}
				style={option.inputStyle ? option.inputStyle : groupInputStyle}
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
