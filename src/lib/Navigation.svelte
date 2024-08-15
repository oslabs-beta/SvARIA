<script lang="ts">
	import { colorContrastCheck, ariaLabelcheck } from './ARIAchecks.js';
	import type { Routes } from '../types.js';
	export let heading: string | undefined = undefined;
	export let routes: Routes[] | undefined = undefined;
	export let id: string = 'navBar';
	export let style: string = '';
	export let headerContainerStyle: string = '';
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
	<div
		aria-label="header container"
		class={navHeadingClass}
		id={id + '-headercontainer'}
		style={headerContainerStyle}
	>
		<slot name="headingPlus"></slot>
	</div>
	{#if routes}
		<ul class={navListClass} id={id + '-ul'} style={navListStyle}>
			{#each routes as linkElem, i}
				<a
					href={linkElem.href}
					target={linkElem.target}
					class={linkElem.linkClass}
					id={id + '-link-' + i}
					aria-label={`link to ${linkElem.name}`}
					style={linkElem.linkStyle}
					on:click={linkElem.onClick}
					use:colorContrastCheck
				>
					{linkElem.name}
				</a>
			{/each}
		</ul>
	{/if}
</div>

<!-- https://svelte.dev/repl/88f0fc1e880a4903bb30148c1beb52ba?version=4.2.18 -->

<style>
	:global(.sv-navagation) {
		background-color: rgb(60, 59, 59);
		display: flex;
		justify-content: space-between;
		color: white;
	}
</style>
