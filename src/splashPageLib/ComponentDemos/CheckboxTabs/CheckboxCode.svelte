<div class="text-left text-lg">
	{'<\script>'}
	<p>&nbsp &nbsp import 'RadioGroup' from SvARIA;</p>
	<br />
	<p>&nbsp &nbsp let checkboxOptions = {'['}</p>
	<p>&nbsp &nbsp &nbsp{'{'}</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp label: 'Subscribe for updates',</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp inputClass: 'w-5 h-5 accent-emerald-500/25'</p>
	<p>&nbsp &nbsp &nbsp {'},'}</p>
	<p>&nbsp &nbsp &nbsp {'{'}</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp label: 'Subscribe to listserv',</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp inputClass: 'w-5 h-5 accent-emerald-500/25'</p>
	<p>&nbsp &nbsp &nbsp {'},'}</p>
	<p>&nbsp &nbsp &nbsp {'{'}</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp label: 'Subscribe to newsletter',</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp inputClass: 'w-5 h-5 accent-emerald-500/25'</p>
	<p>&nbsp &nbsp &nbsp {'},'}</p>
	<p>&nbsp &nbsp {'];'}</p>
	<br />
	<p>&nbsp &nbsp let selectedOption;</p>
	<p>&nbsp &nbsp $: console.log('selected option', selectedOption);</p>
	<br />
	{'</script>'}
	<br />
	<br />
	<p>{'<'}Checkbox</p>
	<p>{'&nbsp &nbsp options={checkboxOptions}'}'</p>
	<p>&nbsp &nbsp bind:selectedOption</p>
	<p>&nbsp &nbsp id="checkbox"</p>
	<p>&nbsp &nbsp ariaLabel="checkbox options"</p>
	<p>&nbsp &nbsp className="flex flex-col"</p>

	<p>{'/>'}</p>
	<br />
	<p>
		{'<!--'} The Checkbox component also has a 'style' property so can set in-line CSS styling if preferred
		e.g. style='color: white; background-color:black' {'-->'}
	</p>
	<br />
	<p>
		{'<!--'} If {'<style></style>'} tags are being used instead, the id or class must be declared globally
		as below: {'-->'}
	</p>
	<p>
		{'<!--'} labelId, labelStyle, labelClass, inputId, inputStyle can also be passed into the individual
		objects in the formElements array {'-->'}
	</p>
	<br />
	<p>
		id for each individal radio input will be 'checkbox +' index of individual input in array for
		example in this case the id of the Button input will be checkbox-0
	</p>
	<br />
	<div>
		<p>{'<style>'}</p>
		<p>&nbsp &nbsp {':global(#checkbox) {'}</p>
		<p>&nbsp &nbsp {'color: white;'}</p>
		<p>&nbsp &nbsp {'background-color: black;'}</p>
		<p>{'<\style>'}</p>
	</div>
</div>
