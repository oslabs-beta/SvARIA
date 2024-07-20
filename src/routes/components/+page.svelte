<script>
	import ButtonTab from '../../splashPageLib/ComponentDemos/ButtonTabs/ButtonTab.svelte';
	import ModalTab from '../../splashPageLib/ComponentDemos/ModalTabs/ModalTab.svelte';
</script>

<h3>Components</h3>
<div class="lib-display">
	<h3>Button Component</h3>
	<div class="component"></div>
	<ButtonTab />
</div>

<div class="lib-display">
	<h3>Modal Component</h3>
	<div class="component"></div>
	<ModalTab />
</div>

<style>
	.lib-display {
		align-items: center;
		width: 50%;
		height: 50%;
	}
</style>
