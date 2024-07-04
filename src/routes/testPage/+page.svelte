<!-- use this page to test out components with URL "/testPage" -->

<script>
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

	import CatIcon from '../components/CatIcon.svelte';

	function handleClick() {
		console.log('button clicked');
	}

	function handleCheck() {
		console.log('checkbox checked');
	}
	let showModal;

	let formElements = [
		{ name: 'address', type: 'input', labelValue: 'New Address' },
		{ name: 'firstName', type: 'input', labelValue: 'New First Name' },
		{ name: 'userName', type: 'input', labelValue: 'New User Name' },
		{
			name: 'password',
			type: 'password',
			labelValue: 'New Password',
			inputId: 'newPw',
			labelId: 'pwLabel'
		}
	];

	let menuItems = [
		{
			label: 'purple',
			onClick: function click() {
				window.location.href = 'https://en.wikipedia.org/wiki/Purple';
			},
			linkStyle: 'color: black; background-color: orange'
		},
		{
			label: 'blue',
			onClick: function click() {
				alert(menuItems[1].label);
			},
			linkClass: 'text-2xl text-orange-500'
		},
		{
			label: 'yellow',
			onClick: function click() {
				alert(menuItems[2].label);
			}
		},
		{
			label: 'green',
			onClick: function click() {
				window.location.href = 'https://en.wikipedia.org/wiki/Greene';
			}
		}
	];

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

	function onSubmit(e) {
		console.log(e.target.firstName.value);
	}
	let tabItems = [
		{
			label: 'Content',
			component: Tab1,
			tabContentId: 'test-0'
			//  tabLabelId,
		},
		{
			label: 'Interactions',
			component: Tab2,
			tabContentId: 'test-1',
			tabLabelId: 'label-1'
		}
	];

	let options = 		[{
			label: 'Button',
		},
		{
			label: 'NavBar',
		},
		{
			label: 'Modal',
		}]
		let selectedOption = []

		let currentProgress = 50; // Example: set the current progress

		function updateProgress() {
		// Example: update progress over time
		setInterval(() => {
			currentProgress += 10; // Increase progress by 10%
			if (currentProgress > 100) currentProgress = 0; // Reset if exceeds 100%
		}, 1000); // Update every second
		}

		updateProgress(); // Start updating progress
</script>

<title>Our testing page</title>
<br>
<br>
<br>
<br>
<br>
<br>
<br>



<Nav heading="welcome to the test page!" routes={navElem} id="newID">
	<img
		src="https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1"
		alt="a cat"
		class="h-16 w-16 object-cover rounded-full"
	/>
</Nav>

<ProgressBar progress={currentProgress} />


<div class="testDiv">
<RadioGroup options={options} id="radio" ariaLabel="Radio Selector" bind:selectedOption
	/>
	<!-- your component goes here -->
	<Button id="button" ariaLabel="test aria label" on:click={handleClick} content="Test button" />
	<br />
	<Checkbox
		inputId="checkboxInput"
		labelId="checkboxLabel"
		content="This is my checkbox"
		on:click={handleCheck}
	/>
	<br />
	<Button
		id="openModal"
		on:click={() => (showModal = true)}
		content="show Modal"
		ariaLabel="Open Modal"
	></Button>
	<Modal
		bind:showModal
		modalId="modal"
		modalHeaderId="modalHeader"
		modalDescribeId="dialoginfo"
		closeModalMessage="X"
		closeButtonId="close"
	>
		<h3 id="modalHeader" slot='header'>Modal</h3>
		<!-- should this be a slot? -->
		<p id="dialoginfo" slot='content'>{catIpsum}</p>
	</Modal>
	<Form
		{formElements}
		on:submit={onSubmit}
		submitFormContent="svaria rules"
		submitButtonId="submitButton11"
		formId="form"
		ariaLabel="User Information Form"
		formClass = 'block text-gray-700 text-sm font-bold mb-2'
		submitButtonClass = 'bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
	/>

	<Tab items={tabItems}></Tab>
	<Menu
		items={menuItems}
		buttonContent={'Menu button'}
		buttonId="menuButton"
		buttonAriaLabel={'menu button'}
		listClass="text-gray-500"
	></Menu>
	<div class="container w-3/12">
		<Accordion>
			<p slot="content">
				{catIpsum}
			</p>
		</Accordion>
		<Accordion heading="Another One"
			><p slot="content">
				{catIpsum}
			</p>
		</Accordion>
		<Accordion heading="cat">
			<img
				slot="content"
				src="https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1"
				alt="a cat"
				class="h-16 w-16 object-cover rounded-full"/>
		</Accordion
		>
	</div>
</div>

<style>
	:global(#button) {
		color: white;
		background-color: black;
	}
	:global(#checkboxLabel) {
		color: #ffd88f;
		background-color: #0000a8;
	}
	:global(#checkboxInput) {
		accent-color: purple;
	}
	:global(#openModal) {
		font-size: smaller;
		background-color: #003d3d;
		color: aquamarine;
	}
	:global(#modal) {
		background-color: #003d3d;
		color: #b3b351;
	}
	:global(#close) {
		background-color: black;
		color: white;
	}

	:global(#form) {
		background-color: white;
	}

	:global(#labeladdress) {
		font-size: large;
		color: blue;
		background-color: white;
	}
	:global(#labeluserName) {
		font-size: large;
		background-color: blue;
	}
</style> 
