import {component$, useContext} from "@builder.io/qwik";
import {options} from "~/components/sections/catalog-page/filter/mobile/ColorFilter";
import {FilterContext} from "../../../../routes/katalog/[category]";

export default component$(() => {
    const filters = useContext(FilterContext);

    return (
        <div class={'flex gap-3'}>
            {options.map((el, i) =>
                <div class={`flex gap-2.5 `}
                     key={i}
                     onClick$={() => filters.color.includes(el.name) ?
                         filters.color = [...filters.color].filter(col => col !== el.name) :
                         filters.color = [...filters.color, el.name]
                     }>
                    <div class={`w-12 h-12 flex justify-center items-center rounded-[7px] ${filters.color.includes(el.name) && 'border-[1px] border-accent3'}`}>
                        <span class={`w-10 h-10 rounded-[7px] ${el.colorClass}`}></span>
                    </div>
                </div>
            )}
        </div>
    );
});
