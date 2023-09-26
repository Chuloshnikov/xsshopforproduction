import {component$} from "@builder.io/qwik";
import Main from "~/components/sections/about-page/Main";
import AboutUs from "~/components/sections/about-page/AboutUs";
import OurMission from "~/components/sections/about-page/OurMission";
import TermsOfCooperation from "~/components/sections/about-page/TermsOfCooperation";
import JoinToUs from "~/components/sections/about-page/JoinToUs";
import type {DocumentHead} from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <section class={'max-w-container px-2.5 lg:px-7 xl:px-10 py-[141px] lg:py-[101px] xl:py-195px flex flex-col gap-4 lg:gap-[79px] xl:gap-[90px]'}>
            <Main/>
            <AboutUs/>
            <OurMission/>
            <TermsOfCooperation/>
            <JoinToUs/>
        </section>
    );
});

export const head: DocumentHead = {
    title: "About Us"
}
