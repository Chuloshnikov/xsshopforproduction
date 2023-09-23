import {component$, Slot, useSignal} from "@builder.io/qwik";
import IconArrowDown from "~/components/UI/icons/IconArrowDown";


interface SelectProps {
    name: string;
    class?: string;
}

export default component$<SelectProps>(({name, ...props}) => {
    const opened = useSignal<boolean>(false)
    return (
        <div class={'relative'}>
            <div class={`flex items-center gap-2.5 py-2 px-4 border-[1px] border-main rounded-[50px] font-medium leading-[19.2px] cursor-pointer ${props.class}`}
                 onClick$={() => opened.value = !opened.value}>
                {name} <IconArrowDown/>
            </div>
            {opened.value &&
                <>
                    <div onClick$={() => {
                        opened.value = false;
                    }} class={'fixed inset-0 z-[500]'}>
                    </div>
                    <div class={'absolute z-[600] top-10 bg-white p-6 rounded-[20px] flex flex-col shadow-[0px_10px_30px_0px_rgba(46,65,113,0.10)]'}>
                        <Slot/>
                    </div>
                </>
            }

        </div>
    );
});
