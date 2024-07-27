// import { isJsxClosingFragment } from 'typescript';
import { createToggleStore } from '../store/index.js';

const createToggle = () => {
	const alertToggle = createToggleStore(false);
	const open = () => {
		alertToggle.set(true);
	};

	const close = () => {
		alertToggle.set(false);
	};
	return { open, close, subscribe: alertToggle.subscribe };
};
export default createToggle;
