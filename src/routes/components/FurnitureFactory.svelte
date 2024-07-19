<script>
    import { currentComponent } from '../../store/index.js';
    import Sandbox from '../../splashPageLib/Sandbox.svelte';
    import CatIcon from './CatIcon.svelte'
    /* import all the folders from index.js 
    DEV TASKS => 
    1. create the docs component and sandbox string 
    2. import them and export them with in src/routs.components/lib/index.js
    */
    import * as components from './lib/index.js'
    
    // add variables to hold the sandbox string and docs string, as defined by store
    let current;
    let sandbox;
    currentComponent.subscribe((value) => {
        console.log('value', value)
        current = value.docs
        sandbox = value.source
    })

    //when current has a value grab the docs from imports
    const findComp = () => {
        console.log('matching compoennt:', current)
        if (current && components[current]) {
            return components[current]; 
        }
        console.log('no component found')
        return null; 
    };
    $: Component = findComp(current)
    $: source = sandbox
</script>

<!-- conditionally render the components based off of store  -->
{#if Component}
    <Sandbox {source}/> 
    <svelte:component this={Component.Docs}/> 
{:else}
    <p>Select a component to begin</p>
    <CatIcon/>
{/if}
