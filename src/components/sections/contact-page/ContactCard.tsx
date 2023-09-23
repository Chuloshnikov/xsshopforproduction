import {component$} from "@builder.io/qwik";
import ContactSocials from "~/components/sections/contact-page/ContactSocials";
import MessageForm from "~/components/sections/contact-page/MessageForm";

export default component$(() => {
    return (
        <div class={'rounded-3xl bg-white p-6 flex flex-col gap-6'}>
            <div class={'flex flex-col gap-1'}>
                <h2 class={'text-main text-2xl leading-[28.8px] font-medium'}>
                    Chat to us
                </h2>
                <p class={'text-main leading-[22.4px] mb-1'}>Our friendly team is here to help</p>
                <span class={'text-main font-medium leading-[22.4px]'}>marketing@swagapp.com</span>
            </div>
            <div class={'flex flex-col gap-1'}>
                <h2 class={'text-main text-2xl leading-[28.8px] font-medium'}>
                    Call us
                </h2>
                <p class={'text-main leading-[22.4px] mb-1'}>Our friendly team is here to help</p>
                <span class={'text-main font-medium leading-[22.4px]'}>marketing@swagapp.com</span>
            </div>
            <div class={'flex flex-col gap-1'}>
                <h2 class={'text-main text-2xl leading-[28.8px] font-medium'}>
                    Visit us
                </h2>
                <p class={'text-main leading-[22.4px] mb-1'}>Our friendly team is here to help</p>
                <span class={'text-main font-medium leading-[22.4px]'}>marketing@swagapp.com</span>
            </div>
            <ContactSocials mode={"dark"}/>
        </div>
    );
});
