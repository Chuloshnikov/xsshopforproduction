import {$, component$, useContext} from "@builder.io/qwik";
import CardInfoInput from "~/components/UI/input/text/CardInfoInput";
import {PaymentContext} from "~/routes/kassaorder";

export default component$(() => {
    const paymentStore = useContext(PaymentContext);
    const onCurdNum = $((e: Event) => {
        const value = (e.target as HTMLInputElement).value;
        if (value.length <= 19)
            paymentStore.cardNum = value.replace(/(\d{4})(?=\d)/g, '$1 ');

        // else return
    });

    return (
        <div class={'flex flex-col xl:flex-row gap-[13px]'}>
            <CardInfoInput placeholder={'4111 1111 1111 1111'} class={'xl:w-[288px] tracking-[5px]'}
                           onInput$={onCurdNum} value={paymentStore.cardNum}>
                Card number
            </CardInfoInput>
            <div class={'flex gap-[13px]'}>
                <CardInfoInput placeholder={'MM/YY'} class={'w-[112px]'}
                               onInput$={onCurdNum} value={paymentStore.cardNum}
                >
                    Expiration
                </CardInfoInput>
                <CardInfoInput placeholder={'123'} class={'w-[85px]'}
                               onInput$={onCurdNum} value={paymentStore.cardNum}
                >
                    Expiration
                </CardInfoInput>
            </div>
        </div>
    );
});
