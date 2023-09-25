import {component$} from "@builder.io/qwik";
import Accordion from "~/components/UI/accordion/SplittedAccordion";
import {useTranslate} from "qwik-speak";



export default component$(() => {
    const t = useTranslate();

    const temp = {
        title: t('home.faq.title'),
        d: t('home.faq.description')}
   return (
       <section class={'my-[33px] xl:my-[51px] mx-2.5 lg:mx-7 xl:mx-10 py-5 px-4 xl:p-10 flex flex-col xl:flex-row xl:justify-between gap-6 border-[1px] border-main rounded-3xl'}>
            <h1 class={'text-[28px] text-main font-medium leading-[30.8px]'}>
                You can see the answers
            </h1>
           <div class={'flex flex-col gap-4 xl:w-1/2'}>
               <Accordion title={temp.title}>
                   {temp.d}
               </Accordion>
               <Accordion title={temp.title}>
                   {temp.d}
               </Accordion>
               <Accordion title={temp.title}>
                   {temp.d}
               </Accordion>
               <Accordion title={temp.title}>
                   {temp.d}
               </Accordion>
               <Accordion title={temp.title}>
                   {temp.d}
               </Accordion>
           </div>
       </section>
   )
});
