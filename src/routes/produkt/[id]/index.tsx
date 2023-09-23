import {component$, Resource, useResource$} from "@builder.io/qwik";
import MainProduct from "~/components/sections/product-page/MainProduct";
import type {DocumentHead} from "@builder.io/qwik-city";
import ReviewsSection from "~/components/sections/product-page/ReviewsSection";
import BestSellers from "~/components/sections/common/BestSellers";
import News from "~/components/sections/main-page/News";
import {routeLoader$} from "@builder.io/qwik-city";

const temp = {
    imgArr: "https://hotline.ua/img/tx/357/3570750145.jpg",
    title: "Rabbit Vibrators",
    price: "4 226 грн",
    colors: [
        {
            name: "Red",
            img: "https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
        },
        {
            name: "Yellow",
            img: "https://img.freepik.com/free-photo/abstract-luxury-gold-yellow-gradient-studio-wall-well-use-as-background-layout-banner-product-presentation_1258-56103.jpg?w=2000"
        },
        {
            name: "Black",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/800px-Black_colour.jpg"
        },
    ]
};

export const useProduct = routeLoader$(async reqEvent => {
    console.log(reqEvent.params.id);
    return {...temp, imgArr: [temp.imgArr,temp.imgArr,"https://s3-alpha-sig.figma.com/img/5ab1/9b15/76248ad7255870ddbb494cbcdcb15a90?Expires=1694995200&Signature=ju~gWsJUKr8pHTPIOQFGBI3VNuqClr6AzGWIGcqUghqFdJ~BVrINed0EADy1m4of33ra-l-tVPMBu2Kk-Nw73FU41m-xFUkujwUpIsjNHySnSBVDfNdngptANyB5PuagSIOCi6a3l0-pMzbQOxfWX2aRnyxSOm5GCD10kxVnjk31IteAqCWJmRm7l3p06sDCckSttDXw0L~ZJNETk~iEMg43Qma09BnXY4nu8hNX14XMkWDsNmTvkNJ-c5Vyhn9LroBsi1z9v7NEDTDiizU2tM~UobwfLuhKF0FhvmN59B~JSHdrgEX2Ex5Hu~BcrisfvwWO~79W8gl-bjVC1f7d1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",temp.imgArr,temp.imgArr]};
})

export default component$(() => {
    const product = useProduct();

    return (
        <section>
            {/*<Resource*/}
            {/*    value={product}*/}
            {/*    onPending={() => <p>Loading ...</p>}*/}
            {/*    onResolved={(res) =>*/}
            {/*        <>*/}
            {/*            */}
            {/*        </>*/}
            {/*    }*/}
            {/*/>*/}
            <MainProduct product={product.value}/>
            <ReviewsSection/>
            <BestSellers/>
            <News/>
        </section>
    );
});

export const head: DocumentHead = ({resolveValue, params}) => {
    const product = resolveValue(useProduct);
    return {
        title: product.title
    }

};
