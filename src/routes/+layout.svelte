<script>
    import "../app.css";
    import Nav from '$lib/navigation/Navigation.svelte'
    import Navbar from "../splashPageLib/Navbar.svelte";
    import Footer from "../splashPageLib/Footer.svelte";

    let links= [{ link: '/', name: 'Home' }, { link: 'https://github.com/oslabs-beta/SvARIA', name: 'GitHub' }, { link: '/components', name: 'Components' }, { link: '/about', name: 'About'} ]
</script>

<Nav heading='SvARIA' link={links} />
<slot />
<Footer />

<!-- 
    *General Page Structure*
    header/navbar
    hero
    product description
    Getting Started 
    Tab: Components/Docs/Code
    Github/faq
    footer ()

 -->