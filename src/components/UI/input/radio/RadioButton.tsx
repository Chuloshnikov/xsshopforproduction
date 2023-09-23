import type { PropFunction} from "@builder.io/qwik";
import {component$, Slot} from "@builder.io/qwik";

interface RadioProps {
    name?: string;
    id?: string;
    onInput$?: PropFunction<any>;
    defaultChecked?: boolean;
}

export default component$<RadioProps>(({name, id, onInput$, defaultChecked}) => {
    return (
        <div class="inline-flex items-center">
            <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                for={id}
            >
                <input
                    name={name}
                    id={id}
                    checked={defaultChecked}
                    onInput$={onInput$}
                    type={"radio"}
                    class={`before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-main text-accent2 transition-all
                     before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4
                     before:rounded-full before:bg-accent2 before:opacity-0 before:transition-opacity checked:border-accent2 checked:before:bg-accent2 hover:before:opacity-10`}
                />
                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-accent2 opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-2.5 w-2.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                    >
                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                </div>
            </label>
            <label
                class={"mt-px cursor-pointer select-none font-medium text-main leading-[22.4px]"}
                for={id}
            >
                <Slot/>
            </label>
        </div>
    );
});
