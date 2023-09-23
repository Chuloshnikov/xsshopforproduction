import {component$} from "@builder.io/qwik";
import Image1 from '~/assets/images/about-page/about-us/About1.png?jsx';
import Image2 from '~/assets/images/about-page/about-us/About2.png?jsx';

export default component$(() => {
    return (
        <div class={'flex flex-col gap-7 lg:gap-[73px] xl:gap-[209px] lg:flex-row lg:justify-end lg:items-center'}>
            <div class={'flex flex-col gap-4 lg:w-[352px] xl:w-[495px]'}>
                <h2 class={'text-main text-[32px] xl:text-[46px] leading-[120%] font-medium'}>
                    About Us
                </h2>
                <p class={'text-main leading-[140%]'}>
                    Welcome to Love Space Shop, your premier online destination for a wide range of high-quality sex toys in Sweden. We are passionate about providing you with an exquisite selection of pleasure products that will ignite your desires and elevate your intimate experiences.
                    <br/><br/>
                    At Love Space Shop, we understand that sexual well-being and exploration are integral aspects of a fulfilling life. That's why we have curated a diverse collection of sex toys that cater to individuals of all genders, orientations, and preferences. Whether you're a beginner or an experienced enthusiast, we have something to suit your unique desires.
                </p>
            </div>
            <div class={'relative flex justify-end'}>
                <div class={'w-[245px] h-[247px] lg:w-[287px] lg:h-[290px] xl:w-[395px] xl:h-[353px]'}>
                    <Image1 class={'rounded-3xl w-full h-full object-cover'} alt={"Woman with pink vibrator"} title={"Woman chilling with pink vibrator"}/>
                </div>
                <div class={'absolute top-[165px] lg:top-[183px] xl:top-[268px] right-[146px] lg:right-[200px] xl:right-[302px] w-[154px] h-[143px] xl:w-[193px] xl:h-[160px]'}>
                    <Image2 class={'rounded-3xl h-full object-cover'} alt={"Purple sex toys"} title={"Purple vibrator and anal toy"}/>
                </div>
            </div>
        </div>
    );
});
