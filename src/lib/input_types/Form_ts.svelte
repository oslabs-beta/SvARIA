<script lang="ts">
	import { ariaLabelcheck, colorContrastCheck } from '../ARIAchecks.ts';
	import Button from '../Button_ts.svelte';
	import type { FormElementsObj } from '../../types.js';

	export let method: string = 'POST';
	export let formId: string = '';
	export let submitFormContent: string = 'Submit';
	export let submitButtonId: string = 'submit';
	export let formElements: FormElementsObj[] = [];
	export let ariaLabel: string = 'Form';
	export let formClass: string = ''
	export let formStyle: string = ''
	export let submitButtonClass: string = ''
	export let submitButtonStyle: string = ''

	$: formElements = formElements.map((row) => {
		if (!row['inputId']) {
			row['inputId'] = row['name'];
		}
		if (!row['labelId']) {
			row['labelId'] = 'label' + row['name'];
		}
		if (!row['ariaLabel']) {
			row['ariaLabel'] = row['name'];
		}
		return row;
	});
</script>

<form {method} on:submit|preventDefault id={formId} aria-label={ariaLabel} class={formClass} style={formStyle} use:ariaLabelcheck>
	{#each formElements as element}
		<label
			id={element.labelId}
			for={element.inputId}
			style={element.labelStyle}
			class={element.labelClass}
			use:ariaLabelcheck
			use:colorContrastCheck
			aria-label={element.ariaLabel}>{element.labelValue}</label
		>
		<input
			type={element.type}
			name={element.name}
			aria-label={`input box for, ${element.labelValue}`}
			id={element.inputId}
			style={element.inputStyle}
			class={element.inputClass}
			use:ariaLabelcheck
			use:colorContrastCheck
		/>
	{/each}
	<Button type="submit" ariaLabel="Submit Button" id={submitButtonId} content={submitFormContent} className={submitButtonClass} style={submitButtonStyle} />
</form>
