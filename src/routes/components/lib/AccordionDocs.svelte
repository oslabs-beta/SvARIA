<script>
	import Docs from '../Docs.svelte';
	let docsProps = [
		'heading: Defines the heading that will be displayed on the drop-down button. If not specified, it will default to "SvARIA accordion component".',
		'headingContainerClass (optional): Provides a class for the container around the content on the button. Tailwind can be used to adjust styling here.',
		'headingClass (optional): Provides a class for the heading. Tailwind can be used to adjust styling here.',
		'buttonClass (optional): Provides a class for the drop-down button. Tailwind can be used to adjust styling here.',
		'buttonId (optional): Unique identifier for the drop-down button. Defaults to `accordion-${heading}-id` where heading refers to the defined heading property.',
		'contentContainerClass (optional): Provides a class for the container around the content. Tailwind can be used to adjust styling here.',
		'contentContainerId (optional): Unique identifier for the content. Defaults to `${heading}-content` where heading refers to the defined heading property.',
		'open (optional): Defines if the accordion starts open or closed. Defaults to "false" (closed).'
	];
</script>

<div class="text-sm text-left">
	<Docs componentName="Accordion" propsDetails={docsProps}>
		<div slot="details">
			<h3>
				This component contains an optional "content" slot. It can be used to insert your HTML code
				for the content you'd like to appear in the content section. Simply add a property "slot" to
				your outermost HTML tags between the open and close tags for the Accordion component, and
				set its value to "content". This content will fall under the styling rules set on the
				"contentContainerClass" property, or "style" if you are using in-line styling.
			</h3>
		</div>
	</Docs>
</div>
