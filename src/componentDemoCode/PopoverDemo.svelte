<script>
    import Popover from 'svaria-toolkit';
</script>

<Popover
	popoverId="popover123"
    popoverClass='bg-white text-black rounded-lg shadow dark:bg-gray-700 dark:text-white p-4 md:p-5 space-y-4';
	popoverHeaderId="PopoverHeader123"
	popoverDescribeId="popoverDescription123"
    contentClass='mb-10'
    contentId='popoverContentId'
    style=''
    openButtonId='openPopover123'
    openButtonContent='Show Popover123'
    openButtonAriaLabel='Open Popover'
    openButtonStyle=''
    openButtonClass='bg-black text-white'
	closeButtonId="closePopover123"
    closeButtonContent="X"
    closeButtonAriaLabel="Close Popover123"
    closeButtonClass='bg-black text-white'
    closeButtonStyle=''
>
	<h3
	id="popover123Header"
	slot="header"
	>
	Popover123 Opened
	</h3>
	<div slot="content">
		<p id="">
			<br>You have successfully opened the Popover,
			<br/>Now you can close the Popover with "X".
		</p>
	</div>
</Popover>