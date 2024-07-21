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
<SectionWrapper >
    <!-- <div id='hero' style={styleObjectToString(styles)}></div> -->
    <a href='#WhySvARIA'><img src={A11yImage} alt='A11y Accessibility'/></a>
             
</SectionWrapper>