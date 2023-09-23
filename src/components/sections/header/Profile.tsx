import {component$, useSignal} from "@builder.io/qwik";
import IconProfile from "~/components/UI/icons/IconProfile";
import Modal from "~/components/UI/modal/Modal";
import ProfileModal from "~/components/UI/modal/modal-child/ProfileModal";

export default component$(() => {
    const opened = useSignal(false);
    return (
        <>
            <IconProfile class={'cursor-pointer'} onClick$={() => opened.value = true}/>
            {opened.value &&
                <Modal opened={opened.value} onClose$={() => opened.value = false}>
                    <ProfileModal onClose$={() => opened.value = false}/>
                </Modal>
            }
        </>
    );
});
