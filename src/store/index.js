import {writable} from "svelte/store";
export const openModal = writable (false);
export const currentComponent = writable({docs: null, label: null, source: null});