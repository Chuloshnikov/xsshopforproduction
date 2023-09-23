import {component$} from "@builder.io/qwik";

export default component$<{class?: string}>((props) => {
    return (
        <svg class={props.class} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 14 8" fill="none">
            <path d="M1.22559 1.11255L7.00039 6.88736L12.7752 1.11255" stroke="#B686C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
});
