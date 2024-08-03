<script>
    import Docs from "../Docs.svelte"

    let propsDetails = [
        "options (required): An array of objects which contains the options available for your end-user to select from. Each object in the array has several properties you can define as well. They are as follows:",
        "options --> label (required): This text will represent this option to the end-user.",
        "options --> labelId (optional): Uniquely identifies this label.",
        "options --> labelClass (optional): Allows you to style this label individually.",
        "options --> labelStyle (optional): Allows you to use inline styling for this label individually.",
        "options --> inputClass (optional): Allows you to style the appearance of this 'input' element individually, which is what is selected by the end-user to mark this choice.",
        "options --> inputStyle (optional): Allows you to use inline styling for the input element individually.",
		"id (optional): Unqiuely identifies the RadioGroup element.",
        "ariaLabel (required): Identifies the RadioGroup to screen readers and accessibility tools.",
        "className: (optional): Allows you to style the RadioGroup element as a whole. e.g. style='color:red'",
        "style (optional): Allows you to use inline styling for the RadioGroup element as a whole.",
        "groupLabelClass (optional): Allows you to style all labels at once.",
        "groupLabelStyle (optional): Allows you to use inline styling to style all labels at once.",
        "groupInputClass: (optional: Allows you to style all input elements at once.",
        "groupInputStyle: (optional): Allows you to use inline styling to style all input elements at once.",
        "selectedOption (required): You MUST instantiate a selectedOption variable in the same file where you instantiate the RadioGroup component. You must also bind this property inside of your RadioGroup element with the command 'bind:selectedOption'."
    ]
</script>

<Docs componentName="RadioGroup" {propsDetails}></Docs>