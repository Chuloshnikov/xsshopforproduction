import {component$} from "@builder.io/qwik";
import {Image} from '@unpic/qwik';

export interface CardProps {
    id?: number;
    title: string;
    description: string;
    price: number;
    count: number;
    img: string;
}

export default component$<{product: CardProps}>(({product}) => {
    return (
        <div class={'flex justify-between items-center'}>
            <div class={'flex gap-2'}>
                <Image src={product.img} width={70} height={70}
                       class={"object-cover"} alt={product.title} title={product.description}/>
                <div class={'flex flex-col gap-1 justify-center'}>
                    <h1 class={'text-main text-sm font-medium leading-[130%]'}>{product.title}</h1>
                    <p class={'text-accent2 text-xs font-medium leading-[130%]'}>{product.description}</p>
                </div>
            </div>
            <span class={'text-main text-sm font-medium leading-[130%]'}>${product.price}</span>
        </div>
    );
});
