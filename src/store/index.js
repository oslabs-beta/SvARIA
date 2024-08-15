import { writable } from 'svelte/store';
export const openModal = writable(false);
export function createToggleStore(b) {
	return writable(b);
}
