import {component$, useContext} from "@builder.io/qwik";
import RadioButton from "~/components/UI/input/radio/RadioButton";
import {FilterContext} from "../../../../routes/katalog/[category]";
import {options} from "~/components/sections/catalog-page/filter/mobile/BodyFilter";

export default component$(() => {
    const filters = useContext(FilterContext);
    return (
        <div class={'flex flex-col mr-5'}>
            {options.map((el, i) =>
                <RadioButton name={'body'} key={i} id={`body-${el}`}
                             defaultChecked={filters.body === el}
                             onInput$={() => filters.body = el}
                >
                    {el}
                </RadioButton>
            )}
        </div>
    );
});
