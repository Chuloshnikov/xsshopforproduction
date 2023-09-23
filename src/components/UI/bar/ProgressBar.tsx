import {component$} from "@builder.io/qwik";

export default component$<{percent: number}>(({percent}) => {
    return (
        <div class={'relative rounded-[40px] w-full h-[9px] bg-transparent border-2 border-main'}>
            <div class={`absolute -top-0.5 -left-0.5  bg-main rounded-[40px] h-[9px]`} style={{width: `${percent}%`}}></div>
        </div>
    );
});
