import type {PropFunction} from "@builder.io/qwik";
import {component$, useSignal} from "@builder.io/qwik";
import IconClose from "~/components/UI/icons/IconClose";

import RegistrationForm from "~/components/sections/header/profile/RegistrationForm";
import LoginForm from "~/components/sections/header/profile/LoginForm";
import ProfileWindow from "~/components/sections/header/profile/ProfileWindow";

interface ModalProps {
    onClose$: PropFunction<any>
}

export default component$<ModalProps>(({onClose$}) => {
    const signed = false;
    const profilePage = useSignal(signed ? 'Profile' : 'Register')
    return (
        <div onClick$={e => e.stopPropagation()}
             class={`absolute top-[14px] left-1/2 lg:right-[22px] lg:left-auto transform -translate-x-1/2 lg:-translate-x-0 bg-white 
                w-[calc(100%-20px)] lg:w-[495px] h-[calc(100vh-36px)] rounded-3xl p-6 xl:p-8 flex flex-col gap-8`}>
            <div class={'flex flex-col gap-6 '}>
                <div class={'flex justify-between items-center'}>
                    <h1 class={'text-main font-medium text-[32px]'}>{profilePage.value}</h1>
                    <IconClose class={'cursor-pointer'} onClick$={onClose$}/>
                </div>
                {
                    profilePage.value === 'Profile'
                        ?
                        <ProfileWindow/>
                        :
                        profilePage.value === 'Register'
                            ?
                            <RegistrationForm onChangePage$={() => profilePage.value = "Login"}/>
                            :
                            <LoginForm onChangePage$={() => profilePage.value = "Register"}/>
                }
            </div>
        </div>
    );
});
