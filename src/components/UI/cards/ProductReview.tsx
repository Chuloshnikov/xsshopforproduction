import {component$} from "@builder.io/qwik";
import Splitter from "~/components/UI/splitter/Splitter";
import ProgressBar from "~/components/UI/bar/ProgressBar";
import {useWindowSize} from "~/hooks/useWindowSize";

interface WindowSize {
  width: string;
  height: string;
}

export default component$(() => {
    const {width}: WindowSize = useWindowSize();
    console.log(width);
    return (
        <div class={'flex flex-col gap-6 p-6 bg-white rounded-[20px] lg:flex-row lg:gap-12 h-fit lg:w-[648px]'}>
            <div class={'flex flex-col gap-[5px] lg:w-2/5'}>
                <span class={'text-main text-[32px] leading-[38.4px] font-medium flex items-center'}>5.0 *****</span>
                <span class={'text-main text-sm leading-[18.2px] font-medium lg:text-base'}>Based on (#count#) review</span>
            </div>
            <Splitter direction={width < 768 ? "horizontal" : "vertical"}/>
            <div class={'flex flex-col gap-[11px] lg:w-3/5'}>
                <span class={'text-main lg:text-lg font-medium leading-[130%]'}>Quality</span>
                <ProgressBar percent={87}/>
                <div class={'flex justify-between items-center text-main text-sm font-medium leading-[18.2px]'}>
                    <span>Poor</span>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    );
});
