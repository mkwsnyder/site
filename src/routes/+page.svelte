<script lang="ts">

	import Project from "$lib/components/Project.svelte";

	const projects: {
		name: string;
		description: string;
		link?: string;
		github?: string;
		youtube?: string;
	}[] = [
		// {
			// name: 'Untitled Space Game',
			// description: 'description',
			// link: '',
			// github: 'yeehaw',
			// youtube: 'asdf',
		// },
		// {
		// 	name: 'This website',
		// 	description: 'yeehaw',
		// 	link: 'fluh',
		// 	github: 'yeehaw',
		// 	youtube: 'asdf',
		// },
		// {
		// 	name: 'MyID Rebuild',
		// 	description: 'yeehaw',
		// 	link: 'fluh',
		// 	github: 'yeehaw',
		// 	youtube: 'asdf',
		// },
		// {
		// 	name: 'Concurrent Enrollment Registration',
		// 	description: 'wow, pretend I wrote a decent amount of copy for these',
		// 	link: 'http',
		// },
		// {
		// 	name: 'Modern Campus Evolve Conference + Omni CMS Gadgets',
		// 	description: 'wow, pretend I wrote a decent amount of copy for these',
		// 	link: 'http',
		// },
		// {
		// 	name: 'Aggietime Ultra',
		// 	description: '',
		// 	link: '',
		// },
		// {
		// 	name: 'Class Photo Roster',
		// 	description: '',
		// 	link: '',
		// },
		// {
		// 	name: 'Pathify Widgets',
		// 	description: '',
		// 	link: '',
		// },
		// {
		// 	name: 'Custom Omni CMS Script',
		// 	description: '',
		// 	link: '',
		// }
	]
</script>

<svelte:head>
	<title>msnyder.dev</title>
</svelte:head>

<div class="main">
	<!-- :P -->
	<div class="container">
		<h1>WIP Portfolio Site</h1>
		<p>
			Hello, and welcome to my (very) in progress portfolio/blog/everything site. As you can see,
			it's currently lacking all the niceties you might expect from any decent site, along with any
			information. I will be updating this over the next few days to get this up to a decent level
			of quality.
		</p>
		<p>Check back on 2024-11-25 for a more "complete" version.</p>
	</div>

	<div class="projects">
	{#each projects as {...props}}
		<Project {...props} />
	{/each}

	</div>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 2rem;
		margin-inline: 1rem;
	}

	.container {
		/*max-width: 70ch;*/
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.projects {
		display: grid;
		gap: 1rem;
		/* TODO: adjust based on screen size */
		grid-template-columns: repeat(2, minmax(0, 65ch));
	}
</style>
