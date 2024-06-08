<script>
	import { ariaLabelcheck, colorContrastCheck } from '../ARIAchecks.js';

	import Button from '../Button.svelte';

	export let method = 'POST';
	export let formId = '';
	export let submitFormContent = 'Submit';
	export let formElements = [];
	export let ariaLabel = 'Form';
	export let formClass = ''
	export let formStyle = ''
	export let submitButtonId = 'submit';
	export let submitButtonClass = ''
	export let submitButtonStyle = ''


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
c			aria-label={element.ariaLabel}>{element.labelValue}</label
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
