import {component$} from "@builder.io/qwik";
import type {IconProps} from "~/types/IconTypes";



export default component$<IconProps>(({onClick$, ...props}, ) => {
    return (
        <svg onClick$={onClick$} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" class={props.class}>
            <path d="M7.74219 9.5H26.7422" stroke="#582467" stroke-width="2" stroke-linecap="round"/>
            <path d="M7.74219 16.625H26.7422" stroke="#582467" stroke-width="2" stroke-linecap="round"/>
            <path d="M7.74219 23.75H19.0234" stroke="#582467" stroke-width="2" stroke-linecap="round"/>
        </svg>
    )
});
