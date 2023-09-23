import {component$, useContext, useSignal} from "@builder.io/qwik";
import {useScrolled} from "~/hooks/useScrolled";
import IconLogo from "~/components/UI/icons/IconLogo";
import IconHeartBig from "~/components/UI/icons/IconHeartBig";
import IconSearch from "~/components/UI/icons/IconSearch";
import LanguageDropDown from "~/components/UI/dropdown/LanguageDropDown";
import {darkenContext} from "~/routes/layout";
import FullMenu from "~/components/sections/header/FullMenu";
import Cart from "~/components/sections/header/Cart";
import Menu from "~/components/sections/header/Menu";
import Profile from "~/components/sections/header/Profile";
import {Link, useLocation} from "@builder.io/qwik-city";
import {useCatalogPaths} from "~/hooks/useCatalogPaths";



export default component$(() => {
    const visible = useScrolled();
    const currCategory = useSignal('');
    const loc = useLocation();
    const menu = useCatalogPaths();
    const darken = useContext(darkenContext);
    return (
       <header class={'max-w-[1280px] mx-auto relative flex justify-center'}
           onMouseLeave$={() => {
               if (currCategory.value) {
                   currCategory.value = ''
                   darken.value = false;
               }
           }}
       >
            <div class={`max-w-[1236px] fixed z-[100] h-[68px] w-[calc(100%-20px)] xl:w-[calc(100%-44px)] bg-bg rounded-xl transition-[top] duration-200 ease-linear ${!visible.value ? '-top-24' : 'top-2.5'}
            px-4 xl:px-3 flex justify-between items-center`}>
                <Link href={loc.url.pathname === '/' ? '#logo' : '/'}>
                    <IconLogo />
                </Link>
                <nav class={'hidden xl:flex xl:gap-6'}>
                    {menu.map((el, i) =>
                            <li key={i} class={'text-main font-medium leading-[19.2px] cursor-pointer list-none'}
                                onMouseEnter$={() => {
                                    currCategory.value = el.title
                                    darken.value = true;
                                    document.body.style.overflow = "hidden"
                                }}
                            >
                                {el.title}
                            </li>
                        )}
                </nav>
                <div class={'flex items-center gap-2.5 xl:gap-5'}>
                    <IconSearch/>
                    <LanguageDropDown class={'hidden xl:block'}/>
                    <IconHeartBig/>
                    <Profile/>
                    <Cart/>
                    <Menu class={'xl:hidden'}/>
                </div>
            </div>
           {currCategory.value &&
                   <FullMenu menu={menu.find(el => el.title === currCategory.value)!}/>
           }

       </header>
   )
});

