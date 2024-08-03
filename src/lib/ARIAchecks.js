import { rgb, score } from 'wcag-contrast';

const toRGBArray = (rgbStr) => rgbStr.match(/\d+/g).map(Number);

export function ariaLabelcheck(curNode) {
	if (import.meta.env.VITE_SVARIA_MODE != 'debug') {
		return;
	}
	if (!curNode.attributes['aria-label']) {
		console.warn(
			`${curNode.nodeName}, with id of ${curNode.id}: This type of element requires a property called an aria-label. Please add one`
		);
	}
}
function getColors(curNode) {
	const compStyles = window.getComputedStyle(curNode);
	let backgroundColor = compStyles.getPropertyValue('background-color');
	let iterations = 0;
	let parentNode = curNode.parentNode;
	while (
		backgroundColor == 'rgba(0, 0, 0, 0)' &&
		iterations < 3 &&
		parentNode.nodeName !== 'HTML'
	) {
		const compStylesParent = window.getComputedStyle(parentNode);
		backgroundColor = compStylesParent.getPropertyValue('background-color');
		iterations++;
		parentNode = parentNode.parentNode;
	}
	if (backgroundColor == 'rgba(0, 0, 0, 0)') {
		backgroundColor = 'rgb(255, 255, 255)';
	}
	let foregroundColor = compStyles.getPropertyValue('color');
	const compStylesParent = window.getComputedStyle(parentNode);
	let parentBackgroundColor = compStylesParent.getPropertyValue('background-color');
	while (
		parentBackgroundColor == 'rgba(0, 0, 0, 0)' &&
		iterations < 3 &&
		parentNode.nodeName !== 'HTML'
	) {
		const compStylesParent = window.getComputedStyle(parentNode);
		parentBackgroundColor = compStylesParent.getPropertyValue('background-color');
		iterations++;
		parentNode = parentNode.parentNode;
	}
	if (parentBackgroundColor == 'rgba(0, 0, 0, 0)') {
		parentBackgroundColor = null;
	}
	return { backgroundColor, foregroundColor, parentBackgroundColor };
}
export function colorContrastCheck(curNode) {
	if (import.meta.env.VITE_SVARIA_MODE != 'debug') {
		return;
	}
	const { foregroundColor, backgroundColor } = getColors(curNode);
	checkColors(curNode, foregroundColor, backgroundColor, false);
}
export function parentColorContrastCheck(curNode) {
	if (import.meta.env.VITE_SVARIA_MODE != 'debug') {
		return;
	}
	const { parentBackgroundColor, backgroundColor } = getColors(curNode);
	if (parentBackgroundColor) checkColors(curNode, backgroundColor, parentBackgroundColor, true);
}
function checkColors(curNode, foregroundColor, backgroundColor, isParent) {
	const parentString = isParent ? "'s parent" : '';
	if (foregroundColor === backgroundColor) {
		console.error(
			`${curNode.nodeName}${parentString}, with id of ${curNode.id}: Background and text colors do not meet contrast requirement, please adjust colors`
		);
		return;
	}

	const fgArray = toRGBArray(foregroundColor);
	const bgArray = toRGBArray(backgroundColor);

	const result = rgb(fgArray, bgArray);

	const _score = score(result);
	if (_score == 'AA') {
		console.warn(
			`${curNode.nodeName}${parentString}, with id of ${curNode.id}: Background and foreground colors contrast colors can be improved`
		);
	}
	if (_score == 'Fail') {
		console.error(
			`${curNode.nodeName}${parentString}, with id of ${curNode.id}: Background and foreground colors do not meet contrast requirement, please adjust colors`
		);
	}
}
