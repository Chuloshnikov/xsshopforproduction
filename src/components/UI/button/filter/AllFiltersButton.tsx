import {component$, useSignal} from "@builder.io/qwik";
import Modal from "~/components/UI/modal/Modal";
import IconClose from "~/components/UI/icons/IconClose";
import IconArrowNext from "~/components/UI/icons/IconArrowNext";
import WaterproofFilter from "~/components/sections/catalog-page/filter/mobile/WaterproofFilter";
import PriceFilter from "~/components/sections/catalog-page/filter/mobile/PriceFilter";
import ColorFilter from "~/components/sections/catalog-page/filter/mobile/ColorFilter";
import BrandFilter from "~/components/sections/catalog-page/filter/mobile/BrandFilter";
import BodyFilter from "~/components/sections/catalog-page/filter/mobile/BodyFilter";
import ClearFiltersButton from "~/components/UI/button/filter/ClearFiltersButton";

export const filters = ["Waterproof", "Price", "Color", "Brands", "Body"];

export default component$(() => {
    const opened = useSignal(false);
    const chosen = useSignal('');

    const comp = {
        Waterproof: <WaterproofFilter onBack$={() => chosen.value = ''}/>,
        Price: <PriceFilter onBack$={() => chosen.value = ''}/>,
        Color: <ColorFilter onBack$={() => chosen.value = ''}/>,
        Brands: <BrandFilter onBack$={() => chosen.value = ''}/>,
        Body: <BodyFilter onBack$={() => chosen.value = ''}/>
    }

    return (
        <div class={'relative w-[calc(50%-4px)] h-10'}>
            <button onClick$={() => opened.value = true}
                    class={'w-full h-full border-[1px] border-accent2 rounded-[50px] text-center text-sm leading-[16.8px] font-medium'}>
                Filter
            </button>
            {opened.value &&
                <Modal opened={opened.value} onClose$={() => opened.value = false}>
                    <div onClick$={e => e.stopPropagation()}
                        class={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[calc(100%-22px)] h-[calc(100%-24px)] 
                        rounded-2xl p-6 z-[200] overflow-y-scroll`}>
                        <div class={'flex justify-between items-center mb-6'}>
                            <h1 class={'text-main text-2xl leading-[24px] font-medium'}>Filter</h1>
                            <IconClose onClick$={() => {
                                opened.value = false;
                                chosen.value = '';
                            }}/>
                        </div>
                        <div class={'flex flex-col gap-5'}>
                            {
                                !chosen.value
                                    ?
                                    <>
                                        {filters.map((el, i) =>
                                            <span onClick$={() => chosen.value = el} key={i}
                                                  class={'flex justify-between items-center text-main font-medium cursor-pointer'}>
                                                {el} <IconArrowNext/>
                                            </span>
                                        )}
                                        <ClearFiltersButton/>
                                    </>

                                    :
                                    (comp as any)[chosen.value] // ????
                            }

                        </div>
                    </div>
                </Modal>
            }
        </div>
    );
});
