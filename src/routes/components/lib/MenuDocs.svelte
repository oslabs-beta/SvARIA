<script>

    import Docs from '../Docs.svelte';
    
    
    let docsProps=[
            "menuItems (required): an array that contains the labels for all elements in menu", 
            "link (optional): The link that clicking on the element will direct you to, this gets passed into the indiviual menuItems array as a key in the individual menu item object",
            "onClick (optional): The function that clicking on the element will invoke, this gets passed into the indiviual menuItems array as a key in the individual menu item object",
            "linkId (optional): Uniquely identifies an individual menu item, this gets passed into the indiviual menuItems array as a key in the individual menu item object",
            "linkClass (optional): provides a class to an individual menu item, this gets passed into the indiviual menuItems array as a key in the individual menu item object. Tailwind can be used to adjust styling here",
            "linkStyle (optional): allows you to use inline styling  for an individual menu item, this gets passed into the indiviual menuItems array as a key in the individual menu item object. e.g. linkStyle='color:blue'",
            "buttonContent (optional): Provides content for the button that opens the menu. If not entered, this will default to 'Menu'",
            "buttonId (optional):  Uniquely identifies the button that opens the menu",
            "buttonAriaLabel (optional): Provides an aria-label for the button that opens the menu. If this is not specified, it will defaul to the buttonContent ",
            "buttonClass (optional): provides a class for the button that opens the menu. Tailwind can be used to adjust styling here",
            "buttonStyle (optional): allows you to use inline styling for all the button that opens the menu. e.g. buttonStyle='color:red' ",
            "listId (optional): uniquely identifies all the list items in the menu",
            "listClass (optional): provides a class for the list items in the menu. Tailwind can be used to adjust styling here",
            "listStyle (optional): allows you to use inline styling for all the list items in the menu. e.g. listStyle='background-color:orange'", 
            "arrowClass (optional): provides a class for all the arrows. Tailwind can be used to adjust styling here"
    ]
    
    </script>
    
    <div class= 'text-sm text-left'>
    <Docs componentName="Tree" propsDetails={docsProps}/>
    </div> 