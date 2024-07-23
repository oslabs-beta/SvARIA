<script lang="ts">
	export let isOpen: boolean = false;
	export let title: string = 'Alert';
	export let message: string = 'Your alert message here';
	export let alertClass: string =
		'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-auto';
	export let titleClass: string = 'font-bold';
	export let messageClass: string = 'block sm:inline';
	export let alertId: string = 'alertID';
	export let titleId: string = 'titleID';
	export let messageId: string = 'messageID';
</script>

<!-- 'HTMLDivElement' -->
<div id={alertId} class={alertClass} role="alert" style="display: {isOpen ? 'block' : 'none'};">
	<slot name="icon" />
	<span class={titleClass} id={titleId}>{title}</span>
	<span class={messageClass} id={messageId}>{message}</span>
	<slot name="alertOptions" />
	bind:this{isOpen}
</div>
