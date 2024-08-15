<script>
    import Docs from '../../../routes/components/Docs.svelte';

    const componentName = "Switch"
    const propsDetails = [
        'defValue (required): This text will display directly on the Switch on the left side, and is the default value.',
        'altValue (required): This text will display on the right side of the Switch and is the alternate option.',
        'className (optional): Allows you to style the Switch. Uses Tailwind CSS by default.',
        'style (optional): Allows you to style the Switch using inline styling.',
        'ariaDefValue (required): Describes the default value to screen readers and accessiblity tools. They will read: "Switch between {ariaDefValue} and {ariaAltValue}.',
        'ariaAltValue (required): Describes the alternate value to screen readers and accessibility tools.'
    ]
</script>

<Docs {componentName} {propsDetails}/>