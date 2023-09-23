import routeTranslations from "~/assets/constants/routeTranslations.json";

export const findTranslatedPath = (originalPath: string, newLocale: string) => {
    return routeTranslations
        .find(el => el.some(obj => originalPath === obj.path))
        ?.find(el => el.lang === newLocale)?.path;
}
