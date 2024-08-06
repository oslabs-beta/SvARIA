<script lang="ts">
	import { ariaLabelcheck, colorContrastCheck } from '$lib/ARIAchecks.js';
	import type { FormElementsObj } from '../types.js';

	export let method: string = 'POST';
	export let formId: string = '';
	// export let submitFormContent: string = 'Submit';
	// export let submitButtonId: string = 'submit';
	export let formElements: FormElementsObj[] = [];
	export let ariaLabel: string = 'Form';
	export let formClass: string = ''
	export let formStyle: string = ''
	// export let submitButtonClass: string = ''
	// export let submitButtonStyle: string = ''

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

	// async function formSubmit(e){
	function formSubmit(e){
		e.preventDefault();
		const first_Name = firstName.value.trim();
		const last_Name = lastName.value.trim();
		const email_ = email.value.trim();

		// const formData = {
		// 	firstName: first_Name,
		// 	lastName: last_Name,
		// 	email:email_
		// }

		// const queryParams = new URLSearchParams(formData).toString();

		try {
			const response =  fetch ('http://localhost:3000/user', {
				method:'POST',
				headers: {'Content-Type': 'application/json'},
				body : JSON.stringify({
					first_Name,
					last_Name,
					email_
      			})
			})
			.then(response => {
				if(response.ok){
					const result =  response.json()
					console.log('success:', result)
				} else {
					console.error('error:', response.statusText)
				}
			});
		}
		catch (error){
			console.log(error)
		}
	};
</script>

<form {method} on:submit={formSubmit} id={formId} aria-label={ariaLabel} class={formClass} style={formStyle} use:ariaLabelcheck>
	<div style='display:flex'>
		{#each formElements as element, index}
		{#if index < 2}
			<div style='display:flex flex-direction:column width:10%'>
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
				type='input'
				name={element.name}
				aria-label={`input box for, ${element.labelValue}`}
				id={element.inputId}
				style={element.inputStyle}
				class={element.inputClass}
				bind:value={element.labelId}
				use:ariaLabelcheck
				use:colorContrastCheck
				/>
			</div>
		{/if}
		{/each}
	</div>
	<div style='display:flex width:100%'>

	{#each formElements as element, index}
	{#if index === 2}
		<div style='display:flex flex-direction:column width:5px'>
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
				type='input'
				name={element.name}
				aria-label={`input box for, ${element.labelValue}`}
				id={element.inputId}
				style={element.inputStyle}
				class={element.inputClass}
				bind:value={element.labelId}
				use:ariaLabelcheck
				use:colorContrastCheck
			/>
		</div>
	{/if}
	{/each}
	</div>
	
	<button style='font-size:.4em ' >
		Submit
	</button>
</form>
