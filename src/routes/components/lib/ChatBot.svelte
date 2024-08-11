<script>
	import Form from '$lib/Form.svelte';
	import { Circle } from 'svelte-loading-spinners';


	export let answer = '';
	let navigating = false;

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
			inputClass: 'w-full text-black h-16 p-2 border-black border-2 col-span-5',
			labelClass: 'mt-1 text-left col-span-5'
		}
	];
	async function onSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const body = {
			question: form.question.value
		};
		navigating = true;
		const res = await fetch('/chatbot', {
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
			body: JSON.stringify({ question: form.question.value })
		});
		const json = await res.json();
		navigating = false;
		answer = json.response;
	}
</script>

<div>
	<pre class="text-wrap">{answer}</pre>
	<Form
		{formElements}
		on:submit={onSubmit}
		formClass="inline grid grid-cols-5 gap-4"
		submitButtonClass="bg-blue-500 text-white rounded-lg p-2 col-span-2"
	>
		<div slot="content" class="col-start-5">
			{#if navigating}
				<Circle size="28" class="" color="light-dark(#c2410c, #fed7aa)" unit="px" duration="1s" />
			{/if}
		</div>
	</Form>
</div>
