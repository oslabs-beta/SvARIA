<script lang="ts">
	import { ariaLabelcheck, colorContrastCheck, parentColorContrastCheck } from './ARIAchecks.js';
	import type { ButtonType } from '../types.ts';
	export let content: string = 'This is a button';
	export let ariaLabel: string = content;
	export let id: string = '';
	export let style: string = '';
	export let className: string = 'button';
	export let type: ButtonType = 'button';
</script>

<button
	use:ariaLabelcheck={2}
	use:colorContrastCheck
	use:parentColorContrastCheck
	{id}
	aria-label={ariaLabel}
	class={className}
	on:click
	{style}
	{type}>{content}</button
>

<style>
	:global(.button) {
		color: #570000;
		background-color: #e6e6e6;
		height: 40px;
		width: 100px;
		border-radius: 7%;
		font-size: large;
	}
</style>
