import type { PropFunction} from "@builder.io/qwik";
import {component$, Slot} from "@builder.io/qwik";

interface ApplyButtonProps {
    class?: string;
    onClick$?: PropFunction<any>;

}

export default component$<ApplyButtonProps>(({onClick$, ...props}) => {
    return (
        <button onClick$={onClick$}
                class={`w-full h-12 bg-main text-white rounded-xl text-center ${props.class}`}>
            <Slot/>
        </button>
    );
});
