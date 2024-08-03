<!-- This is where the tab with the components/code/sandbox live -->
<script lang="ts">
	import SectionWrapper from './SectionWrapper.svelte';


</script>

<SectionWrapper id="CompTab">
	<div
		class="flex flex-col gap-5 sm:gap-10 md:gap-15 flex-1 items-center justify-center pb-10 md:pb-14"
	>
		<div class="flex flex-col gap-2">
			<br /><br /><br />
			<h6
				class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
			>
				Components
			</h6>
		</div>
		<h7 class="text-2xl sm:text-3xl md:text-4xl max-w-[1000px] mx-auto w-full text-center">
			<img src="" alt="" />
			Welcome to the SvARIA Playground
			<img src="" alt="" />
			<p
				class="text-xl sm:text-2xl md:text-3xl max-w-[1000px] mx-auto w-full italic font-light text-center"
			>
				<br />
				Select your component and toggle the tabs to experience <br />a demo, obtain code, read the
				docs, or play around in the sandbox.
			</p>
			<br />
			<div class=" max-h-95% overflow-scroll">
				<!-- <AccordionGroup group={accordions} ariaLabel="Component Accordion"></AccordionGroup> -->
			</div>
		</h7>
	</div>
</SectionWrapper>
