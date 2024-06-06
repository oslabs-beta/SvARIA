<!-- use this page to test out components with URL "/testPage" -->

<script>
	import RadioGroup from '$lib/RadioGroup.svelte';
	import Checkbox from '$lib/input_types/Checkbox.svelte';
	import Button from '../../lib/Button.svelte';
	import Modal from '$lib/Modal.svelte';
	import Form from '$lib/input_types/Form.svelte';
	import Nav from '$lib/navigation/Navigation.svelte';
	import Tab from '$lib/Tab.svelte';
	import Tab1 from './tabsForTestPage/Tab1.svelte';
	import Tab2 from './tabsForTestPage/Tab2.svelte';
	import Menu from '$lib/Menu.svelte';
	import Accorian from '$lib/Accordion.svelte';
	import Accordion from '$lib/Accordion.svelte';

	function handleClick() {
		console.log('button clicked');
	}

	function handleCheck() {
		console.log('checkbox checked');
	}
	let showModal = false;

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
				alert(items[1].label);
			}
		},
		{
			label: 'yellow',
			onClick: function click() {
				alert(items[2].label);
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
</script>

<title>Our testing page</title>

<Nav heading="welcome to the test page!" routes={navElem} id="newID">
	<img
		src="https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1"
		alt="a cat"
		class="h-16 w-16 object-cover rounded-full"
	/>
</Nav>

<!-- <div class="testDiv">
	<RadioGroup {options} id="radio" ariaLabel="Radio Selector" /> -->
<div>
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
		<h3 id="modalHeader">Modal</h3>
		<p id="dialoginfo">This is my modal content</p>
	</Modal>
	<Form
		{formElements}
		on:submit={onSubmit}
		submitForm="svaria rules"
		submitButtonId="submitButton11"
		formId="form"
		ariaLabel="User Information Form"
	/>

	<Tab items={tabItems}></Tab>
	<Menu
		items={menuItems}
		buttonContent={'Menu button'}
		buttonId="menuButton"
		buttonAriaLabel={'menu button'}
		listClass="text-gray-500"
	></Menu>
	<Accordion>
		<p slot="content">
			Cat ipsum dolor sit amet, stare at guinea pigs. Cough furball into food bowl then scratch
			owner for a new one. Slap owner's face at 5am until human fills food dish cuddle no cuddle
			cuddle love scratch scratch leave hair everywhere, but demand to be let outside at once, and
			expect owner to wait for me as i think about it. Get video posted to internet for chasing red
			dot scream for no reason at 4 am for i just saw other cats inside the house and nobody ask me
			before using my litter box cat mojo licks your face ooooh feather moving feather!. Bite nose
			of your human refuse to leave cardboard box but go into a room to decide you didn't want to be
			in there anyway meowsiers stares at human while pushing stuff off a table. Plan steps for
			world domination hate dogs and sit in box for under the bed, ask to be pet then attack owners
			hand scratch. Have my breakfast spaghetti yarn sleep on my human's head. Ask to be pet then
			attack owners hand have secret plans cat slap dog in face. Swat turds around the house fat
			baby cat best buddy little guy and run in circles just going to dip my paw in your coffee and
			do a taste test - oh never mind i forgot i don't like coffee - you can have that back now so
			dont wait for the storm to pass, dance in the rain meow yet stare at guinea pigs. Catty ipsum
			i is not fat, i is fluffy and hide head under blanket so no one can see catto munch salmono
			Gate keepers of hell eat a rug and furry furry hairs everywhere oh no human coming lie on
			counter don't get off counter. Naughty running cat. Touch my tail, i shred your hand purrrr
			pooping rainbow while flying in a toasted bread costume in space but i bet my nine lives on
			you-oooo-ooo-hooo. Licks your face leave fur on owners clothes. Stuff and things. While
			happily ignoring when being called furrier and even more furrier hairball but the fat cat sat
			on the mat bat away with paws, or murder hooman toes yet drool. Paw at beetle and eat it
			before it gets away chase little red dot someday it will be mine! or pretend not to be evil
			for brown cats with pink ears destroy couch, or destroy the blinds, or and sometimes switches
			in french and say "miaou" just because well why not. Kitty pounce, trip, faceplant you didn't
			see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment
			intrigued by the shower lick face hiss at owner, pee a lot, and meow repeatedly scratch at
			fence purrrrrr eat muffins and poutine until owner comes back. Have my breakfast spaghetti
			yarn cats are cute, tweeting a baseball cats secretly make all the worlds muffins bite nose of
			your human. You are a captive audience while sitting on the toilet, pet me purr sit on human
			they not getting up ever, hiss and stare at nothing then run suddenly away gimme attention
			gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i
			don't want it anymore meow bye. Find empty spot in cupboard and sleep all day climb leg, yet
			run outside as soon as door open curl into a furry donut eat plants, meow, and throw up
			because i ate plants scream at teh bath.
		</p>
	</Accordion>
	<Accordion heading="another one">
		<p slot="content">
			Cat ipsum dolor sit amet, stare at guinea pigs. Cough furball into food bowl then scratch
			owner for a new one. Slap owner's face at 5am until human fills food dish cuddle no cuddle
			cuddle love scratch scratch leave hair everywhere, but demand to be let outside at once, and
			expect owner to wait for me as i think about it. Get video posted to internet for chasing red
			dot scream for no reason at 4 am for i just saw other cats inside the house and nobody ask me
			before using my litter box cat mojo licks your face ooooh feather moving feather!. Bite nose
			of your human refuse to leave cardboard box but go into a room to decide you didn't want to be
			in there anyway meowsiers stares at human while pushing stuff off a table. Plan steps for
			world domination hate dogs and sit in box for under the bed, ask to be pet then attack owners
			hand scratch. Have my breakfast spaghetti yarn sleep on my human's head. Ask to be pet then
			attack owners hand have secret plans cat slap dog in face. Swat turds around the house fat
			baby cat best buddy little guy and run in circles just going to dip my paw in your coffee and
			do a taste test - oh never mind i forgot i don't like coffee - you can have that back now so
			dont wait for the storm to pass, dance in the rain meow yet stare at guinea pigs. Catty ipsum
			i is not fat, i is fluffy and hide head under blanket so no one can see catto munch salmono
			Gate keepers of hell eat a rug and furry furry hairs everywhere oh no human coming lie on
			counter don't get off counter. Naughty running cat. Touch my tail, i shred your hand purrrr
			pooping rainbow while flying in a toasted bread costume in space but i bet my nine lives on
			you-oooo-ooo-hooo. Licks your face leave fur on owners clothes. Stuff and things. While
			happily ignoring when being called furrier and even more furrier hairball but the fat cat sat
			on the mat bat away with paws, or murder hooman toes yet drool. Paw at beetle and eat it
			before it gets away chase little red dot someday it will be mine! or pretend not to be evil
			for brown cats with pink ears destroy couch, or destroy the blinds, or and sometimes switches
			in french and say "miaou" just because well why not. Kitty pounce, trip, faceplant you didn't
			see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment
			intrigued by the shower lick face hiss at owner, pee a lot, and meow repeatedly scratch at
			fence purrrrrr eat muffins and poutine until owner comes back. Have my breakfast spaghetti
			yarn cats are cute, tweeting a baseball cats secretly make all the worlds muffins bite nose of
			your human. You are a captive audience while sitting on the toilet, pet me purr sit on human
			they not getting up ever, hiss and stare at nothing then run suddenly away gimme attention
			gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i
			don't want it anymore meow bye. Find empty spot in cupboard and sleep all day climb leg, yet
			run outside as soon as door open curl into a furry donut eat plants, meow, and throw up
			because i ate plants scream at teh bath.
		</p>
	</Accordion>
</div>

<style>
	/* :global(#button) {
		color: white;
		background-color: black;
	}
	:global(#checkboxLabel) {
		color: #ffd88f;
		background-color: #0000a8;
	}
	:global(#checkboxInput) {
		accent-color: purple;
	} */
	/* :global(#openModal) {
		font-size: smaller;
		background-color: #003d3d;
		color: aquamarine;
	} */
	/* :global(#modal) {
		background-color: #003d3d;
		color: #b3b351;
	} */
	/* :global(#close) {
		background-color: black;
		color: white;
	}
	:global(#submitButton11) {
		color: white;
		background-color: black;
		font-size: small;
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
	} */
</style>
