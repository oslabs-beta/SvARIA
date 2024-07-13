<script>
	let buttonImplementation = `
	  &lt;script&gt;
	    import ProgressBar from 'svaria-toolkit';

	    let currentProgress = 50; // Example: set the current progress

	    function updateProgress() {
		    // Example: update progress over time
		    setInterval(() => {
			    currentProgress += 10; // Increase progress by 10%
			    if (currentProgress > 100) currentProgress = 0; // Reset if exceeds 100%
		    }, 1000); // Update every second
	    }
    
        updateProgress(); // Start updating progress

	  &lt;/script&gt;

	  &lt;ProgressBar progress={currentProgress}/&gt;
	`;

	let redefineClass = `
	&lt;ProgressBar 
    progress={currentProgress} 
    progressBarClass="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"
    progressClass="bg-yellow-400 h-2.5 rounded-full"
    labelClass='text-xs text-gray-900 dark:text-white'
    /&gt;
	`;
	let redefineStyle = `
	&lt;ProgressBar 
    progress={currentProgress}
    progressBarStyle="background-color:powderblue" 
    labelStyle="color:white"
    /&gt;
	`;
	let redefineID = `
	&lt;ProgressBar
    progress={currentProgress}
    progressBarId='progress-bar'
    progressId='progress'
    labelId='progressBarLabel'
    /&gt;
	`;
</script>

<div class="text-left text-sm m-2">
	<h1>SvARIA Progress Bar</h1>
	<h3>Implementing SvARIA button with an updateProgress function:</h3>
	<li>Import Progress Bar and update starting progress to currentProgress</li>

	<pre>{@html buttonImplementation}</pre>
	<br />
	<br />
	<h3>Classes on a SvARIA Progress Bar:</h3>
	<li>The class default is set to Tailwind styling</li>
	<li>Redefine a class:</li>
	<li>The class for the progress bar is set to a variable progressBarClass, the class for the progress is set to progressClass and the class for the label is set to labelClass - these are what you redefine to redefine the class</li>
	<pre>{@html redefineClass}</pre>
	<p>
		*Note: Our components come with Tailwind default styling, redefining the class will remove all
		default styling
	</p>
	<br />
	<br />
	<h3>Style on a SvARIA Progress Bar:</h3>
	<li>The style variable for the progress is set to a variable progressBarStyle and the style for the label is set to labelStyle.
        The style default is set to an empty string. Please note, the style for the progress cannot be redefined</li>
	<li>Redefine a style:</li>
	<pre>{@html redefineStyle}</pre>
	<br />
	<br />
	<h3>ID on a SvARIA Progress Bar:</h3>
	<li>The ID for the progress bar is set to a variable progressBarId, the ID for the progress is set to progressId and the ID for the label is set to labelId - these are what you redefine to redefine the IDs</li>
	<li>Redefine ID:</li>
	<pre>{@html redefineID}</pre>
</div>

<style>
	:global(pre) {
		background-color: #f4f4f4;
		padding: 10px;
		border-radius: 5px;
	}
</style>