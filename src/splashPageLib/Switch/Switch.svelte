<script lang='ts'>
    // based on suggestions from:
    // Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/
    // On Designing and Building Toggle Switches by Sara Soueidan https://www.sarasoueidan.com/blog/toggle-switch-design/
    // and this example by Scott O'hara https://codepen.io/scottohara/pen/zLZwNv

    export let label: string | undefined;
	export let value: string = 'JS';
    export let className: string = "s s--inner"
    export let ariaLabel: string = 'Switch between Javascript and Typescript';

    $: checked = value === 'JS';

    $: label = value === 'JS' ? 'Switch to TypeScript' : 'Switch to JavaScript';

	const uniqueID = Math.floor(Math.random() * 100)

    function handleClick(event: MouseEvent): void {
        const target = event.currentTarget as HTMLButtonElement;
        const state = target.getAttribute('aria-checked');
        checked = state !== 'true';
        value = checked ? 'JS' : 'TS';
    }

</script>

<!-- <div class={className}>
    <span id={`switch-${uniqueID}`}>{label}</span> -->
    <!-- <button
        role="switch"
        aria-checked={checked}
        aria-labelledby={`switch-${uniqueID}`}
        on:click={handleClick}>
            <span>JS</span>
            <span>TS</span>
    </button> -->
<!-- </div> -->
<!-- 
<style>
			:root {
		--accent-color: CornflowerBlue;
		--gray: #ccc;
	}
    /* Inner Design Option */
    .s--inner button {
        padding: 0.5em;
        background-color: #fff;
        border: 1px solid var(--gray);
    }
    [role='switch'][aria-checked='true'] :first-child,
    [role='switch'][aria-checked='false'] :last-child {
        display: none;
        color: #fff;
    }

    .s--inner button span {
        user-select: none;
        pointer-events:none;
        padding: 0.25em;
    }

    .s--inner button:focus {
        outline: var(--accent-color) solid 1px;
    }

    /* Slider Design Option */

    .s--slider {
        display: flex;
        align-items: center;
    }

    .s--slider button {
        width: 3em;
        height: 1.6em;
        position: relative;
        margin: 0 0 0 0.5em;
        background: var(--gray);
        border: none;
    }

    .s--slider button::before {
        content: '';
        position: absolute;
        width: 1.3em;
        height: 1.3em;
        background: #fff;
        top: 0.13em;
        right: 1.5em;
        transition: transform 0.3s;
    }

    .s--slider button[aria-checked='true']{
        background-color: var(--accent-color)
    }

    .s--slider button[aria-checked='true']::before{
        transform: translateX(1.3em);
        transition: transform 0.3s;
    }

    .s--slider button:focus {
        box-shadow: 0 0px 0px 1px var(--accent-color);
    }

    /* Multi Design Option */

    /* Based on suggestions from Sara Soueidan https://www.sarasoueidan.com/blog/toggle-switch-design/
    and this example from Scott O'hara https://codepen.io/scottohara/pen/zLZwNv */



    /* gravy */ 

    /* Inner Design Option */
    [role='switch'][aria-checked='true'] :first-child,
    [role='switch'][aria-checked='false'] :last-child {
        border-radius: 0.25em;
        background: var(--accent-color);
        display: inline-block;
    }

    .s--inner button:focus {
        box-shadow: 0 0px 8px var(--accent-color);
        border-radius: 0.1em;
    }

    /* Slider Design Option */
    .s--slider button {
        border-radius: 1.5em;
    } 
    
    .s--slider button::before {
        border-radius: 100%;
    }

    .s--slider button:focus {
        box-shadow: 0 0px 8px var(--accent-color);
        border-radius: 1.5em;
    }
   

</style> -->