<script lang="ts">
	import type { FormElementsObj } from '../../../types.js';
	import Form from '$lib/input_types/Form.svelte';

	let elements: FormElementsObj[] = [
		{
			name: 'username',
			type: 'input',
			labelValue: 'Username',
			labelClass: 'block mb-2 text-sm font-medium text-gray-900 dark:text-white',
            inputClass: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
		},
		{
			name: 'password',
			type: 'password',
			labelValue: 'New Password',
			inputId: 'passwordInput',
			labelId: 'passwordLabel',
			labelClass: 'block mb-2 text-sm font-medium text-gray-900 dark:text-white',
            inputClass: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
		}
	];

	function onSubmit(event: SubmitEvent) {
		event.preventDefault();
		const form = event.currentTarget as HTMLFormElement
		const username = form.username.value
		alert(`Form successfully submitted for ${username}`);
	}
</script>

<Form
	formElements = {elements}
	method = 'POST'
	on:submit={onSubmit}
	submitFormContent="Submit"
	submitButtonId="submitButton"
	formId="form"
	ariaLabel="Username and password form"
	formClass="flex flex-wrap -mx-3 mb-6-center"
	submitButtonClass="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
/>

