import type {PropFunction} from "@builder.io/qwik";
import {component$, useContext, useStore} from "@builder.io/qwik";
import IconArrowPrev from "~/components/UI/icons/IconArrowPrev";
import ApplyButton from "~/components/UI/button/ApplyButton";
import {FilterContext} from "../../../../../routes/katalog/[category]";

export default component$<{ onBack$?: PropFunction<any> }>(({onBack$}) => {
    const filters = useContext(FilterContext);
    const range = useStore<{from: number; to: number}>({...filters.price});

    return (
        <div class={'flex flex-col'}>
            <span class={'text-accent3 font-medium flex items-center gap-3 mb-2'} onClick$={onBack$}>
                <IconArrowPrev/> Price
            </span>
            <div class={'flex justify-between gap-3 w-full'}>
                <div
                    class={'flex flex-col justify-center w-[calc(50%-6px)] h-16 border-[1px] border-accent4 rounded-[10px] pr-5 pl-4'}>
                <span class={'text-xs text-accent3'}>
                    from
                </span>
                    <input type="number" value={range.from || 0} class={'text-accent2 font-medium'}
                           onInput$={e => +(e.target as HTMLInputElement).value >= 0 ? range.from = +(e.target as HTMLInputElement).value : range.from = 0}
                    />
                </div>
                <div
                    class={'flex flex-col justify-center w-[calc(50%-6px)] h-16 border-[1px] border-accent4 rounded-[10px] pr-5 pl-4'}>
                <span class={'text-xs text-accent3'}>
                    to
                </span>
                    <input type="number" value={range.to} class={'text-accent2 font-medium'}
                           onInput$={e => range.to = +(e.target as HTMLInputElement).value}/>
                </div>
            </div>
            <ApplyButton class={'mt-2'} onClick$={() => {
                filters.price = {...range};
                onBack$!();
            }}>
                Apply
            </ApplyButton>

        </div>

    )
})
