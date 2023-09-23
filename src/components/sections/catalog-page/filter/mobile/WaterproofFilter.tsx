import type {PropFunction} from "@builder.io/qwik";
import {component$, useContext, useSignal} from "@builder.io/qwik";
import RadioButton from "~/components/UI/input/radio/RadioButton";
import IconArrowPrev from "~/components/UI/icons/IconArrowPrev";
import ApplyButton from "~/components/UI/button/ApplyButton";
import {FilterContext} from "../../../../../routes/katalog/[category]";


export default component$<{ onBack$?: PropFunction<any> }>(({onBack$}) => {
    const filters = useContext(FilterContext);
    const waterproof = useSignal<boolean | undefined>(undefined);
    return (
        <div class={'flex flex-col min-h-full'}>
            <span class={'text-accent3 font-medium flex items-center gap-3 mb-2'} onClick$={onBack$}>
                <IconArrowPrev/> Waterproof
            </span>
            <RadioButton name={'waterproof'} id={'waterproof-yes'}
                         onInput$={() => waterproof.value = true}
                         defaultChecked={filters.waterproof === true}
            >
                Yes
            </RadioButton>
            <RadioButton name={'waterproof'} id={'waterproof-no'}
                         onInput$={() => waterproof.value = false}
                         defaultChecked={filters.waterproof === false}
            >
                No
            </RadioButton>
            <span class={'text-disabled underline underline-offset-4 my-2'}
                  onClick$={() => {
                      filters.waterproof = undefined;
                      waterproof.value = undefined;
                  }}>
                Clear
            </span>
            <ApplyButton class={'mt-4'} onClick$={() => {
                filters.waterproof = waterproof.value;
                onBack$!()
            }}>
                Apply
            </ApplyButton>
        </div>
    );
});
