<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	import { pageTitle } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>{pageTitle(['Projects'])}</title>
</svelte:head>

<h1>Projects</h1>

<p>
	<i
		>More or less in chronological order. All of these are lacking details, but they will be updated
		soon.</i
	>
</p>

<div class="projects breakout-big">
	{#each data.projects as { ...props }}
		<Project path={props.path} {...props.meta} />
	{/each}
</div>

<style>
	.projects {
		display: grid;
		gap: 1rem;
		column-gap: 1.5rem;

		grid-template-columns: repeat(auto-fit, minmax(40ch, 1fr));
	}
</style>
