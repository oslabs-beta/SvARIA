<div class="text-left text-lg">
    {'<\script>'}
	<p>&nbsp &nbsp import 'Checkbox' from SvARIA;</p>
	<br />
	<p>&nbsp &nbsp function handleCheck() {'{'}</p>
	<p>&nbsp &nbsp &nbsp &nbsp alert('checkbox checked');</p>
	<p>&nbsp &nbsp {'}'}</p>
	{'</script>'}
	<br />
	<br />
	<p>{'<'}Checkbox</p>
	<p>&nbsp &nbsp inputId="updatesCheckboxInput"</p>
	<p>&nbsp &nbsp labelId="updatesCheckboxLabel"</p>
	<p>&nbsp &nbsp inputClass = 'w-5 h-5 accent-emerald-500/25'</p>
	<p>&nbsp &nbsp labelClass = 'ms-2 text-lg font-medium text-gray-900 dark:text-white'</p>
	<p>&nbsp &nbsp content="Please select for updates"</p>
	<p>&nbsp &nbsp on:click={'{handleCheck}'}</p>
	<p>{'/>'}</p>
	<br />
	<br />
	<p>
		{'<!--'} Checkbox also has inputStyle and labelStyle properties and these can be used for in-line
		CSS styling if preferred e.g. inputStyle='accent-color:purple' labelStyle='color:orange'{'-->'}
	</p>
	<br />
	<p>
		{'<!--'} If {'<style></style>'} tags are being used instead, the id or class must be declared globally
		as below: {'-->'}
	</p>
	<div>
		<p>{'<style>'}</p>
		<p>&nbsp &nbsp {':global(#updatesCheckboxInput) {'}</p>
		<p>&nbsp &nbsp {'accent-color: purple;'}</p>
		<br />
		<p>&nbsp &nbsp {':global(#pdatesCheckboxLabel) {'}</p>
		<p>&nbsp &nbsp {'color: yellow;'}</p>
		<p>{'<\/style>'}</p>
	</div>
</div>
