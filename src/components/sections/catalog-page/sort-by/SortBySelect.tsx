import {component$, useContext} from "@builder.io/qwik";
import CatalogSelect from "~/components/UI/select/CatalogSelect";
import RadioButton from "~/components/UI/input/radio/RadioButton";
import {options} from "~/components/UI/button/filter/SortByButton";
import {FilterContext} from "../../../../routes/katalog/[category]";

export default component$(() => {
    const filters = useContext(FilterContext);

    return (
        <CatalogSelect name={'Sort by:'} class={'gap-16 mr-5'}>
            {options.map((el, i) =>
                <RadioButton name={'sort-by'} id={`sort-by-${el}`} key={i}
                             defaultChecked={filters.sortBy === el}
                             onInput$={() => filters.sortBy = el}>
                    {el}
                </RadioButton>
            )}
        </CatalogSelect>
    );
});
