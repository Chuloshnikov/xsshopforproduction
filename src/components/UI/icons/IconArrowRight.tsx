import {component$} from "@builder.io/qwik";


export default component$<{class?: string}>((props) => {
    return (
        <svg class={props.class} xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
            <path d="M12.9551 1L16.9551 5L12.9551 9" stroke="#582467" stroke-width="1.41935" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 5L16.6129 5" stroke="#582467" stroke-width="1.41935" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
});
