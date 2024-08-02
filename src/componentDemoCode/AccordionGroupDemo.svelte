<script>
	import AccordionGroup from './AccordionGroup.svelte';
	import ExampleSlot from './ExampleSlot.svelte';

	let group = [
		{name: "First Accordion Example",
		 heading: "first Accordion Example",
		 slot: ExampleSlot,
		 headingClass: 'p-9',
		 componentClass: 'min-h-96'},
		 {name: "Second Accordion Example",
		 heading: "Second Accordion Example",
		 slot: ExampleSlot,
		 headingClass: 'p-9',
		 componentClass: 'min-h-96'},
		 {name: "Third Accordion Example",
		 heading: "Third Accordion Example",
		 slot: ExampleSlot,
		 headingClass: 'p-9',
		 componentClass: 'min-h-96'}
	]

</script>

<AccordionGroup 
	groupHeadingClass = 'p-9'
	groupComponentClass = 'min-h-96'
	{group}
	ariaLabel="Accordion Demo"
	style=''
/>