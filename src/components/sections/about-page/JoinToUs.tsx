import {component$} from "@builder.io/qwik";
import ImageMain from '~/assets/images/about-page/join-us/JoinBase.png?jsx';
import Image1 from '~/assets/images/about-page/join-us/Join1.png?jsx';
import Image2 from '~/assets/images/about-page/join-us/Join2.png?jsx';


export default component$(() => {
    return (
        <div class={'flex flex-col items-center gap-[60px] lg:gap-[68px] xl:gap-[76px] mt-[65px]'}>
            <div class={'flex flex-col gap-4 text-center xl:w-[797px]'}>
                <h2 class={'text-main font-medium text-[32px] xl:text-[46px] leading-[120%]'}>
                    Join to us
                </h2>
                <p class={'leading-[140%] text-main'}>
                    Join us on this exciting adventure as we create a love space where pleasure knows no bounds. Discover the boundless possibilities of pleasure, indulge in your desires, and embark on a journey of self-discovery with Love Space Shop.
                    <br/><br/>
                    Feel free to explore our extensive collection of sex toys, sexual wellness products, and accessories. We are here to support and guide you every step of the way, ensuring that your experience with Love Space Shop is unforgettable.</p>
            </div>
            <div class={'relative flex mx-auto'}>
                <div class={`absolute z-10 -left-[50px] lg:-left-[89px] xl:-left-[166px] -top-[9px] lg:-top-4 xl:-top-[30px] 
                w-[61px] lg:w-[109px] xl:w-[202px] h-[75px] lg:h-[133.5px] xl:h-[248px]`}>
                    <Image1 alt={"Purple vibrator"} title={"Purple vibrator in box"} class={'rounded-xl w-full h-full object-cover'}/>
                </div>
                <div class={'relative z-20 w-[198px] lg:w-[352px] xl:w-[658px] h-[114px] lg:h-[202px] xl:h-[379px]'}>
                    <ImageMain alt={"Woman with vibrator"} title={"Happy woman with red vibrator"} class={"w-full h-full object-cover rounded-xl"}/>
                </div>
                <div class={`absolute z-10 -right-[52px] lg:-right-[93px] xl:-right-[174px] -bottom-[14px] lg:-bottom-[25px] xl:-bottom-[47px]
                 w-[63px] lg:w-[112px] xl:w-[210px] h-[71px] lg:h-[126px] xl:h-[237px]`}>
                    <Image2 alt={"Sex toys"} title={"A lot of cool sex toys"} class={'rounded-xl w-full h-full object-cover'}/>
                </div>
            </div>
        </div>
    );
});
