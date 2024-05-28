<script>
    export let method = "POST"
    import Button from './Button.svelte';

</script>

<form method={method} on:submit|preventDefault>
    <label>
        add a todo:
        <input
            name="description"
            autocomplete="off"
        />
    </label>
</form>