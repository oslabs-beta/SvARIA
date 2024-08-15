<script>
    import footerLogo from './assets/SvAriaLogoFooter.png'
  </script>

<footer class="bg-[#333] py-16 sm:py-20 md:py-4 px-4 md:px-8">
        
    <!-- <div class="max-w-[1200px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-base"> -->
    <div class="max-w-[1200px] mx-auto w-full flex items-center text-base">
            <div class="flex mr-16 flex-col gap-4 md:col-span-2">
               <a href="/">
				<img class="min-w-[175px] h-[70px] w-[175px]" alt="SvARIA Logo" src={footerLogo}/>
                </a>
                <p class='text-white text-sm'>
                    ©SvARIA. All rights reserved.
                </p>
            </div>
            <div class="flex mt-6 mr-16 flex-col">
                <!-- <div class="flex flex-col gap-4"> -->
                    <a href="https://github.com/oslabs-beta/SvARIA/issues" 
                    class="cursor-pointer duration-200"
                    alt="Report an issue" target="_blank" title="Report an issue">
                    <p class="poppins text-md text-white sm:text-lg hover:text-indigo-400" >Report an issue</p>
                </a>
                <!-- </div> -->
                <div class="flex flex-col gap-4">
                    <a href="mailto:svarialibrary@gmail.com"
                    class="cursor-pointer text-white duration-200"
                    alt="svarialibrary@gmail.com" target="_blank" title="Contact us">
                    <p class="poppins text-base text-white sm:text-lg hover:text-indigo-400">Contact Us</p>
                    </a>
                </div>
            </div>
            <div id='socials' class="flex gap-4">
                <a href="https://www.linkedin.com/company/svaria"
                class="cursor-pointer text-white hover:text-indigo-400 duration-200"
                alt="LinkedIn" target="_blank" title="SvARIA LinkedIn">
                <i class="fa-brands fa-linkedin text-white pr-2"/> LinkedIn </a>
                
                <a href="https://github.com/oslabs-beta/SvARIA"
                class="cursor-pointer text-white hover:text-indigo-400 duration-200"
                alt="Github" target="_blank" title="SvARIA GitHub">
                <i class="fa-brands text-white fa-github pr-2"/> GitHub </a>
                
                <a href="https://www.youtube.com/@SvARIA-Toolkit"
                class="cursor-pointer text-white hover:text-indigo-400 duration-200"
                alt="YouTube" target="_blank" title="SvARIA YouTube">
                <i class="fa-brands text-white fa-youtube pr-2"/> YouTube </a>
            </div>
        </div>


</footer>