// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: [
      "@nuxtjs/tailwindcss",
      "shadcn-nuxt",
      "@nuxtjs/color-mode",
    ],
    extends: [
        "prez-ui"
    ],
    vite: {
        optimizeDeps: {
            include: ["@triply/yasgui"]
        }
    },
    app: {
        head: {
            title: "QALI Prez",
            link: [
                {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,600;0,700;1,600;1,700&amp;family=Lato:wght@300;400;700;900&amp;display=swap"},
            ],
        },
    },
});