<script>

    import Docs from '../Docs.svelte';
    
    
    let docsProps=[
            "tree (required): an object that contains the labels and an array of children for all elements in tree", 
            "labelId (optional): Uniquely identifies an individual label, this gets passed into the tree object as a key in the individual element",
            "link (optional): The link that clicking on the element will direct you to, this gets passed into the tree object as a key in the individual element",
            "onClick (optional): The funcyion that clicking on the element will invoke, this gets passed into the tree object as a key in the individual element",
            "arrowId (optional):  Uniquely identifies an individual arrow, this gets passed into the tree object as a key in the individual element",
            "liId (optional): Provides an id for all the elements in the tree",
            "labelClass (optional): provides a class for all the labels. Tailwind can be used to adjust styling here",
            "arrowClass (optional): provides a class for all the arrows. Tailwind can be used to adjust styling here",
            "liClass (optional): provides a class for all the elements in the tree. Tailwind can be used to adjust styling here e.g. the default is set to padding",
            "labelStyle (optional): allows you to use inline styling for all the labels. e.g. labelStyle='color:red'",
            "arrowStyle (optional): allows you to use inline styling for all the arrows. e.g. arrowStyle='color:blue'",
            "liClass (optional): allows you to use inline styling for all the elements e.g. liStyle='color:black"
    ]
    
    </script>
    
    <div class= 'text-sm text-left'>
    <Docs componentName="Tree" propsDetails={docsProps}/>
    </div> 
    