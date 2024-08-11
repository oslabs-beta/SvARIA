<!-- This is where the GitHub Link and FAQ live -->
<script lang="ts">
	import SectionWrapper from './SectionWrapper.svelte';
	import Form from '$lib/Form.svelte';

	let firstName = '';
	let lastName = '';
	let email = '';

	let formElements = [
		{
			name: 'firstName',
			type: 'input',
			labelValue: 'First Name',
			labelId: ' ',
			labelClass:
				'row-start-1 col-start-2 col-span-3 text-center text-lg font-medium text-gray-900',
			inputClass:
				'col-start-2 col-span-3 pl-2.5 row-start-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-blue-500 dark:focus:border-blue-500'
		},
		{
			name: 'lastName',
			type: 'input',
			labelValue: 'Last Name',
			labelId: ' ',
			labelClass:
				'col-start-6 col-span-3 text-center row-start-1 text-lg font-medium text-gray-900',
			inputClass:
				'bg-gray-50 col-start-6 pl-2.5 col-span-3 row-start-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
		},
		{
			name: 'email',
			type: 'input',
			labelValue: 'Email',
			labelId: '',
			labelClass: 'text-center row-start-3 col-start-5 text-lg font-medium text-gray-900',
			inputClass:
				'h-9 col-start-2 col-span-7 pl-2.5 row-start-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
		}
	];

	async function formSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const first_Name = form.firstName.value.trim();
		const last_Name = form.lastName.value.trim();
		const email_ = form.email.value.trim();

		try {
			const response = await fetch('/user', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					first_Name,
					last_Name,
					email_
				})
			});
			if (response.ok) {
				const result = await response.json();
				console.log('success:', result);
			} else {
				console.error('error:', response.statusText);
			}
		} catch (error) {
			console.log(error);
		}
	}
</script>

<SectionWrapper id="GitHubFAQ">
	<div
		class=" -mt-[50px] flex flex-col gap-5 sm:gap-10 md:gap-15 flex-1 items-center justify-center pb-10 md:pb-14"
	>
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
			<h10
				class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
			>
				<br />
				<br />
				<br />
				FAQ/News
				<br />
				<div>
					<p
						class="text-xl sm:text-2xl md:text-3xl max-w-[1000px] mx-auto w-full italic font-light text-center"
					>
						Signup here to stay connected!
					</p>
					<Form
						{formElements}
						formClass="grid grid-cols-9 gap-y-0 grid-rows-4"
						submitButtonClass="mt-5 row-start-5 col-start-4 col-span-3 text-[.4em]"
						on:submit={formSubmit}
					/>
				</div>
				<p
					class="text-xl sm:text-2xl md:text-3xl max-w-[1000px] mx-auto w-full italic font-light text-center"
				>
					<br />
					Medium Article
					<br />
					Latest Press Release <br />
					FastCompany Article
				</p>
			</h10>
			<br />
			<br />
			<br />
			<br />

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
		</div>
	</div></SectionWrapper
>
