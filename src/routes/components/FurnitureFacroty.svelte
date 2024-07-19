<script>
    import { currentComponent } from '../../store/index.js';
    /* import all the folders from index.js 
    in order for this to work we will have to take these steps: 
    1. create the docs and sandbox elements 
    2. import them and export them with in the file that they are in (else we wont be able to access the whole file from the index in lib, I can go over the pros and cons of this apporoach in a code review)
    3. import and export out that file
    ====> is this an improovment to what we had before? let talk in code review (note to self, it has to do with how well we will be able to take advantage of the string updated in store )
    */
    import * as components from './lib/index.js'
    
    // hold the string that refrences the type of component I am looking for, as defined by store
    let current;
    currentComponent.subscribe((value) => {
        current = value
    })

    //when current has a value grab it from our imports 
    const findComp = () => {
        if (current && components[current]) {
            return components[current]; 
        }
        return null; 
    };
    $: Component = findComp(current)
     
</script>

<!-- conditionally render the components based off of store  -->
{#if Component}
    <svelte:component this={Component.Sandbox}/>
    <svelte:component this={Component.Docs}/> 
{:else}
    <p>No component selected.</p>
{/if}
