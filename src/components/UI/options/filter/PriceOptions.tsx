import {component$, useContext} from "@builder.io/qwik";
import {FilterContext} from "../../../../routes/katalog/[category]";

export default component$(() => {
    const filters = useContext(FilterContext);
    return (
        <div class={'flex justify-between gap-3 w-full'}>
            <div
                class={'flex flex-col justify-center w-[189px] h-16 border-[1px] border-accent4 rounded-[10px] pr-5 pl-4'}>
                <span class={'text-xs text-accent3'}>
                    from
                </span>
                <input type="number" value={filters.price.from || 0} class={'text-accent2 font-medium'}
                       onInput$={e => +(e.target as HTMLInputElement).value >= 0 ? filters.price.from = +(e.target as HTMLInputElement).value : filters.price.from = 0}
                />
            </div>
            <div
                class={'flex flex-col justify-center w-[189px] h-16 border-[1px] border-accent4 rounded-[10px] pr-5 pl-4'}>
                <span class={'text-xs text-accent3'}>
                    to
                </span>
                <input type="number" value={filters.price.to} class={'text-accent2 font-medium'}
                       onInput$={e => filters.price.to = +(e.target as HTMLInputElement).value}/>
            </div>
        </div>
    );
});
