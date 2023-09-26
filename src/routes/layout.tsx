import type {
    Signal
} from "@builder.io/qwik";
import {
    component$,
    createContextId,
    Slot,
    useContextProvider,
    useSignal,
} from "@builder.io/qwik";
import type {RequestHandler} from "@builder.io/qwik-city";
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";
import {Speak} from "qwik-speak";

export const onGet: RequestHandler = async ({cacheControl}) => {
    cacheControl({
        staleWhileRevalidate: 60 * 60 * 24 * 7,
        maxAge: 5,
    });
};


export const darkenContext = createContextId<Signal<boolean>>('Darken')

export default component$(() => {
    const darken = useSignal(false);
    useContextProvider(darkenContext, darken);
    return (
        <>
            <Speak assets={['header', 'footer']}>
                <div
                class="max-w-container mx-auto"
                >
                <Header/>
                    <main class={`bg-bg min-h-screen ${darken.value && 'brightness-50'}`}>
                        <Slot/>
                    </main>
                <Footer/>
                </div>
            </Speak>
        </>
    )
});
