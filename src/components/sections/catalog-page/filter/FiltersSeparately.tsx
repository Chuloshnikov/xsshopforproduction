import {component$} from "@builder.io/qwik";
import CatalogSelect from "~/components/UI/select/CatalogSelect";
import WaterproofOptions from "~/components/UI/options/filter/WaterproofOptions";
import PriceOptions from "~/components/UI/options/filter/PriceOptions";
import ColorOptions from "~/components/UI/options/filter/ColorOptions";
import BrandsOptions from "~/components/UI/options/filter/BrandsOptions";
import BodyOptions from "~/components/UI/options/filter/BodyOptions";

export default component$(() => {
    return (
        <div class={'flex gap-2 items-center'}>
            <CatalogSelect name={'Waterproof'}>
                <WaterproofOptions/>
            </CatalogSelect>
            <CatalogSelect name={'Price'}>
                <PriceOptions/>
            </CatalogSelect>
            <CatalogSelect name={'Color'}>
                <ColorOptions/>
            </CatalogSelect>
            <CatalogSelect name={'Brands'}>
                <BrandsOptions/>
            </CatalogSelect>
            <CatalogSelect name={'Body'}>
                <BodyOptions/>
            </CatalogSelect>
        </div>
    );
});
