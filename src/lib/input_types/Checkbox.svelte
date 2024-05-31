<script lang="js">
	import { ariaLabelcheck, colorContrastCheck } from '../ARIAchecks.js';

	export let content =
		'Edit style and content properties to edit check box. Run test() to check for compliance';
	export let ariaLabel = `${content}, is unchecked`;
	export let labelId;
	export let inputId;
	export let labelStyle = '';
	export let inputStyle = '';

	// function for checking if its checked
	function toggleCheck(e) {
		const checked = e.target.checked;
		checked ? (ariaLabel = `${content}, is checked`) : (ariaLabel = `${content}, is unchecked`);
	}
</script>

<input
	class="sv-checkbox"
	type="checkbox"
	aria-label={`checkbox for, ${content}`}
	on:click={toggleCheck}
	on:click
	id={inputId}
	use:ariaLabelcheck
	style={inputStyle}
/>

<label
	class="sv-checkboxLabel"
	id={labelId}
	for="sv-checkbox"
	aria-label={ariaLabel}
	use:ariaLabelcheck={2}
	use:colorContrastCheck
	style={labelStyle}>{content}</label
>

<style>
	.sv-checkboxLabel {
		color: red;
		background-color: white;
	}
</style>
