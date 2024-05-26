export function ariaLabelcheck(curNode, parameters) {
    //console.log(parameters)
    //console.log(curNode.attributes)
    //console.log('current node', curNode.nodeName)

    if (curNode.attributes["aria-label"]) {
        console.log(`${curNode.nodeName}: check passed: aria-label present`)
    }
    if (!curNode.attributes["aria-label"]) {
        console.log(`${curNode.nodeName}: This type of element requires a property called an aria-label. Please add one`)
    }
}

export function colorContrastCheck(curNode, parameters) {
    const compStyles = window.getComputedStyle(curNode);
    // console.log(compStyles.getPropertyValue("color"))
    // console.log(compStyles.getPropertyValue("background-color"))
    fetch('https://www.aremycolorsaccessible.com/api/are-they', {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify({ colors: [compStyles.getPropertyValue("color"), compStyles.getPropertyValue("background-color")] }),
    })
        .then((response) => response.json())
        .then((json) => {
            //console.log(json)
            if (json.overall == 'Yup') { console.log(`${curNode.nodeName}: color contrast check passed`) }
            else { console.log(`${curNode.nodeName}: Background and text colors do not meet contrast requirement, please adjust colors`) }
        });
    //console.log('class', curNode.attributes["class"])
}


