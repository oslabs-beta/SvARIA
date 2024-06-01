<script>
	import Modal from '$lib/Modal.svelte';
    import Button from '$lib/Button.svelte'

    let showModal = false;
</script>

<Button
id="openModal"
on:click={() => (showModal = true)}
content="show Modal"
ariaLabel="Open Modal"
></Button>

<Modal
bind:showModal
    id="modal"
    modalHeaderId="modalHeader"
    modalDescribeId="dialoginfo"
    closeModalMessage="X"
    closeButtonId="close"
    >
    <h3 id="modalHeader">Modal Opened</h3>
    <p id="dialoginfo">You have successfully opened the modal</p>
</Modal>

