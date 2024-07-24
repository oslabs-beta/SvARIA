<script lang="ts">
	export let isOpen: boolean = false;
	export let title: string = 'Alert';
	export let message: string = 'Your alert message here';
	export let alertClass: string =
		'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-max';
	export let titleClass: string = 'font-bold';
	export let messageClass: string = 'block sm:inline';
	export let alertId: string = 'alertID';
	export let titleId: string = 'titleID';
	export let messageId: string = 'messageID';
	const handleClick = () => {
		isOpen = !isOpen;
	};
</script>

<div id={alertId} class={alertClass} role="alert" style="display: {isOpen ? 'block' : 'none'};">
	<slot name="icon" />
	<span class={titleClass} id={titleId}>{title}</span>
	<span class={messageClass} id={messageId}>{message}</span>
	<slot name="close-button">
		<button
			type="button"
			class=" bg-red-100 ms-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
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
