import type { PropFunction} from "@builder.io/qwik";
import {component$} from "@builder.io/qwik";

interface InputProps {
    type: string;
    value?: string | number;
    onInput$?: PropFunction<any>;
    placeholder?: string;
}

export default component$<InputProps>(({type, value, onInput$, placeholder}) => {
    return (
        <input type={type} value={value} onInput$={onInput$} placeholder={placeholder}
            class={'w-full px-4 py-2.5 font-medium tracking-[0.5px] border-[1px] border-[#A5A3A7] rounded-lg text-main placeholder-[#79767C]'}
        />
    );
});
