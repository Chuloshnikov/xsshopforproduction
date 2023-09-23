import {component$, Resource, useResource$, useTask$} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";
import IconArrowRight from "~/components/UI/icons/IconArrowRight";
import ProductCard from "~/components/UI/cards/ProductCard";

interface Category {
    name: string;
    href: string;
}

interface MenuItems {
    title: string;
    categories: Category[]
}

interface MenuProps {
    menu: MenuItems
}

const temp = {
    img: "https://s3-alpha-sig.figma.com/img/7876/553f/66b9fdc54a21da1828ef00776ef5c82f?Expires=1694390400&Signature=WDBDBpDKQKvu1mb8XgD0wakXshYIkgulTgmEt60fPt28HPAOGTNWrKBKycqPklszk-6SKdVJvDbktbqvHN2KfUBU1ZqiAQ-BWoY1CyzBsavmkwU1LtzMla6t9JAH~HQEvbi8-1z97N76hJ2~Fc5ZQXevR0AORDmzZ8GZ1svtN-uASeFwpeuVtlgehgyjNsKFaD83hxE74D5ViM~fwH-Mtz0ZeRtBSmyH0Z5oH9N20UrFwLXRu-aK4s1CNb0h6TZfZJONNrDZrYub48qfxZGjnYHTumxpA8WuoNaa-zKEQQ58DliE42DceXF2y1C-AtGoEdPChvKwykimOEP-wpgf5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Rabbit Vibrators",
    price: "4 226 грн"
}

export default component$<MenuProps>(({menu}) => {
    const prods = useResource$(() => {
        return [temp,temp,temp];
    });

    useTask$(() => {
        const html = document.querySelector('html');
        if (html)
            html.style.overflow = 'hidden';
        return () =>  {
            if (html)
                html.style.overflow = 'auto';
        };
    });

    return (
        <div class={'max-w-[1200px] fixed mt-[78px] z-[100] w-[calc(100%-81px)]'}>
            <div class={'h-1.5 w-[calc(100%-81px)]'}></div>
            <div class={'bg-white h-[517px] rounded-xl flex'}>
                <aside class={'h-full border-r-[1px] w-[214px] border-[#CCC] flex flex-col gap-4 py-[47.5px] pl-8'}>
                    {
                        menu.categories.map((el, i) =>
                            <Link key={i} href={el.href}
                                  class={'text-main font-medium leading-19.2px flex items-center gap-2'}>
                                {el.name} {i === 0 && <IconArrowRight/>}
                            </Link>
                        )
                    }
                </aside>
                <section class={'flex flex-col py-[47.5px]'}>
                    <Link href={menu.categories[0].href}
                          class={'font-medium text-main px-7 flex items-center gap-2'}>
                        Shop all {menu.title} products <IconArrowRight/>
                    </Link>
                    <div class={'flex justify-between gap-10 w-full px-7'}>
                        <Resource
                            value={prods}
                            onPending={() => <p>Loading...</p>}
                            onResolved={(res) =>
                            <>
                                {res.map((el, i) =>
                                    <ProductCard price={el.price} name={el.title}
                                                 img={el.img} id={i} key={i}/>
                                )}
                            </>
                        }
                        />
                    </div>
                </section>
            </div>
        </div>
    )
});
