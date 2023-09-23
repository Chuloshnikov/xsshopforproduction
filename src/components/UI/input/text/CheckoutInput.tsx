import type { PropFunction} from "@builder.io/qwik";
import {component$} from "@builder.io/qwik";

interface InputProps {
    type: string;
    value?: string | number;
    onInput$?: PropFunction<(e: Event) => any>;
    placeholder?: string;
    class?: string;
}

export default component$<InputProps>(({type, onInput$, placeholder, value, ...props}) => {

    return (
        <input type={type} class={`border-[1px] border-accent2 rounded-[10px] pl-4 pr-5 py-5 placeholder-accent2 
        text-main font-medium leading-[130%] xl:flex-grow ${props.class}`}
               placeholder={placeholder} value={value} onInput$={onInput$}/>

    );
});
