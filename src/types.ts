import type { HTMLAttributes } from 'svelte/elements';

export type FormElementsObj = {
    name: string,
    type: string,
    labelValue: string,
    labelId?: string,
    inputId?: string,
    ariaLabel?: string
}

export interface CustomDivAttributes extends HTMLAttributes<HTMLDivElement> {
  heading?: string;
}

export type Routes = {
    href: string,
    name: string,
    linkStyle: string,
    linkClass: string
}

export type ButtonType = 'button' | "reset" | 'submit';

export type MenuItems = {
    label: string,
    linkStyle: string,
    linkID: string,
    linkClass: string,
    onClick: () => void,
}

export type TabItems = {
    label: string,
    component: ,
    tabContentId: string,
    tabLabelId: string
}