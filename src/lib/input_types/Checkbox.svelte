<script lang="js">
	import { ariaLabelcheck, colorContrastCheck } from '../ARIAchecks.js';

	export let content =
		'Edit style and content properties to edit check box. Run test() to check for compliance';
	export let ariaLabel = `${content}, is unchecked`;
	export let labelId;
	export let inputId;
	export let labelStyle = '';
	export let inputStyle = '';
	export let inputClass = 'w-4 h-4';
	// i took out the dark more text style because we arent styling on a dark background... so its hard to test
	export let labelClass = 'ms-2 text-lg font-medium text-gray-900';

	// function for checking if its checked
	function toggleCheck(e) {
		const checked = e.target.checked;
		checked ? (ariaLabel = `${content}, is checked`) : (ariaLabel = `${content}, is unchecked`);
	}
</script>

<div>
	<input
		class={inputClass}
		type="checkbox"
		aria-label={`checkbox for, ${content}`}
		on:click={toggleCheck}
		on:click
		id={inputId}
		use:ariaLabelcheck
		style={inputStyle}
	/>

	<label
		class={labelClass}
		id={labelId}
		for="sv-checkbox"
		aria-label={ariaLabel}
		use:ariaLabelcheck={2}
		use:colorContrastCheck
		style={labelStyle}
	>
		{content}
	</label>
</div>
