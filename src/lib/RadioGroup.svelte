<script>
    import { ariaLabelcheck, colorContrastCheck } from './ARIAchecks.js'

    export let options;
    export let ariaLabel;
    export let id = '';
    export let style = '';
    export let className = 'radio-group'
    export let selectedOption;
</script>

<div use:ariaLabelcheck={2} use:colorContrastCheck {id} aria-label={ariaLabel} class={className} {style} {options}>
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