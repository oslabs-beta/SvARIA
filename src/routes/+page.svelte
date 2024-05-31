<h1 class="text-green-400">This is SvARIA</h1>
<style>
    :global(body) {
        display: flex;
        justify-content: center;
        height: 100vh;
    }
</style>

<script>
    import Button from '../lib/Button.svelte';
</script>

<div class='main-cont'>
    <div role='article' aria-label='About' class='splash-heading'>
        <h1>Accessibility-first design made possible by SvARIA:</h1>
        <h2>a robust library of ARIA-compliant components built from the ground up for Svelte</h2>
        <Button content='Github' ariaLabel='Github' on:click={() => location.href='https://github.com/oslabs-beta/SvARIA'}></Button>
    </div>
</div>
