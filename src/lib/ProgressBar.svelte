<script lang="ts">
	export let progress: number = 0; // Initial progress value
	export let progressBarId: string = 'progressBar';
	export let progressBarStyle: string = '';
	export let progressBarClass: string = 'w-full bg-gray-200 rounded-full h-2.5 dark:bg-black';
	export let progressId: string = '';
	export let progressClass: string = 'bg-blue-600 h-2.5 rounded-full';
	export let labelId: string = `label for ${progressBarId}`;
	export let labelClass: string = 'text-sm';
	export let labelStyle: string = '';

	// Computed style for the progress bar width
	let barWidth: string | number;
	$: barWidth = progress + '%';
</script>

<!-- Cannot use inline style for progress -->
<div
	id={progressBarId}
	class={progressBarClass}
	role="progressbar"
	aria-valuemin="0"
	aria-valuemax="100"
	aria-valuenow={progress}
	style={progressBarStyle}
>
	<div id={progressId} class={progressClass} style="width: {barWidth}"></div>
</div>
<label id={labelId} class={labelClass} style={labelStyle} for={progressBarId}>{barWidth}</label>

