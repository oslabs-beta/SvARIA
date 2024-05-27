export function ariaLabelcheck(curNode, parameters) {
    if(import.meta.env.VITE_SVARIA_MODE != 'debug'){
        return;
    }

    //console.log(parameters)
    //console.log(curNode.attributes)
    //console.log('current node', curNode.nodeName)

    if (curNode.attributes["aria-label"]) {
        console.log(`${curNode.nodeName}, with id of ${curNode.id}: check passed: aria-label present`)
    }
    if (!curNode.attributes["aria-label"]) {
        console.log(`${curNode.nodeName}, with id of ${curNode.id}: This type of element requires a property called an aria-label. Please add one`)
    }
}

export function colorContrastCheck(curNode, parameters) {
    if(import.meta.env.VITE_SVARIA_MODE != 'debug'){
        return;
    }
    const compStyles = window.getComputedStyle(curNode);
    // console.log(curNode.nodeName, compStyles.getPropertyValue("color"))
    // console.log(curNode.nodeName, compStyles.getPropertyValue("background-color"))
    fetch('https://www.aremycolorsaccessible.com/api/are-they', {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify({ colors: [compStyles.getPropertyValue("color"), compStyles.getPropertyValue("background-color")] }),
    })
        .then((response) => response.json())
        .then((json) => {
            //console.log(json)
            if (json.overall == 'Yup') { console.log(`${curNode.nodeName}, with id of ${curNode.id}: color contrast check passed`) }
            else { console.log(`${curNode.nodeName}, with id of ${curNode.id}: Background and text colors do not meet contrast requirement, please adjust colors`) }
        });
    //console.log('class', curNode.attributes["class"])
}


