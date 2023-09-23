import type { PropFunction} from "@builder.io/qwik";
import {component$, Slot, useId} from "@builder.io/qwik";
interface InputProps {
    value?: string;
    onInput$?: PropFunction<(e: Event) => any>;
    placeholder?: string;
    class?: string;
}
export default component$<InputProps>(({onInput$, placeholder, value, ...props}) => {
    const id = useId()
    return (
        <div class={'flex flex-col gap-2'}>
            <label for={id} class={'leading-[150%] text-main font-medium'}><Slot/></label>
            <input type={"text"} class={`border-[1px] border-accent2 bg-bg rounded-[10px] pl-4 pr-5 py-5 placeholder-accent2 
                text-main text-center font-medium leading-[130%] xl:flex-grow ${props.class}`}
                   onInput$={onInput$} placeholder={placeholder} value={value}
            />
        </div>
    );
});
