<script>
	import Docs from '../../../routes/components/Docs.svelte';
	
	let docsProps=[
			"progress (optional): Can be used to set the initial progress on page load",
			"progressBarId (optional): Uniquely identifies the progress bar as a whole",
			"progressId (optional):  Uniquely identifies the progress within the progress bar",
			"labelId (optional): Uniquely identifies the label associated with the progress bar",
			"progressClass (optional): provides a class for the progress bar as a while. Tailwind can be used to adjust styling here",
			"progressBarClass (optional): provides a class for the progress within the progress bar. Tailwind can be used to adjust styling here",
			"labelClass (optional): provides a class for the label associated with the progress bar. Tailwind can be used to adjust styling here",
			"progressBarStyle (optional): allows you to use in line styling for the progroess bar as a whole. e.g. progressBarStyle (optional)='background-color:white'",
			"labelStyle (optional): allows you to use in line styling for the label associated with the progress bar. e.g. labelStyle='color:blue'",
			"** of note, the in line styling of the progress within the progress bar cannot be used for this component **"
	]
	
</script>
	
<div class= 'text-sm text-left'>
	<Docs componentName="Progress Bar" propsDetails={docsProps}/>
</div> 