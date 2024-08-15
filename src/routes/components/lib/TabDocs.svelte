<script>

    import Docs from '../Docs.svelte';
    
    
    let docsProps=[
            "items (required): an object that contains the labels and components for all elements in tab", 
            "tabLabelId (optional): Uniquely identifies the label of an individual tab, this gets passed into the items object as a key in the individual element. This will default to `tab-${row.value}` id not specified",
            "tabContentId (optional):  Uniquely identifies the content of an individual tab, this gets passed into the items object as a key in the individual element. This will default to `tabcontent-${row.value}` id not specified",
            "tabLabelClass (optional): provides a class for the particular tab label, this gets passed into the items object as a key in the individual element. Tailwind can be used to adjust styling here",
            "tabContentClass (optional): provides a class for the label particular tab content, this gets passed into the items object as a key in the individual element. Tailwind can be used to adjust styling here",
            "tabLabelStyle (optional): allows you to use inline styling for the particular tab label, this gets passed into the items object as a key in the individual element e.g. tabLabelStyle='color:blue'", 
            "tabContentStyle (optional): allows you to use inline styling for the particular tab content, this gets passed into the items object as a key in the individual element e.g. tabContentStyle='color:black'", 
            "id (optional): uniquely identifies the div that the entire tab component is nested in", 
            "className (optional): provides a class for the div that the entire tab component is nested in. Tailwind can be used to adjust styling here", 
            "style (optional): allows you to use inline styling for the div that the entire tab component is nested in e.g. style='background-color:orange", 
            "tabListId (optional): Uniquely identifies the div that contains all the tab labels",
            "tabListClass (optional): provides a class the div that contains all the tab labels. Tailwind can be used to adjust styling here ",
            "tabListStyle (optional): allows you to use inline styling for the div that contains all the tab labels e.g. style='background-color:red",
            "groupLabelClass (optional): provides the same class for all the labels. Tailwind can be used to adjust styling here.",
            "groupLabelStyle (optional): allows you to use inline styling for for all the labels e.g. style='background-color:orange'",
            "groupContentClass (optional): provides the same class for the content of all the tabs. Tailwind can be used to adjust styling here.",
            "groupLabelStyle (optional): allows you to use inline styling for the content of all the tabs e.g. style='background-color:purple'"
    ]
    
    </script>
    
    <div class= 'text-sm text-left'>
    <Docs componentName="Tab" propsDetails={docsProps}/>
    </div> 
