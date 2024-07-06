<script lng='js'>
	import { ariaLabelcheck, colorContrastCheck, parentColorContrastCheck } from './ARIAChecks.js';
	
	export let content = 'This is a button';
	export let ariaLabel = content
	export let id = '';
	export let style = '';
	export let className = 'bg-black text-white text-bold hover:bg-gray-700';
	export let type = 'button';
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
