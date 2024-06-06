<!--
=> X open switch
=>  handle click for open // button or tab? => maybe if heading is present style to button so that it is off the the side?
=> X heading
=> X start open or closed property for each heading
=> X slots for content each heading
=> !!! class, style, id for each level
=> !!!! run tests at each level
=> import the slide transition from svelte
=> keyboard nav
-->

<script>
	import { ariaLabelcheck, colorContrastCheck } from './ARIAchecks.js';
	export let heading = 'svARIA accordion component';
	export let open = false;
	const handleClick = () => {
		open = !open;
	};
	export let accordClass = 'accordClass';
	export let accordId = ' ';
	export let headingContainerClass = 'flex items-center justify-between w-full';
	export let headingClass = 'flex items-center justify-between w-full';
	export let headingId = ' ';
	export let buttonClass = 'bg-gray-700 text-white hover:bg-gray-500 rounded-none w-full';
	export let buttonId = ' ';
	export let contentContainerClass = 'bg-gray-200';
	export let contentContainerId = ' ';
</script>

<!-- THIS IS MY CONTANER FOR THE ACCORDIAN: -->
<div class={accordClass} id={accordId}>
	<!-- THIS IS THE CONTAINER FOR THE HEADING: -->
	<div id={headingId}>
		<!-- <span use:ariaLabelcheck use:colorContrastCheck> {heading} </span> -->
		<button
			aria-controls={contentContainerId}
			aria-expanded={open}
			use:ariaLabelcheck
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
				{:else}
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
		<div
			role="region"
			class={contentContainerClass}
			id={contentContainerId}
			aria-labelledby={buttonId}
		>
			<!-- THIS IS THE CONTAINER FOR THE CONTENT: -->
			<slot name="content"></slot>
		</div>
	{/if}
</div>

<!-- ARIA source => https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/#javascriptandcsssourcecode -->
