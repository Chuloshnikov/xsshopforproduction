import type { PropFunction} from "@builder.io/qwik";
import {component$, Slot} from "@builder.io/qwik";
import IconArrowRight from "~/components/UI/icons/IconArrowRight";

interface SubmitProps {
    onClick$?: PropFunction<any>;
}

export default component$<SubmitProps>(({onClick$}) => {
    return (
        <button type={"submit"} onClick$={onClick$} preventdefault:click class={"bg-main rounded-lg py-3.5 px-4 flex justify-between text-bg uppercase text-sm medium tracking-[0.25px] "}>
            <Slot/>
            <IconArrowRight class={'stroke-white'}/>
        </button>
    );
});
