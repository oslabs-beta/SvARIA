<!-- use this page to test out components with URL "/testPage" -->

<script>

	import { json } from '@sveltejs/kit';

	import Popover from '../components/lib/ChatBotPopover.svelte'
	import ChatBot from '../components/lib/ChatBot.svelte';
	import RadioGroup from '$lib/RadioGroup_ts.svelte';
	import Checkbox from '$lib/input_types/Checkbox_ts.svelte';
	import Button from '../../lib/Button_ts.svelte';
	import Modal from '$lib/Modal_ts.svelte';
	import Form from '$lib/input_types/Form_ts.svelte';
	import Nav from '$lib/navigation/Navigation_ts.svelte';
	import Tab from '$lib/Tab_ts.svelte';
	import Tab1 from './tabsForTestPage/Tab1.svelte';
	import Tab2 from './tabsForTestPage/Tab2.svelte';
	import Menu from '$lib/Menu_ts.svelte';
	import Accordion from '$lib/Accordion_ts.svelte';
	import ProgressBar from '$lib/ProgressBar.svelte';
	import Switch from '$lib/Switch.svelte';
	import Popover from '$lib/Popover.svelte';
	import AccordionDemo from '../../splashPageLib/ComponentDemos/AccordionGroupTabs/AccordionGroupDemo.svelte';
	import RadioGroupDemo from '../../splashPageLib/ComponentDemos/RadioGroupTabs/RadioGroupDemo.svelte';
<<<<<<<<< Temporary merge branch 1
	import Docs from '../../splashPageLib/Docs.svelte';
	import Tree from '$lib/Tree.svelte';
=========
	import Docs from '../components/Docs.svelte';
	import PopoverDocs from '../components/lib/PopoverDocs.svelte';
>>>>>>>>> Temporary merge branch 2

	const catIpsum = `Cat ipsum dolor sit amet, always hungry jump on fridge, while happily ignoring when being
			called shove bum in owner's face like camera lens. Meowsiers meow the best thing in the
			universe is a cardboard box. Flop over fat baby cat best buddy little guy cat milk copy park
			pee walk owner escape bored tired cage droppings sick vet vomit yet catch mouse and gave it as
			a present there's a forty year old lady there let us feast stand in front of the computer
			screen you have cat to be kitten me right meow. Throw down all the stuff in the kitchen lie on
			your belly and purr when you are asleep walk on a keyboard, purr purr purr until owner pets
			why owner not pet me hiss scratch meow, do not try to mix old food with new one to fool me!.
			Stare out cat door then go back inside instantly break out into full speed gallop across the
			house for no reason but fat baby cat best buddy little guy stretch snob you for another
			person, and loves cheeseburgers, bathe private parts with tongue then lick owner's face. Bird
			bird bird bird bird bird human why take bird out i could have eaten that throwup on your
			pillow, so nap all day. Annoy the old grumpy cat, start a fight and then retreat to wash when
			i lose intently sniff hand chew iPad power cord crash against wall but walk away like nothing
			happened lounge in doorway being gorgeous with belly side up. I like frogs and 0 gravity
			throwup on your pillow, i dreamt about fish yum! so meow i will be pet i will be pet and then
			i will hiss. Rub face on everything fall over dead (not really but gets sypathy). Hack the cat
			was chasing the mouse but howl on top of tall thing cats are cute. Ask to be pet then attack
			owners hand the dog smells bad and at four in the morning wake up owner meeeeeeooww scratch at
			legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep
			while observing the bootyful cat next door that u really like but who already has a boyfriend
			end up making babies with her and let her move in or i like to spend my days sleeping and
			eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under
			the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk
			meow, but swat turds around the house so push your water glass on the floor. Stare at the
			wall, play with food and get confused by dust cat playing a fiddle in hey diddle diddle? yet i
			is playing on your console hooman i want to go outside let me go outside nevermind inside is
			better lick master's hand at first then bite because im moody and i bet my nine lives on
			you-oooo-ooo-hooo. Attack like a vicious monster lounge in doorway for sniff catnip and act
			crazy so cat ass trophy yet the best thing in the universe is a cardboard box i like big cats
			and i can not lie. Dont wait for the storm to pass, dance in the rain leave dead animals as
			gifts lay on arms while you're using the keyboard throw down all the stuff in the kitchen
			mesmerizing birds. I like fish meow meow we are 3 small kittens sleeping most of our time, we
			are around 15 weeks old i think, i donâ€™t know i canâ€™t count, litter kitter kitty litty
			little kitten big roar roar feed me or at four in the morning wake up owner meeeeeeooww
			scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window
			and sleep while observing the bootyful cat next door that u really like but who already has a
			boyfriend end up making babies with her and let her move in and kitty ipsum dolor sit amet,
			shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run
			catnip eat the grass sniff yet purrr purr littel cat, little cat purr purr. Cats are a queer
			kind of folk stare at the wall, play with food and get confused by dust get poop stuck in paws
			jumping out of litter box and run around the house scream meowing and smearing hot cat mud all
			over or hide when guests come over thinking longingly about tuna brine pee in the shoe. Run as
			fast as i can into another room for no reason scratch. Catch eat throw up catch eat throw up
			bad birds catch mouse and gave it as a present. Wake up wander around the house making large
			amounts of noise jump on top of your human's bed and fall asleep again annoy owner until he
			gives you food say meow repeatedly until belly rubs, feels good but catch small lizards, bring
			them into house, then unable to find them on carpet. Fooled again thinking the dog likes me
			poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy
			fur-balls, please let me outside pouty face yay! wait, it's cold out please let me inside
			pouty face oh, thank you rub against mommy's leg oh it looks so nice out, please let me
			outside again the neighbor cat was mean to me please let me back inside you have cat to be
			kitten me right meow cattt catt cattty cat being a cat.`;

	let navElem = [
		{
			href: 'https://github.com/oslabs-beta/SvARIA/tree/dev',
			name: "SvARIA's git repo",
			linkStyle: 'color: yellow',
			linkClass: 'Class 1'
		},
		{
			href: 'https://github.com/oslabs-beta/SvARIA/tree/dev',
			name: "SvARIA's second test",
			linkClass: 'text-2xl text-orange-500'
		}
	];

	let options = [
		{
			label: 'Button'
		},
		{
			label: 'NavBar'
		},
		{
			label: 'Modal'
		}
	];
	let selectedOption = [];

	let docsProps=[
		"popoverId: Uniquely identifies the popover as a whole. Everything else is nested inside this element.",
		"popoverClass: Class for the popover as a whole, use this for styling the entire element.",
		"popoverHeaderId: uniquely identifies the header element",
		"popoverDescribeId"
	]
	let currentProgress = 50; // Example: set the current progress

	function updateProgress() {
		// Example: update progress over time
		setInterval(() => {
			currentProgress += 10; // Increase progress by 10%
			if (currentProgress > 100) currentProgress = 0; // Reset if exceeds 100%
		}, 1000); // Update every second
	}

	updateProgress(); // Start updating progress

	const tree = {
		label: 'Wine',
		children: [
			{
				label: 'Red',
				children: [
					{ label: 'California', link: "https://en.wikipedia.org/wiki/California_wine", labelId:"california", arrowId:"californiaArrow"},
					{
						label: 'Bordeaux', link: 'https://en.wikipedia.org/wiki/Bordeaux',
						children: [{ label: 'Cab Franc', onClick:cabfranc }, { label: 'Merlot', link:"https://en.wikipedia.org/wiki/Merlot" }, { label: 'Malbec', labelId:"malbec" }],
						arrowId: 'bordeauxArrow'
					},
					{ label: 'Rioja', onClick:rioja }
				]
			},
			{
				label: 'White',
				children: [{ label: 'Burgundy', onClick: burgundy }, { label: 'Champagne', link:"https://en.wikipedia.org/wiki/Champagne" }, { label: 'Piedmont', link: "https://en.wikipedia.org/wiki/Piedmont" }],
				labelId: "white",
				arrowId: 'whiteArrow'
			}
		]
	};

	function burgundy () {
		console.log('Burgundy clicked')
	}

	function rioja () {
		console.log('rioja clicked')
	}

	function cabfranc () {
		console.log('cab franc clicked')
	}

	function blue() {
		console.log('blue')
	}

	function yellow() {
		console.log('yellow')
	}

	let menuItems = [
		{
			label: 'purple',
			link: "https://en.wikipedia.org/wiki/Purple",
            linkID: 'purple',
			linkClass: 'text-purple-800'
		},
		{
			label: 'blue',
            linkID: 'blue',
			onClick: blue,
			linkClass: 'text-blue-800'


		},
		{
			label: 'yellow',
            linkID: 'yellow',
			onClick: yellow,
			linkClass: 'text-yellow-800'
		},
		{
			label: 'green',
			link: "https://en.wikipedia.org/wiki/Green",
            linkID: 'green',
			linkClass: 'text-green-800'
		}
	];

	let formElements = [
		{ name: 'question', type: 'text', labelValue: 'Enter question here', inputClass: 'w-full' },
	];

	let answer = ""

		async function onSubmit (event) {
		event.preventDefault();
		const form = event.currentTarget
		const body = {
		question: form.question.value
	}

	const res = await fetch('/chatbot', {
		headers: {'Content-Type': 'application/json'},
		method: 'POST',
		body: JSON.stringify({question: form.question.value}),
	})

	// const res = await fetch('http://localhost:3000/chatbot')
	const json = await res.json()
	answer = json.response
	}

</script>

import Popover from '../components/lib/ChatBotPopover.svelte'
import ChatBot from '../components/lib/ChatBot.svelte';

<!-- <Docs componentName="Popover" propsDetails={docsProps}>

</Docs> -->
<!-- <RadioGroupDemo {options}/> -->


<!-- <Tree 
	{tree}
/> -->

<Form {formElements} on:submit={onSubmit}/>
<pre>{answer}</pre>

<!-- <Menu
	items={menuItems}
	buttonContent="Menu"
	buttonId="menuButton"
	buttonAriaLabel="menu button"
	buttonClass="w-32 h-9 text-xl bg-slate-200 items-center justify-between  py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:focus:text-black dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
    listId='menuItems'
	listClass="bg-blue-200 text-lg w-32 text-center	rounded-md"
/> -->

<title>Our testing page</title>
<br />
<br />
<br />
<br />
<br />
<br />
<br />


<!-- <Popover
	popoverId="dialog"
	popoverHeaderId="PopoverHeader"
	popoverDescribeId="dialoginfo"
	closeButtonId="close"
>
	<h3
	id="popoverHeader"
	slot="header"
	>
	Popover Opened
	</h3>
	<div slot="content">
		<p id="dialoginfo">
			<br>You have successfully opened the Popover,
			<br/>Now you can close the Popover with "X".
		</p>
	</div>
</Popover> -->
<!-- <RadioGroupDemo {options}/> -->

<!-- <Tree {tree} /> -->

<title>Our testing page</title>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<!-- <Switch defValue='On' altValue='off' ariaDefValue="Turned On" ariaAltValue="Turned Off"/>
<AccordionDemo/> -->

