<script>
    import Form from "$lib/input_types/Form.svelte";

    let formElements = [
		{ name: 'question', type: 'text', labelValue: 'Tell SvARIABot the type of component you\'d like to build, and what you\'d like on it.', inputClass: 'w-full text-black' },
	];

	let answer = ""

    async function onSubmit (event) {
        event.preventDefault();
        const form = event.currentTarget
        const body = {
            question: form.question.value
        }

        const res = await fetch('/chatbot', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({question: form.question.value}),
        })
        const json = await res.json()
        answer = json.response
}
</script>


<div>
    <pre>{answer}</pre>
    <Form {formElements} on:submit={onSubmit} formClass='inline' submitButtonClass='bg-blue-500 text-white rounded-lg'/>
</div>