<script>

    import Docs from '../../Docs.svelte';
    
    
    let docsProps=[
            "showModal (required): needs to be declared within the script tags",
            "the svaria-toolkit button: can be imported to use as the button to open the modal, See documentation on Button component for variables that can be declared there", 
            "bind:showModal (required):  Needs to be declared within the modal component for the opening functionality",
            "modalId (optional): Provides an unique identifier for the entire modal. If this is not declared, it will default to 'modal'",
            "modalClass (optional): provides a class for the entire modal. Tailwind can be used to adjust styling here",
            "style (optional): allows you to use inline styling for the entire modal. e.g. style='background-color:red'",
            "closeModalMessage (optional): Content for the close modal button. if this is not defined, it will default to 'close Modal",
            "closeButtonId (optional): uniquely identifies the button to close the modal",
            "closeButtonClass (optional): provides a class for the button to close the modal. Tailwind can be used to adjust styling here e.g. the default is set to padding",
            "closeButtonStyle (optional): allows you to use inline styling for the entire modal. e.g. style='color:blue'",
            "**Please note that for elements used within the modal dialog slots, our ARIA check functions will not run on those but these functions can be imported and added as a 'use:colorContrastCheck' or 'use:ariaLabel'** ",
    ]
    
    </script>
    
    <div class= 'text-sm text-left'>
    <Docs componentName="Modal" propsDetails={docsProps}/>
    </div> 