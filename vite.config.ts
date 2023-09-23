import {defineConfig} from "vite";
import {qwikVite} from "@builder.io/qwik/optimizer";
import {qwikCity} from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {qwikSpeakInline} from "qwik-speak/inline";

export default defineConfig(() => {
    return {
        plugins: [qwikCity({
                imageOptimization: {jsxDirectives: {quality: '100'}},
                rewriteRoutes: [
                    {
                        prefix: 'en-US',
                        paths: {
                            '': '',
                            'om-oss': 'about-us',
                            'kontacter': 'contacts',
                            'kassaorder': 'checkout-order',
                            'katalog': 'catalog',
                            'produkt': 'product',
                            'blogg': 'blog'
                        },
                    },
                ]
            },
        ),
            qwikSpeakInline({
                supportedLangs: ['en-US', 'sv-SE'],
                defaultLang: 'sv-SE',
                assetsPath: 'i18n'
            }),
            qwikVite(),
            tsconfigPaths()],
        preview: {
            headers: {
                "Cache-Control": "public, max-age=600",
            },
        },
    };
});
