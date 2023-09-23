import type { PropFunction} from "@builder.io/qwik";
import {component$, Slot, useId} from "@builder.io/qwik";

interface InputProps {
    type: string;
    value?: string | number;
    onInput$?: PropFunction<(e: Event) => any>;
    placeholder?: string;
}

export default component$<InputProps>(({type, value, onInput$, placeholder}) => {
    const id = useId();
    return (
        <div class={'h-16 rounded-xl border-[1px] pl-4 pr-5 py-2.5 flex flex-col gap-1'}>
            <label for={id} class={' text-xs leading-[120%] text-accent3'}><Slot/></label>
            <input type={type} id={id} placeholder={placeholder} onInput$={onInput$} value={value}
                   class={`font-medium text-main placeholder-accent2 leading-[120%]`}/>
        </div>
    );
});
