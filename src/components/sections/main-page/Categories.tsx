import {component$} from "@builder.io/qwik";
import Woman from '~/assets/images/main-page/CategoriesWoman.jpg?jsx';
import Man from '~/assets/images/main-page/CategoriesMan.jpg?jsx';
import Beginners from '~/assets/images/main-page/CategoriesBegginers.png?jsx';
import {useTranslate} from "qwik-speak";


export default component$(() => {
    const t = useTranslate();

    return (
        <section class={'py-[23px] lg:py-8 xl:py-12 px-2.5 lg:px-7 xl:px-10 flex flex-col gap-10'}>
            <h1 class={'text-[28px] lg:text-[36px] xl:text-[46px] leading-[30.8px] lg:leading-[39.6px] xl:leading-[55.2px] font-medium text-main'}>
                {t('home.categories.title')}
            </h1>
            <div class={'flex flex-col lg:flex-row lg:flex-wrap gap-2'}>
                <div class={`relative h-[436px] lg:h-[497px] lg:w-[calc(50%-8px)] cursor-pointer`}>
                    <Woman class={'absolute inset-0 w-full h-full object-cover rounded-3xl'} alt={"Woman sex toys"} title={"Woman categories of sex toys"}/>
                    <div class={'flex justify-between items-center px-6 pt-[35.2px] relative z-20'}>
                        <span class={'font-medium text-2xl text-white'}>
                            {t('home.categories.woman')}
                        </span>
                        <span class={'text-white text-sm font-medium'}>
                            01
                        </span>
                    </div>
                </div>
                <div class={`relative h-[436px] lg:h-[497px] lg:w-[calc(50%-8px)] rounded-3xl cursor-pointer`}>
                    <Man class={'absolute inset-0 w-full h-full object-cover rounded-3xl'} alt={"Woman sex toys"} title={"Woman categories of sex toys"}/>
                    <div class={'flex justify-between items-center px-6 pt-[35.2px] relative z-20'}>
                        <span class={'font-medium text-2xl text-white'}>
                            {t('home.categories.man')}
                        </span>
                        <span class={'text-white text-sm font-medium'}>
                            02
                        </span>
                    </div>
                </div>
                <div class={`relative h-[436px] lg:h-[497px] lg:w-full rounded-3xl cursor-pointer`}>
                    <Beginners class={'absolute inset-0 w-full h-full object-cover rounded-3xl'} alt={"Woman sex toys"} title={"Woman categories of sex toys"}/>
                    <div class={'flex justify-between items-center px-6 pt-[35.2px] relative z-20'}>
                        <span class={'font-medium text-2xl text-white'}>
                            {t('home.categories.beginners')}
                        </span>
                        <span class={'text-white text-sm font-medium'}>
                            03
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
})
