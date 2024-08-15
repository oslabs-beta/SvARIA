<script lang='ts'>
	export let title: string = '';
	export let source: string = '';
	export let label: string = '';
</script>

<div style='height:500px; margin-top:-80px'>
	<iframe
		title={title}
		src={source}
		width="900px"
		height="500px"
		style='border-radius:8px'
	></iframe> 
	<div id='sandboxOverlay' style='background:white; height:20%; position:relative; top:-500px'>
		<div style='z-index:10; position: relative; top: 58%; border-top-right-radius: 8px; border-top-left-radius: 8px; background:#2e2e2e; color: white' class="block w-full font-medium py-2 px-3 text-left text-3xl">
			SvARIA {label} Component
		</div>
	</div>
</div>