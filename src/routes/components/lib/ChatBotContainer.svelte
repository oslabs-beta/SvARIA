<script>
	import ChatBot from './ChatBot.svelte';
	import Popover from '$lib/Popover.svelte';
	import svariacat from './assets/SvAriaCat.png';

	let answer = '';

	let popoverClassValue;
	$: if (answer != '') {
		const numWords = answer.split(' ').length;
		let sizeValue = Math.floor(numWords / 8);
		sizeValue = Math.min(Math.max(sizeValue, 2), 5);
		let heightValue = sizeValue >= 5 ? 'h-5/6' : 'h-fit';

		popoverClassValue = `text-sm bg-zinc-100 text-black rounded-lg dark:bg-slate-800 dark:text-white border-orange-700 dark:border-white border-2 -translate-y-full -translate-x-8 p-4 w-fit overflow-y-auto ${heightValue}`;
	} else {
		popoverClassValue =
			'text-sm bg-zinc-100 text-black rounded-lg dark:bg-slate-800 dark:text-white -translate-y-full border-orange-700 dark:border-white border-2 -translate-x-8 p-4 w-fit overflow-y-auto h-fit';
	}
</script>

<div id='svariabot' class="fixed right-32 z-50">
	<!-- These are necessary so that tailwind creates the definitions for these on compilation since the classes are generated dynamically -->
	<span class="h-5/6"></span>
	<span class="h-4/6"></span>
	<span class="h-3/6"></span>
	<span class="h-2/6"></span>
	<Popover
		closeButtonClass="fixed right-6 h-7 w-7 p-0 bg-zinc-200 border-orange-700 dark:bg-zinc-100 text-orange-600 text-lg font-bold"
		openButtonClass="text-black flex items-center p-0 px-3 justify-around bg-zinc-100 w-72 border-4 text-[17px] border-orange-700"
		openButtonContent="<img style='width:70px' src={svariacat}></img> Build with SvARIA Bot"
		openButtonAriaLabel="Build Components with SvARIA Bot"
		popoverId="chatbot"
		popoverClass={popoverClassValue}
	>
		<div slot="header">
			<img style="width:40px;height:40px;float:left;" src={svariacat} alt="svaria cat" />
			<h1 class="font-bold text-2xl">SvARIA Bot</h1>
		</div>
		<div slot="content" class="w-84 mt-3 mb-2">
			<ChatBot bind:answer />
		</div>
	</Popover>
</div>
