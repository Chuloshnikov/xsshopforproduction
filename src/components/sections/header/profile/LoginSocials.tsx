import {component$} from "@builder.io/qwik";
import IconGoogle from "~/components/UI/icons/IconGoogle";
import IconApple from "~/components/UI/icons/IconApple";
import IconFacebook from "~/components/UI/icons/IconFacebook";

export default component$(() => {
    return (
        <div class={'flex gap-2'}>
            <div class={'h-12 w-[82.5px] lg:w-[101px] flex items-center justify-center rounded-xl border-[1px] border-main cursor-pointer'}><IconGoogle/></div>
            <div class={'h-12 w-[82.5px] lg:w-[101px] flex items-center justify-center rounded-xl border-[1px] border-main cursor-pointer'}><IconApple/></div>
            <div class={'h-12 w-[82.5px] lg:w-[101px] flex items-center justify-center rounded-xl border-[1px] border-main cursor-pointer'}><IconFacebook/></div>
        </div>
    );
});
