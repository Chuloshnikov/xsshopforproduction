import {component$, Slot, useSignal} from "@builder.io/qwik";
import IconPlus from "~/components/UI/icons/IconPlus";
import IconMinus from "~/components/UI/icons/IconMinus";
import FaqClose from "../../../assets/icons/FaqClose.svg?jsx";
import FaqOpen from "../../../assets/icons/FaqOpen.svg?jsx";

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
                <div class={'mr-2'} onClick$={() => opened.value = !opened.value}>
                    {opened.value ? (<div class="rounded-full py-2 px-1 bg-main"><FaqClose/></div>) : (<div class="rounded-full p-1 bg-accent4"><FaqOpen/></div>)}
                </div>
            </div>
                <div class={`${opened.value ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden transition-[max-height] duration-200 ease-linear text-sm 
            text-main leading-[19.6px] xl:text-md xl:leading-[22.4px]`}>
                    <Slot/>
                </div>
        </div>
    )
});
