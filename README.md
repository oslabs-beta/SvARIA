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

=> Navigation Bar component <=

import NavBar from "SvARIA"

=> Set Heading: (optional)
set the props heading to the heading for your navBar
Ex:
<NavBar heading='this is my pages heading'>

=> Set Navigation Links: (optional)
pass an array of object with name and link properties to the link props
Ex:
<NavBar links=[{link:href1, name:linktopage1} {link:herf2, name:linktopage2}]>

=> Set type of Navigation: (otional)
To utalize a side panal navigation pass the props sideNav a truthy value
Ex: <NavBar sideNav=true>

=> Default Settings:
aria-label = 'navigation'

navigation bar div:
id = 'navBar'
class = "sv-navagation"

Heading sub element:
id = 'navBar-heading'
class = "sv-nav-heading"

List sub elements:
id ='navBar-link-<i>' // i = index of this list element
class = "sv-nav-link"

=> Override Deafaults:

id: is overridable only for the top level div, it will be dynamically updated for all sub elements.
Ex:
<NavBar id="myNavBarElem">
will update:
heading id to 'myNavBarElem-heading'
list element id to 'myNavBarElem-link-<i>'

aria-label:
use the props element ariaLabel
Ex:
<NavBar ariaLabel='my sites navigation bar'>

=> In-line Styling
Access via style props:
Navigation bar div's = style
Heading sub elements = 'h1style'
List sub elements = 'linkstyle'
