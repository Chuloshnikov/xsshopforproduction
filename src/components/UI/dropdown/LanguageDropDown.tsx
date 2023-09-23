import {$, component$} from "@builder.io/qwik";
import type {SpeakLocale} from "qwik-speak";
import { useSpeakConfig, useSpeakLocale} from "qwik-speak";
import {useLocation, useNavigate} from "@builder.io/qwik-city";
import {findTranslatedPath} from "~/utils/findTranslatedPath";
import {removeParametersFromPath} from "~/utils/removeParametersFromPath";
export default component$<{class?: string}>((props) => {
    const loc = useLocation();
    const nav = useNavigate();
    const config = useSpeakConfig();
    const locale = useSpeakLocale();
    const changeLocale$ = $(async (newLocale: SpeakLocale) => {
        document.cookie = `locale=${JSON.stringify(newLocale)};max-age=86400;path=/`;
        const path = removeParametersFromPath(loc.url.pathname, loc.params);
        const paramPath = Object.values(loc.params).join('/')
        const relocatePath = findTranslatedPath(path, newLocale.lang) + paramPath + loc.url.search;
        await nav(relocatePath);
        location.reload();
    });
   return (
       <span class={`cursor-pointer ${props.class}`}
             onClick$={async () => await changeLocale$(config.supportedLocales.find(el => el.lang !== locale.lang)!)}>
           {locale.lang === 'en-US' ? 'En' : 'Sw'}
       </span>
   )
});
