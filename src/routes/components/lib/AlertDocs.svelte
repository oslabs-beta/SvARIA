<script>
	import Docs from '../Docs.svelte';

	let docsProps = [
		'toggle*: Must be set to the return of createToggle. See details',
		'alertId: Unique identifier for alert. Defaults to "alertID", should be overwritten.',
		'alertClass (optional): Provides a class for the Alert. Tailwind can be used to adjust styling here.',
		'title (optional): Provides the title of the message. If not specified, this will default to "Alert".',
		'titleClass (optional): Provides a class for the title. Tailwind can be used to adjust styling here.',
		'message (optional): Provides the Alert message. If not specified, this will default to "Your alert message here".',
		'messageClass (optional): Provides a class for the message. Tailwind can be used to adjust styling here.'
	];
</script>

<div class="text-sm text-left">
	<Docs componentName="Alert" propsDetails={docsProps}>
		<div slot="details">
			<h3>
				To trigger Alert, you must import the <span class="font-bold">createToggle</span> function.
				The return value of createToggle will be an instance of a boolean with several methods. Save
				the return value to a variable and set it to the toggle prop on Alert. Call the
				<span class="font-bold">open</span> method on your instance of createToggle to trigger Alert.
			</h3>
		</div>
	</Docs>
</div>
