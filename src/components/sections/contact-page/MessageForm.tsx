import {component$, useSignal, useStore} from "@builder.io/qwik";
import QuestionInput from "~/components/UI/input/text/QuestionInput";
import QuestionTextArea from "~/components/UI/input/textarea/QuestionTextArea";
import ApplyButton from "~/components/UI/button/ApplyButton";
import StandardCheckbox from "~/components/UI/input/checkbox/StandardCheckbox";

export default component$(() => {
    const message = useStore({name: '', email: '', phone: '', text: ''});
    const agreed = useSignal(false);
    console.log(agreed.value);
    return (
        <form preventdefault:submit class={'flex flex-col gap-[23px]'}>
            <div class={'flex flex-col gap-8'}>
                <QuestionInput label={"What’s your name?"} placeholder={"Type your name"}
                               name={'client-name'} value={message.name}
                               onInput$={e => message.name = (e.target as HTMLInputElement).value}/>
                <QuestionInput label={"What’s your email address?"} placeholder={"Type your email"}
                               name={'client-email'} value={message.email}
                               onInput$={e => message.email = (e.target as HTMLInputElement).value}/>
                <QuestionInput label={"What’s your phone number?"} placeholder={"Type your phone number"}
                               name={'client-phone'} value={message.phone}
                               onInput$={e => message.phone = (e.target as HTMLInputElement).value}/>
                <QuestionTextArea label={"What’s your question/proposal?"} placeholder={"Type your question/proposal"}
                                  name={'client-question'} value={message.text}
                                  onInput$={e => message.text = (e.target as HTMLInputElement).value}/>
            </div>
            <StandardCheckbox checked={agreed.value} onCheck$={() => agreed.value = !agreed.value}>
                I agree with the Privacy Policy
            </StandardCheckbox>
            <ApplyButton class={'w-[290px] mx-auto lg:mx-0'}>
                Send message
            </ApplyButton>
        </form>
    );
});
