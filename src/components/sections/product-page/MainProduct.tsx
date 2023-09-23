import {component$, useSignal} from "@builder.io/qwik";
import IconHeartBig from "~/components/UI/icons/IconHeartBig";
import ApplyButton from "~/components/UI/button/ApplyButton";
import ProductAccordions from "~/components/sections/product-page/ProductAccordions";
import ProductImgChooser from "~/components/sections/product-page/ProductImgChooser";
import {Image} from '@unpic/qwik';
import {DocumentHead} from "@builder.io/qwik-city";

export interface Product {
    imgArr: string[];
    title: string;
    price: string;
    colors: {
      name: string;
      img: string;
    }[]
}

interface MainProductProps {
    product: Product;
}

export default component$<MainProductProps>(({product}) => {
    const currColorIndex = useSignal(0);
    const currImgIndex = useSignal(0);

    return (
        <section class={'px-2.5 lg:px-5 xl:px-10 pt-[95px] flex flex-col w-full lg:flex-row gap-6 xl:gap-[88px] xl:justify-between'}>
            <div class={'flex flex-col gap-2 lg:w-2/5 xl:w-3/5 xl:flex-row-reverse xl:justify-end'}>
                {/*<div class={'xl:w-[616px] xl:h-[616px] w-full aspect-square py-4 px-5 bg-white rounded-[30px] xl:flex xl:items-center xl:justify-center'}>*/}
                    <Image src={product.imgArr[currImgIndex.value]} alt={product.title} title={`The product - ${product.title}`} decoding={"async"} loading={'lazy'}
                           width={300} height={300} class={'xl:w-[616px] xl:h-[616px] w-full  rounded-[30px] object-cover'}/>
                {/*</div>*/}
                <div class={'flex gap-1 overflow-scroll lg:flex-wrap xl:flex-col xl:flex-nowrap'}>
                    <ProductImgChooser product={product} onChoose$={(index: number) => currImgIndex.value = index}
                                       currIndex={currImgIndex.value}/>
                </div>
            </div>
            <div class={'flex flex-col gap-6 xl:gap-8 lg:w-3/5 xl:w-2/5'}>
                <div class={'flex flex-col gap-3 xl:gap-4'}>
                    <div class={'flex justify-between items-center'}>
                        <h1 class={'text-[22px] xl:text-[32px] leading-[26.4px] text-main font-medium max-h-[262px]'}>
                            {product.title}
                        </h1>
                        <div>
                            <IconHeartBig />
                        </div>
                    </div>
                    <span class={'text-sm xl:text-base font-medium text-main'}>***** 25 reviews</span>
                </div>
                <div class={'flex flex-col gap-2'}>
                    <span class={'text-accent2 text-sm font-medium leading-[16.8px]'}>
                        Color: <b class={'text-main font-medium'}>{product.colors[currColorIndex.value].name}</b>
                    </span>
                    <div class={'flex gap-1'}>
                        {product.colors.map((el, i) =>
                            <div class={`w-[42px] p-0.5 h-[42px] xl:w-[62px] xl:h-[62px] rounded-lg ${currColorIndex.value === i && 'border-[1px] border-accent3'}`}
                                 key={i} onClick$={() => currColorIndex.value = i}>
                                <Image src={el.img} alt={product.title + ' ' + el.name} width={42} height={42}
                                     class={'object-cover w-full h-full rounded-lg'} decoding={"async"} loading={"lazy"}/>
                            </div>
                        )}
                    </div>
                </div>
                <ApplyButton>
                    Add to Cart
                </ApplyButton>
                <div class={'flex flex-col gap-1'}>
                    <ProductAccordions/>
                </div>
            </div>
        </section>
    );
});
