<!-- This is where the hero imagery lives -->
<script>
	import { fade } from "svelte/transition";
    import A11yImage from "./assets/A11yImage.png";
    
</script>
    
    <!-- <a href='#WhySvARIA'><img src={A11yImage} alt='A11y Accessibility'/></a> -->
    <!-- bg-[url(/A11yImage.png)] -->
    <div id='heroCont' class="bg-[url(/A11yImage.png)] bg-cover bg-center bg-no-repeat w-full h-[80vh] flex justify-center items-center" alt="A11y Accessibility Image">
        <div class='h-2/3 w-[80vw] flex bg-white opacity-90 rounded-xl justify-center items-center'>
            <div class='w-full h-full bg-red-400'>
                “98% of U.S.-based webpages are not accessible to the disability community from a legal perspective…”
                <br>
                <br id=''>
                    <div id=''>
                    - 2020 Web Accessibility Annual Report compiled by the accessiBe initiative
                </div>
                <div>
                    <a id='heroCall' href='#WhySvARIA'>
                        Learn how SvARIA can help
                    </a>
                </div>
            </div>
        </div>
    </div>
             