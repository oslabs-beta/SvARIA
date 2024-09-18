<!-- This is where the General Product Description lives -->
<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    import svelteLogo from './assets/Svelte_Logo.png';
    import svariaLogotype from './assets/SvAriaFooterLogoDark.png';

</script>
<br class='hiddenLineBreak'><br class='hiddenLineBreak'><br class='hiddenLineBreak'><br class='hiddenLineBreak'>
<SectionWrapper id="WhySvARIA">
    <div class="flex flex-col gap-5 sm:gap-10 md:gap-15 flex-1 items-center justify-center pb-10 md:pb-14">
        <div class="flex flex-col gap-2">
      
            <h2 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">
                <img id='svelteLogo' alt='Svelte logo' src={svelteLogo} /> + ARIA = <img id='whySvariaLogo' alt='SvARIA logo' src={svariaLogotype}/>
            </h2>
        </div>
            <h3 id='whySvariaText' class="text-2xl sm:text-3xl md:text-4xl max-w-[1000px] mx-auto w-full text-center">
                A comprehensive component library built from the ground-up for Svelte offering plug-and-play
                ARIA compliant components + features to help your project meet and exceed accessibility standards
                while streamlining the design process.
            </h3> 
    </div>
</SectionWrapper>