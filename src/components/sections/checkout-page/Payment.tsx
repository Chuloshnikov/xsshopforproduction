import {component$, useContext} from "@builder.io/qwik";
import CheckoutInput from "~/components/UI/input/text/CheckoutInput";
import ApplyButton from "~/components/UI/button/ApplyButton";
import {ShippingContext} from "~/routes/kassaorder";
import CardInfo from "~/components/sections/checkout-page/payment/CardInfo";
import {Link} from "@builder.io/qwik-city";

export default component$(() => {
    const shippingData = useContext(ShippingContext);

    return (
        <div class={'flex flex-col gap-8 bg-white py-5 px-2.5 rounded-[16px] xl:grow'}>
            <div class={'flex flex-col gap-3'}>
                <h2 class={'text-main font-medium text-xl leading-[130%]'}>Payment Information</h2>
                <CheckoutInput type={'text'} placeholder={"Apply Gift Card Code"}/>
                <ApplyButton class={'w-[143px]'}>Add code</ApplyButton>
            </div>
            <div>
                <div class={'flex flex-col gap-2'}>
                    <span class={'text-sm font-medium leading-[130%] text-main'}>{shippingData.name} {shippingData.lastName}</span>
                    <span class={'text-sm font-medium leading-[130%] text-main'}>{shippingData.address} {shippingData.apartments}</span>
                    <span class={'text-sm font-medium leading-[130%] text-main'}>{shippingData.city} {shippingData.postal}</span>
                    <span class={'text-sm font-medium leading-[130%] text-main'}>{shippingData.country}</span>
                    <span class={'text-sm font-medium leading-[130%] text-main'}>{shippingData.phone}</span>
                </div>
                <div class={'flex flex-col gap-6'}>
                    <h2 class={'text-main font-medium text-xl leading-[130%]'}>Payment Information</h2>
                    <CardInfo/>
                </div>
            </div>
            <div class={'flex justify-between'}>
                <Link>Return to Shipping</Link>
                <ApplyButton class={'w-[143px]'}>Pay now</ApplyButton>
            </div>
        </div>
    );
});
