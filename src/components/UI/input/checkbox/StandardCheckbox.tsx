import type { PropFunction} from "@builder.io/qwik";
import {component$, Slot, useId} from "@builder.io/qwik";

interface CheckboxInterface {
    name?: string;
    checked?: boolean;
    onCheck$?: PropFunction<any>;
}

export default component$<CheckboxInterface>(({name, onCheck$, checked}) => {
    const id = useId();
    return (
        <label for={id} onInput$={onCheck$} class={'text-main text-sm  font-medium leading-[16.8px] lg:leading-[19.2px] flex gap-2 w-fit'}>
            <input type={"checkbox"} id={id} name={name} checked={checked}
                class={'accent-main w-5 h-5 my-auto'}/>
            <Slot/>
        </label>
    );
});
