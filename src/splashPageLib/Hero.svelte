<!-- This is where the hero imagery lives -->
<script>
    import A11yImage from "./assets/A11yImage.png";
    import SectionWrapper from "./SectionWrapper.svelte";
	import WhySvAria from "./WhySvARIA.svelte";
    
</script>
<SectionWrapper id='hero'>
    
    <a href='#WhySvARIA'><img src={A11yImage} alt='A11y Accessibility'/></a>
    <div id='heroAnimate'>
        <div class='scrim'></div>
        <div class='quote'>
            “98% of U.S.-based webpages are not accessible to the disability community from a legal perspective…”
        <br>
        <br id='lineBreak'>
             <div id='subQuote'>
            - 2020 Web Accessibility Annual Report compiled by the accessiBe initiative
        </div>
        <div>
            <a id='heroCall' href='#WhySvARIA'>
                Learn how SvARIA can help
            </a>
        </div>
        </div>
    </div>
             
</SectionWrapper>