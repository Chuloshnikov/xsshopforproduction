import {component$, useContext} from "@builder.io/qwik";
import {FilterContext} from "../../../../routes/katalog/[category]";

export default component$(() => {
    const filters = useContext(FilterContext);

    return (
        <span class={'text-disabled underline underline-offset-4 cursor-pointer'}
            onClick$={() => {
                filters.body = '';
                filters.brands = '';
                filters.waterproof = undefined;
                filters.color = [];
                filters.price = {from: 0, to: 0};
            }}>
            Clear all filters
        </span>
    );
});
