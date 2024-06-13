export function ariaLabelcheck(curNode, parameters) {
	if (import.meta.env.VITE_SVARIA_MODE != 'debug') {
		return;
	}

	//console.log(parameters)
	//console.log(curNode.attributes)
	//console.log('current node', curNode.nodeName)

	// if (curNode.attributes['aria-label']) {
	// 	console.log(`${curNode.nodeName}, with id of ${curNode.id}: check passed: aria-label present`);
	// }
	if (!curNode.attributes['aria-label']) {
		console.warn(
			`${curNode.nodeName}, with id of ${curNode.id}: This type of element requires a property called an aria-label. Please add one`
		);
	}
}

function getColors(curNode) {
	const compStyles = window.getComputedStyle(curNode);
	// console.log('color: ', curNode.nodeName, curNode.id, compStyles.getPropertyValue("color"))
	// console.log('bg-color: ', curNode.nodeName, curNode.id,compStyles.getPropertyValue("background-color"))

	let backgroundColor = compStyles.getPropertyValue('background-color');

	let iterations = 0
	//check parent for background color for up to 3 iterations
	let parentNode = curNode.parentNode
	while (backgroundColor == 'rgba(0, 0, 0, 0)' && iterations < 3) {
		//console.log('parent node: ',parentNode.nodeName, 'parent node id:', parentNode.id)
		//console.log('parent color', window.getComputedStyle(parentNode).getPropertyValue("background-color"))
		const compStylesParent = window.getComputedStyle(parentNode)
		backgroundColor = compStylesParent.getPropertyValue("background-color")
		iterations++
		parentNode = parentNode.parentNode
	}

	if (backgroundColor == 'rgba(0, 0, 0, 0)') {
		//console.log('No background color found defaulting to white');
		backgroundColor = 'rgb(255, 255, 255)';
	}

	let foregroundColor = compStyles.getPropertyValue('color');

	const compStylesParent = window.getComputedStyle(parentNode)
	let parentBackgroundColor = compStylesParent.getPropertyValue("background-color");
	while (parentBackgroundColor == 'rgba(0, 0, 0, 0)' && iterations < 3) {
		//console.log('parent node: ',parentNode.nodeName, 'parent node id:', parentNode.id)
		//console.log('parent color', window.getComputedStyle(parentNode).getPropertyValue("background-color"))
		const compStylesParent = window.getComputedStyle(parentNode)
		parentBackgroundColor = compStylesParent.getPropertyValue("background-color")
		iterations++
		parentNode = parentNode.parentNode
	}

	if (parentBackgroundColor == 'rgba(0, 0, 0, 0)') {
		//console.log('No parent background color found setting to null');
		parentBackgroundColor = null
	}


	return ({ backgroundColor, foregroundColor, parentBackgroundColor })

}

export function colorContrastCheck(curNode, parameters) {
	if (import.meta.env.VITE_SVARIA_MODE != 'debug') {
		return;
	}
	const { parentBackgroundColor, foregroundColor, backgroundColor } = getColors(curNode)
	checkColors(curNode, foregroundColor, backgroundColor, false)
}

export function parentColorContrastCheck(curNode) {
	const { parentBackgroundColor, foregroundColor, backgroundColor } = getColors(curNode)

	if (parentBackgroundColor == null) console.log("Cannot check parent background color")
	else checkColors(curNode, backgroundColor, parentBackgroundColor, true)
}

function checkColors(curNode, foregroundColor, backgroundColor, isParent) {

	const parentString = isParent ? "'s parent" : ''

	if (foregroundColor === backgroundColor) {
		console.error(
			`${curNode.nodeName}${parentString}, with id of ${curNode.id}: Background and text colors do not meet contrast requirement, please adjust colors`
		);
		return;
	}


	fetch('https://www.aremycolorsaccessible.com/api/are-they', {
		mode: 'cors',
		method: 'POST',
		body: JSON.stringify({ colors: [backgroundColor, foregroundColor] })
	})
		.then((response) => response.json())
		.then((json) => {
			//console.log(json)
			if (json.overall == 'Yup') {
				// console.log(`${curNode.nodeName}${parentString}, with id of ${curNode.id}: color contrast check passed`);
			} 
			else if (json.overall == 'Kinda') {
				console.warn(`${curNode.nodeName}${parentString}, with id of ${curNode.id}: Background and foreground colors contrast colors can be improved`);
			} 
			else  {
				console.error(
					`${curNode.nodeName}${parentString}, with id of ${curNode.id}: Background and foreground colors do not meet contrast requirement, please adjust colors`
				);
				// console.error(
				// 	`${curNode.nodeName}${parentString}, with id of ${curNode.id}: BG: ${backgroundColor} FG: ${foregroundColor}`
				// );
			}
		});
	//console.log('class', curNode.attributes["class"])
}
