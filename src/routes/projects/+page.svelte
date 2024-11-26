<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	import { pageTitle } from '$lib/utils';
	import { flip } from 'svelte/animate';
	import { quartOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import { browser } from '$app/environment';

	let { data } = $props();

	// TODO: it would be cool to maintain this state as URL params

	let filterTypes = $state('');
	let filterTools = $state([]);

	// TODO: arrays so they can be sorted?
	const typeOptions = new Set(data.projects.flatMap((project) => project.meta.type));
	const toolOptions = new Set(data.projects.flatMap((project) => project.meta.madeWith));

	let filteredProjects = $derived.by(() => {
		let filtered = data.projects;

		if (filterTypes.length > 0)
			filtered = filtered.filter((project) => filterTypes.includes(project.meta.type));

		if (filterTools.length > 0) {
			// filtered = filtered.filter((project) => project.meta.madeWith.some((tool) => toolOptions.has(tool)));
			filtered = filtered.filter((project) =>
				filterTools.every((tool) => project.meta.madeWith.includes(tool)),
			);
		}
		return filtered;
	});
</script>

<svelte:head>
	<title>{pageTitle(['Projects'])}</title>
</svelte:head>

<h1>Projects</h1>

<p>
	<i>
		More or less in chronological order. All of these are lacking details, but they will be updated
		soon.
	</i>
</p>

<div class="input-group">
	<!-- TODO: pretend it's a button -->
	<label>
		<input type="radio" bind:group={filterTypes} value="" />
		All
	</label>

	{#each typeOptions as type}
		<label>
			<!-- TODO: radio-->
			<input type="radio" bind:group={filterTypes} value={type} />
			{type}
		</label>
	{/each}
</div>

<div class="input-group">
	{#each toolOptions as type}
		<label>
			<input type="checkbox" bind:group={filterTools} value={type} />
			{type}
		</label>
	{/each}
</div>

<div class="projects breakout-big">
	{#each filteredProjects as { ...props }, i (props.meta.name)}
		<div
			class="project-container"
			animate:flip={{ duration: 300, easing: quartOut }}
			style:--i={i}
			in:fly|global={{ y: -20, duration: 300, delay: 30 * i }}
			out:fly={{ y: 20, duration: 300 }}
		>
			<Project path={props.path} {...props.meta} />
		</div>
	{/each}
</div>

{#if filteredProjects.length === 0}
	<p>No projects found with current filters.</p>
{/if}

<style>
	.projects {
		display: grid;
		justify-content: center;
		gap: 1rem;
		column-gap: 1.5rem;

		--dynamic-width: 1fr;

		@media (min-width: 768px) {
			--dynamic-width: 60ch;
		}

		grid-template-columns: repeat(auto-fit, minmax(40ch, var(--dynamic-width, 1fr)));
		/*grid-template-columns: repeat(auto-fit, minmax(40ch, 1fr));*/
	}

	.input-group {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	/*.project-container {*/

	/*	opacity: 0;*/
	/*	transform: translateX(100%);*/
	/*	transition-property: opacity, transform;*/
	/*	transition-duration: 0.3s;*/
	/*	transition-timing-function: cubic-bezier(0.750, -0.015, 0.565, 1.055);*/
	/*}*/

	/*.project-container.active {*/
	/*	opacity: 1;*/
	/*	transform: translateX(0);*/
	/*	transition-delay: calc(0.055s * var(--i));*/
	/*}*/
</style>
