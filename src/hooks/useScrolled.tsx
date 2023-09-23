import {$, useOnDocument, useSignal} from "@builder.io/qwik";

export const useScrolled = () => {
    const scrolled = useSignal(true);
    const position = useSignal(0);
    useOnDocument(
        'scroll',
        $(() => {
            const moving = scrollY;
            scrolled.value = position.value > moving;
            position.value = moving;
        })
    )
    return scrolled;
}
