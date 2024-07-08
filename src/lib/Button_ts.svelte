<script lang="ts">
	import { ariaLabelcheck, colorContrastCheck, parentColorContrastCheck } from './ARIAchecks.ts';
	import type { ButtonType } from '../types.ts';
	export let content: string = 'This is a button';
	export let ariaLabel: string = content;
	export let id: string = '';
	export let style: string = '';
	export let className: string = 'bg-black text-white text-bold hover:bg-gray-700';
	export let type: ButtonType = 'button';
</script>

<button
	use:ariaLabelcheck
	use:colorContrastCheck
	use:parentColorContrastCheck
	{id}
	aria-label={ariaLabel}
	class={className}
	on:click
	{style}
	{type}>{content}</button
>