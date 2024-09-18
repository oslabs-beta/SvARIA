<script>

	import Docs from '../Docs.svelte';
	
	
    let docsProps=[
            "values (required): an array that contains all the values for the spin button", 
            "value (optional): The initial index of the value that the spin button starts on. If not specified, this will default to 0",
            "className (optional): provides a class to the spin button component. Tailwind can be used to adjust styling here",
            "id (optional):  Uniquely identifies the spin button component",
            "style (optional): allows you to use inline styling  for an individual menu item, this gets passed into the indiviual menuItems array as a key in the individual menu item object. e.g. style='background-color:blue'",
            "increaseButtonContent (optional): Provides content for the button that increments. If not entered, this will default to '+'",
            "increaseButtonId (optional):  Uniquely identifies the button that increments",
            "increaseButtonClass (optional): provides a class to the increment button. Tailwind can be used to adjust styling here", 
            "increaseButtonStyle (optional): allows you to use inline styling  for the increment button. e.g. style='background-color:green",
            "currentValueId (optional): Uniquely identifies the current value",
            "currentValueClass (optional): provides a class to the current value. Tailwind can be used to adjust styling here",
            "currentValueStyle (optional): allows you to use inline styling for the current value. e.g. style='color:purple",
            "decreaseButtonContent (optional): Provides content for the button that decrements. If not entered, this will default to '-'",
            "decreaseButtonId (optional):  Uniquely identifies the button that decrements",
            "decreaseButtonClass (optional): provides a class to the decrement button. Tailwind can be used to adjust styling here", 
            "decreaseButtonStyle (optional): allows you to use inline styling  for the decrement button. e.g. style='background-color:red",
    ]
	
	</script>
	
	<div class= 'text-sm text-left'>
	<Docs componentName="Spin Button" propsDetails={docsProps}/>
	</div> 