<!--
	NEXT LEVEL:
	[] have functionality for if the panel cant be collapsed and aria-disabled set to true
-->

<script lang="ts">
	import { colorContrastCheck } from './ARIAchecks.js';

	export let heading: string = 'SvARIA accordion component';
	export let open: boolean = false;
	export let headingContainerClass: string = 'flex items-center justify-between w-full';
	export let headingClass: string = 'flex items-center justify-between w-full';
	export let buttonClass: string = 'bg-gray-700 text-white hover:bg-gray-500 rounded-none w-full';
	export let buttonId: string = `accordion-${heading}-id`;
	export let contentContainerClass: string = 'bg-gray-200';
	export let contentContainerId: string = `${heading}-content`;
	export let role: string = 'heading';

	const handleClick = (): void => {
		open = !open;
	};
</script>

<div>
	<button
		aria-controls={contentContainerId}
		aria-expanded={open}
		use:colorContrastCheck
		on:click={handleClick}
		class={buttonClass}
		id={buttonId}
	>
		<span class={headingContainerClass} {role}>
			<span class={headingClass}>{heading}</span>
			{#if open}
				<svg
					id="icon"
					class="w-3 h-3 rotate-0 shrink-0"
					aria-hidden="true"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5 5 1 1 5"
					/></svg
				>
			{:else}
				<svg
					id="icon"
					class="w-3 h-3 rotate-180 shrink-0"
					aria-hidden="true"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5 5 1 1 5"
					/></svg
				>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 5 5 1 1 5"
				/>
			{/if}
		</span>
	</button>
</div>

{#if open}
	<div role="region" class={contentContainerClass} id={contentContainerId}>
		<slot name="content"></slot>
	</div>
{/if}

<!-- ARIA source => https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/#javascriptandcsssourcecode -->
<!-- https://svelte.dev/repl/8391f5d6f9fb4cafbdc6de9dc24624b6?version=4.2.18 -->
