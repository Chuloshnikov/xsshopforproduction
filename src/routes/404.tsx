import {component$} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";
import Image from '~/assets/images/for_404.png?jsx'
export default component$(() => {
    return (
        <section class={'max-w-container flex flex-col items-center text-center justify-center gap-1.5 w-screen h-screen px-2.5'}>
            <div class={'relative'}>
                <h1 class={'text-[76px] text-main xl:text-[120px] font-medium leading-[110%] tracking-wider'}>
                    404
                </h1>
                <Image
                    class={'w-[70px] xl:w-[107px] absolute top-1 xl:top-3 left-1/2 -translate-x-1/2'}
                    alt={"404 vibrator"} title={"404 error vibrator"}
                />
            </div>
            <h2 class={'text-3xl xl:text-[40px] leading-[110%] text-main font-medium'}>Lost in Pleasure</h2>
            <p class={'text-sm xl:text-base text-accent3 leading-[140%]'}>The page you are looking for does not exist or has been removed.</p>
            <Link href={'/'} class={'py-3.5 px-[31px] text-white font-medium leading-[120%] bg-main rounded-xl mt-[18px]'}>
                Come to Main page
            </Link>
        </section>
    );
});
