import {component$, useContext, useSignal} from "@builder.io/qwik";
import IconArrowDown from "~/components/UI/icons/IconArrowDown";
import type {CardProps} from "~/components/UI/cards/CheckoutProduct";
import CheckoutProduct from "~/components/UI/cards/CheckoutProduct";
import Splitter from "~/components/UI/splitter/Splitter";
import {ShippingContext} from "~/routes/ordercard";

export default component$<{ cart: CardProps[], isShipping: boolean }>(({cart, isShipping}) => {
    const opened = useSignal(true);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    const shipping = 0;
    const shippingData = useContext(ShippingContext);
    return (
        <div class={'flex flex-col gap-5 bg-white py-5 px-2.5 rounded-[16px] xl:grow'}>
            <div class={`flex justify-between items-center xl:hidden`} onClick$={() => opened.value = !opened.value}>
                <div class={'flex gap-1 items-center'}>
                    <h2 class={'font-medium text-sm w-fit text-accent2 leading-[130%]'}>
                        Shop order summary
                    </h2>
                    <span class={'w-2.5 h-2.5 flex items-center justify-center'}>
                       <IconArrowDown/>
                    </span>
                </div>
                <span class={'text-main medium leading-[130%]'}>
                    $144.99
                </span>
            </div>
            {
                opened.value
                &&
                <div class={`flex flex-col gap-4`}>
                    <h2 class={'text-main font-medium text-xl leading-[130%]'}>Order summary</h2>
                    <div class={'flex flex-col gap-2'}>
                        {cart.map((el, i) =>
                            <CheckoutProduct product={el} key={i}/>
                        )}
                    </div>
                    <div class={'flex flex-col gap-5'}>
                        <Splitter/>
                        <div class={'flex justify-between items-center text-sm font-medium text-main leading-[130%]'}>
                            <span>Subtotal</span>
                            <span>{totalPrice}</span>
                        </div>
                        <div class={'flex justify-between items-center text-sm font-medium text-main leading-[130%]'}>
                            <span>Shipping (Standard)</span>
                            <span>$0.00</span>
                        </div>
                        <Splitter/>
                        <div class={'flex justify-between items-center font-medium text-main leading-[130%]'}>
                            <span>Total</span>
                            <span>{totalPrice + shipping}</span>
                        </div>
                        {
                            isShipping
                                ?
                            <div class={'flex flex-col gap-4'}>
                                <label for={'delivery-date'}>Specify Delivery Deadline:</label>
                                <input type="date" id={'delivery-date'}
                                       class={'border-[1px] border-accent3 rounded-[4px] text-main font-medium w-fit px-[9px] py-0.5'}/>
                            </div>
                                :
                                <div class={'flex flex-col gap-4'}>
                                    <div class={'flex flex-between items-center'}>
                                        <h3 class={'font-medium leading-[130%] text-main'}>Ship To:</h3>
                                    </div>
                                    <div class={'flex flex-col gap-2'}>
                                        <span class={'text-sm font-medium leading-[130%] text-main'}>{shippingData.name} {shippingData.lastName}</span>
                                        <span class={'text-sm font-medium leading-[130%] text-main'}>{shippingData.address} {shippingData.apartments}</span>
                                        <span class={'text-sm font-medium leading-[130%] text-main'}>{shippingData.city} {shippingData.postal}</span>
                                        <span class={'text-sm font-medium leading-[130%] text-main'}>{shippingData.country}</span>
                                        <span class={'text-sm font-medium leading-[130%] text-main'}>{shippingData.phone}</span>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            }

        </div>
    );
});
