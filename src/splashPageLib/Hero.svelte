<!-- This is where the hero imagery lives -->
<script>
    import Navbar from "./Navbar.svelte";
    import A11yImage from "./assets/A11yImage.png";
    import SectionWrapper from "./SectionWrapper.svelte";
    let styles = {backgroundImage:`url(${A11yImage})`,
        backgroundSize: 'contain',
        backgroundPositionY: '0',
        backgroundRepeat: 'no-repeat'
    }
    function styleObjectToString(styleObject) {
        return Object.entries(styleObject).map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}`).join('; ');
    }
</script>
<SectionWrapper >
    <!-- <Navbar /> -->
    <div id='hero' style={styleObjectToString(styles)}>
        <!-- ... -->
        <!-- <div class="flex flex-col gap-[5] flex-1 items-center justify-center pb-10 md:pb-14 text-2xl">
            <h1 >Accessibility-first design made possible by SvARIA:</h1>
            <h2>a robust library of ARIA-compliant components built specifically for Svelte</h2>
        </div> -->
    </div>
             
</SectionWrapper>