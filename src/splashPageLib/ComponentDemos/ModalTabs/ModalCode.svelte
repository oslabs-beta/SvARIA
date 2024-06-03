<div class='text-left text-lg'>
    <div>
        {'<\script>'}
        <p>&nbsp &nbsp import 'Modal' from SvARIA;</p>
        <p>&nbsp &nbsp import 'Button' from SvARIA;</p>
        <br>
        <p>&nbsp &nbsp let showModal = false; </p>
        {'</script>'}
    </div>
    <br />
	<br />
    <p>{'<'}Button</p>
      <p>&nbsp &nbsp bind:showModal</p>
      <p>&nbsp &nbsp on:click={'{() => (showModal = true)}'}</p>
      <p>&nbsp &nbsp content="Open Modal"</p>
      <p>&nbsp &nbsp ariaLabel="Open Modal"</p>
      <p>&nbsp &nbsp className = 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'</p>
    <p>{'/>'}</p>
    <br>
    <p>{'<'}Modal</p>
    <p>&nbsp &nbsp modalId="dialog"</p>
    <p>&nbsp &nbsp modalClass="bg-white text-black rounded-lg shadow dark:bg-gray-700 dark:text-white p-4 md:p-5 space-y-4"</p>
    {'<!--'} modalHeaderId and modalDescribeId below are for ARIA compliance features {'-->'}
    <p>&nbsp &nbsp modalHeaderId="header"</p>
    <p>&nbsp &nbsp modalDescribeId="content"</p>
    <p>&nbsp &nbsp closeModalMessage="X"</p>
    <p>&nbsp &nbsp closeButtonId="close"</p>
    <p>&nbsp &nbsp closeButtonClass="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"</p>
    <p>{'>'}</p>
    <p>&nbsp &nbsp {'<h3 id="modalHeader" class="text-xl font-semibold text-gray-900 dark:text-white">Modal Opened</h3>'}</p>
    <p>&nbsp &nbsp {'<p id="dialoginfo" class="text-base text-lg leading-relaxed text-gray-500 dark:text-white">'}</p>
        <p>&nbsp &nbsp &nbsp &nbsp You have successfully opened the modal</p>
    <p>&nbsp &nbsp {'</p>'}</p>
    <p>&nbsp &nbsp {'<p id="dialoginfo" class="text-base text-lg leading-relaxed text-red-500 dark:text-red-400">'}</p>
        <p>&nbsp &nbsp &nbsp &nbsp Now you can close the modal below</p>
    <p>&nbsp &nbsp {'</p>'}</p>
    <p>{'</Modal>'}</p>
    <br>
    <p>
        {'<!--'} Please note that if separate styling is added to individual components in the modal our ARIA check functions will not run on those {'-->'}
    </p>
    <br>
    <p>
        {'<!--'} Modal also has a 'style' property so can set in-line CSS styling if preferred e.g. style='color:
        white; background-color:black' {'-->'}
    </p>
    <br>
    <p>
        {'<!--'} If {'<style></style>'} tags are being used instead, the id or class must be declared globally as below: {'-->'}
    </p>
    <div>
        <p>{'<style>'}</p>
            <p>&nbsp &nbsp {':global(#dialog) {'}</p>
            <p>&nbsp &nbsp {'color: white;'}</p>
            <p>&nbsp &nbsp {'background-color: black;'}</p>
        <p>{'<\/style>'}</p>
    </div>
</div>