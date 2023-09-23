import {component$, useContext} from "@builder.io/qwik";
import RadioButton from "~/components/UI/input/radio/RadioButton";
import {options} from "~/components/sections/catalog-page/filter/mobile/BrandFilter";
import {FilterContext} from "../../../../routes/katalog/[category]";

export default component$(() => {
    const filters = useContext(FilterContext);

    return (
        <div class={'flex flex-col mr-5'}>
            {options.map((el, i) =>
                <RadioButton name={'brand'} key={i} id={`brand-${el}`}
                             defaultChecked={filters.brands === el}
                             onInput$={() => filters.brands = el}>
                    {el}
                </RadioButton>
            )}
        </div>
    );
});
