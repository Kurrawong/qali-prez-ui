<template>
    <div class="pre-header bg-primary text-primary-foreground">
        <div class="container mx-auto flex flex-row items-center justify-between">
            <a class="py-2 !text-primary-foreground" href="https://www.qld.gov.au/">qld.gov.au</a>
            <Button class="rounded-none" variant="secondary" as-child>
                <a href="https://www.nrmmrrd.qld.gov.au/contact-us">Contact us</a>
            </Button>
        </div>
    </div>
    <header class="bg-white h-32">
        <div class="container mx-auto px-4 h-full flex items-center">
            <a href="http://www.qld.gov.au/">
                <img class="" src="/qld_gov_logo.svg" alt="">
            </a>
            <div class="h-[56px] border-r-[2px] border-r-secondary mx-6"></div>
            <a href="https://www.nrmmrrd.qld.gov.au/" class="font-bold text-2xl brand-font">Department of Natural Resources and Mines, Manufacturing, and Regional and Rural Development</a>
        </div>
    </header>
</template>

<style scoped>
.brand-font {
    font-family: "Fira Sans", "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
</style>