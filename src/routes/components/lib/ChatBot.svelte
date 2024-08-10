<script>
	import Form from '$lib/Form.svelte';
	export let answer = '';
	let labelText =
		"Tell SvARIABot the type of component you'd like to build, and what you'd like on it.";
	let formElements;
	$: labelText =
		answer == ''
			? "Tell SvARIABot the type of component you'd like to build, and what you'd like on it."
			: '';
	$: formElements = [
		{
			name: 'question',
			type: 'textarea',
			labelValue: labelText,
			inputClass: 'w-full text-black h-16 p-2 border-black border-2',
			labelClass: 'mt-10 text-left'
		}
	];
	async function onSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const body = {
			question: form.question.value
		};

		const res = await fetch('/chatbot', {
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
			body: JSON.stringify({ question: form.question.value })
		});
		const json = await res.json();
		answer = json.response;
	}
</script>

<div>
	<pre class="text-wrap">{answer}</pre>
	<Form
		{formElements}
		on:submit={onSubmit}
		formClass="inline"
		submitButtonClass="bg-blue-500 text-white rounded-lg p-2"
	/>
</div>
