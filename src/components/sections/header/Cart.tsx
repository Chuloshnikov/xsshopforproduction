import {component$, useSignal} from "@builder.io/qwik";
import Modal from "~/components/UI/modal/Modal";
import IconCartBig from "~/components/UI/icons/IconCartBig";

export default component$(() => {
    const opened = useSignal(false);
   return (
       <>
           <IconCartBig onClick$={() => opened.value = true}/>
           <Modal opened={opened.value} onClose$={() => opened.value = false}>
               <div>
                   <div class={'w-96 h-96 bg-white opacity-100'}>

                   </div>
               </div>
           </Modal>
       </>

   )
});
