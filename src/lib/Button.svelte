<script>
    let isError = 'hello'
    export let content = 'Hi'
    export let ariaLabel
    export let id
    export let style
    export let className = 'button'

    function ARIAcheck(curNode, parameters) {
        //console.log(parameters)
        //console.log(curNode.attributes)
        if (curNode.attributes["aria-label"]) {
            console.log('check passed: aria-label present')
        }
        if (!curNode.attributes["aria-label"]) {
            console.log('This type of element requires a property called an aria-label. Please add one')
        }
        const compStyles = window.getComputedStyle(curNode);
        //console.log(compStyles.getPropertyValue("color"))
        //console.log(compStyles.getPropertyValue("background-color"))
        fetch('https://www.aremycolorsaccessible.com/api/are-they', {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify({ colors: [compStyles.getPropertyValue("color"), compStyles.getPropertyValue("background-color")] }),
        })
        .then((response) => response.json())
        .then((json) => {
            //console.log(json)
            isError = 'color is wrong'
            if (json.overall == 'Yup') 
                {console.log('color contrast check passed')}
            else
                {console.log('Background and text colors do not meet contrast requirement, please adjust colors')}
        });
        //console.log('class', curNode.attributes["class"])
    } 
    </script>

    <style>
        :global(.button) {
            color:#570000;
            background-color: #E6E6E6;
            height: 40px;
            width: 100px;
            border-radius: 7%;
            font-size: large;
        }
    </style>

    <button use:ARIAcheck={2} id={id} aria-label={ariaLabel} class={className} on:click {style}>{content}</button>
