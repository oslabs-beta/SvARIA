<script>
	import Switch from '../../Switch.svelte'
	import className from '../../Switch.svelte'

	let switchValue = 'JS';
</script>


<div class='text-left text-lg'>
	<div class='switch'>
		<Switch bind:value={switchValue} design="inner" class={className}/>
	</div>
	<div>
        {'<\script>'}
        <p>&nbsp &nbsp import 'Button' from SvARIA;</p>
        <br>
        <p>&nbsp &nbsp function handleClick() {'{'}</p>
         <p>&nbsp &nbsp &nbsp &nbsp alert('button clicked');</p>
        <p>&nbsp &nbsp {'}'}</p>
        {'</script>'}
	</div>
	<br />
	<br />
	<p>{'<'}Button</p>
	<p>&nbsp &nbsp id='Click'</p>
	<p>&nbsp &nbsp ariaLabel='Click Me'</p>
	<p>&nbsp &nbsp content='Click'</p>
	<p>
		&nbsp &nbsp className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
		rounded-full'
	</p>
	<p>&nbsp &nbsp on:click={'{'}handleClick{'}'}</p>
	<p>{'/>'}</p>
	<br />
	<p>{'<!--'} Button also has a 'type' property so can set type='submit' for example {'-->'}</p>
	<br />
	<p>
		{'<!--'} Button also has a 'style' property so can set in-line CSS styling if preferred e.g. style='color:
		white; background-color:black' {'-->'}
	</p>
	<br>
	<p>
		{'<!--'} If {'<style></style>'} tags are being used instead, the id or class must be declared globally as below: {'-->'}
	</p>
	<div>
	<p>{'<style>'}</p>
		<p>&nbsp &nbsp {':global(#Click) {'}</p>
		<p>&nbsp &nbsp {'color: white;'}</p>
		<p>&nbsp &nbsp {'background-color: black;'}</p>
	<p>{'<\/style>'}</p>
	</div>

</div>
