<div class="text-left text-lg">
	<div>
		{'<\script>'}
		<p>&nbsp &nbsp import 'Menu' from SvARIA;</p>
		<br />
		<p>&nbsp &nbsp let navElem = {'['}</p>
		<p>&nbsp &nbsp &nbsp{'{'}</p>
		<p>&nbsp &nbsp &nbsp &nbsp &nbsp label: 'purple',</p>
		<p>&nbsp &nbsp &nbsp &nbsp &nbsp {'onClick: function click() {'}</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp {'window.location.href = "https://en.wikipedia.org/wiki/Purple";'}
		</p>
		<p>&nbsp &nbsp &nbsp &nbsp &nbsp {'},'}</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsp linkClass: 'mx-96 w-32 bg-slate-300 block px-4 py-2 text-black
		</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsphover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black'
		</p>
		<p>&nbsp &nbsp &nbsp {'},'}</p>
		<p>&nbsp &nbsp &nbsp {'{'}</p>
		<p>&nbsp &nbsp &nbsp &nbsp &nbsp label: 'blue',</p>
		<p>&nbsp &nbsp &nbsp &nbsp &nbsp {'onClick: function click() {'}</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp {'alert(menuItems[1].label);'}
		</p>
		<p>&nbsp &nbsp &nbsp &nbsp &nbsp{'},'}</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsp linkClass: 'mx-96 w-32 bg-slate-300 block px-4 py-2 text-black
		</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsphover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black'
		</p>
		<p>&nbsp &nbsp &nbsp {'},'}</p>
		<p>&nbsp &nbsp &nbsp {'{'}</p>
		<p>&nbsp &nbsp &nbsp &nbsp &nbsp label: 'yellow',</p>
		<p>&nbsp &nbsp &nbsp &nbsp &nbsp {'onClick: function click() {'}</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp {'alert(menuItems[2].label)'}
		</p>
		<p>&nbsp &nbsp &nbsp &nbsp &nbsp {'},'}</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsp linkClass: 'mx-96 w-32 bg-slate-300 block px-4 py-2 text-black
		</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsphover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black'
		</p>
		<p>&nbsp &nbsp &nbsp {'},'}</p>
		<p>&nbsp &nbsp &nbsp {'{'}</p>
		<p>&nbsp &nbsp &nbsp &nbsp &nbsp label: 'green',</p>
		<p>&nbsp &nbsp &nbsp &nbsp &nbsp {'onClick: function click() {'}</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp {'window.location.href = "https://en.wikipedia.org/wiki/Greene";'}
		</p>
		<p>&nbsp &nbsp &nbsp &nbsp &nbsp {'},'}</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsp linkClass: 'mx-96 w-32 bg-slate-300 block px-4 py-2 text-black
		</p>
		<p>
			&nbsp &nbsp &nbsp &nbsp &nbsphover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black'
		</p>
		<p>&nbsp &nbsp &nbsp {'},'}</p>
		<p>&nbsp &nbsp {'];'}</p>
		{'</script>'}
	</div>
	<br />
	<br />
	<p>{'<Menu'}</p>
	<p>&nbsp &nbsp {'items={menuItems}'}</p>
	<p>&nbsp &nbsp buttonContent="Menu"</p>
	<p>&nbsp &nbsp buttonId="menuButton"</p>
	<p>&nbsp &nbsp buttonAriaLabel="menu button"</p>
    <p>&nbsp &nbsp listClass="py-2 text-sm text-gray-700 dark:text-gray-400 "</p>
	<p>&nbsp &nbsp {'on:click={handleClick}'}</p>
	<p>&nbsp &nbsp buttonClass="mx-96 w-32 h-16 text-2xl bg-slate-400 items-center justify-between py-2 px-3</p>
	<p>&nbsp &nbsp  text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700</p>
	<p>&nbsp &nbsp  md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:focus:text-black dark:hover:bg-gray-700</p>
	<p>&nbsp &nbsp  md:dark:hover:bg-transparent"</p>
	<p>{'/>'}</p>
    <p>
        {'<!-- The button to open the menu has a "buttonStyle" property, and the total list of items has a "listStyle" property so can set in-line CSS styling if preferred e.g. buttonStyle="color:white; background-color:black" -->'}
    </p>
    <br />
    <p>
        {'<!--'} linkStyle with in-line CSS as above can also be passed into the individual objects in the routes array {'-->'}
    </p>
    <br />
    <p>
        {'<!--'} The entire container containing both the button to open the menu and all the menu components has "menuContainerClass", "menuContainerStyle" and "menuContainerId" properties {'-->'}
    </p>
    <br />
    <p>
        {'<!--'} If {'<style></style>'} tags are being used instead, the id or class must be declared globally as below: {'-->'}
    </p>
    <div>
        <p>{'<style>'}</p>
            <p>&nbsp &nbsp {':global(#menuButton) {'}</p>
            <p>&nbsp &nbsp {'color: white;'}</p>
            <p>&nbsp &nbsp {'background-color: black;'}</p>
        <p>{'<\/style>'}</p>
    </div>
</div>

