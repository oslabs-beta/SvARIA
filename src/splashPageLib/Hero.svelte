<!-- This is where the hero imagery lives -->
<script>
    import A11yImage from "./assets/A11yImage.png";
    import SectionWrapper from "./SectionWrapper.svelte";
	import WhySvAria from "./WhySvARIA.svelte";
    
    // let styles = {backgroundImage:`url(${A11yImage})`,
    //     backgroundSize: 'contain',
    //     backgroundPositionY: '0',
    //     backgroundRepeat: 'no-repeat'
    // }
    // function styleObjectToString(styleObject) {
    //     return Object.entries(styleObject).map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}`).join('; ');
    // }
</script>
<SectionWrapper id='hero'>
    
    <!-- <div id='hero' style={styleObjectToString(styles)}></div> -->
    <a href='#WhySvARIA'><img src={A11yImage} alt='A11y Accessibility'/></a>
    <div id='heroAnimate'>
        <div class='scrim'></div>
        <p class='quote'>
            “98% of U.S.-based webpages are not accessible to the disability community from a legal perspective…”
        <br>
        <span style='font-style: italic; font-size: .5em '>
            - 2020 Web Accessibility Annual Report compiled by the accessiBe initiative
        </span>
        <a id='heroCall' href='#WhySvARIA'>
            Learn how SvARIA can help
        </a>
        </p>
    </div>
             
</SectionWrapper>