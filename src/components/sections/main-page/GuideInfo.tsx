import {component$} from "@builder.io/qwik";
import ImageSmall from '~/assets/images/GuideInfoSmall.png?jsx'
import ImageBig from '~/assets/images/GuideInfoBig.png?jsx';
import {useTranslate} from "qwik-speak";
export default component$(() => {
    const t = useTranslate();

    return (
        <section class={'relative px-2.5 lg:px-7 xl:px-10 py-[43px] xl:py-16 flex flex-col lg:flex-row lg:justify-between gap-8'}>
            <div class={'flex flex-col gap-8 xl:justify-between relative'}>
                <div>
                    <span class={'text-main text-sm xl:text-lg leading-[19.6px]'}>
                        {t('home.guide.subtitle')}
                    </span>
                    <h1 class={'text-main text-[32px] lg:text-[42px] xl:text-[72px] leading-[35.2px] lg:leading-[46.2px] xl:leading-[79.2px] font-medium w-[266px] xl:w-[594px]'}>
                        {t('home.guide.title')}
                    </h1>
                </div>
                <p class={'text-main text-sm lg:text-md xl:text-lg leading-[19.6px] lg:leading-[22.4px] font-medium lg:w-[351px] xl:w-[394px] xl:absolute xl:bottom-0 xl:left-[219px]'}>
                    {t('home.guide.paragraph')}
                </p>
            </div>
            <ImageBig class={'w-full lg:w-[310px] xl:w-[495px] lg:mt-20 rounded-3xl'} alt={"LELO light vibrator"}
                      title={"LELO purple vibrator for woman"}/>
            <ImageSmall class={'absolute z-10 bottom-[43px] w-[112px] h-[106px] xl:w-[193px] xl:h-[182px] rounded-2xl'}
                alt={"LELO vibrator package"} title={"LELO package with purple vibrator"}/>
        </section>
    )
});
