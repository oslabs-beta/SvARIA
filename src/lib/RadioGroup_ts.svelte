<script lang='ts'>
    import { ariaLabelcheck, colorContrastCheck } from './ARIAchecks.js'

    export let options: string[];
    export let ariaLabel: string;
    export let id: string = '';
    export let style: string = '';
    export let className: string = 'radio-group'
    export let selectedOption: string;
</script>

<div use:ariaLabelcheck={2} use:colorContrastCheck {id} aria-label={ariaLabel} class={className} {style}>
    {#each options as option, index}
    <label class='radioItem'>
        <input type="radio" bind:group={selectedOption} value={option} id={`radio-`+index} aria-checked={selectedOption === option} tabindex={index + 1}>
        {option}
    </label>
    {/each}
</div>

<style>
    .radio-group {
        display: flex;
        flex-direction: column;
    }
    input[type="radio"] {
        margin-right: 5px;
    }
</style>