import {component$, Resource, useResource$} from "@builder.io/qwik";
import SplittedAccordion from "~/components/UI/accordion/SplittedAccordion";
import Splitter from "~/components/UI/splitter/Splitter";
import AdditionalProductCard from "~/components/UI/cards/AdditionalProductCard";

const temp = {
    img: "https://s3-alpha-sig.figma.com/img/5ab1/9b15/76248ad7255870ddbb494cbcdcb15a90?Expires=1694995200&Signature=ju~gWsJUKr8pHTPIOQFGBI3VNuqClr6AzGWIGcqUghqFdJ~BVrINed0EADy1m4of33ra-l-tVPMBu2Kk-Nw73FU41m-xFUkujwUpIsjNHySnSBVDfNdngptANyB5PuagSIOCi6a3l0-pMzbQOxfWX2aRnyxSOm5GCD10kxVnjk31IteAqCWJmRm7l3p06sDCckSttDXw0L~ZJNETk~iEMg43Qma09BnXY4nu8hNX14XMkWDsNmTvkNJ-c5Vyhn9LroBsi1z9v7NEDTDiizU2tM~UobwfLuhKF0FhvmN59B~JSHdrgEX2Ex5Hu~BcrisfvwWO~79W8gl-bjVC1f7d1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Anal dusch Bathmate Hydro Rocket",
    description: "Anal dusch Bathmate Hydro RocketAnal dusch Bathmate Hydro Rocket",
    price: "$145"
}

export default component$(() => {
    const additProducts = useResource$(() => {
       return [temp,temp,temp]
    });

    return (
        <>
            <SplittedAccordion title={"Additional products"} defaultOpened>
                <Resource
                    value={additProducts}
                    onPending={() => <p>Loading...</p>}
                    onResolved={(res) =>
                        <div class={'flex flex-col gap-2 mb-2'}>
                            {res.map((el, i) =>
                                <AdditionalProductCard product={el} key={i}/>
                            )}
                        </div>
                    }
                />
            </SplittedAccordion>
            <Splitter/>
            <SplittedAccordion title={"Description"}>
                <p class={'text-base font-medium'}>
                    DescriptionDescriptionDescriptionDescriptionDescription
                    DescriptionDescriptionDescriptionDescriptionDescription
                    DescriptionDescriptionDescriptionDescriptionDescription
                </p>
            </SplittedAccordion>
            <Splitter/>
            <SplittedAccordion title={"Specification"}>
                <p class={'text-base font-medium'}>
                    SpecificationSpecificationSpecificationSpecification
                    SpecificationSpecificationSpecificationSpecification
                    SpecificationSpecificationSpecificationSpecification
                </p>
            </SplittedAccordion>
            <Splitter/>
            <SplittedAccordion title={"Shipping & Returns"}>
                <p class={'text-base font-medium'}>
                    Shipping in Australia via Auspost and Startrack Express.

                    International Express shipping via DHL.
                    Dispatch within 1 business day.

                    See all shipping options here
                </p>
            </SplittedAccordion>
        </>
    );
});
