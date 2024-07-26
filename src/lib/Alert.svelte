<script lang="ts">
	import { colorContrastCheck, parentColorContrastCheck } from './ARIAchecks.js';
	import { toggle } from '../store/index.js';
	export let isOpen: boolean;
	export let title: string = 'Alert';
	export let message: string = 'Your alert message here';
	export let alertClass: string = 'bg-red-300 text-black px-4 py-3 rounded relative w-max';
	export let titleClass: string = 'font-bold';
	export let messageClass: string = 'block sm:inline';
	export let alertId: string = 'alertID';
	const handleClick = () => {
		isOpen = !isOpen;
	};
</script>

<div
	use:colorContrastCheck
	id={alertId}
	class={alertClass}
	role="alert"
	style="display: {isOpen ? 'block' : 'none'};"
>
	<div class="flex items-center space-x-2">
		<span><slot name="icon" /></span>
		<div class="flex-grow">
			<span class={titleClass}>{title}</span>
			<span class={messageClass}>{message}</span>
		</div>
		<slot name="close-button">
			<button
				type="button"
				class="bg-inherit text-black hover:text-gray-900 rounded-lg p-1.5 hover:bg-inherit inline-flex items-center justify-center h-8 w-8 dark:text-red-100 dark:hover:text-white dark:bg-inherit dark:hover:bg-inherit"
				data-dismiss-target="#toast-default"
				aria-label="Close"
				on:click={handleClick}
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
		</slot>
	</div>
</div>
