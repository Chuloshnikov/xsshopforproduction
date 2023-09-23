import {component$} from "@builder.io/qwik";
import AllFiltersButton from "~/components/UI/button/filter/AllFiltersButton";
import {useWindowSize} from "~/hooks/useWindowSize";
import FiltersSeparately from "~/components/sections/catalog-page/filter/FiltersSeparately";
import ClearFiltersButton from "~/components/UI/button/filter/ClearFiltersButton";
import SortBySelect from "~/components/sections/catalog-page/sort-by/SortBySelect";
import SortByButton from "~/components/UI/button/filter/SortByButton";



export default component$(() => {
    const width = useWindowSize();
    console.log("w",width);
    return (
        <div class={'flex justify-between w-full gap-2'}>
            {width < 1280
                ?
                <>
                    <AllFiltersButton/>
                    <SortByButton/>
                </>
                :
                <>
                    <div class={'flex w-full items-center justify-between'}>
                        <div class={'flex items-center gap-6'}>
                            <FiltersSeparately/>
                            <ClearFiltersButton/>
                        </div>
                        <SortBySelect/>
                    </div>
                </>
            }
        </div>
    );
});
