import {component$, useContext, useSignal} from "@builder.io/qwik";
import Modal from "~/components/UI/modal/Modal";
import IconClose from "~/components/UI/icons/IconClose";
import RadioButton from "~/components/UI/input/radio/RadioButton";
import {FilterContext} from "../../../../routes/katalog/[category]";

export const options = [
    "Popularity", "The best rating", "Low to High", "High to Low", "Newest first"
];

export default component$(() => {
    const opened = useSignal(false);
    const filters = useContext(FilterContext);
    return (
        <div class={'relative w-[calc(50%-4px)] h-10'}>
            <button class={`w-full h-full border-[1px] border-accent2 rounded-[50px] text-center text-main 
            text-sm leading-[16.8px] font-medium flex justify-center items-center`}
            onClick$={() => opened.value = true}>
                <span class={'flex'}>Sort by</span>
            </button>
            <Modal opened={opened.value}
                   onClose$={() => opened.value = false}>
                <div onClick$={e => e.stopPropagation()}
                     class={`fixed left-1/2 bottom-5 transform -translate-x-1/2 bg-white w-[calc(100%-22px)] 
                        rounded-2xl p-6 z-[200] overflow-y-scroll flex flex-col gap-6`}>
                    <span class={'flex items-center justify-between text-2xl leading-[24px] text-main font-medium'}>
                        Sort by: <IconClose onClick$={() => opened.value = false}/>
                    </span>
                    <div class={'flex flex-col'}>
                        {options.map((el, i) =>
                            <RadioButton name={'sort-by'} id={`sort-by-${el}`} key={i}
                                         defaultChecked={filters.sortBy === el}
                                         onInput$={() => filters.sortBy = el}>
                                {el}
                            </RadioButton>
                        )}
                    </div>
                </div>
            </Modal>
        </div>
    );
});
