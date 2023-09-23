import {component$, Slot, useSignal} from "@builder.io/qwik";
import IconPlus from "~/components/UI/icons/IconPlus";

export interface AccordionProps {
    title: string;
    class?: string;
    bodyClass?: string;
}

export default component$<AccordionProps>(({title, bodyClass, ...props}) => {
    const opened = useSignal(false);
    return (
        <div class={'flex flex-col gap-3'}>
            <div class={`flex justify-between items-center ${props.class}`}>
                <h2 class={'font-medium leading-[19.2px] text-main w-[212px] lg:w-fit lg:text-xl lg:leading-[24px]'}>
                    {title}
                </h2>
                <span class={'p-2 bg-accent4 rounded-full flex items-center justify-center cursor-pointer'}
                    onClick$={() => opened.value = !opened.value}>
                    <IconPlus/>
                </span>
            </div>
            <p class={`${opened.value ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden transition-[max-height] duration-200 ease-linear text-sm 
            text-main leading-[19.6px] xl:text-md xl:leading-[22.4px] ${bodyClass}`}>
                <Slot/>
            </p>
        </div>
    )
});
