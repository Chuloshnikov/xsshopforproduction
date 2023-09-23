import {component$} from "@builder.io/qwik";
import ScrollDown from "~/components/UI/icons/ScrollDown";
import {useTranslate} from "qwik-speak";
import ImageBig from '../../../assets/images/main-page/HeroBG.png?jsx';
import ImageSmall from '../../../assets/images/main-page/HeroBGMobile.png?jsx';

export default component$(() => {
    const t = useTranslate();
    return (
        <section
            class={`xs:h-[590px] sm:h-[529px] 2lg:h-[573px] w-full relative z-20 flex justify-center items-center`}>
            <ImageBig class={'absolute z-10 object-cover inset-0 w-full h-full rounded-b-[30px] hidden lg:block'} title={"Woman pink vibrator in the hand"} alt="Pink vibrator"/>
            <ImageSmall class={'absolute z-10 object-cover inset-0 w-full h-full rounded-b-[30px] lg:hidden'} title={"Woman pink vibrator in the hand"} alt="Pink vibrator"/>
            <div class={'flex flex-col items-center xs:gap-6 xl:gap-10 xl:mt-20 px-2.5 text-center text-white lg:px-[150px] xl:px-[100px] relative z-20'}>
                <h1 class={'max-w-[1093px] text-[34px] lg:text-[46px] xl:text-[68px] font-medium leading-[37.4px] lg:leading-[50.6px] xl:leading-[79.2px] self-stretch'}>
                    {t('home.hero.title')}
                </h1>
                <p class={'max-w-[403px] text-base lg:text-md leading-[19.6px]'}>
                    {t('home.hero.paragraph')}
                </p>
                <div class={'animate-bounce cursor-pointer'} onClick$={() => window.scrollTo({top: window.innerHeight, behavior: "smooth"})}>
                    <ScrollDown/>
                </div>
            </div>
        </section>
    );
});


