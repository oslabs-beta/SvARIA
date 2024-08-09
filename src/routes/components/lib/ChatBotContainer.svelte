<!-- use this page to test out components with URL "/testPage" -->

<script>

	import Popover from './ChatBotPopover.svelte'
	import ChatBot from './ChatBot.svelte';


	let formElements = [
		{ name: 'question', type: 'text', labelValue: 'Enter question here', inputClass: 'w-full' },
	];

	let answer = ""

		async function onSubmit (event) {
		event.preventDefault();
		const form = event.currentTarget
		const body = {
		question: form.question.value
	}

	const res = await fetch('/chatbot', {
		headers: {'Content-Type': 'application/json'},
		method: 'POST',
		body: JSON.stringify({question: form.question.value}),
	})

	// const res = await fetch('http://localhost:3000/chatbot')
	const json = await res.json()
	answer = json.response
	}

</script>

<div class="fixed bottom-4 right-4 z-50">
	<Popover closeButtonClass='fixed right-6 bg-black text-white' openButtonClass='bg-sky-950 text-white'openButtonContent="Build with SvARIA Bot" openButtonAriaLabel="Build Components with SvARIA Bot" popoverId="chatbot">
		<div slot='header'>
			<h3>SvARIA Bot</h3>
		</div>
		<div slot='content'>
			<ChatBot/>
		</div>
	</Popover>
</div>

