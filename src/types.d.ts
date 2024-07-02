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
export type ButtonType = 'button' | "reset" | 'submit';
export type MenuItems = {
    label?: string;
    linkStyle?: string;
    linkID?: string;
    linkClass?: string;
    onClick?: () => void;
};
export type TabItems = {
    label: string;
    value: number;
    component: any;
    id: string;
    tabContentId: string;
    tabLabelId: string;
};
export type AccordionObj = {
    name: string;
    heading: string;
    slot: ConstructorOfATypedSvelteComponent;
};
export type ARIAColorsObj = {
    parentBackgroundColor: string;
    foregroundColor: string;
    backgroundColor: string;
};
export type RadioObj = {
    label: string;
    labelClass?: string;
    labelId?: string;
    labelStyle?: string;
};
