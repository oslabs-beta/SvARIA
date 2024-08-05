<script>

    import Docs from '../Docs.svelte';
    
    
    let docsProps=[
            "options (required): an object that contains the labels for the checkboxes. 'label' is required", 
            "label (required): the label that the checkbox will be associated with. This gets passed into the options array as a key in the individual element object",
            "selectedOption (required): needs to be defined in <script> tags to access element that is checked",
            "bind:selectedOption (required): Needs to be declared within the Checkbox component for functionality with the selected options",
            "labelClass (optional): provides a class for the individual label. This gets passed into the options array as a key in the individual element object. Tailwind can be used to adjust styling here",
            "labelStyle (optional): allows you to use inline styling for the individual label.This gets passed into the options array as a key in the individual element object e.g. labelStyle:'color:red'",
            "labelId (optional): Uniquely identifies an individual label. This gets passed into the options array as a key in the individual element object. If not specified, this will default to the label",
            "inputClass (optional): provides a class for the individual input. This gets passed into the options array as a key in the individual element object. Tailwind can be used to adjust styling here",
            "inputStyle (optional): allows you to use inline styling for the individual input.This gets passed into the options array as a key in the individual element object e.g. inputStyle:'accent-color:green'",
            "id (optional): uniquely identifies the checkbox component",
            "className (optional): provides a class for the checkbox component. Tailwind can be used to adjust styling here",
            "style (optional): allows you to use inline styling for the checkbox component e.g. style='background-color:orange",
            "ariaLabel (optional): allows you to specifiy an accessibly aria-label for the checkbox. If not specified, this will default to 'checkbox'",
            "groupLabelClass (optional): provides the same class for the content of all the labels. Tailwind can be used to adjust styling here.",
            "groupLabelStyle (optional): allows you to use inline styling for for all the labels e.g. style='color:blue'",
            "groupInputClass (optional): provides the same class for the content of all the inputs. Tailwind can be used to adjust styling here.",
            "groupInputStyle (optional): allows you to use inline styling for the content of all the inputs e.g. style='background-color:purple'",
            '**Please note the id of the individual checkbox input will default to `checkbox-` + index of the array**'
    ]
    
    </script>
    
    <div class= 'text-sm text-left'>
    <Docs componentName="Checkbox" propsDetails={docsProps}/>
    </div> 