<script>
	import { ariaLabelcheck, colorContrastCheck } from './ARIAchecks.js';

	export let content = 'Hi';
	export let ariaLabel;
	export let id;
	export let style = '';
	export let className = 'button';
</script>

<button
	use:ariaLabelcheck={2}
	use:colorContrastCheck
	{id}
	aria-label={ariaLabel}
	class={className}
	on:click
	{style}>{content}</button
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
