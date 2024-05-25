<script lang="js">
	export let content =
		'Edit style and content properties to edit check box. Run test() to check for compliance';
	export let labelContent = `${content}, is unchecked`;
	// function for checking if its checked
	function toggleCheck(e) {
		const checked = e.target.checked;
		checked
			? (labelContent = `${content}, is checked`)
			: (labelContent = `${content}, is unchecked`);
	}
</script>

<input
	class="sv-checkbox"
	type="checkbox"
	aria-label={`checkbox for, ${content}`}
	style=""
	on:click={toggleCheck}
	on:click
/>

<label for="sv-checkbox" aria-label={labelContent}>{content}</label>

<style></style>
