import {component$} from "@builder.io/qwik";
import type {IconProps} from "~/types/IconTypes";


export default component$<IconProps>((props) => {
    return (
        <svg class={'fill-[#582467]' + props.class} xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
            <path d="M0.678711 10.6421L5.32071 6.00009L0.678711 1.3581" stroke="#582467" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
});
