import {component$} from "@builder.io/qwik";

export default component$<{direction?: 'horizontal' | 'vertical'; class?: string}>(({direction = "horizontal", ...props}) => {
    return (
        <span class={`bg-main ${direction === 'horizontal' ? "w-full h-[1px]" : "w-[1px]"} ${props.class} `}>
        </span>
    );
});
