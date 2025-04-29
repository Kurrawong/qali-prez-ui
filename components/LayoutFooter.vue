<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
</script>

<template>
    <footer class="bg-primary text-primary-foreground border-t-[0.25rem] border-t-secondary py-16">
        <div class="container mx-auto grid grid-cols-[3fr_2fr_2fr_5fr] gap-6">
            <div class="flex flex-col gap-4">
                <h3 class="text-xl">Contact us</h3>
                <p class="text-sm">Get in touch if you have any enquiries, comments and suggestions on Department of Natural Resources and Mines, Manufacturing and Regional and Rural Development services.</p>
                <Button variant="secondary" class="self-start" as-child>
                    <a href="https://www.nrmmrrd.qld.gov.au/contact-us">Contact us</a>
                </Button>
            </div>
            <div class="flex flex-col text-sm items-start gap-4 border-r border-r-[#265f75] pr-6 mr-6">
                <a href="https://www.nrmmrrd.qld.gov.au/legal/copyright">Copyright</a>
                <a href="https://www.nrmmrrd.qld.gov.au/legal/disclaimer">Disclaimer</a>
                <a href="https://www.nrmmrrd.qld.gov.au/legal/privacy">Privacy</a>
                <a href="https://www.nrmmrrd.qld.gov.au/legal/right-to-information">Right to information</a>
                <a href="https://www.qld.gov.au/help/accessibility/">Accessibility</a>
                <a href="https://www.nrmmrrd.qld.gov.au/site-map">Site map</a>
                <a href="https://www.qld.gov.au/languages/">Other languages</a>
            </div>
            <div class="flex flex-col gap-4">
                <h3 class="text-xl">Follow us</h3>
                <a class="flex flex-row items-center gap-3" href="https://www.facebook.com/LandQueensland">
                    <FontAwesomeIcon :icon="faFacebookF" class="text-[#bbc8cc] text-lg" />
                    <span class="text-sm">Land Queensland</span>
                </a>
                <a class="flex flex-row items-center gap-3" href="https://www.facebook.com/ManufacturingQueensland">
                    <FontAwesomeIcon :icon="faFacebookF" class="text-[#bbc8cc] text-lg" />
                    <span class="text-sm">Manufacturing Queensland</span>
                </a>
                <a class="flex flex-row items-center gap-3" href="https://www.facebook.com/MiningQld">
                    <FontAwesomeIcon :icon="faFacebookF" class="text-[#bbc8cc] text-lg" />
                    <span class="text-sm">Mining Queensland</span>
                </a>
                <a class="flex flex-row items-center gap-3" href="https://www.linkedin.com/company/resourcesqld/">
                    <FontAwesomeIcon :icon="faLinkedinIn" class="text-[#bbc8cc] text-lg" />
                    <span class="text-sm">LinkedIn</span>
                </a>
            </div>
            <div class="flex flex-col gap-4">
                <p class="text-sm">The Department of Natural Resources and Mines, Manufacturing, and Regional and Rural Development acknowledges Aboriginal peoples and Torres Strait Islander peoples as the Traditional Owners and custodians of the land, sea and community, and recognises their continuing contribution towards creating this strong and prosperous state of Queensland. We pay our respects to Elders past, present and emerging, and acknowledge those of the stolen generation who are still finding their way home.</p>
                <a href="https://www.qld.gov.au/"><img src="/qld_gov_horizontal.svg" alt="" width="220"></a>
                <p class="text-sm">&copy; The State of Queensland (Department of Natural Resources and Mines, Manufacturing, and Regional and Rural Development) 2025</p>
            </div>
        </div>
    </footer>
</template>
