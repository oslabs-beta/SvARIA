import type { SvelteComponent } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { MouseEventHandler } from 'svelte/elements';

export type FormElementsObj = {
	name: string;
	type: string;
	labelValue: string;
	labelId?: string;
	inputId?: string;
	ariaLabel?: string;
	labelStyle?: string;
	labelClass?: string;
	inputStyle?: string;
	inputClass?: string;
};

export type CheckboxObj = {
	label: string;
	labelId?: string;
	labelClass?: string;
	labelStyle?: string;
	inputClass?: string;
	inputStyle?: string;
};

export interface CustomDivAttributes extends HTMLAttributes<HTMLDivElement> {
	heading?: string;
}

export type Routes = {
	href: string;
	name: string;
	linkStyle?: string;
	linkClass?: string;
	onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
};

export type ButtonType = 'button' | 'reset' | 'submit';

export type MenuItems = {
	label?: string;
	linkStyle?: string;
	linkID?: string;
	linkClass?: string;
	onClick?: () => void;
};

export type NavItems = {
	href: string;
	name: string;
	linkStyle?: string;
	linkClass?: string;
};

export type TabItems = {
	label: string;
	value?: number;
	component: any;
	id?: string;
	tabContentId?: string;
	tabContentClass?: string;
	tabContentStyle?: string;
	tabLabelId?: string;
	tabLabelClass?: string;
	tabLabelStyle?: string;
};

export type AccordionObj = {
	heading: string;
	id?: string;
	slot: ConstructorOfATypedSvelteComponent;
	headingClass?: string;
	headingStyle?: string;
};

export type ARIAColorsObj = {
	parentBackgroundColor: string;
	foregroundColor: string;
	backgroundColor: string;
};

export type RadioObj = {
	label: string;
	labelId: string;
	labelClass?: string;
	labelStyle?: string;
	inputClass?: string;
	inputStyle?: string;
};

export type EventObj = {
	getAttribute: string;
};

export type CompObj = {
	docs: ConstructorOfATypedSvelteComponent;
	label: string;
	source: string;
};
