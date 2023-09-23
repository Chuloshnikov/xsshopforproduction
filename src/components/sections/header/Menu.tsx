import {component$, useSignal} from "@builder.io/qwik";
import IconMenu from "~/components/UI/icons/IconMenu";
import Modal from "~/components/UI/modal/Modal";
import IconLogo from "~/components/UI/icons/IconLogo";
import IconClose from "~/components/UI/icons/IconClose";
import FullMenuMobile from "~/components/sections/header/FullMenuMobile";
import {Link, useLocation} from "@builder.io/qwik-city";

export default component$<{class: string}>((props) => {
    const opened = useSignal(false);
    const loc = useLocation();
    return (
        <>
            <IconMenu onClick$={() => opened.value = true} class={props.class}/>
            {opened.value &&
                <Modal opened={opened.value} onClose$={() => opened.value = false}>
                    <div onClick$={e => e.stopPropagation()}
                         class={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[calc(100%-24px)] h-[calc(100%-80px)]
                          rounded-3xl p-6 flex flex-col gap-6`}>
                        <div class={'flex justify-between items-center'}>
                            <Link href={loc.url.pathname === '/' ? '#logo' : '/'}>
                                <IconLogo/>
                            </Link>
                            <IconClose class={'cursor-pointer'} onClick$={() => opened.value = false}/>
                        </div>
                        <div class={'w-full h-full flex flex-col justify-between overflow-scroll'}>
                            <FullMenuMobile/>
                        </div>
                    </div>
                </Modal>
            }

        </>
    )
});
