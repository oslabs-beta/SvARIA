<script>
    import footerLogo from './assets/SvAriaLogoFooter.png'
  </script>

<footer id='footer' class="bg-[#333] p-4 md:px-8">
        
    <div id='footerDiv' class="mx-auto w-full flex md:flex-row md:gap-0 gap-10 flex-col items-center justify-around text-base">

        
        <div id='logoCopyright' class="hidden md:flex md:mr-16 flex-col gap-4 md:col-span-2 noGap items-center">
            <a href="/">
            <img id='footerLogo' class="min-w-[175px] h-[70px] w-[175px]" alt="SvARIA Logo" src={footerLogo}/>
            </a>
            <p id='copyright' class='text-white text-sm'>
                ©SvARIA 2025. All rights reserved.
            </p>
        </div>



        <div class="flex flex-row justify-around md:w-fit w-full">
            <div id='logoCopyright' class="md:hidden flex flex-col gap-4 items-center">
                <a href="/">
                    <img id='footerLogo' class="min-w-[175px] h-[70px] w-[175px]" alt="SvARIA Logo" src={footerLogo}/>
                </a>
                <p id='copyright' class='text-white text-sm'>
                    ©SvARIA 2025. All rights reserved.
                </p>
            </div>
            <div id='contactReport' class="flex mt-6 md:mr-16 flex-col smallScreen items-center" >
                <a href="https://github.com/oslabs-beta/SvARIA/issues" 
                    class="cursor-pointer duration-200"
                    alt="Report an issue" target="_blank" title="Report an issue">
                    <p id='reportLandscape' class="poppins text-md text-white sm:text-lg hover:text-indigo-400 " >
                        Report an issue
                    </p>
                </a>
                <div class="flex flex-col gap-4">
                    <a href="mailto:svarialibrary@gmail.com"
                    class="cursor-pointer text-white duration-200"
                    alt="svarialibrary@gmail.com" target="_blank" title="Contact us">
                    <p id='contactLandscape' class="poppins text-base text-white sm:text-lg hover:text-indigo-400 ">Contact Us</p>
                    </a>
                </div>
            </div>
        </div>

        <div id='socialLinks' class="hidden md:flex md:w-fit w-full md:flex-col md:justify-normal justify-around flex-row gap-4">
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

        <div id='socialLinks' class="md:hidden flex md:w-fit w-full md:flex-col md:justify-normal justify-around flex-row gap-4">
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