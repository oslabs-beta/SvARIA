<script>
	import { ProgressBar } from 'svaria-toolkit';

	let currentProgress = 50; // Example: set the current progress

	function updateProgress() {
		// Example: update progress over time
		setInterval(() => {
			currentProgress += 10; // Increase progress by 10%
			if (currentProgress > 100) currentProgress = 0; // Reset if exceeds 100%
		}, 1000); // Update every second
	}

	updateProgress(); // Start updating progress
</script>

<ProgressBar
	progress={currentProgress}
	progressBarClass="w-full bg-white rounded-full h-2.5 mb-4 dark:bg-white"
	progressClass="bg-yellow-400 h-2.5 rounded-full"
    progressBarId='progress-bar'
    progressId='progress'
    labelId='progressBarLabel'
    labelClass='text-xs text-gray-900 dark:text-white'
/>
