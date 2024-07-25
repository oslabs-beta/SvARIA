<script lang="ts">
	let isOpen: boolean = true;
	export let message: string = 'Your toast message here';
	export let containerClass: string = 'absolute top-40';
	export let containerId: string = 'alertContainerId';
	export let toastClass: string = ` left-0 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`;
	export let messageClass: string = 'ms-3 text-sm font-normal';
	export let toastId: string = 'toastId';
	export let messageId: string = 'messageId';
	export let autoShutDown: number = 0;
	const close = () => {
		isOpen = false;
	};
	if (autoShutDown > 0) {
		setTimeout(close, autoShutDown);
	}
</script>

{#if isOpen}
	<div id={containerId} class={containerClass}>
		<div id={toastId} class={toastClass} role="alert">
			<div class={messageClass} id={messageId}>{message}</div>

			<button
				type="button"
				class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
				data-dismiss-target="#toast-default"
				aria-label="Close"
				on:click={close}
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
