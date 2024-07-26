<script>
    import footerLogo from './assets/SvAriaLogoFooter.png'
  </script>

<footer class="bg-[#333] py-16 sm:py-20 md:py-24 px-4 md:px-8">
        <div class="max-w-[1200px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-base">
            <div class="flex flex-col gap-4 md:col-span-2">
               <a href="/">
				<img class="min-w-[200px] h-[80px] w-[200px]" alt="SvARIA Logo" src={footerLogo}/>
                </a>
                <p>
                    ©SvARIA. All rights reserved.
                </p>
            </div>
            <div class="flex flex-col gap-4">
                <p class="font-bold poppins text-base sm:text-lg">Documentation</p>
                <a href="https://github.com/oslabs-beta/SvARIA/blob/main/README.md" 
                class="cursor-pointer hover:text-indigo-400 duration-200"
                alt="Documentation">
            </div>
            <div class="flex flex-col gap-4">
                <p class="font-bold poppins text-base sm:text-lg">Components</p>
                <a href="#CompTab" 
                class="cursor-pointer hover:text-indigo-400 duration-200"
                alt="Components">
            </div>
            <div class="flex flex-col gap-4">
                <p class="font-bold poppins text-base sm:text-lg">Github</p>
                <a href="https://github.com/oslabs-beta/SvARIA/" 
                class="cursor-pointer hover:text-indigo-400 duration-200"
                alt="GitHub">
            </div>
            <div class="flex flex-col gap-4">
                <p class="font-bold poppins text-base sm:text-lg">Report an issue</p>
                <a href="https://github.com/oslabs-beta/SvARIA/issues" 
                class="cursor-pointer hover:text-indigo-400 duration-200"
                alt="Report an issue">
            </div>
            <div class="flex flex-col gap-4">
                <p class="font-bold poppins text-base sm:text-lg">Contact Us</p>
                <a href="mailto:svarialibrary@gmail.com"
                class="cursor-pointer hover:text-indigo-400 duration-200"
                alt="svarialibrary@gmail.com">
            </div>
            <div class="flex flex-col gap-4">
                <p class="font-bold poppins text-base sm:text-lg">Follow Us</p>
                <a href=""
                class="cursor-pointer hover:text-indigo-400 duration-200"
                alt="Instagram">
                <i class="fa brands fa-instagram pr-2"/> Instagram </a>
                <a href=""
                class="cursor-pointer hover:text-indigo-400 duration-200"
                alt="Facebook">
                <i class="fa brands fa-facebook pr-2"/> Facebook </a>
                <a href=""
                class="cursor-pointer hover:text-indigo-400 duration-200"
                alt="YouTube">
                <i class="fa brands fa-youtube pr-2"/> YouTube </a>
            </div>
        </div>


</footer>