<script>
	import { ariaLabelcheck, colorContrastCheck } from './ARIAchecks.js';
	export let content = 'Hi';
	export let ariaLabel;
	export let id;
	export let style = '';
	export let className = 'button';
	export let type = '';
</script>

<button
	use:ariaLabelcheck={2}
	use:colorContrastCheck
	{id}
	aria-label={ariaLabel}
	class={className}
	on:click
	{style}
	{type}>{content}</button
>

<style>
	:global(.button) {
		color: #373636;
		font-size: 20%;
		background-color: #e6e6e6;
		width: 100px;
		border-radius: 5px;
		border-width: 2px;
		border-color: #b6b4b4;
		font-size: small;
		padding: 0.5em 0.5em 0.5em 0.5em;
	}
	:global(.button:hover) {
		background-color: #b6b4b4;
	}
</style>
