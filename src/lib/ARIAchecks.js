export function ariaLabelcheck(curNode, parameters) {
	if (import.meta.env.VITE_SVARIA_MODE != 'debug') {
		return;
	}

	//console.log(parameters)
	//console.log(curNode.attributes)
	//console.log('current node', curNode.nodeName)

	if (curNode.attributes['aria-label']) {
		console.log(`${curNode.nodeName}, with id of ${curNode.id}: check passed: aria-label present`);
	}
	if (!curNode.attributes['aria-label']) {
		console.warn(
			`${curNode.nodeName}, with id of ${curNode.id}: This type of element requires a property called an aria-label. Please add one`
		);
	}
}

export function colorContrastCheck(curNode, parameters) {
	if (import.meta.env.VITE_SVARIA_MODE != 'debug') {
		return;
	}
	const compStyles = window.getComputedStyle(curNode);
	console.log('color: ', curNode.nodeName, curNode.id, compStyles.getPropertyValue("color"))
	console.log('bg-color: ', curNode.nodeName, curNode.id,compStyles.getPropertyValue("background-color"))

	let backgroundColor = compStyles.getPropertyValue('background-color');

	let iterations = 0	
	//check parent for background color for up to 3 iterations
	while(backgroundColor == 'rgba(0, 0, 0, 0)' && iterations < 3){
		let parentNode = curNode.parentNode
		const compStylesParent = window.getComputedStyle(parentNode)
		backgroundColor = compStylesParent.getPropertyValue("background-color")
		iterations++

		// if(backgroundColor != 'rgba(0, 0, 0, 0)'){
		// 	console.log(`Using parent's background color for ${curNode.nodeName}, with id of ${curNode.id}`)
		// }
	}

	if (backgroundColor == 'rgba(0, 0, 0, 0)') {
		console.log('No background color found defaulting to white');
		backgroundColor = 'rgb(255, 255, 255)';
	}

	let forergroundColor = compStyles.getPropertyValue('color');
	if (forergroundColor === backgroundColor) {
		console.error(
			`${curNode.nodeName}, with id of ${curNode.id}: Background and text colors do not meet contrast requirement, please adjust colors`
		);
		return;
	}

	fetch('https://www.aremycolorsaccessible.com/api/are-they', {
		mode: 'cors',
		method: 'POST',
		body: JSON.stringify({ colors: [backgroundColor, forergroundColor] })
	})
		.then((response) => response.json())
		.then((json) => {
			//console.log(json)
			if (json.overall == 'Yup') {
				console.log(`${curNode.nodeName}, with id of ${curNode.id}: color contrast check passed`);
			} else {
				console.error(
					`${curNode.nodeName}, with id of ${curNode.id}: Background and text colors do not meet contrast requirement, please adjust colors`
				);
			}
		});
	//console.log('class', curNode.attributes["class"])
}
