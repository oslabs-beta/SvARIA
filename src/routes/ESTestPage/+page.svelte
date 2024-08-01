<script>
	import ToastDocs from '../components/lib/ToastDocs.svelte';
	import { Toast } from '$lib/index.js';
</script>

<Toast
	toastClass="left-0 flex items-center w-full max-w-xs p-4 text-white bg-gray-800 rounded-lg shadow dark:text-gray-500 dark:bg-white"
	message="add a custom toast message"
	messageClass="ms-3 text-sm font-normal"
	toastId="toastId"
	toastContainerId="toastPosition"
	containerClass="abosolute top-50 left-50"
	autoShutDown="2000"
/>

<ToastDocs />
