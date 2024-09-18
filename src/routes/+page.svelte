
<script>
    import { MetaTags } from 'svelte-meta-tags';
    import Hero from "../splashPageLib/Hero.svelte";
    import WhySvARIA from "../splashPageLib/WhySvARIA.svelte";
    import GettingStarted from "../splashPageLib/GetStart.svelte";
    import CompTab from "../splashPageLib/CompTab.svelte";
    import GitHubFAQ from "../splashPageLib/GitHubFAQ.svelte";
</script>

<main class="flex flex-col">
    <Hero />
    <WhySvARIA />
    <GettingStarted />
    <GitHubFAQ />
</main>

<MetaTags
    title = 'Comprehensive Accessible Component Library and Toolkit'
    titleTemplate = '%s | Build Accessible UIs for Svelte'
    description = "SvARIA puts the power of building accessible UIs into the hands of any developer with an easy-to-use NPM package."
/>