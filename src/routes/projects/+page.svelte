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
	let filterStatus = $state('');
	let filterTools = $state([]);

	// TODO: arrays so they can be sorted?
	const typeOptions = new Set(data.projects.flatMap((project) => project.meta.type));
	const statusOptions = new Set(data.projects.flatMap((project) => project.meta.status));
	const toolOptions = new Set(data.projects.flatMap((project) => project.meta.madeWith).sort());

	let filteredProjects = $derived.by(() => {
		let filtered = data.projects;

		if (filterTypes.length > 0)
			filtered = filtered.filter((project) => filterTypes.includes(project.meta.type));

		if (filterStatus.length > 0)
			filtered = filtered.filter((project) => filterStatus.includes(project.meta.status));

		if (filterTools.length > 0) {
			// filtered = filtered.filter((project) => project.meta.madeWith.some((tool) => toolOptions.has(tool)));
			filtered = filtered.filter((project) =>
				filterTools.every((tool) => project.meta.madeWith.includes(tool)),
			);
		}
		return filtered;
	});

	function resetFilters() {
		filterTypes = '';
		filterStatus = '';
		filterTools = [];
	}
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

<div class="filters">
	<div>
		<span>Project Type</span>
	</div>
	<div class="input-group">
		<!-- TODO: pretend it's a button -->
		<label>
			<input type="radio" bind:group={filterTypes} value="" />
			All
		</label>

		{#each typeOptions as type}
			<label>
				<input type="radio" bind:group={filterTypes} value={type} />
				{type}
			</label>
		{/each}
	</div>

	<div>
		<span>Project Status</span>
	</div>
	<div class="input-group">
		<!-- TODO: pretend it's a button -->
		<label>
			<input type="radio" bind:group={filterStatus} value="" />
			All
		</label>

		{#each statusOptions as type}
			<label>
				<input type="radio" bind:group={filterStatus} value={type} />
				{type}
			</label>
		{/each}
	</div>

	<div>
		<span>Project Tools</span>
	</div>
	<div class="input-group">
		{#each toolOptions as type}
			<label>
				<input type="checkbox" bind:group={filterTools} value={type} />
				{type}
			</label>
		{/each}
		<button onclick={() => (filterTools = [])} disabled={filterTools.length === 0}
			>Reset Tools</button
		>
	</div>
</div>

<button class="reset-all" onclick={resetFilters}>Reset All</button>

<div class="projects breakout-big">
	{#each filteredProjects as { ...props }, i (props.meta.name)}
		<div
			animate:flip={{ duration: 300, easing: quartOut }}
			style:--i={i}
			in:fly|global={{ y: -20, duration: 300, delay: 30 * i }}
			out:fly={{ y: 20, duration: 300 }}
		>
			<Project path={props.path} {...props.meta} />
		</div>
	{:else}
		<p class="no-projects">No projects found with current filters.</p>
	{/each}
</div>

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
	}

	.input-group {
		display: flex;
		flex-wrap: wrap;
		column-gap: 0.75rem;
	}

	.filters {
		display: grid;
		grid-template-columns: auto auto;
		gap: 0.5rem;

		margin-bottom: 1rem;
	}

	.reset-all {
		margin-bottom: 1rem;
	}

	.no-projects {
		text-align: center;
	}
</style>
