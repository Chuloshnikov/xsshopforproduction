import type { PropFunction} from "@builder.io/qwik";
import {component$, useId} from "@builder.io/qwik";

interface QTextAreaProps {
    value?: string;
    onInput$?: PropFunction<(e: Event) => any>;

    name?: string;
    placeholder?: string;
    label?: string;
}

export default component$<QTextAreaProps>(({value, onInput$, name, placeholder, label}) => {
    const id = useId();

    return (
        <label for={id} class={'text-main font-medium leading-[19.2px] flex flex-col gap-3'}>{label}
            <textarea id={id} name={name} value={value} onInput$={onInput$} placeholder={placeholder} rows={3}
                   class={'w-full border-b-[1px] border-accent2 placeholder-accent2 leading-[20.8px] text-main bg-transparent pb-2'}
            />
        </label>
    );
});
