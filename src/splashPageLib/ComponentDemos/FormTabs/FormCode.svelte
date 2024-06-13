<div class='text-left text-lg'>

{'<\script>'}
	<p>&nbsp &nbsp import Form from SvARIA;</p>
	<br>
	<p>&nbsp &nbsp let elements = {'['}</p>
    <p>&nbsp &nbsp &nbsp{'{'}</p>
			<p>&nbsp &nbsp &nbsp &nbsp name: 'username',</p>
			<p>&nbsp &nbsp &nbsp &nbsp type: 'input',</p>
			<p>&nbsp &nbsp &nbsp &nbsp labelValue: 'Username',</p>
			<p>&nbsp &nbsp &nbsp &nbsp labelClass: 'block mb-2 text-sm font-medium text-gray-900 dark:text-white',</p>
            <p>&nbsp &nbsp &nbsp &nbsp inputClass: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg</p>
			<p>&nbsp &nbsp &nbsp &nbsp focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600</p> 
			<p>&nbsp &nbsp &nbsp &nbsp dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'</p>
    <p>&nbsp &nbsp {'},'}</p>
	<p>&nbsp &nbsp &nbsp {'{'}</p>
			<p>&nbsp &nbsp &nbsp &nbsp name: 'password',</p>
			<p>&nbsp &nbsp &nbsp &nbsp type: 'password',</p>
			<p>&nbsp &nbsp &nbsp &nbsp labelValue: 'New Password',</p>
			<p>&nbsp &nbsp &nbsp &nbsp inputId: 'passwordInput',</p>
			<p>&nbsp &nbsp &nbsp &nbsp labelId: 'passwordLabel',</p>
			<p>&nbsp &nbsp &nbsp &nbsp labelClass: 'block mb-2 text-sm font-medium text-gray-900 dark:text-white',</p>
            <p>&nbsp &nbsp &nbsp &nbsp inputClass: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg</p> 
			<p>&nbsp &nbsp &nbsp &nbsp focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600</p>
			<p>&nbsp &nbsp &nbsp &nbsp dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'</p>
    <p>&nbsp &nbsp &nbsp {'}'}</p>
	<p>&nbsp &nbsp {'];'}</p>
	<br>
	<p>&nbsp &nbsp {'function onSubmit(e) {'}</p>
		<p>&nbsp &nbsp &nbsp &nbsp {'alert(`Form successfully submitted for ${e.target.username.value}`)'}</p>
	<p>&nbsp &nbsp {'}'}</p>
<br>
{'</script>'}
<br>
<br>
<p>{'<Form'}</p>
	<p>&nbsp &nbsp {'formElements={elements}'}</p>
	<p>&nbsp &nbsp method = 'POST'</p>
	<p>&nbsp &nbsp {'on:submit={onSubmit}}'}</p>
	<p>&nbsp &nbsp submitFormContent='Submit'</p>
	<p>&nbsp &nbsp submitButtonId='submitButton'</p>
	<p>&nbsp &nbsp formId='form'</p>
	<p>&nbsp &nbsp ariaLabel='Username and password form'</p>
	<p>&nbsp &nbsp formClass='flex flex-wrap -mx-3 mb-6-center'</p>
	<p>&nbsp &nbsp submitButtonClass='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300</p> 
	<p>&nbsp &nbsp &nbsp font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700</p>
	<p>&nbsp &nbsp &nbsp dark:focus:ring-gray-700 dark:border-gray-700'</p>
<p>{'/>'}</p>
	<br>
    <p>
        {'<!--'} The form also has a 'formStyle' property and a 'submitButtonStyle property so can set in-line CSS styling if preferred e.g. formStyle='color:
        white; background-color:black' {'-->'}
    </p>
	<br>
	<p>
        {'<!--'} labelId, labelStyle, labelClass, inputId, inputStyle and inputClass can also be passed into the individual objects in the formElements array {'-->'}
    </p>
	<br>
	<p>
        {'<!--'} If {'<style></style>'} tags are being used instead, the id or class must be declared globally as below: {'-->'}
    </p>

	<div>
        <p>{'<style>'}</p>
            <p>&nbsp &nbsp {':global(#form) {'}</p>
            <p>&nbsp &nbsp {'color: white;'}</p>
            <p>&nbsp &nbsp {'background-color: black;'}</p>
        <p>{'<\/style>'}</p>
    </div>
</div>


