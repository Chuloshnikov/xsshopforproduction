import {component$, useSignal} from "@builder.io/qwik";

export default component$(() => {
    const email = useSignal('');
    return (
        <div class={'relative w-[272px] lg:w-[294px] xl:w-[377px]'}>
            <input bind:value={email}
                type="email" class={'h-[49px] w-full bg-transparent px-6 rounded-3xl text-accent2 border-[1px] border-accent3'}
                   placeholder={'Email'}/>
            <button class={'absolute right-1 inset-y-1 bg-accent2 rounded-3xl px-6 py-3 text-sm leading-[16.8px] font-medium text-white'}>Sign Up</button>
        </div>
    )
})
