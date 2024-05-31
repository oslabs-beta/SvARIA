<script>
    import "../app.css";
    import Navbar from "../splashPageLib/Navbar.svelte";
    import Footer from "../splashPageLib/Footer.svelte";
</script>

<Navbar />
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