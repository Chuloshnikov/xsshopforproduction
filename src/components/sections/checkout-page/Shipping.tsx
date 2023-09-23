import {$, component$, PropFunction, useContext} from "@builder.io/qwik";
import CheckoutInput from "~/components/UI/input/text/CheckoutInput";
import ApplyButton from "~/components/UI/button/ApplyButton";
import {ShippingContext} from "~/routes/kassaorder";

export default component$<{onSave$: PropFunction<any>}>(({onSave$}) => {
    const shippingData = useContext(ShippingContext);

    const saveData = $(() => {
        if (Object.values(shippingData).every(Boolean)) {
            onSave$();
        }
        else {
            console.log("No data")
        }
    });

    return (
        <div class={'flex flex-col gap-4 xl:grow bg-white rounded-[16px] py-5 px-2.5'}>
            <h2 class={'text-main font-medium text-xl leading-[130%]'}>Shipping address</h2>
            <div class={'flex flex-col gap-2'}>
                <CheckoutInput type={'text'} placeholder={"Country"} value={shippingData.country} onInput$={e => shippingData.country = (e.target as HTMLInputElement).value}/>
                <div class={'flex flex-col gap-2 xl:flex-row'}>
                    <CheckoutInput type={'text'} placeholder={"Name"} value={shippingData.name} onInput$={e => shippingData.name = (e.target as HTMLInputElement).value}/>
                    <CheckoutInput type={'text'} placeholder={"Last name"} value={shippingData.lastName} onInput$={e => shippingData.lastName = (e.target as HTMLInputElement).value}/>
                </div>
                <CheckoutInput type={'text'} placeholder={"Address"} value={shippingData.address} onInput$={e => shippingData.address = (e.target as HTMLInputElement).value}/>
                <CheckoutInput type={'text'} placeholder={"Apartments"} value={shippingData.apartments} onInput$={e => shippingData.apartments = (e.target as HTMLInputElement).value}/>
                <CheckoutInput type={'tel'} placeholder={"Phone"} value={shippingData.phone} onInput$={e => shippingData.phone = (e.target as HTMLInputElement).value}/>
                <div class={'flex flex-col gap-2 xl:flex-row'}>
                    <CheckoutInput type={'text'} placeholder={"City"} value={shippingData.city} onInput$={e => shippingData.city = (e.target as HTMLInputElement).value}/>
                    <CheckoutInput type={'text'} placeholder={"Postal Code"} value={shippingData.postal} onInput$={e => shippingData.postal = (e.target as HTMLInputElement).value}/>
                </div>
                <ApplyButton onClick$={saveData}>Continue to CheckOut</ApplyButton>
            </div>
        </div>
    );
});
