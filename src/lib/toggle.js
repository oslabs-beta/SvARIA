import { writable } from 'svelte/store';
function createToggleStore(b) {
	return writable(b);
}

const createToggle = (n) => {
	const toggle = createToggleStore(n);
	const open = () => {
		toggle.set(true);
	};

	const close = () => {
		toggle.set(false);
	};
	return { open, close, subscribe: toggle.subscribe };
};
export default createToggle;
