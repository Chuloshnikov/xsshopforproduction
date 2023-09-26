import {component$, createContextId, useContextProvider, useStore} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import {routeLoader$} from "@builder.io/qwik-city";
import ProductCircle from "~/components/UI/cards/ProductCircle";
import Filters from "~/components/sections/catalog-page/Filters";


export const useProdLocation = routeLoader$((requestEvent) => {
    return {category: requestEvent.params.category, type: requestEvent.url.searchParams.get("type")}
});

export interface FilterStore {
    waterproof: boolean | undefined;
    price: { from: number; to: number };
    color: string[];
    brands: string;
    body: string;
    sortBy: string;
}

export const FilterContext = createContextId<FilterStore>('catalog-filter');
export const defaultFiltersObj = {
    waterproof: undefined,
    price: {from: 0, to: 2200},
    color: [],
    brands: '',
    body: '',
    sortBy: ''
};

export default component$(() => {
    const loc = useProdLocation();
    const filters = useStore<FilterStore>(defaultFiltersObj);
    useContextProvider(FilterContext, filters);
    return (
        <section class={'max-w-container py-32 flex flex-col px-2.5 lg:px-[26px] xl:px-10 gap-8'}>
            <h1 class={'text-center font-medium text-4xl xl:text-7xl leading-[39.6px] xl:leading-[79.2px] text-main'}>
                Shop all
            </h1>
            <div class={'flex flex-wrap justify-center gap-x-4 xl:gap-x-6 gap-y-3 mb-[56.45px]'}>
                {Array.from({length: 8}).map((el, i) =>
                    <ProductCircle key={i}/>
                )}
            </div>
            <Filters/>
        </section>
    );
});

export const head: DocumentHead = {
    title: "Catalog"
}
