# create-svelte

Everything you need to build a Svelte library, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

Read more about creating a library [in the docs](https://kit.svelte.dev/docs/packaging).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```bash
npm run package
```

To create a production version of your showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```

=================> basic layout for writing the read me <=================

# componenet name

## anatomy of componenet:

## import component from our library:

## Initalize componenet:

## Initalize any optional extras

## Default Settings:

### aria-label

explicitly lay out the aria label and how to edit it

### componenet Elements:

describe element and what can be done with them -**for each element**

### any specifics for overiding

## In-line Styling

=================> starting the readme for user <=================

# Navigation Bar component

## anatomy of a NavBar:

typically the heading bar will have the NavBar component as the top level element.
This will hold a heading and set a links that will be initalized when the componened is rendered. These are child elements inside of the NavBar component.

## import NavBar from our library:

```JS
import NavBar from "SvARIA"
```

## Initalize NavBar:

Pass the properties **heading** and **routes** your data:

- pass links an array of objects containing name and herf properties:
  `[{name, herf}]`
  Example:

```JS
<NavBar heading='this is my page heading' routes={[{herf:route1, name:linktopage1} {herf:route2, name:linktopage2}]}>
```

## Default Settings:

Each element in our components comes with a set of properties to make sure they are come ARIA complient. The default values are as listed below and can be edited by the developer to best suit their needs.

### aria-label

This aria label is what will be read by a screen reader when a user highlights an element.
the **default aria-label** is set to what ever your heading is initalized to.
It can be **over ridden** by passing the new value to ariaLabel

```JS
<NavBar ariaLabel='my sites navigation bar'>
```

### NavBar Elements:

each element has an id and a class.

-**NavBar (parent element)**
id: 'navBar',
class: "sv-navagation"

-**Heading (child element)**

id: 'navBar-heading',
class: "sv-nav-heading"

-**List (child elements)**

id: 'navBar-link-i' **(where i is the index of that list element)**,
class: "sv-nav-link"

### Overiding the default ID:

id is overidable only in the NavBar, it will be **dynamically** updated for all child elements.

```JS
<NavBar id="myNavBarElem">
```

will update:

- heading id to: 'myNavBarElem-heading'
- list element id to: 'myNavBarElem-link-i' **(where i is the index of that list element)**

## In-line Styling

Access via style props:
Navigation bar div's = style
Heading sub elements = 'h1style'
List sub elements = 'linkstyle'

# Checkbox Componenet

## anatomy of Checkbox:

SvAria's checkbox closly mimics any other checkbox component, some things are abstracted away. The imported component has wrapped the label and the checkbox together. When initalizing a SvARIA checkbox you specify the label at the same time.

## import component from our library:

```JS
import Checkbox from 'SvARIA'
```

## Initalize componenet:

```JS
<Checkbox content='The label for this check box'>
```

<!-- add a picture -->

### aria-label

When initalized the ARIA label is dynamically created with your content in mind, and changes on check.

- aria-label, unchecked:`${content}, is unchecked`
- aria-label, checked: `${content}, is checked`

to **overide** this label to meet your needs, you can use the ariaLabel property when initalizing the checkbox:

```JS
<Checkbox ariaLabel='updated ARIA label'>
```

## In-line Styling

To utalize in-line styling on the individual elements you can set the props inputStyle for the checkbox and labelStyle for the label.

```JS
<Checkbox inputStyle='background-color=yellow' labelStyle='color=black'>
```
