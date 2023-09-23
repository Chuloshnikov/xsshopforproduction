import {component$, Resource, useResource$} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";
import IconArrowLink from "~/components/UI/icons/IconArrowLink";
import NewsCard from "~/components/UI/cards/NewsCard";

const temp = {
    img: "https://s3-alpha-sig.figma.com/img/999f/cf41/f0ff19056921e9d8e054fa957df57311?Expires=1695600000&Signature=G7h5bBHuJW5t6En4XmAZBGzH03PRp6Np1KixCOdFFFpxhGOk6h~l6zy31-jRL1n6GKO23~9-d5yvLJPTVkGh37V6IDAx3rd3Z7kNO1GRft3zX9s6ZLXgF7dvf2jPvWR0py0~l4rnP5-DVyCnKgE~rVAJS1F2IFiBtALtWsF~v2~2duVOgvvl6iBbmH0AsEM48~z9SW4hZGOWxNf~-PyzWpIEtYINYrVrGQ3bplke7gsRtNfYRaPiimmn~drOmgJlCP~-Yv7SH6D3KfQuefs0g90u5Zzfb5slCXkdjr2EZ9Btu58WONWztEzYqRHlsRtrNaIdjl~7iHFROccpEOgf9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "New Job - We're hiring a content creator / social media executive",
    category: "Education",
    date: "10.05.23",
    time: 2
}

export default component$(() => {

    const news = useResource$(() => {
       return [temp,temp,temp];
    });

   return (
       <section class={'py-8 lg:py-[41px] xl:py-14 px-2.5 lg:px-7 xl:px-10 flex flex-col gap-10 overflow-scroll'}>
           <div class={'flex justify-between items-center'}>
               <h1 class={'text-[28px] lg:text-[36px] xl:text-[46px] leading-[30.8px] lg:leading-[39.6px] xl:leading-[55.2px] font-medium text-main'}>
                   Our News
               </h1>
               <Link class={'flex items-center gap-4 text-main font-medium leading-[18px] bg-[#EEE7F0] py-3 px-6 rounded-3xl'} href={'/news'}>
                   Read All <IconArrowLink/>
               </Link>
           </div>
           <div class={'flex gap-2 overflow-scroll xl:justify-between'}>
                <Resource
                    value={news}
                    onPending={() => <p>Loading...</p>}
                    onResolved={res =>
                        <>
                            {res.map((el, i) =>
                                <NewsCard img={el.img} title={el.title} date={el.date} id={i} key={i} category={el.category} time={el.time}/>
                            )}
                        </>
                    }
                />
           </div>
       </section>
   )
});
