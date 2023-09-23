import type { PropFunction} from "@builder.io/qwik";
import {$, component$, useSignal, useStore} from "@builder.io/qwik";
import ProfileInput from "~/components/UI/input/text/ProfileInput";
import Splitter from "~/components/UI/splitter/Splitter";
import StandardCheckbox from "~/components/UI/input/checkbox/StandardCheckbox";
import SubmitButton from "~/components/UI/button/SubmitButton";
import LoginSocials from "~/components/sections/header/profile/LoginSocials";
import {Form} from "@builder.io/qwik-city";

export default component$<{onChangePage$: PropFunction<any>}>(({onChangePage$}) => {
    const values = useStore({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const agreed = useSignal(false);
    const handleSubmit = $(() => {
        console.log(values)
    });
    return (
        <Form class={'flex flex-col gap-6 h-[calc(100vh-36px-38px-24px-64px)] overflow-y-auto authScroll'} preventdefault:submit>
            <div class={'flex flex-col gap-4'}>
                <h2 class={'text-sm text-main font-medium leading-[18.2px]'}>Sign up with</h2>
                <LoginSocials/>
            </div>
            <span class={'text-xs font-medium text-main'}>OR</span>
            <div class={'flex flex-col gap-4'}>
                <h2 class={'text-main font-medium'}>Your Name</h2>
                <div class={'flex flex-col gap-2'}>
                    <ProfileInput type={'text'} placeholder={'Enter First Name'}
                                  value={values.firstName}
                                  onInput$={e => values.firstName = (e.target as HTMLInputElement).value}>
                        First Name
                    </ProfileInput>
                    <ProfileInput type={'text'} placeholder={'Enter Last Name'}
                                  value={values.lastName}
                                  onInput$={e => values.lastName = (e.target as HTMLInputElement).value}>
                        Last Name
                    </ProfileInput>
                </div>
            </div>
            <div class={'flex flex-col gap-4'}>
                <h2 class={'text-main font-medium'}>Login Details</h2>
                <div class={'flex flex-col gap-2'}>
                    <ProfileInput type={'email'} placeholder={'Enter Email here'}
                                  value={values.email}
                                  onInput$={e => values.email = (e.target as HTMLInputElement).value}>
                        Email
                    </ProfileInput>
                    <ProfileInput type={'password'} placeholder={'Enter Password here'}
                                  value={values.password}
                                  onInput$={e => values.password = (e.target as HTMLInputElement).value}>
                        Password
                    </ProfileInput>
                    <p class={'text-main text-xs tracking-[0.4px] font-medium'}>Minimum 8 characters with at least one
                        uppercase, one lowercase, one special character and a number</p>
                </div>
            </div>
            <Splitter class={'text-accent2'}/>
            <StandardCheckbox checked={agreed.value} onCheck$={() => agreed.value = !agreed.value}>By clicking 'Log In'
                you agree to our website KicksClub Terms & Conditions, Kicks Privacy
                Notice and Terms & Conditions.</StandardCheckbox>
            <SubmitButton onClick$={handleSubmit}>Register</SubmitButton>
            <h3 class={'text-sm text-main leading-[120%] font-medium'}>
                Already have an account? <span class={'underline underline-offset-1 cursor-pointer'}
                                               onClick$={onChangePage$}>
                Log in here
                </span>
            </h3>
        </Form>
    );
});
