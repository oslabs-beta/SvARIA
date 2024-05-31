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

=================> starting the readme for user <=================

# Navigation Bar component

## anatomy of a NavBar:

typically the heading bar will have the NavBar component as the top level element.
This will hold a heading and set a links that will be initalized when the componened is rendered. These are child elements inside of the NavBar component.

## import NavBar from our library:

```
import NavBar from "SvARIA"
```

## Initalize NavBar:

Pass the properties **heading** and **links** your data:

- pass links an array of objects containing name and herf properties:
  `    [{name, herf}]`
  Example:

```
<NavBar heading='this is my page's heading' links=[{link:href1, name:linktopage1} {link:herf2, name:linktopage2}]>
```

## Set type of Navigation: (otional)

To utalize a drop down panel in place of links in the NavBar pass the props dropDown a truthy value.

```
 <NavBar dropDown=true>
```

## Default Settings:

Each element in our components come with a set of properties to make sure they are come aria complient. The default values are as listed below and can be edited by the developer to best suit their needs.

### aria-label

This aria label is what will be read by a screen reader when a user highlights an element.
the **default aria-label** is set to 'navigation'
It can be **over ridden** by passing the new value to ariaLabel

```
<NavBar ariaLabel='my sites navigation bar'>
```

### NavBar Elements:

each element has an id and a class.

**NavBar (parent element)**
id = 'navBar'
class = "sv-navagation"

**Heading (child element)**

id = 'navBar-heading'
class = "sv-nav-heading"

**List (child elements)**

id ='navBar-link-<i>' (where i is the index of that list element)t
class = "sv-nav-link"

### Overiding the default ID:

id is overidable only in the NavBar, it will be **dynamically** updated for all child elements.

```
<NavBar id="myNavBarElem">
```

will update:

- heading id to 'myNavBarElem-heading'
- list element id to 'myNavBarElem-link-<i>' (where i is the index of that list element)

## In-line Styling

Access via style props:
Navigation bar div's = style
Heading sub elements = 'h1style'
List sub elements = 'linkstyle'
