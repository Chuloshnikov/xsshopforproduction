import type {PropFunction} from "@builder.io/qwik";
import {component$, useContext, useStore} from "@builder.io/qwik";
import IconArrowPrev from "~/components/UI/icons/IconArrowPrev";
import ApplyButton from "~/components/UI/button/ApplyButton";
import {FilterContext} from "../../../../../routes/katalog/[category]";

export const options = [
    {
        name: "Black",
        colorClass: "bg-[#1D1D1D]"
    },
    {
        name: "Red",
        colorClass: "bg-[#E7414B]"
    },
    {
        name: "Purple",
        colorClass: "bg-[#C641E7]"
    },
    {
        name: "Green",
        colorClass: "bg-[#2BA437]"
    },
    {
        name: "Yellow",
        colorClass: "bg-[#E4DD1F]"
    },
    {
        name: "Orange",
        colorClass: "bg-[#E7B941]"
    },
];

export default component$<{ onBack$?: PropFunction<any> }>(({onBack$}) => {
    const filters = useContext(FilterContext);
    const chosen = useStore<{ colors: string[] }>({colors: [...filters.color]});

    return (
        <div class={'flex flex-col'}>
            <span class={'text-accent3 font-medium flex items-center gap-3 mb-2'} onClick$={onBack$}>
                <IconArrowPrev/> Color
            </span>
            <div class={'flex flex-col gap-4'}>
                <span class={'text-sm font-medium leading-[16.8px] text-main'}>
                    Choose your color (can be few options)
                </span>
                <div class={'flex flex-col gap-3'}>
                    {options.map((el, i) =>
                        <div class={`flex gap-2.5 `}
                             key={i}
                             onClick$={() => chosen.colors.includes(el.name) ?
                                 chosen.colors = [...chosen.colors].filter(col => col !== el.name) :
                                 chosen.colors = [...chosen.colors, el.name]
                             }
                        >
                            <div class={`w-12 h-12 flex justify-center items-center rounded-[7px] ${chosen.colors.includes(el.name) && 'border-[1px] border-accent3'}`}>
                                <span class={`w-10 h-10 rounded-[7px] ${el.colorClass}`}></span>
                            </div>
                            <span>
                                {el.name}
                            </span>
                        </div>
                    )}
                </div>
                <ApplyButton onClick$={() => {
                    filters.color = [...chosen.colors];
                    onBack$!();
                }}>
                    Apply
                </ApplyButton>
            </div>
        </div>
    );
});
