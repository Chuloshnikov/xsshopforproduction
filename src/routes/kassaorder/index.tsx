import {component$, createContextId, useContextProvider, useSignal, useStore} from "@builder.io/qwik";
import IconArrowNext from "~/components/UI/icons/IconArrowNext";
import Shipping from "~/components/sections/checkout-page/Shipping";
import {DocumentHead, routeLoader$} from "@builder.io/qwik-city";
import OrderSummary from "~/components/sections/checkout-page/OrderSummary";
import Payment from "~/components/sections/checkout-page/Payment";

const temp = {
    title: "Porta Crossbody",
    description: "Original",
    img: "https://s3-alpha-sig.figma.com/img/7876/553f/66b9fdc54a21da1828ef00776ef5c82f?Expires=1695600000&Signature=hwjwsleXScgapyg0~3f1NqGeUvmBPyPM7bvMboQwqrMtQKXdV~grennDQ44FmWDO150cSUp-9fZfI8iKZXxyzqTXX5dKBoVfo4gj1zY1oty5ttBWdae5LcdASoU~QfEHjxRhkpbtPXUceRGCsJxFwpxNyw6g-shkb8Wlhirx8MGls40J4O1zegTmQUvtFBIKg61lfG~4wVIN2oGBoeqRTgzkOMnr~6hl081wXR6zOCPm9lpuqerVPiTHf6Ks0a-eRSOgbhcDMi~8wzFjaDBT7g4iZjVOBnYx05hchdDdoBkUy2MOCFRCRTRioF8konUXBLFDzz2lDqRTmeHMKydO5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    count: 3,
    price: 144.99
};

export const useCart = routeLoader$(() => {
    return [temp, temp, temp]
});

export interface ShippingStore {
    country: string,
    name: string,
    lastName:string,
    address: string,
    apartments: string,
    phone: string,
    city: string,
    postal: string,
}

export interface PaymentStore {
    cardNum: string,
    date: string,
    cvv: string
}

export const ShippingContext = createContextId<ShippingStore>('shipping');
export const PaymentContext = createContextId<PaymentStore>('payment')


export default component$(() => {
    const isShipping = useSignal(false);
    const cart = useCart();
    const shippingData = useStore({
        country: "",
        name: "",
        lastName: "",
        address: "",
        apartments: "",
        phone: "",
        city: "",
        postal: "",
    });
    const paymentStore = useStore({
        cardNum: '',
        date: '',
        cvv: ''
    });
    useContextProvider(ShippingContext, shippingData);
    useContextProvider(PaymentContext, paymentStore);
    return (
        <section class={'py-24 xl:py-[130px] px-2.5 lg:px-7 xl:px-10 flex flex-col gap-2'}>
            <div class={'flex flex-col gap-[21px]'}>
                <h1 class={'text-center text-main font-medium text-2xl xl:text-5xl leading-[120%]'}>You're almost
                    there!</h1>
                <div class={'flex gap-2 items-center text-sm'}>
                    <span class={`font-medium ${isShipping.value ? 'text-main' : 'text-accent2'}`}>
                        Shipping
                    </span>
                    <IconArrowNext/>
                    <span class={`font-medium ${isShipping.value ? 'text-main' : 'text-accent2'}`}>
                        Payment
                    </span>
                </div>
            </div>
            <div class={'flex flex-col gap-2 xl:flex-row-reverse'}>
                <OrderSummary cart={cart.value} isShipping={isShipping.value}/>
                {
                    isShipping.value
                        ?
                        <Shipping onSave$={() => isShipping.value = false}/>
                        :
                        <Payment/>
                }
            </div>
        </section>
    );
});

export const head: DocumentHead = {
    title: "Checkout order"
};
