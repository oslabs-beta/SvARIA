<script>
	let buttonImplementation = `
	  &lt;script&gt;
	    import Tree from 'svaria-toolkit';

		const tree = {
			label: 'Wine',
			children: [
				{	
					label: 'Red',
					children: [
						{ label: 'California', link: "https://en.wikipedia.org/wiki/California_wine"},
						{
							label: 'Bordeaux', link: 'https://en.wikipedia.org/wiki/Bordeaux',
							children: [
								{ label: 'Cab Franc', onClick:cabfranc }, 
								{ label: 'Merlot', link:"https://en.wikipedia.org/wiki/Merlot" }, 
								{ label: 'Malbec' }
							]
						},
						{ label: 'Rioja', onClick:rioja }
					]
				},
				{
					label: 'White',
					children: [
						{ label: 'Burgundy', onClick: burgundy }, 
						{ label: 'Champagne', link:"https://en.wikipedia.org/wiki/Champagne" }, 
						{ label: 'Piedmont', link: "https://en.wikipedia.org/wiki/Piedmont" }
					]
				}
			]
		};

		function burgundy () {
			console.log('Burgundy clicked')
		}

		function rioja () {
			console.log('rioja clicked')
		}

		function cabfranc () {
			console.log('cab franc clicked')
		}

	&lt;/script&gt;

	&lt;Tree {tree} /&gt;
	`;

	let redefineClass = `
	&lt;Tree
    {tree} 
    liClassName="text-sm px-5"
    arrowClass="text-red-900"
    labelClass="text-gray-800"
    /&gt;
	`;
	let redefineStyle = `
	&lt;Tree
	{tree}
    liStyle="color:black" 
    arrowStyle="color:red"  
    labelStyle="color:powderblue"
    /&gt;
	`;
	let redefineID = `
	&lt;script&gt;
	
	&lt;Tree
    {tree}
    liId="listItems"
    /&gt;
	`;
</script>

<div class="text-left text-sm m-2">
	<h1>SvARIA Tree</h1>
	<h3>Implementing SvARIA button with an updateProgress function:</h3>
	<li>Import Progress Bar and update starting progress to currentProgress</li>

	<pre>{@html buttonImplementation}</pre>
	<br />
	<br />
	<h3>Classes on a SvARIA Progress Bar:</h3>
	<li>The class default is set to Tailwind styling</li>
	<li>Redefine a class:</li>
	<li>
		The class for the progress bar is set to a variable progressBarClass, the class for the progress
		is set to progressClass and the class for the label is set to labelClass - these are what you
		redefine to redefine the class
	</li>
	<pre>{@html redefineClass}</pre>
	<p>
		*Note: Our components come with Tailwind default styling, redefining the class will remove all
		default styling
	</p>
	<br />
	<br />
	<h3>Style on a SvARIA Progress Bar:</h3>
	<li>
		The style variable for the progress is set to a variable progressBarStyle and the style for the
		label is set to labelStyle. The style default is set to an empty string. Please note, the style
		for the progress cannot be redefined
	</li>
	<li>Redefine a style:</li>
	<pre>{@html redefineStyle}</pre>
	<br />
	<br />
	<h3>ID on a SvARIA Progress Bar:</h3>
	<li>
		The ID for the progress bar is set to a variable progressBarId, the ID for the progress is set
		to progressId and the ID for the label is set to labelId - these are what you redefine to
		redefine the IDs
	</li>
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
