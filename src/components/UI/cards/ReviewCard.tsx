import {component$} from "@builder.io/qwik";
import Splitter from "~/components/UI/splitter/Splitter";
import ProgressBar from "~/components/UI/bar/ProgressBar";
import {useWindowSize} from "~/hooks/useWindowSize";

interface Review {
    clientName: string;
    date: string;
    title: string;
    description: string;
    rate: number;
}

interface ReviewProps {
    review: Review;
}


export default component$<ReviewProps>(({review}) => {
    const width = useWindowSize();
    return (
        <div class={'p-6 xl:p-10 flex flex-col gap-6 bg-white rounded-[30px] xl:min-w-[805px] xl:flex-row xl:gap-12'}>
            <div class={'flex flex-col gap-1'}>
                <span class={'text-main font-medium xl:w-[133px]'}>{review.clientName}</span>
                <span class={'text-main font-medium text-[11px]'}>{review.date}</span>
            </div>
            <Splitter direction={width < 1280 ? 'horizontal' : 'vertical'}/>
            <div class={'flex flex-col gap-[33px]'}>
                <div class={'flex flex-col gap-3'}>
                    <span>*****</span>
                    <div class={'flex flex-col gap-2'}>
                        <h1 class={'text-xl xl:text-2xl font-medium text-main'}>
                            {review.title}
                        </h1>
                        <p class={'text-sm font-medium text-main'}>
                            {review.description}
                        </p>
                    </div>
                </div>
                <div class={'flex flex-col gap-[11px]'}>
                    <span class={'text-main lg:text-lg font-medium leading-[130%]'}>Quality</span>
                    <ProgressBar percent={review.rate}/>
                    <div class={'flex justify-between items-center text-main text-sm font-medium leading-[18.2px]'}>
                        <span>Poor</span>
                        <span>Excellent</span>
                    </div>
                </div>
            </div>
        </div>
    );
});
