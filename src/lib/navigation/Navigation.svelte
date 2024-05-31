<script lang="js">
	export let heading = null;
	export let link = null;
	export let ariaLabel = 'navigation bar';
	export let navId = 'navBar';
	// do I need to have keybord navigation for this?
	// have a boolean for if I want this so have a side view from the left or right
	// add in ARIA checks
</script>

<nav class="sv-navagation" aria-label={ariaLabel} id={navId} style {heading} {link}>
	{#if heading}
		<h2 class="sv-nav-heading" aria-label={heading} id={navId + '-heading'} style>{heading}</h2>
	{/if}
	{#if link}
		<ul class="sv-nav-ul" id={navId + '-ul'} style>
			{#each link as linkElem, i}
				<a
					href={linkElem.link}
					class="sv-nav-link"
					id={navId + '-link-' + i}
					aria-label={`link to ${linkElem.name}`}
					style
				>
					{linkElem.name}
				</a>
			{/each}
		</ul>
	{/if}
</nav>

<style>
	:global(.sv-navagation) {
		background-color: rgb(60, 59, 59);
		display: flex;
		justify-content: space-between;
	}
</style>
