<script>
	import Docs from '../Docs.svelte';
	let docsProps = [
		'toastId (optional): Unique identifier for toast. Defaults to "toastId", should be overwritten.',
		'toastContainerId (optional): Unique identifier for the toast container. Defaults to " ".',
		'message (optional): Provides the toast message. If not specified, this will default to "Your toast message here".',
		'messageClass (optional): Provides a class for the message. Tailwind can be used to adjust styling here.',
		'toastClass (optional): Provides a class for the toast. Tailwind can be used to adjust styling here.',
		'containerClass (optional): Provides a class for the container. Tailwind can be used to adjust styling here.',
		'autoShutDown (optional): If given a value, will close toast after the specified value in milliseconds. If not specified, the toast will stay open until closed by button.'
	];
</script>

<div class="text-sm text-left">
	<Docs componentName="Toast" propsDetails={docsProps}></Docs>
</div>
