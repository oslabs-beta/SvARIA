<div class="text-left text-lg">
	<div>
		{'<\script>'}
		<p>&nbsp &nbsp import 'RadioGroup' from SvARIA;</p>
		<br />
		<p>&nbsp &nbsp let radioGroupOptions = {'['}</p>
		<p>&nbsp &nbsp &nbsp{'{'}</p>
		<p>&nbsp &nbsp &nbsp &nbsp &nbsp label: 'Button',</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsp labelClass: 'ms-2 text-sm font-medium text-gray-900
			dark:text-gray-30',
		</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsp inputClass: 'w-4 h-4 text-green-600 bg-gray-100 border-gray-300
			focus:ring-green-500 dark:focus:ring-green-600
		</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsp dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
			dark:border-gray-600 accent-emerald-500/25'
		</p>
		<p>&nbsp &nbsp &nbsp {'},'}</p>
		<p>&nbsp &nbsp &nbsp {'{'}</p>
		<p>&nbsp &nbsp &nbsp &nbsp &nbsp label: 'NavBar',</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsp labelClass: 'ms-2 text-sm font-medium text-gray-900
			dark:text-gray-30',
		</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsp inputClass: 'w-4 h-4 text-green-600 bg-gray-100 border-gray-300
			focus:ring-green-500 dark:focus:ring-green-600
		</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsp dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
			dark:border-gray-600 accent-emerald-500/25'
		</p>
		<p>&nbsp &nbsp &nbsp {'},'}</p>
		<p>&nbsp &nbsp &nbsp {'{'}</p>
		<p>&nbsp &nbsp &nbsp &nbsp &nbsp label: 'Modal',</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsp labelClass: 'ms-2 text-sm font-medium text-gray-900
			dark:text-gray-30',
		</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsp inputClass: 'w-4 h-4 text-green-600 bg-gray-100 border-gray-300
			focus:ring-green-500 dark:focus:ring-green-600
		</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsp dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
			dark:border-gray-600 accent-emerald-500/25'
		</p>
		<p>&nbsp &nbsp &nbsp {'},'}</p>
		<p>&nbsp &nbsp {'];'}</p>
		<br />
		<p>&nbsp &nbsp  let selectedOption;</p>
		<p>&nbsp &nbsp  $: console.log('selected option', selectedOption);</p>
		<br />
		{'</script>'}
	</div>
	<br />
	<br />
<p>{'<RadioGroup'}</p>
<p>&nbsp &nbsp {'options={radioGroupOptions}'}</p>
<p>&nbsp &nbsp bind:selectedOption</p>
<p>&nbsp &nbsp id="radio"</p>
<p>&nbsp &nbsp ariaLabel="Radio Selector"</p>
<p>&nbsp &nbsp className="flex flex-col items-start mb-4 mx-96"</p>
<p>{'/>'}</p>
<br>
<p>
	{'<!--'} The RadioGroup component also has a 'style' property so can set in-line CSS styling if preferred e.g. style='color:
	white; background-color:black' {'-->'}
</p>
<br>
<p>
	{'<!--'} If {'<style></style>'} tags are being used instead, the id or class must be declared globally as below: {'-->'}
</p>
<p>
	{'<!--'} labelId, labelStyle, inputId, inputStyle can also be passed into the individual objects in the formElements array {'-->'}
</p>
<br>
<p>
	id for each individal radio input will be 'radio +' index of individual input in array for example in this case the id of the Button input will be radio-0
</p>
<br>
<div>
<p>{'<style>'}</p>
	<p>&nbsp &nbsp {':global(#radio) {'}</p>
	<p>&nbsp &nbsp {'color: white;'}</p>
	<p>&nbsp &nbsp {'background-color: black;'}</p>
<p>{'<\/style>'}</p>
</div>
</div>
