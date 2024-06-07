<script>
	import { colorContrastCheck } from './ARIAchecks.js';
	export let heading = 'svARIA accordion component';
	export let open = false;
	const handleClick = () => {
		open = !open;
	};

	export let headingContainerClass = 'flex items-center justify-between w-full';
	export let headingClass = 'flex items-center justify-between w-full';
	export let buttonClass = 'bg-gray-700 text-white hover:bg-gray-500 rounded-none w-full';
	export let buttonId = `accordion-${heading}-id`;
	export let contentContainerClass = 'bg-gray-200';
	export let contentContainerId = ' ';
</script>

<h3>
	<button
		aria-controls={contentContainerId}
		aria-expanded={open}
		use:colorContrastCheck
		on:click={handleClick}
		class={buttonClass}
		id={buttonId}
	>
		<span class={headingContainerClass}>
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
</h3>

{#if open}
	<div
		role="region"
		class={contentContainerClass}
		id={contentContainerId}
		aria-labelledby={buttonId}
	>
		<slot name="content"></slot>
	</div>
{/if}

<!-- ARIA source => https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/#javascriptandcsssourcecode -->
