<script lang='ts'>
    export let componentName: string|undefined;
    export let propsDetails: string[] = ["Example: this is an example"];
</script>

<div style='margin-bottom: 15%'>
    <h1 style="font-weight: bold">SvARIA {componentName}</h1>
    <h3>All SvARIA components must be installed through the NPM package by running the command below in node.js:</h3><br>
    <i>npm install SvARIA-toolkit</i>
    <br><br>
    <h3>Tailwind CSS styling is enabled by default, if you have it installed on your project. You can override
        this with your own class names, or by using the style property for inline styling. For more
        information on using Tailwind Classes, check out the
        <a href='https://tailwindcss.com/docs/installation'>Tailwind CSS website</a>.
    </h3>
    <br>
    <h2 style="font-weight: bold">Properties</h2>
    <h3>Below you'll find the properties available on the {componentName} component. Some of these are required
        for the component to appear or function, while others may have a default value that does not need to be
        changed at all. Feel free to experiment with the props in the sandbox above if you want to see how your
        changes will affect your implementation.
    </h3>
    <br>
    <ul>
        {#each propsDetails as prop}
        <br><li style={"font-weight: bold"}>{prop}</li>
        {/each}
    </ul>
    <br>
    {#if $$slots.details}
        <h2 style="font-weight: bold">Details</h2>
        <slot name='details'></slot>
    {/if}
</div>