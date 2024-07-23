<script lang='ts'>
    import { ariaLabelcheck, colorContrastCheck } from "./ARIAchecks.ts";
    import Button from "./Button_ts.svelte";
    import { onMount } from 'svelte';

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

    let showPopover: boolean = false;
    let buttonElement: HTMLElement;
    let popoverElement: HTMLElement;

    onMount(() => {
        positionPopover();
    });

    function positionPopover() {
        if (buttonElement && popoverElement) {
            const rect = buttonElement.getBoundingClientRect();
            popoverElement.style.position = 'absolute';
            popoverElement.style.top = `${rect.bottom + window.scrollY}px`;
            popoverElement.style.left = `${rect.left + window.scrollX}px`;
        }
    }

    function handleClick(event: MouseEvent) {
        if (showPopover && popoverElement && !popoverElement.contains(event.target as Node)) {
            showPopover = false;
        }
    }

	function handleKeyDown(event: KeyboardEvent) {
		if(event.key === 'Escape') {
            console.log('escape')
			showPopover = false;
		}
	}

	$: if(showPopover) {
        setTimeout(positionPopover, 0);
	}
</script>

<svelte:window on:click={handleClick} on:keydown={handleKeyDown}/>

<Button
    on:click={(event) => {
        event.stopPropagation()
        showPopover = true}}
    id={openButtonId}
    content={openButtonContent}
    ariaLabel={openButtonAriaLabel}
    style={openButtonStyle}
    className={openButtonClass}
></Button>

{#if showPopover}
    <div
        id={popoverId}
        class={`${popoverClass} popover-container`}
        style={`${style}; display: ${showPopover ? 'block' : 'none'};`}
        bind:this={popoverElement}
        on:close={() => {
            showPopover = false;
        }}
        use:ariaLabelcheck
        use:colorContrastCheck
    >
        <div
            role="dialog"
            class={contentClass}
            id={contentId}
            aria-Modal="true"
            aria-labelledby={popoverHeaderId}
            aria-describedby={popoverDescribeId}
        >
            <Button
                on:click={() => {
                    showPopover = false;
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
    </div>
{/if}

<style>
    .popover-container {
        position: fixed;
        width: auto;
        max-width: 25%;
        min-width: min-content;
        box-sizing: border-box;
        pointer-events: auto;
    }

    /* Optional: Add this if you want to prevent interaction with elements behind the popover */
    :global(body.popover-open) {
        pointer-events: none;
    }
    :global(body.popover-open .popover-container) {
        pointer-events: auto;
    }
</style>