<script lang="js">
	import { colorContrastCheck, ariaLabelcheck } from '../ARIAChecks.js';
	export let ariaLabel = null;
	export let routes = null;
	export let id = 'navBar';
	export let style = '';
	export let headerContainerStyle = '';
	export let navBarClass = 'sv-navagation';
	export let navHeadingClass = '';
	export let navListClass = '';
	export let navListStyle = '';
</script>

<!-- It was previouslt aria-lable = heading but I thought ariaLabel made more sense for an aria-label variable -->

<div
	role="navigation"
	class={navBarClass}
	aria-label={ariaLabel} 
	{id}
	{style}
	use:colorContrastCheck
	use:ariaLabelcheck
>
	<div aria-label="header container" class={navHeadingClass} id={id + '-headercontainer'} style={headerContainerStyle}>
		<!-- Do we need this h2 below since we now have the slot? -->
		<!-- {#if ariaLabel}
			<h2 use:colorContrastCheck>
				{ariaLabel}
			</h2>
		{/if} -->
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
