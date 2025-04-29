<script lang="ts" setup>
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();
</script>

<template>
    <div class="relative border-b-[8px] border-b-secondary">
        <nav class="main-nav container mx-auto hidden md:flex md:flex-row">
            <div v-for="{ label, url } in appConfig.menu.filter(item => item.active !== false)" class="relative mt-2">
                <NuxtLink
                    :to="url"
                    :class="`block transition-all px-3 py-4 after:h-[8px] after:content-[''] after:top-[24px] after:relative after:block after:w-full hover:after:bg-background ${(url === '/' && route.path === '/') || (url !== '/' && route.path.startsWith(url)) ? 'font-bold after:bg-background' : 'after:bg-transparent'}`"
                >{{ label }}</NuxtLink>
            </div>
        </nav>
    </div>
</template>
