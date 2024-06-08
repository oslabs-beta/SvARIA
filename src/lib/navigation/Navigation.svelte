<script lang="js">
	import { colorContrastCheck, ariaLabelcheck } from '../ARIAchecks.js';
	export let heading = null;
	export let routes = null;
	export let id = 'navBar';
	export let style = '';
	export let containerStyle = '';
	export let navListStyle = '';
	export let navBarClass = 'sv-navagation';
	export let navHeadingClass = '';
	export let navListClass = '';
</script>

<div
	role="navigation"
	class={navBarClass}
	aria-label={heading}
	{id}
	{style}
	use:colorContrastCheck
	use:ariaLabelcheck
>
	<div aria-label="container" class={navHeadingClass} id={id + '-container'} style={containerStyle}>
		{#if heading}
			<h2 use:colorContrastCheck>
				{heading}
			</h2>
		{/if}
		<slot name="headingPlus"></slot>
	</div>
	{#if routes}
		<ul class={navListClass} id={id + '-ul'} style={navListStyle}>
			{#each routes as linkElem, i}
				<a
					href={linkElem.href}
					class={linkElem.linkClass}
					id={id + '-link-' + i}
					aria-label={`link to ${linkElem.name}`}
					style={linkElem.linkStyle}
					use:colorContrastCheck
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
