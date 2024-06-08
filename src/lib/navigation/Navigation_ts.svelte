<script lang="ts">
	import { colorContrastCheck, ariaLabelcheck } from '../ARIAchecks.js';
	import type { Routes } from '../../types.ts'
	export let heading: string = null;
	export let routes: Routes[] = null;
	export let id: string = 'navBar';
	export let style: string = '';
	export let containerStyle: string = '';
	export let navListStyle: string = '';
	export let navBarClass: string = 'sv-navagation';
	export let navHeadingClass: string = '';
	export let navListClass: string = '';
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
		<slot></slot>
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
