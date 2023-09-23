import {component$, Resource, useResource$} from "@builder.io/qwik";
import ProductCard from "~/components/UI/cards/ProductCard";

const temp = {
    img: "https://boomheadshop.com/cdn/shop/products/lelo-ina-wave-2-rabbit-vibrator-dildo-cerise-red.png?v=1669442530&width=1080",
    title: "Rabbit Vibrators",
    price: "4 226 грн"
}

export default component$(() => {
    const bestSellers = useResource$(async () =>  {
        return [temp,temp,temp,temp];
    });

   return (
       <section class={'py-[44px] xl:py-[76px] px-2.5 lg:px-7 xl:px-10 flex flex-col gap-10'}>
           <h1 class={'text-[28px] lg:text-[36px] xl:text-[46px] leading-[30.8px] lg:leading-[39.6px] xl:leading-[55.2px] font-medium text-main'}>
               Best sellers
           </h1>
           <div class={'flex flex-wrap gap-x-2 gap-y-6 justify-center lg:justify-between'}>
               <Resource
                   value={bestSellers}
                   onPending={() => <p>Loading...</p>}
                   onResolved={prods =>
                       <>
                           {prods.map((el, i) =>
                               <ProductCard price={el.price} id={i} key={i} img={el.img} name={el.title}/>
                           )}
                       </>
                    }/>
           </div>
       </section>
   )
});
