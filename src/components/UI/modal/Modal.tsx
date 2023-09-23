import type {PropFunction} from "@builder.io/qwik";
import {component$, Slot, useVisibleTask$} from "@builder.io/qwik";

interface ModalProps {
    opened: boolean;
    onClose$: PropFunction<any>;
}

export default component$<ModalProps>(({opened, onClose$}) => {

    useVisibleTask$(() => {
        const html = document.querySelector('html');
        if (html)
            html.style.overflow = 'hidden';
        return () =>  {
            if (html)
                html.style.overflow = 'auto';
        };
    });

    return (
       <div class={`${!opened && 'hidden'} fixed inset-0 z-[200] bg-gray-800 bg-opacity-50`} onClick$={onClose$}>
           <Slot />
       </div>
    )
});

