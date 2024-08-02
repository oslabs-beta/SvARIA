<script lang="ts">
	import { createToggle, parentColorContrastCheck, colorContrastCheck } from '$lib/index.js';
	import type { Toggle } from '../types.js';
	let toggle: Toggle = createToggle(true);
	let isOpen: boolean;
	export let message: string = 'Your toast message here';
	export let containerClass: string = 'absolute top-40';
	export let toastContainerId: string = '';
	export let toastClass: string = `flex justify-between items-center w-full max-w-xs p-4 text-white bg-gray-800 rounded-lg shadow dark:text-gray-500 dark:bg-white`;
	export let messageClass: string = 'ms-3 text-sm font-normal';
	export let toastId: string = 'toastId';
	export let autoShutDown: number = 0;
	toggle.subscribe((value) => {
		isOpen = value;
	});
	if (autoShutDown > 0) {
		setTimeout(toggle.close, autoShutDown);
	}
</script>

{#if isOpen}
	<div class={containerClass} id={toastContainerId}>
		<div
			id={toastId}
			class={toastClass}
			role="alert"
			use:parentColorContrastCheck
			use:colorContrastCheck
		>
			<div class={messageClass}>{message}</div>

			<button
				type="button"
				class="ms-auto -mx-1.5 -my-1.5 bg-inherite text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-inherite dark:hover:bg-gray-700"
				data-dismiss-target="#toast-default"
				aria-label="Close"
				on:click={toggle.close}
			>
				<span class="sr-only">Close</span>
				<svg
					class="w-3 h-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
					/>
				</svg>
			</button>
		</div>
	</div>
{/if}
