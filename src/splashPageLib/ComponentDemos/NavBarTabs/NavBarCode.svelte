<div class="text-left text-lg">
	{'<\script>'}
	<p>&nbsp &nbsp import Nav from SvARIA;</p>
	<br />
	<p>&nbsp &nbsp {'import { colorContrastCheck } from "$lib/ARIAchecks.js";'}</p>

	<p>&nbsp &nbsp let navElem = {'['}</p>
	<p>&nbsp &nbsp &nbsp{'{'}</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp href: 'https://en.wikipedia.org/wiki/Home',</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp name: "Home",</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp linkClass: 'block py-2 px-3 text-white bg-blue-700 rounded	</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'</p>
	<p>&nbsp &nbsp &nbsp {'},'}</p>
	<p>&nbsp &nbsp &nbsp {'{'}</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp href: 'https://en.wikipedia.org/wiki/Login',</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp name: "Login",</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp linkClass: 'block py-2 px-3 text-white bg-blue-700 rounded	</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'</p>
	<p>&nbsp &nbsp &nbsp {'},'}</p>
	<p>&nbsp &nbsp &nbsp {'{'}</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp href: 'https://en.wikipedia.org/wiki/About',</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp name: "About Us",</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp linkClass: 'block py-2 px-3 text-white bg-blue-700 rounded	</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'</p>
	<p>&nbsp &nbsp &nbsp {'},'}</p>
	<p>&nbsp &nbsp &nbsp {'{'}</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp href: 'https://en.wikipedia.org/wiki/Contact',</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp name: "Contact Us",</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp linkClass: 'block py-2 px-3 text-white bg-blue-700 rounded	</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'</p>
	<p>&nbsp &nbsp &nbsp {'},'}</p>
	<p>&nbsp &nbsp &nbsp {'{'}</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp href: 'https://en.wikipedia.org/wiki/Service',</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp name: "Our Services",</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp linkClass: 'block py-2 px-3 text-white bg-blue-700 rounded	</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'</p>
	<p>&nbsp &nbsp &nbsp {'}'}</p>

	<p>&nbsp &nbsp {'];'}</p>
	{'</script>'}
	<br />
	<br />
	<p>{'<Nav'}</p>
	<p>&nbsp &nbsp {'routes={navElem}'}</p>
	<p>&nbsp &nbsp navBarClass="bg-white border-gray-200 dark:bg-gray-900 max-w-screen-xl flex</p>
	<p>&nbsp &nbsp flex-wrap items-center justify-between mx-auto p-4"</p>
	<p>&nbsp &nbsp navListClass='text-base font-medium flex flex-col p-4 md:p-0 mt-4 border</p>
	<p>&nbsp &nbsp border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0</p>
	<p>&nbsp &nbsp md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'</p>
	<p>&nbsp &nbsp id='demoNavBar'</p>
	<p>&nbsp &nbsp navHeadingClass='bg-white border-gray-200 dark:bg-gray-900'</p>
    <p>&nbsp &nbsp ariaLabel='website navbar'</p>
	<p>{'/>'}</p>
	<br />
	<p>
		&nbsp &nbsp {'<div slot="headingPlus" class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">'}
	</p>
	<p>
		&nbsp &nbsp &nbsp &nbsp {'<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"></a>'}
	</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp{'<img'}</p>
	<p>
		&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
		src="https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1"
	</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp alt="a cat"</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp class="h-8 w-8 object-cover rounded-full "</p>
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp {'/>'}</p>
	<p> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp {'<span use:colorContrastCheck class="self-center text-lg font-semibold whitespace-nowrap'}</p>
    <p>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp {'dark:text-white">Navigation</span>'}</p>
	<p>&nbsp &nbsp &nbsp &nbsp {'</a>'}</p>
	<p>&nbsp &nbsp {'</div>'}</p>
	<p>{'</Nav>'}</p>
	<br />
	<br />
	<p>
		{'<!-- The NavBar also has a "style" property (for the entire NavBar), a "headerContainerStyle" property and a "navListStyle" property so can set in-line CSS styling if preferred e.g. headerContainerStyle="color:white; background-color:black" -->'}
	</p>
	<br />
    <p>
        {'<!--'} linkStyle with in-line CSS as above can also be passed into the individual objects in the routes array {'-->'}
    </p>
	<br>
    <p>
        {'<!-- Some id\'s are predefined for you:'} 
    </p>
    <p>id for the header container will be 'id+ -headercontainer' for example in this case would be 'demoNavBar-headercontainer'</p>
    <br>
    <p>id for all the routes together will be 'id+ -ul' for example in this case would be 'demoNavBar-ul'</p>
    <br>
    <p>id for an indidual array element will be 'id+ -link- + index of array' for example in this case the id of the first element would be 'demoNavBar-link-0'{'-->'}</p>
	<br>
    <p>
        {'<!--'} Please note that for elements used within the header slot, our ARIA check functions will not run on those but these functions can be imported and added as a 'use:colorContrastCheck' or 'use:ariaLabel' {'(if an aria-label is needed for that component)'} {'-->'}
    </p>
    <br>
    <p>
        {'<!--'} If {'<style></style>'} tags are being used instead, the id or class must be declared globally as below: {'-->'}
    </p>
    <div>
        <p>{'<style>'}</p>
            <p>&nbsp &nbsp {':global(#demoNavBar) {'}</p>
            <p>&nbsp &nbsp {'color: white;'}</p>
            <p>&nbsp &nbsp {'background-color: black;'}</p>
        <p>{'<\/style>'}</p>
    </div>
</div>
