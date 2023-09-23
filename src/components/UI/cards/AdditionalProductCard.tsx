import {component$} from "@builder.io/qwik";
import {Image} from '@unpic/qwik';

interface Product {
    img: string;
    title: string;
    description: string;
    price: string;
    id?: number;
}

interface CardProps {
    product: Product
}

export default component$<CardProps>(({product}) => {
    return (
        <section class={'py-3 px-4 border-[1px] border-accent2 rounded-[20px] flex gap-4 items-center justify-between'}>
            <div class={'flex gap-2 items-center'}>
                <Image src={product.img} alt={product.title} width={65} height={71} class={'self-center'} loading={"lazy"} decoding={"async"}/>
                <div>
                    <h2 class={'text-sm font-medium leading-[15.4px] text-main'}>{product.title}</h2>
                    <p class={'text-xs leading-[14.4px] text-main'}>{product.description}</p>
                </div>
            </div>
            <div class={'flex flex-col gap-1 self-center items-center'}>
                <span class={'text-sm font-medium leading-[19.6px] text-main'}>{product.price}</span>
                <button class={'py-[7px] px-[11px] rounded-[10px] bg-accent3 text-white font-medium leading-[19.6px] text-sm'}>
                    Add
                </button>
            </div>
        </section>
    );
});
