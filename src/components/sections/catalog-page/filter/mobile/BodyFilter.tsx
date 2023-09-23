import type { PropFunction} from "@builder.io/qwik";
import {component$, useContext, useSignal} from "@builder.io/qwik";
import IconArrowPrev from "~/components/UI/icons/IconArrowPrev";
import RadioButton from "~/components/UI/input/radio/RadioButton";
import ApplyButton from "~/components/UI/button/ApplyButton";
import {FilterContext} from "../../../../../routes/katalog/[category]";

export const options = [
    "Klitoris", "Penis", "Punkt G", "Vagina", "Prostata", "Anal", "Bröst"
];

export default component$<{ onBack$?: PropFunction<any> }>(({onBack$}) => {
    const filters = useContext(FilterContext);
    const chosen = useSignal<string>(filters.body);

    return (
        <div class={'flex flex-col'}>
            <span class={'text-accent3 font-medium flex items-center gap-3 mb-2'} onClick$={onBack$}>
                <IconArrowPrev/> Body
            </span>
            <div class={'flex flex-col'}>
                {options.map((el, i) =>
                    <RadioButton name={'body'} key={i} id={`body-${el}`}
                                 defaultChecked={chosen.value === el}
                                 onInput$={() => chosen.value = el}
                    >
                        {el}
                    </RadioButton>
                )}
                <span class={'text-disabled underline underline-offset-4 my-2'}
                      onClick$={() => {
                          filters.body = '';
                          chosen.value = '';
                      }}
                >
                    Clear
                </span>
            </div>
            <ApplyButton class={'mt-2'} onClick$={() => {
                filters.body = chosen.value;
                onBack$!();
            }}>
                Apply
            </ApplyButton>
        </div>
    );
});
