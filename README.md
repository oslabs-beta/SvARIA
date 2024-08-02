# Welcome to SvARIA

A comprehensive component library built from the ground-up for Svelte offering plug-and-play ARIA-compliant components and features to help your project meet and exceed accessibility standards while streamlining the design process.

## To install SvARIA in your project, run:

`npm install svaria-toolkit`

SvARIA has default components styled with Tailwind. To use our default styles, you must install Tailwind into your project. To configure Tailwind to work with our components, make sure to add svaria-toolkit to the default contents:

`content: [
"./src/**/*.{html,js,svelte,ts}",
"./node_modules/svaria-toolkit-test/**/*.{html,js,svelte,ts}",
],`

Now you are ready to import our components into your project!

## For comprehensive docs, see [SvARIA](the-splash-page-url).

you can also check out the SvARIA [GitHub](https://github.com/oslabs-beta/SvARIA/tree/main)

As a preliminary example, this is how to import and customize the button component:

`import { Button } from 'svaria-toolkit'`

We designed our components to mimic the behavior of HTML tags as closely as possible, with some minor exceptions. To render the component, use the same syntax as an HTML element.

`<Button/>`

All SvARIA components are fully customizable by accessing the props on each component.

`<Button contents="example button" className="bg-red-500"/>`

This will create a button labeled "example button" with a red background.

You can also style using regular CSS and access the className on the component. See the documentation for each component on our splash page to access any property name you want to access.

## Another benefit of our toolkit is the ARIA background checker tool.

In order for the background checks to run, you must configure your ENV file to be running in a test environment.

<add that specific line of code here>
To disable the checks, you can set the ENV mode to <not sure>.

The ARIA checks will run on all SvARIA components to ensure that as you edit the components, they stay within the parameters of ARIA compliance.

You can also add the checks to any component that is not in our library by adding the ARIA check to use:

`import {colorContrastCheck, parentColorContrastCheck} from 'svaria-toolkit'

<div use:colorContrastCheck , use:parentColorContrastCheck > </div>`

## find the team on linkedin

[Jewel Clark](https://www.linkedin.com/in/jewelclarkenyc/)
[Josh Lilienthal](https://www.linkedin.com/in/joshlilienthal/)
[Elizabeth Sinclair](https://www.linkedin.com/in/elizabeth-sinclair-998090286/)
[Nicolette Sooker](couldnt/find/your/linkedin?)
