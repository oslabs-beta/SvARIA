<script>
	import { Form } from 'svaria-toolkit';

	let formElements = [
		{
			name: 'username',
			type: 'input',
			labelValue: 'Username',
			inputClass: 'mx-4 bg-gray-500 border rounded-lg block w-full p-2.5'
		},
		{
			name: 'password',
			type: 'password',
			labelValue: 'New Password',
			inputId: 'passwordInput',
			labelId: 'passwordLabel',
			labelClass: 'block mx-4 text-lg',
		}
	];

	function onSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget 
		const username = form.username.value
		alert(`Form successfully submitted for ${username}`);
	}
</script>

<Form
	{formElements}
	method = 'POST'
	on:submit={onSubmit}
	submitFormContent="Submit"
	submitButtonId="submitButton"
	formId="form"
	ariaLabel="Username and password form"
	formClass="flex flex-wrap -mx-3 mb-6-center"
	submitButtonClass="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
	groupLabelClass = 'block mx-4 text-sm'
	groupInputClass = 'mx-4 bg-gray-50 border rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black'
/>

