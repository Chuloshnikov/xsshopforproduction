import {component$, Slot, useSignal} from "@builder.io/qwik";
import IconPlus from "~/components/UI/icons/IconPlus";
import IconMinus from "~/components/UI/icons/IconMinus";

export interface AccordionProps {
    title: string;
    defaultOpened?: boolean;
}

export default component$<AccordionProps>(({title, defaultOpened = false}) => {
    const opened = useSignal(defaultOpened);
    return (
        <div class={'flex flex-col gap-3'}>
            <div class={`flex justify-between items-center`}>
                <h2 class={'font-medium leading-[19.2px] text-main w-[212px] lg:w-fit lg:text-xl lg:leading-[24px]'}>
                    {title}
                </h2>
                <span class={'mr-2'} onClick$={() => opened.value = !opened.value}>
                    {opened.value ? <IconMinus/> : <IconPlus/>}
                </span>
            </div>
                <div class={`${opened.value ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden transition-[max-height] duration-200 ease-linear text-sm 
            text-main leading-[19.6px] xl:text-md xl:leading-[22.4px]`}>
                    <Slot/>
                </div>
        </div>
    )
});
