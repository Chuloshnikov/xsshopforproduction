import {component$, useSignal} from "@builder.io/qwik";
import IconArrowNext from "~/components/UI/icons/IconArrowNext";
import IconArrowPrev from "~/components/UI/icons/IconArrowPrev";
import {Link} from "@builder.io/qwik-city";
import {useCatalogPaths} from "~/hooks/useCatalogPaths";


export default component$(() => {
    const chosen = useSignal('');
    const menu = useCatalogPaths();

    return (
        <nav class={'flex flex-col gap-6 w-full '}>
            {!chosen.value
                ?
                menu.map((el, i) =>
                    <li key={i} onClick$={() => chosen.value = el.title}
                          class={'flex justify-between items-center text-main font-medium leading-[20.8px] list-none'}>
                        {el.title} <IconArrowNext/>
                    </li>
                )
                :
                <>
                    <div class={'flex flex-col gap-6'}>
                        <li onClick$={() => chosen.value = ''}
                              class={'flex gap-2 items-center text-main font-medium leading-[20.8px] list-none'}>
                            <IconArrowPrev/> {chosen.value}
                        </li>
                        <Link href={menu.find((el) => el.title === chosen.value)?.categories[0].href}
                            class={'bg-main text-sm font-medium text-white rounded-xl h-12 w-full flex justify-center items-center'}>
                            Shop all products for {chosen.value} <IconArrowNext/>
                        </Link>
                    </div>
                    {
                        menu.find((el) => el.title === chosen.value)?.categories.slice(1)
                        .map((el, i) =>
                                <Link key={i} href={el.href}
                                      class={'flex gap-2 items-center text-main font-medium leading-[20.8px]'}>
                                    {el.name} <IconArrowNext/>
                                </Link>
                        )
                    }
                </>

            }
        </nav>
    );
});
