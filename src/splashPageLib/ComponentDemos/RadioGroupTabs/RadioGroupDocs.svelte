<script>
    import Docs from "../../../routes/components/Docs.svelte"

    let propsDetails = [
        "options (required): Uniquely identifies the popover as a whole. Everything else is nested inside this element.",
		"popoverClass (optional): Class for the popover as a whole, use this for styling the element displayed while showPopover is true. Tailwind can be used to adjust styling here",
        "contentId (optional): Unqiuely identifies the content within the popover.",
        "style: (optional): Allows you to use inline styling for the popover. e.g. style='color:red'",
        "openButtonId (optional): Uniquely identifies the button which opens the popover.",
        "openButtonContent (required): This text will appear inside the open button.",
        "openButtonAriaLabel: (required): This text will be read by screen readers when the open button is focused.",
        "openButtonStyle: (optional): Allows you to use inline styling for the open button.",
        "openButtonClass: (optional): Class for the open button. Tailwind can be used to adjust styling here.",
        "closeButtonId: (optional): Uniquely identifies the button closes the popover.",
        "closeButtonContent (required): This text will appear inside the close button.",
        "closeButtonAriaLabel (required): This text will be read by screen readers when the close button is focused.",
        "closeButtonClass (optional): Class for the close button. Tailwind can be used to adjust styling here.",
        "closeButtonStyle: (optional): Allows you to use inline styling for the close button."
    ]
</script>

<Docs componentName="Radio Group" {propsDetails}/>