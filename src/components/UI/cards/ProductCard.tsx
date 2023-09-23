import {component$} from "@builder.io/qwik";
import IconHeart from "~/components/UI/icons/IconHeart";
import IconCart from "~/components/UI/icons/IconCart";
import { Image } from "@unpic/qwik";
export interface ProductCardProps {
    id: number;
    name: string;
    price: string;
    img: string;
}

export default component$<ProductCardProps>(({id, price, name, img}) => {
    return (
        <div class={"flex flex-col gap-2 xl:gap-3"}>
            <div class={'relative flex justify-center items-center w-[146px] h-[146px] lg:w-[172px] lg:h-[174px] xl:w-[294px] xl:h-[298px] rounded-2xl bg-white'}>
                <Image src={img} alt={name} title={"The product - " + name} loading={'lazy'} width={125.5} height={125.5} decoding={'async'} class={'xl:w-[202.5px] xl:h-[202.5px]'}/>
                <span class={"absolute top-2 right-2 cursor-pointer"}>
                    <IconHeart/>
                </span>
                <span class={'absolute flex justify-center items-center bottom-2.5 right-2.5 cursor-pointer bg-main p-[4.5px] rounded-[5px]'}>
                    <IconCart/>
                </span>
            </div>
            <div class={'flex flex-col gap-1 xl:gap-2'}>
                <span class={'text-sm xl:text-lg leading-[16.8px] xl:leading-[19.2px] text-main font-medium'}>
                    {name}
                </span>
                <span class={'text-sm leading-[16.8px] text-accent3'}>
                    {price}
                </span>
            </div>
        </div>
    )
});
