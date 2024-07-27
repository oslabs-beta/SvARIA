// import { isJsxClosingFragment } from 'typescript';
import { createToggleStore } from '../store/index.js';

const createToggle = () => {
	const toggle = createToggleStore(false);
	const open = () => {
		toggle.set(true);
	};

	const close = () => {
		toggle.set(false);
	};
	return { open, close, subscribe: toggle.subscribe };
};
export default createToggle;
