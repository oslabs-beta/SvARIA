<script>
	import Editor from '../../Editor.svelte';
	import Preview from '../../Preview.svelte';
	import Button from '$lib/Button.svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { compile } from 'svelte/compiler';
	import { create_ssr_component, validate_component } from 'svelte/internal';

	let htmlCodeStore = writable('');
	onMount(() => {
		// Initial HTML code example
		htmlCodeStore.set(`
      <h1>Hello, Sandbox!</h1>
      <p>Below is a custom button:</p>
      <script>
        const val = 3;
        val + 2;
        alert('Hello');
        console.log(val);
     <\/script>
    `);
	});

	let code;

	function updatePreview(code) {
		htmlCodeStore.set(code);
		// const { js, css, ast, warnings, vars, stats } = compile(code, {
		// 	generate: 'dom'
		// });
		// console.log('js is: ', js);
		// console.log('css is: ', css);
		// console.log('trying to evaluate: ', js['code']);
		// //eval(js["code"])
		// runCode();
		// //eval(code);
	}

	function runCode() {
		const val = 3;

		const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
			val + 2;
			alert('Hello');
			console.log(val);
			return `<h1>Hello, Sandbox!</h1> <p>Below is a custom button:</p>`;
		});
		const { head, html, css } = Component.render();
		console.log('the rendered html is: ', html);
		htmlCodeStore.set(html);
	}
</script>

<main>
	<div class="editor">
		<Editor code={$htmlCodeStore} {updatePreview} />
	</div>

	<div class="preview-pane">
		<Preview htmlCode={$htmlCodeStore} />
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: space-between;
		height: 100vh;
	}

	.editor {
		flex: 2;
		height: 100%;
	}

	.preview-pane {
		flex: 1;
		height: 100%;
		overflow-y: auto;
	}
</style>
