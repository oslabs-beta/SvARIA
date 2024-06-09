<script lang="ts">
	import { ariaLabelcheck, colorContrastCheck } from '../ARIAchecks.js';
	import Button from '../Button.svelte';
	import type { FormElementsObj } from '../../types.js';

	export let method: string = 'POST';
	export let formId: string = '';
	export let submitForm: string = 'Submit';
	export let submitButtonId: string = 'submit';
	export let formElements: FormElementsObj[] = [
		{ name: 'address', type: 'input', labelValue: 'Address' },
		{ name: 'firstName', type: 'input', labelValue: 'First Name' },
		{ name: 'password', type: 'password', labelValue: 'Password' }
	];
	export let ariaLabel: string = 'Form';
	export let labelStyle: string = '';
	export let inputStyle: string = '';
	export let labelClass: string = '';
	export let inputClass: string = '';

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

<form {method} on:submit|preventDefault id={formId} aria-label={ariaLabel} use:ariaLabelcheck>
	{#each formElements as element}
		<label
			id={element.labelId}
			for={element.inputId}
			style={labelStyle}
			class={labelClass}
			use:ariaLabelcheck
			use:colorContrastCheck
			aria-label={element.ariaLabel}>{element.labelValue}</label
		>
		<input
			type={element.type}
			name={element.name}
			aria-label={`input box for, ${element.labelValue}`}
			id={element.inputId}
			style={inputStyle}
			class={inputClass}
			use:ariaLabelcheck
			use:colorContrastCheck
		/>
	{/each}
	<Button type="submit" ariaLabel="Submit Button" id={submitButtonId} content={submitForm} />
</form>
