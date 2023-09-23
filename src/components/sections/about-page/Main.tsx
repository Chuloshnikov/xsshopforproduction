import {component$} from "@builder.io/qwik";
import Image1 from '~/assets/images/about-page/main/Main1.png?jsx';
import Image2 from '~/assets/images/about-page/main/Main2.png?jsx';
import Image3 from '~/assets/images/about-page/main/Main3.png?jsx';
import Image4 from '~/assets/images/about-page/main/Main4.png?jsx';

export default component$(() => {
    return (
        <div class={'flex flex-col gap-[22px] lg:gap-[34px] xl:gap-[108px] lg:flex-row-reverse lg:justify-end lg:items-center'}>
            <div class={'flex flex-col gap-4 lg:gap-6 text-center lg:text-start items-center lg:items-start lg:w-[438px] xl:w-[671px]'}>
                <h1 class={'text-main text-[40px] lg:text-[46px] xl:text-7xl leading-[120%] font-medium'}>
                    We know how to turn on your pleasure.
                </h1>
                <p class={'text-main font-medium leading-[140%] xl:w-[518px]'}>
                    It all started around 2012 with my YouTube channel. I just wanted to help people out by sharing fitness and nutrition tips.
                </p>
            </div>
            <div class={'flex gap-[7px] lg:gap-1.5 xl:gap-[9px] justify-center'}>
                <div class={'w-[119px] xl:w-[193px] lg:mt-7 xl:mt-[46px] flex flex-col gap-1 xl:gap-2'}>
                    <Image1 class={'rounded-3xl w-full h-[140px] lg:h-[150px] xl:h-[246px] object-cover'} alt={"Sex Handcuffs"} title={"Erotic Women Handcuffs"} loading={"lazy"}/>
                    <Image3 class={'hidden lg:block rounded-3xl h-[140px] lg:h-[150px] xl:h-[246px] object-cover'} alt={"Woman Vibrators"} title={"Erotic Woman Vibrators with orange papaya"} loading={"lazy"}/>
                </div>
                <div class={'w-[119px] xl:w-[193px] mt-5 lg:mt-0 flex flex-col gap-1 xl:gap-2'}>
                    <Image2 class={'hidden lg:block rounded-3xl w-full lg:h-[150px] xl:h-[246px] object-cover'} alt={"Violet vibrator"} title={"Modern violet vibrator for girls"} loading={"lazy"}/>
                    <Image4 class={'rounded-3xl w-full h-[140px] lg:h-[150px] xl:h-[246px] object-cover'} alt={"Pink vibrator"} title={"New pink vibrator for girls with bananas"} loading={"lazy"}/>
                </div>
            </div>
        </div>
    );
});
