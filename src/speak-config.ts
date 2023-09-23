import type { SpeakConfig } from 'qwik-speak';

export const config: SpeakConfig = {
    defaultLocale: { lang: 'sv-SE' },
    supportedLocales: [
        { lang: 'sv-SE'},
        { lang: 'en-US'}
    ],
    assets: [
        'app' // Translations shared by the pages
    ],
    runtimeAssets: [
        'runtime' // Translations with dynamic keys or parameters
    ]
};
