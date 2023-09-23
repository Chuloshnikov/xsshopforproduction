import {component$} from "@builder.io/qwik";
import ContactCard from "~/components/sections/contact-page/ContactCard";
import QuestionInput from "~/components/UI/input/text/QuestionInput";
import MessageForm from "~/components/sections/contact-page/MessageForm";

export default component$(() => {
    return (
        <section class={'py-[95px] lg:py-[88px] xl:py-[159px] px-2.5 lg:px-7 xl:px-10 flex flex-col gap-12'}>
            <div class={'flex flex-col gap-6'}>
                <h1 class={'text-main text-[32px] lg:text-[56px] font-medium leading-[35.2px] lg:leading-[61.6px] lg:w-[600px]'}>
                    Get in touch with LoveSpace
                </h1>
                <p class={'text-main leading-[22.4px] lg:w-[513px]'}>
                    Thanks for stopping by! Whether you have a question, comment, or just want to say hi, don't be a stranger.
                    We're here to help, and we love connecting with our community.
                    <br/><br/>
                    Drop us a line or use the contact form below to get in touch.
                </p>
            </div>
            <div class={'flex flex-col gap-12'}>
                <ContactCard/>
                <MessageForm/>
            </div>
        </section>
    );
});
