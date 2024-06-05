<script lang="ts">
    import { ariaLabelcheck, colorContrastCheck } from './ARIAchecks.js'
    export let content: string = 'This is a button'
    export let ariaLabel: string = content;
    export let id: string = ''
    export let style: string = ''
    export let className: string = 'button'
    export let type: string = ''
</script>

    <style>
        :global(.button) {
            color:#570000;
            background-color: #E6E6E6;
            height: 40px;
            width: 100px;
            border-radius: 7%;
            font-size: large;
        }
    </style>

    <button use:ariaLabelcheck={2} use:colorContrastCheck {id} aria-label={ariaLabel} class={className} on:click {style} {type}>{content}</button>
