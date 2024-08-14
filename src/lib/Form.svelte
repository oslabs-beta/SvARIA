<script lang="ts">
	import { ariaLabelcheck, colorContrastCheck, parentColorContrastCheck } from './ARIAchecks.js';
	import Button from './Button.svelte';
	import type { FormElementsObj } from '../types.js';

	export let method: string = 'POST';
	export let formId: string = '';
	export let submitFormContent: string = 'Submit';
	export let submitButtonId: string = 'submit';
	export let formElements: FormElementsObj[] = [];
	export let ariaLabel: string = 'Form';
	export let formClass: string = '';
	export let formStyle: string = '';
	export let submitButtonClass: string =
		'bg-black text-white text-bold hover:bg-gray-700 rounded py-2 px-4 rounded';
	export let submitButtonStyle: string = '';
	export let groupLabelClass: string = 'block mx-4 text-sm font-medium text-grey-800';
	export let groupInputClass: string =
		'mx-4 bg-gray-50 border rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black';
	export let groupInputStyle: string = '';
	export let groupLabelStyle: string = '';

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

<form
	{method}
	on:submit|preventDefault
	id={formId}
	aria-label={ariaLabel}
	class={formClass}
	style={formStyle}
	use:ariaLabelcheck
>
	{#each formElements as element}
		<label
			id={element.labelId}
			for={element.inputId}
			style={element.labelStyle ? element.labelStyle : groupLabelStyle}
			class={element.labelClass ? element.labelClass : groupLabelClass}
			use:ariaLabelcheck
			use:colorContrastCheck
			aria-label={element.ariaLabel}>{element.labelValue}</label
		>
		{#if element.type === 'textarea'}
			<textarea
				name={element.name}
				aria-label={`input box for, ${element.labelValue}`}
				id={element.inputId}
				style={element.inputStyle ? element.inputStyle : groupInputStyle}
				class={element.inputClass ? element.inputClass : groupInputClass}
				use:ariaLabelcheck
				use:colorContrastCheck
			/>
		{:else}
			<input
				type={element.type}
				name={element.name}
				aria-label={`input box for, ${element.labelValue}`}
				id={element.inputId}
				style={element.inputStyle ? element.inputStyle : groupInputStyle}
				class={element.inputClass ? element.inputClass : groupInputClass}
				use:ariaLabelcheck
				use:colorContrastCheck
			/>
		{/if}
	{/each}
	<Button
		type="submit"
		ariaLabel="Submit Button"
		id={submitButtonId}
		content={submitFormContent}
		className={submitButtonClass}
		style={submitButtonStyle}
	/>
	<slot name='content'/>
</form>
