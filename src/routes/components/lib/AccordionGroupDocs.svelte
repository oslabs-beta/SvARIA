<script>
    import Docs from "../../../routes/components/Docs.svelte";

    const componentName = 'Accordion Group';
    const propsDetails = [
        'className: (optional): Allows you to style the Accordion Group as a whole. Uses Tailwind CSS by default.',
        'style: (optional): Allows you to style the Accordion Group as a whole using inline styling.',
        'ariaLabel (optional): Identifies the Accordion Group as a whole to screen reader and accessibility tools.',
        'group (required): This array will contain the Accordion objects available to the end user. Each element will be an object containing the following properties:',
        'group --> id (required): Uniquely identifies this Accordion Object.',
        'group --> heading (required): This text will appear on the Accordion to identify it.',
        'group --> headingClass (optional): Allows you to style this Accordion Object.',
        'group --> headingStyle (optional): Allows you to use inline styling to style this Accordion object.'
    ]
</script>

<Docs {componentName} {propsDetails}/>