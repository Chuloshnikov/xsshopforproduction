import {component$} from "@builder.io/qwik";
import IconClock from "~/components/UI/icons/IconClock";
import { Image } from "@unpic/qwik";

export interface NewsCardProps {
    id: number;
    title: string;
    img: string;
    date: string;
    category: string;
    time: number;
}

export default component$<NewsCardProps>(({img, title, id, time, date, category}) => {
   return (
       <div class={'relative flex flex-col gap-4 cursor-pointer min-w-[273px] xl:w-[395px]'}>
           <span class={'absolute top-4 left-4 py-1.5 px-[18px] text-main font-medium leading-16.8px text-sm bg-white border-accent4 border-[1px] rounded-3xl'}>{category}</span>
           <Image src={img} alt={title} title={title} height={341} width={273}
                class={'rounded-[20px] h-[341px] min-w-full  object-cover'}
                loading={"lazy"} decoding={"async"}/>
           <div class={'flex items-center gap-1 text-accent3 text-sm xl:text-md'}>
                <span>{date} | </span>
               <IconClock/>
               <span>{time} min read</span>
           </div>
           <h2 class={'font-medium text-main leading-[19.2px] xl:text-2xl xl:leading-[28.8px]'}>{title}</h2>
       </div>
   )
});
