<!-- This is where the GitHub Link and FAQ live -->
<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    import Form from "../lib/input_types/Form_ts.svelte"

    let formElements = [
        {
			name: 'username',
			type: 'input',
			labelValue: 'Username',
			labelClass: 'inline-block mb-2 text-sm font-medium text-gray-900',
            inputClass: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
		}
    ]
</script>
<SectionWrapper id="GitHubFAQ">
    <div class=" -mt-[50px] flex flex-col gap-5 sm:gap-10 md:gap-15 flex-1 items-center justify-center pb-10 md:pb-14">
        <div class="flex flex-col gap-2">
            <!-- <h8 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">
                GitHub/FAQ
            </h8>
        </div>
            <h9 class="text-2xl sm:text-3xl md:text-4xl max-w-[1000px] mx-auto w-full  text-center">
                Check out the repository
                <p class="text-xl sm:text-2xl md:text-3xl max-w-[1000px] mx-auto w-full italic font-light text-center">
                    <br>
                   Have suggestions for new components or fixes for existing ones? <br>
                   Need to report a pesky bug? 
                   <br>
                   Need to crowd source some additional info? 
                   <br>
                   Visit the SvARIA GitHub
                   <br><br>
                   *GitHub Link*
                </p>
            </h9>   
            <br><br> -->
            <h10 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">
                FAQ/News
                <br>
                <p class="text-xl sm:text-2xl md:text-3xl max-w-[1000px] mx-auto w-full italic font-light text-center">
                    <br>
                    Medium Article
                    <br>
                    Latest Press Release <br>
                    FastCompany Article
                </p>
            </h10>  
            <!-- <h11 class="text-2xl sm:text-3xl md:text-4xl max-w-[1000px] mx-auto w-full  text-center">
                SvARIA in the News
                <p class="text-xl sm:text-2xl md:text-3xl max-w-[1000px] mx-auto w-full italic font-light text-center">
                    <br>
                    Medium Article
                    <br>
                    Latest Press Release <br>
                    FastCompany Article
                </p>
            </h11>    -->
</SectionWrapper>