import {useSignal, useTask$, useVisibleTask$} from "@builder.io/qwik";

export const useWindowSize = () => {
    // const sizes = useStore({width: 0, height: 0});
    const w = useSignal(0);
    const debouncedSizes = useSignal(0);

    useVisibleTask$(({track}) => {
        track(() => document.body.clientWidth);
        // console.log(sizes);
        w.value = document.body.clientWidth;

        // sizes.height = document.body.clientHeight;

    });

    useTask$(({track}) => {
        debouncedSizes.value = track(() => w.value);
    })

    // useOnWindow(
    //     ['load', 'resize'],
    //     $(() => {
    //         sizes.width = document.body.clientWidth;
    //         sizes.height = document.body.clientHeight;
    //     })
    // );
    return debouncedSizes.value;
}
