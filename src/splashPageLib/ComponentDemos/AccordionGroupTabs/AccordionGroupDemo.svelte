<script>
    import AccordionGroup from "../../../lib/AccordionGroup_ts.svelte";
    import AccordionGroupTab from "./AccordionGroupTab.svelte";
    import ButtonTab from "../ButtonTabs/ButtonTab.svelte";
    import CheckboxTab from "../CheckboxTabs/CheckboxTab.svelte";
const group = [
    {
        name: 'Accordion Group',
        heading: "Accordion Group Component",
        slot: AccordionGroupTab,
    },
    {
        name: 'Button',
        heading: 'Button Component',
        slot: ButtonTab,
    },
    {
        name: 'Checkbox',
        heading: 'Checkbox Component',
        slot: CheckboxTab,
    },
];
</script>

<AccordionGroup
    groupHeadingClass = 'p-9'
    groupComponentClass = 'min-h-96'
    {group}
    ariaLabel="Accordion Demo"
    style=''
/>