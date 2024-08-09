<script lang='ts'>
    import Button from "../../../lib/Button.svelte";
    import { onMount } from 'svelte';

    export let popoverId: string = '';
    export let popoverClass: string = 'flex flex-wrap gap-4 bg-white text-black rounded-lg shadow dark:bg-gray-700 dark:text-white p-4 md:p-5';
    export let contentId: string|undefined = 'popoverContentId';
    export let style: string|undefined = '';
    export let openButtonId: string|undefined = 'openPopover'
    export let openButtonContent: string|undefined = "show Popover"
    export let openButtonAriaLabel: string|undefined = "Open Popover"
    export let openButtonStyle: string|undefined = ''
    export let openButtonClass: string|undefined = 'bg-black text-white'
    export let closeButtonId: string|undefined = 'closePopoverButtonId';
    export let closeButtonContent: string|undefined;
    export let closeButtonAriaLabel: string|undefined = "Close Popover"
    export let closeButtonClass: string|undefined = 'bg-black text-white';
    export let closeButtonStyle: string|undefined = 'closePopoverStyle';

    let showPopover: boolean = false;
    let popoverElement: HTMLElement;

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

    onMount(() => {
        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('keydown', handleKeyDown);
        };
    });
</script>

<div class="popover-wrapper">
    <Button
        on:click={(event) => {
            event.stopPropagation()
            showPopover = true
        }}
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
            style={style}
            bind:this={popoverElement}
            on:close={() => {
                showPopover = false;
            }}
        >
            <div
                role="dialog"
                id={contentId}
                aria-modal="true"
                aria-labelledby={popoverId}
                aria-describedby={popoverId}
            >
            {#if closeButtonContent}
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
            {/if}
                <slot name="header" />
                <slot name="content" />
            </div>
        </div>
    {/if}
</div>

<style>
    .popover-wrapper {
        position: relative;
        display: inline-block;
    }

    .popover-container {
        position: absolute;
        bottom: 100%; /* Position above the button */
        right: 0; /* Align with the right edge of the button */
        width: max-content; /* Allow content to determine width */
        min-width: 200px; /* Minimum width to prevent it from being too narrow */
        max-width: 400px; /* Maximum width to prevent it from being too wide */
        box-sizing: border-box;
        pointer-events: auto;
        z-index: 1000;
        max-height: calc(100vh - 4rem);
        overflow: auto;
        margin-bottom: 0.5rem; /* Space between popover and button */
    }

    :global(body.popover-open) {
        pointer-events: none;
    }
    :global(body.popover-open .popover-container) {
        pointer-events: auto;
    }
</style>