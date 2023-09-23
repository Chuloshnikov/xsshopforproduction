import {component$} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import Hero from "~/components/sections/main-page/Hero";
import BestSellers from "~/components/sections/common/BestSellers";
import GuideInfo from "~/components/sections/main-page/GuideInfo";
import Categories from "~/components/sections/main-page/Categories";
import NewProducts from "~/components/sections/main-page/NewProducts";
import News from "~/components/sections/main-page/News";
import FAQ from "~/components/sections/main-page/FAQ";
import {Speak} from "qwik-speak";

export default component$(() => {
    return (
        <Speak assets={['home']}>
            <Hero/>
            <BestSellers/>
            <GuideInfo/>
            <Categories/>
            <NewProducts/>
            <News/>
            <FAQ/>
        </Speak>
    );
});

export const head: DocumentHead = {
    title: "Shop",
    meta: [
        {
            name: "description",
            content: "The main page of our sex shop"
        }
    ]
};
