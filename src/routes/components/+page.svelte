<script>
    // import in the sanbox and docs for each component 
    // create varibables that will render in sanbox and docs
    // write a handle clicke that will take the imput and populate variables
    const handleClick = (e) => {
        console.log('event', e)
    }
</script>

<!-- 
create a list element to hold all of our componenets that will be rendered to the left side of the page
render when the list elements are clicked then they should render to the page the different elements
render the sandbox based off of the current element
render the 
-->


<ul>
    <li on:click={() => handleClick('button')}>SvARIA Button</li>
</ul>