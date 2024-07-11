<script lang='ts'>
    import { ariaLabelcheck, colorContrastCheck } from "./ARIAchecks.js";
    import Button from "./Button_ts.svelte";

    export let showPopover: boolean = false;
    export let popoverId: string = '';
    export let popoverClass: string = 'bg-white text-black rounded-lg shadow dark:bg-gray-700 dark:text-white p-4 md:p-5 space-y-4';
    export let popoverHeaderId: string|undefined = 'popoverHeader';
	export let popoverDescribeId: string|undefined = 'popoverContent';
	export let contentClass: string|undefined = 'mb-10';
	export let contentId: string|undefined = 'popoverContentId';
    export let style: string|undefined = '';
    export let openButtonId: string|undefined = 'openPopover'
    export let openButtonContent: string|undefined = "show Popover"
    export let openButtonAriaLabel: string|undefined = "Open Popover"
    export let openButtonStyle: string|undefined = ''
    export let openButtonClass: string|undefined = 'bg-black text-white'
	export let closeButtonId: string|undefined = 'closePopoverButtonId';
    export let closeButtonContent: string|undefined = "X"
    export let closeButtonAriaLabel: string|undefined = "Close Popover"
	export let closeButtonClass: string|undefined = 'bg-black text-white';
	export let closeButtonStyle: string|undefined = 'closePopoverStyle';

    let dialog: HTMLDialogElement; // HTMLDialogElement
	$: if(dialog && showPopover) dialog.show();

	function handleKeyDown(event: KeyboardEvent) {
		if(event.key === 'Escape') {
			showPopover = false;
		}
	}

	$: if(showPopover) {
		dialog.focus();
	}
</script>

<Button
    on:click={() => (showPopover = true)}
    id={openButtonId}
    content={openButtonContent}
    ariaLabel={openButtonAriaLabel}
    style={openButtonStyle}
    className={openButtonClass}
></Button>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->

<dialog
	id = {popoverId}
	{style}
	bind:this={dialog}
	on:close={() => {
		showPopover = false;
	}}
	on:click|self={() => dialog.close()}
    use:ariaLabelcheck
	use:colorContrastCheck
	on:keydown={handleKeyDown}
	class = {popoverClass}
>
    <div
        role="dialog"
        class={contentClass}
        id={contentId}
        aria-Modal="true"
        aria-labelledby={popoverHeaderId}
        aria-describedby={popoverDescribeId}
        on:click|stopPropagation
        on:keypress|stopPropagation
    >
        <Button
            on:click={() => {
                showPopover = false;
                dialog.close();
            }}
            id={closeButtonId}
            content={closeButtonContent}
            ariaLabel={closeButtonAriaLabel}
            style={closeButtonStyle}
            className={closeButtonClass}
        ></Button>
        <slot name="header" />
        <slot name="content" />
    </div>
</dialog>
