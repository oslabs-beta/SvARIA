<script>
    import Form from "$lib/input_types/Form.svelte";

    let components = ['Accordion', 'Accordion Group', 'Button', 'Checkbox', 'Menu', 'Modal', 'Popover', 'Progress Bar', 'Radio Group', 'Switch', 'Tab', 'Tree']

    let formElements = [
		{ name: 'question', type: 'text', labelValue: 'Enter question here', inputClass: 'w-full text-black' },
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
    <!-- <Form {formElements} on:submit={onSubmit} submitButtonClass='bg-blue-500 text-white rounded-lg'/> -->
    <h3>Select which component you'd like to build from the dropdown below!</h3>
    <select name="components" id="components">
        {#each components as comp}
        <option value={comp}>{comp}</option>
        {/each}
    </select>
</div>