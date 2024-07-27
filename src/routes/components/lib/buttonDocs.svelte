<script>

    import Docs from '../Docs.svelte';
    
    
    let docsProps=[
            "content (optional): Provides the content for the button. If not specified this will default to 'This is a button'", 
            "ariaLabel (optional): Provides an accessible aria-label for the button. If not specified, this will default to the content of the button",
            "id (optional): Uniquely identifies the button",
            "className (optional): Provides a class to the button. Tailwind can be use to adjust styling here",
            "type (optional):  This can be 'button', 'submit' or 'reset'. If not specified this will default to 'button'",
            "style (optional): Allows you to use inline styling for all the labels. e.g. style='color:orange'",
    ]
    
    </script>
    
    <div class= 'text-sm text-left'>
    <Docs componentName="Button" propsDetails={docsProps}/>
    </div> 