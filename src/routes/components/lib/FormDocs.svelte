<script>

    import Docs from '../Docs.svelte';
    
    
    let docsProps=[
            "formElements (required): an object that contains the form categories. 'name', 'type' and 'labelValue' are required.", 
            "name (required): the name that the form element will be associated with. This gets passed into the formElements object as a key in the individual element object",
            "type (required): the input type for the form element e.g. 'text' or 'password'. This gets passed into the formElements object as a key in the individual element object. If you set this to 'textarea' it will create a textarea html element, otherwise it will create an input element",
            "labelValue (required): the value that will show up for the form label. This gets passed into the formElements object as a key in the individual element object",
            "labelId (optional): Uniquely identifies an individual label. This gets passed into the formElements object as a key in the individual element object.",
            "labelClass (optional): provides a class for the individual label. This gets passed into the formElements object as a key in the individual element object. Tailwind can be used to adjust styling here",
            "labelStyle (optional): allows you to use inline styling for the individual label.This gets passed into the formElements object as a key in the individual element object e.g. labelStyle:'color:red'",
            "inputId (optional): Uniquely identifies an individual input. This gets passed into the formElements object as a key in the individual element object",
            "inputClass (optional): provides a class for the individual input. This gets passed into the formElements object as a key in the individual element object. Tailwind can be used to adjust styling here",
            "inputStyle (optional): allows you to use inline styling for the individual input.This gets passed into the formElements object as a key in the individual element object e.g. inputStyle:'background-color:green'",
            "method (optional): allows you to define an HTTP method. If not specified, this will default to 'POST'",
            "formId (optional): uniquely identifies the form",
            "formClass (optional): provides a class for the form. Tailwind can be used to adjust styling here",
            "formStyle (optional): allows you to use inline styling for the form e.g. formStyle='background-color:orange",
            "ariaLabel (optional): allows you to specifiy an accessibly aria-label for the form. If not specified, this will default to 'Form'",
            "submitFormContent (optional): allows you to specifiy the content on the Submit button. If not specified, this will default to 'Submit'",
            "submitButtonId (optional): uniquely identifies the Submit button",
            "submitButtonClass (optional): provides a class for the Submit button. Tailwind can be used to adjust styling here",
            "submitButtonStyle (optional): allows you to use inline styling for the Submit button e.g. submitButtonStyle='background-color:white",
            "groupLabelClass (optional): provides the same class for all the labels. Tailwind can be used to adjust styling here.",
            "groupLabelStyle (optional): allows you to use inline styling for for all the labels e.g. style='color:orange'",
            "groupInputClass (optional): provides the same class for the content of all the inputs. Tailwind can be used to adjust styling here.",
            "groupInputStyle (optional): allows you to use inline styling for the content of all the inputs e.g. style='background-color:purple'",
            'slot (optional): a slot with the name of content is available if if users wish to add another div to their form. To do this they can add a div with: <div slot="content"></div> in the Form component'
    ]
    
    </script>
    
    <div class= 'text-sm text-left'>
    <Docs componentName="Form" propsDetails={docsProps}/>
    </div> 
    