import type {PropFunction} from "@builder.io/qwik";
import {$, component$, useStore} from "@builder.io/qwik";
import ProfileInput from "~/components/UI/input/text/ProfileInput";
import StandardCheckbox from "~/components/UI/input/checkbox/StandardCheckbox";
import SubmitButton from "~/components/UI/button/SubmitButton";
import LoginSocials from "~/components/sections/header/profile/LoginSocials";
import {Form} from "@builder.io/qwik-city";

export default component$<{onChangePage$: PropFunction<any>}>(({onChangePage$}) => {
    const values = useStore({
        email: '',
        password: '',
        keepLoggedIn: false
    });

    const handleSubmit = $(() => {
        console.log(values)
    });
    return (
        <Form class={'flex flex-col gap-6 h-[calc(100vh-36px-38px-24px-64px)] overflow-auto authScroll'} preventdefault:submit>
            <span class={'text-sm underline underline-offset-1 font-medium leading-[130%] text-main'}>Forgot your password?</span>
            <div class={'flex flex-col gap-2'}>
                <ProfileInput type={'email'} placeholder={'Enter Email here'}
                              value={values.email}
                              onInput$={(e) => values.email = (e.target as HTMLInputElement).value}>
                    Email
                </ProfileInput>
                <ProfileInput type={'password'} placeholder={'Enter Password here'}
                              value={values.password}
                              onInput$={(e) => values.password = (e.target as HTMLInputElement).value}>
                    Password
                </ProfileInput>
            </div>
            <StandardCheckbox checked={values.keepLoggedIn}
                              onCheck$={() => values.keepLoggedIn = !values.keepLoggedIn}
            >
                Keep me logged in - applies to all log in options below. More info
            </StandardCheckbox>
            <SubmitButton onClick$={handleSubmit}>Login</SubmitButton>
            <div class={'flex flex-col gap-4'}>
                <h2 class={'text-sm text-main font-medium leading-[18.2px]'}>Login with</h2>
                <LoginSocials/>
            </div>
            <h3 class={'text-sm text-main leading-[120%] font-medium'}>
                Don’t have an account yet? <span class={'underline underline-offset-1 cursor-pointer'}
                                                 onClick$={onChangePage$}>
                Sign up here
                </span>
            </h3>
        </Form>
    );
});
