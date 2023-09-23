import {component$} from "@builder.io/qwik";
import FooterEmailInput from "~/components/UI/input/text/FooterEmailInput";
import {Link} from "@builder.io/qwik-city";
import ContactSocials from "~/components/sections/contact-page/ContactSocials";

export default component$(() => {
    const links = {
        categories: [
                { title: "Woman", href: "/catalog/woman" },
                { title: "Man", href: "/catalog/man" },
                { title: "For newbies", href: "/catalog/newbies" },
                { title: "For pairs", href: "/catalog/pairs" },
                { title: "Fetish", href: "/catalog/fetish" },
                { title: "Brands", href: "/catalog/brands" },
            ],
        company: [
                { title: "About us", href: "/about" },
                { title: "Contact", href: "/contact" },
                { title: "Blog", href: "/blogs" },
            ],
};



    return (
        <footer class="px-2 lg:px-7 xl:px-10 pb-4 bg-bg">
            <div class={'py-6 lg:py-8 xl:py-16 px-4 lg:px-6 xl:px-12 flex flex-col gap-11 bg-main rounded-3xl'}>
                <div class={'flex flex-col gap-3'}>
                <span class={'text-lg xl:text-[40px] leading-5 xl:leading-[44px] text-white'}>
                  Let’s stay in touch.
                </span>
                    <FooterEmailInput/>
                </div>
                <div class={'flex flex-col gap-11 lg:flex-row lg:justify-between'}>
                    <div class={'flex flex-col gap-3'}>
                    <span class={'text-lg leading-5 text-white'}>
                      Följ oss
                    </span>
                        <ContactSocials mode={"light"}/>
                    </div>
                    <div class={'flex gap-[56px] '}>
                        <div class={'flex flex-col gap-4'}>
                    <span class={'text-lightGrey'}>
                        Categories
                    </span>
                            <div class={'flex flex-col gap-3'}>
                                {links.categories.map((el, i) =>
                                    <Link key={i} href={el.href} class={'text-bg text-sm font-medium'}>
                                        {el.title}
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div class={'flex flex-col gap-4'}>
                    <span class={'text-lightGrey'}>
                        Company
                    </span>
                            <div class={'flex flex-col gap-3'}>
                                {links.company.map((el, i) =>
                                    <Link key={i} href={el.href} class={'text-bg text-sm font-medium'}>
                                        {el.title}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div class={'flex justify-center gap-[50px]'}>
                    <span class={'text-sm text-accent3'}>Terms of Use</span>
                    <span class={'text-sm text-accent3'}>Privacy Policy</span>
                </div>
                <span class={'text-sm text-accent3 text-center'}>Designed by Kolodiazhenskyi</span>
                <span class={'text-sm text-accent3 text-center'}>© 2023 | LoveSpace | All Rights Reserved</span>
            </div>

        </footer>
    );
});
