<script>
	import { ariaLabelcheck, colorContrastCheck } from './ARIAchecks.js';
	export let content = 'Hi';
	export let ariaLabel;
	export let id;
	export let style = '';
	export let className = 'bg-black text-white text-bold hover:bg-gray-700';
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
