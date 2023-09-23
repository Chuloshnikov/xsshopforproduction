import {component$, Resource, useResource$} from "@builder.io/qwik";
import ProductReview from "~/components/UI/cards/ProductReview";
import Splitter from "~/components/UI/splitter/Splitter";
import ReviewCard from "~/components/UI/cards/ReviewCard";

const temp = {
    clientName: 'Tony Stark',
    date: "December 13, 2022",
    title: "Best, I like it",
    description: "I love my 41 inch longboard the 80 grip tape is awesome and I love the slight concave to the board it locks my feet in place it gives me a solid feel of knowing where my feet are on the deck at all times I love the clean Style of artistry on the bottom of the deck trucks are nice and long I only wish they would offer a 70 Duro on the wheels the 80",
    rate: 87
}

export default component$(() => {
    const reviews = useResource$(() => {
        return [temp,temp,temp,temp,temp,temp]
    });

    return (
        <section class={'px-2.5 lg:px-5 xl:px-10 flex flex-col gap-6 xl:gap-12 overflow-x-scroll'}>
            <div class={'flex flex-col gap-4'}>
                <h1 class={'text-2xl leading:[28.8px] text-main font-medium'}>
                    Reviews (#count#)
                </h1>
                <ProductReview/>
            </div>
            <Splitter/>
            <div class={'flex flex-col gap-2 xl:flex-row xl:gap-4 overflow-x-scroll max-w-full review-div'}>
                <Resource
                    value={reviews}
                    onPending={() => <p>Loading...</p>}
                    onResolved={(res) =>
                        <>
                            {res.map((el, i) =>
                                <ReviewCard review={el} key={i}/>
                            )}
                        </>
                    }
                />
            </div>

        </section>
    );
});
