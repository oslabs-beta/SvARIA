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