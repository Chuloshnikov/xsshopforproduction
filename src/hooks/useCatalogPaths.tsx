import {useSpeakConfig, useSpeakLocale, useTranslate} from "qwik-speak";
import {findTranslatedPath} from "~/utils/findTranslatedPath";

export const useCatalogPaths = () => {
    const t = useTranslate();

    const config = useSpeakConfig();
    const locale = useSpeakLocale();
    const path = findTranslatedPath("/katalog/", locale.lang)
    return [
        {
            title: t('header.woman.title'),
            categories: [
                {name: t('header.woman.forWoman'), href: `${path}/${t('header.woman.title').toLowerCase()}`},
                {name: t('header.product-categories.voters'), href: '/catalog/woman?type=voters'},
                {name: t('header.product-categories.analToys'), href: '/catalog/woman?type=anal-toys'},
                {name: t('header.product-categories.vaginalBalls'), href: '/catalog/woman?type=vaginal-balls'},
                {name: t('header.product-categories.lingerie-clothing'), href: '/catalog/?type=lingerie-clothing'},
                {name: t('header.product-categories.contraceptives'), href: '/catalog/woman?type=contraceptives'},
                {name: t('header.product-categories.dildos'), href: '/catalog/woman?type=dildos'},
                {name: t('header.product-categories.care-products'), href: '/catalog/woman?type=care-products'},
                {name: t('header.product-categories.smart-toys'), href: '/catalog/woman?type=smart-toys'},
            ]
        },
        {
            title: t('header.man.title'),
            categories: [
                {name: t('header.man.forMan'), href: '/catalog/man'},
                {name: t('header.product-categories.voters'), href: '/catalog/man?type=voters'},
                {name: t('header.product-categories.analToys'), href: '/catalog/man?type=anal-toys'},
                {name: t('header.product-categories.vaginalBalls'), href: '/catalog/man?type=vaginal-balls'},
                {name: t('header.product-categories.lingerie-clothing'), href: '/catalog/man?type=lingerie-clothing'},
                {name: t('header.product-categories.contraceptives'), href: '/catalog/man?type=contraceptives'},
                {name: t('header.product-categories.dildos'), href: '/catalog/man?type=dildos'},
                {name: t('header.product-categories.care-products'), href: '/catalog/man?type=care-products'},
                {name: t('header.product-categories.smart-toys'), href: '/catalog/man?type=smart-toys'},
            ]
        },
        {
            title: t('header.newbies.title'),
            categories: [
                {name: t('header.newbies.forNewbies'), href: '/catalog/newbies'},
                {name: t('header.product-categories.voters'), href: '/catalog/newbies?type=voters'},
                {name: t('header.product-categories.analToys'), href: '/catalog/newbies?type=anal-toys'},
                {name: t('header.product-categories.vaginalBalls'), href: '/catalog/newbies?type=vaginal-balls'},
                {name: t('header.product-categories.lingerie-clothing'), href: '/catalog/newbies?type=lingerie-clothing'},
                {name: t('header.product-categories.contraceptives'), href: '/catalog/newbies?type=contraceptives'},
                {name: t('header.product-categories.dildos'), href: '/catalog/newbies?type=dildos'},
                {name: t('header.product-categories.care-products'), href: '/catalog/newbies?type=care-products'},
                {name: t('header.product-categories.smart-toys'), href: '/catalog/newbies?type=smart-toys'},
            ]
        },
        {
            title: t('header.pairs.title'),
            categories: [
                {name: t('header.pairs.forPairs'), href: '/catalog/pairs'},
                {name: t('header.product-categories.voters'), href: '/catalog/pairs?type=voters'},
                {name: t('header.product-categories.analToys'), href: '/catalog/pairs?type=anal-toys'},
                {name: t('header.product-categories.vaginalBalls'), href: '/catalog/pairs?type=vaginal-balls'},
                {name: t('header.product-categories.lingerie-clothing'), href: '/catalog/pairs?type=lingerie-clothing'},
                {name: t('header.product-categories.contraceptives'), href: '/catalog/pairs?type=contraceptives'},
                {name: t('header.product-categories.dildos'), href: '/catalog/pairs?type=dildos'},
                {name: t('header.product-categories.care-products'), href: '/catalog/pairs?type=care-products'},
                {name: t('header.product-categories.smart-toys'), href: '/catalog/pairs?type=smart-toys'},
            ]
        },
        {
            title: t('header.fetish.title'),
            categories: [
                {name: t('header.fetish.forFetish'), href: '/catalog/fetish'},
                {name: t('header.product-categories.voters'), href: '/catalog/fetish?type=voters'},
                {name: t('header.product-categories.analToys'), href: '/catalog/fetish?type=anal-toys'},
                {name: t('header.product-categories.vaginalBalls'), href: '/catalog/fetish?type=vaginal-balls'},
                {name: t('header.product-categories.lingerie-clothing'), href: '/catalog/fetish?type=lingerie-clothing'},
                {name: t('header.product-categories.contraceptives'), href: '/catalog/fetish?type=contraceptives'},
                {name: t('header.product-categories.dildos'), href: '/catalog/fetish?type=dildos'},
                {name: t('header.product-categories.care-products'), href: '/catalog/fetish?type=care-products'},
                {name: t('header.product-categories.smart-toys'), href: '/catalog/fetish?type=smart-toys'},
            ]
        },
        {
            title: "Brands",
            categories: [
                {name: "BRANDS", href: '/catalog/brands'},
                {name: "LELO", href: '/catalog/brands?lelo'},
                {name: "Womanizer", href: '/catalog/brands?womanizer'},
                {name: "Satisfyer", href: '/catalog/brands?satisfyer'},
                {name: "We-Vibe", href: '/catalog/brands?we-vibe'},
                {name: "Fleshlight", href: '/catalog/brands?fleshlight'},
                {name: "Fun Factory", href: '/catalog/brands?fun-factory'},
                {name: "Tenga", href: '/catalog/brands?tenga'},
                {name: "Pipedream", href: '/catalog/brands?pipedream'},
                {name: "Lovehoney", href: '/catalog/brands?lovehoney'},
            ]
        }
    ];
}
