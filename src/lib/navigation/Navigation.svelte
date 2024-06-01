<script lang="js">
	import { colorContrastCheck, ariaLabelcheck } from '../ARIAchecks.js';
	export let heading = null;
	export let routes = null;
	export let id = 'navBar';
	export let style;
	export let linkStyle;
	export let containerStyle;
</script>

<div
	role="navigation"
	class="sv-navagation"
	aria-label={heading}
	{id}
	{style}
	{heading}
	{routes}
	use:colorContrastCheck
	use:ariaLabelcheck
>
	<div
		aria-label="container"
		class="sv-nav-heading-container"
		id={id + '-container'}
		style={containerStyle}
	>
		{#if heading}
			<h2 use:colorContrastCheck>
				{heading}
			</h2>
		{/if}
		<slot></slot>
	</div>
	{#if routes}
		<ul class="sv-nav-ul" id={id + '-ul'} style>
			{#each routes as linkElem, i}
				<a
					href={linkElem.herf}
					class="sv-nav-link"
					id={id + '-link-' + i}
					aria-label={`link to ${linkElem.name}`}
					{linkStyle}
				>
					{linkElem.name}
				</a>
			{/each}
		</ul>
	{/if}
</div>

<style>
	:global(.sv-navagation) {
		background-color: rgb(60, 59, 59);
		display: flex;
		justify-content: space-between;
		color: white;
	}
</style>
