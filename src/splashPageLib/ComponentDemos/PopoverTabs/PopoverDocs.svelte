<script>
    import Docs from "../Docs.svelte"

    let propsDetails = [
        "popoverId (optional): Uniquely identifies the popover as a whole. Everything else is nested inside this element.",
		"popoverClass (optional): Class for the popover as a whole, use this for styling the element displayed while showPopover is true. Tailwind can be used to adjust styling here",
        "contentId (optional): Uniquely identifies the content within the popover.",
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

<Docs componentName="Popover" {propsDetails}>
    <div slot="details">
        <h3>This component is somewhat unusual in that it contains several other components which can be customized
            individually, hence the larger number of props. The basic pieces are the open button, the popover
            content (comprised of 2 slots, see below), and the close button.<br>
            <br>
            This component contains two optional "slots", "header" and "content". These can be used to insert your
            HTML code for the content you'd like to appear in the popover. Simply enclose your HTML tags between
            the open and close tags for the popover component, and set its "slot" property to either "header", or
            "content" depending which slot you intend the content to fill. This content will fall under the styling
            rules set on the "popoverClass" property, or "style" if you are using in-line styling.
        </h3>
    </div>
</Docs>