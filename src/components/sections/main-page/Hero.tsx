import {component$} from "@builder.io/qwik";
import ScrollDown from "~/components/UI/icons/ScrollDown";
import {useTranslate} from "qwik-speak";
import ImageBig from '../../../assets/images/main-page/HeroBG.png?jsx';
import ImageSmall from '../../../assets/images/main-page/HeroBGMobile.png?jsx';

export default component$(() => {
    const t = useTranslate();
    return (
        <section
            class={`h-screen w-screen relative z-20 flex justify-center items-center`}>
            <ImageBig class={'absolute z-10 object-cover inset-0 w-full h-full rounded-b-[30px] hidden lg:block'} title={"Woman pink vibrator in the hand"} alt="Pink vibrator"/>
            <ImageSmall class={'absolute z-10 object-cover inset-0 w-full h-full rounded-b-[30px] lg:hidden'} title={"Woman pink vibrator in the hand"} alt="Pink vibrator"/>
            <div class={'flex flex-col items-center gap-6 px-2.5 text-center text-white lg:px-[150px] xl:px-[100px] relative z-20'}>
                <h1 class={'text-[34px] lg:text-[46px] xl:text-[72px] font-medium leading-[37.4px] lg:leading-[50.6px] xl:leading-[79.2px] self-stretch'}>
                    {t('home.hero.title')}
                </h1>
                <h2 class={'text-sm lg:text-md leading-[19.6px] xl:px-80'}>
                    {t('home.hero.paragraph')}
                </h2>
                <div class={'animate-bounce cursor-pointer'} onClick$={() => window.scrollTo({top: window.innerHeight, behavior: "smooth"})}>
                    <ScrollDown/>
                </div>
            </div>
        </section>
    );
});


