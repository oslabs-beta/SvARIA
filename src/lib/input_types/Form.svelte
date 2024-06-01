<script>
	import { ariaLabelcheck, colorContrastCheck } from '../ARIAchecks.js';

	import Button from '../Button.svelte';

	export let method = 'POST';
	export let formId = '';
	export let submitForm = 'Submit';
	export let submitButtonId = 'submit';
	export let formElements = [
		{ name: 'address', type: 'input', labelValue: 'Address' },
		{ name: 'firstName', type: 'input', labelValue: 'First Name' },
		{ name: 'password', type: 'password', labelValue: 'Password' }
	];
	export let ariaLabel = 'Form';
	export let labelStyle = '';
	export let inputStyle = '';
	export let labelClass = '';
	export let inputClass = '';
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
c			aria-label={element.ariaLabel}>{element.labelValue}</label
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
