<script>
	import Docs from '../Docs.svelte';
	let propsDetails = [
		'navBarClass: provides a class for the entire Navigation Bar. Tailwind can be used to adjust styling here',
		'id (optional): Uniquely identifies the Navigation Bar, if undefined this will default to "navBar"',
		'heading (optional): A value that defines what the heading of your navigation bar will be. If undefined, it will default to "undefined"',
		'navHeadingClass (optional): provides a class for the heading. Tailwind can be used to adjust styling here',
		`headingContainerStyle (optional): allows you to use inline styling for the heading container. e.g., headingContainerStyle="color:red"`,
		'routes (optional): allows you to define the routes you can click to navigate the page. See details for more information.',
		`navListStyle (optional): allows you to use inline styling for the list of links. e.g., navListStyle="color:red"`,
		'navListClass (optional): provides a class for the list of links defined in routes. Tailwind can be used to adjust styling here'
	];
</script>

<Docs componentName="NavBar" {propsDetails}>
	<div slot="details">
		<h3>
			This component contains an optional "slots", "headingPlus". The slot can be used to insert
			your HTML code for the content you'd like to appear in the Heading section of the Navigation
			Bar. Simply enclose your HTML tags between the open and close tags for the popover component,
			and set its "slot" property to "headingPlus". This content will fall under the styling rules
			set on the "navHeadingClass" property, or "headingContainerStyle" if you are using in-line
			styling.
			<br />
			<br />

			<p>The routes property expects an array of objects that have the following properties:</p>
			<ul>
				<li>href: Set to the route of whatever page you would like to route to.</li>
				<li>name: Set to the string the link will be represented by.</li>
				<li>
					linkClass: This is an optional property in case you would like to give each element an
					individual class.
				</li>
				<li>style: This is an optional property for inline styling each element individually.</li>
			</ul>
			<p>
				The IDs of each element in the routes array are generated based on the ID of the navigation
				bar. Each ID will have the format 'id-link-i', where 'id' is the value of the navigation
				bar's ID, and 'i' is the index of the element in the array.
			</p>
		</h3>
	</div>
</Docs>
