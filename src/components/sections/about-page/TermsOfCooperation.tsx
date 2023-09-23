import {component$} from "@builder.io/qwik";
import Image1 from '~/assets/images/about-page/terms/Terms1.png?jsx';
import Image2 from '~/assets/images/about-page/terms/Terms2.png?jsx';
import {Link} from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class={'flex flex-col gap-24 lg:gap-14 mt-[91px] lg:flex-row lg:justify-center lg:items-center xl:items-end'}>
            <div class={'flex flex-col gap-4 lg:w-[352px] xl:w-[495px]'}>
                <h2 class={'text-center lg:text-start text-main font-medium text-[32px] xl:text-[46px] leading-[120%]'}>
                    Terms of Cooperation
                </h2>
                <p class={'leading-[140%] text-main'}>
                    At Love Space Shop, we value open and honest collaboration. If you are a manufacturer, distributor, or artist looking to partner with us, we welcome the opportunity to explore potential collaborations. We believe in building strong relationships based on trust, integrity, and shared values. Please reach out to us through our contact page to discuss potential cooperation and how we can work together to promote pleasure and sexual well-being.
                    <br/><br/>
                    In all our interactions, we adhere to strict privacy policies to ensure the confidentiality of your personal information. We value your trust and take the necessary measures to protect your privacy throughout your shopping journey.
                </p>
            </div>
            <div class={'relative lg:mr-[99px] h-fit'}>
                <div class={'relative z-20 w-[201px] xl:w-[246px] h-[250px] xl:h-[306px]'}>
                    <Image1 class={'rounded-3xl w-full h-full object-cover'} alt={"Woman with guy"} title={"Wiman with black guy playing in bed"}/>
                </div>
                <div class={'absolute left-[180px] -top-[33px] xl:-top-12 z-10 w-[120px] xl:w-[184px] h-[116px] xl:h-[178px]'}>
                    <Image2 class={'rounded-3xl w-full h-full object-cover'} alt={"Modern sex toys"} title={"Many modern sex toys"}/>
                </div>
                <div class={'absolute left-[172px] xl:left-[197px] bottom-[22px] xl:bottom-[25px] z-30'}>
                    <Link href={'/'} class={'text-main font-medium leading-[120%] rounded-[60px] border-[1px] border-main bg-bg py-[13px] px-[23px]'}>
                        Cooperate
                    </Link>
                </div>
            </div>
        </div>
    );
});
