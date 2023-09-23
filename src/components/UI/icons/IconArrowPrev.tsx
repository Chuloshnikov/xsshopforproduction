import {component$} from "@builder.io/qwik";
import type {IconProps} from "~/types/IconTypes";

export default component$<IconProps>(({onClick$, ...props}) => {
    return (
        <svg class={props.class} onClick$={onClick$} xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
            <path d="M5.32129 1.35803L0.679293 6.00003L5.32129 10.642" stroke="#582467" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
});
