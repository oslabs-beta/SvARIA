<script>
	import AccordionDocs from '../components/lib/AccordionDocs.svelte';
	import { Accordion } from '$lib/index.js';
	import CatIcon from '../components/CatIcon.svelte';
</script>

<Accordion
	heading="Test SvARIA accordion"
	open={true}
	headingContainerClass="flex items-center justify-between w-full"
	headingClass="flex items-center justify-between w-full"
	buttonClass="bg-gray-700 text-white hover:bg-gray-500 rounded-none w-72"
	buttonId="accordion-heading-id"
	contentContainerClass="bg-gray-200 w-72"
	contentContainerId="heading-content-id"
>
	<div slot="content" class="flex flex-col items-center justify-center h-full">
		<h3 class="text-center">default open accordion component</h3>
		<br />
		<CatIcon class="mt-2" />
	</div>
</Accordion>

<AccordionDocs />
