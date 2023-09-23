import type { PropFunction} from "@builder.io/qwik";
import {component$} from "@builder.io/qwik";
import type {Product} from "~/components/sections/product-page/MainProduct";
import {Image} from '@unpic/qwik';

interface ImgChooserProps {
    product: Product;
    currIndex: number;
    onChoose$: PropFunction<(index: number) => any>;
}

export default component$<ImgChooserProps>(({product, onChoose$, currIndex}) => {

    return (
        <>
            {product.imgArr.map((el, i) =>
                <div class={`min-w-[64px] xl:min-w-[93px] h-16 xl:h-[93px] cursor-pointer flex justify-center items-center rounded-lg bg-white xl:p-2.5
                            ${i === currIndex && 'border-[1px] border-main'}`} key={i}
                     onClick$={() => onChoose$(i)}
                >
                    <Image src={el} alt={product.title + i} width={44} height={48}
                         class={'object-cover xl:w-full xl:h-full'} decoding={"async"} loading={"lazy"}/>
                </div>
            )}
        </>
    );
});
