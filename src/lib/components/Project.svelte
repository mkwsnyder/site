<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import SvelteIcon from '$lib/components/icons/SvelteIcon.svelte';
	import TypeScriptIcon from '$lib/components/icons/TypeScriptIcon.svelte';
	import ReactIcon from '$lib/components/icons/ReactIcon.svelte';
	import NextJSIcon from '$lib/components/icons/NextJSIcon.svelte';
	import PythonIcon from '$lib/components/icons/PythonIcon.svelte';

	interface Props {
		name: string;
		description: string;
		status: string;
		path: string;
		type?: string;
		madeWith?: string[];
		url?: string;
		github?: string;
		youtube?: string;
		class?: string;
	}

	const {
		name,
		description,
		status,
		path,
		type,
		madeWith,
		url,
		github,
		youtube,
		class: className,
	}: Props = $props();
</script>

<div class="project {className}">
	<a href={path} data-sveltekit-preload-data="hover">
		<h2>{name}</h2>
		<p class="description">{description}</p>
	</a>

	<div class="footer">
		<div>
			{#if madeWith?.includes('Svelte')}
				<SvelteIcon />
			{/if}
			{#if madeWith?.includes('React')}
				<ReactIcon />
			{/if}
			{#if madeWith?.includes('TypeScript')}
				<TypeScriptIcon />
			{/if}
			{#if madeWith?.includes('Next JS')}
				<NextJSIcon />
			{/if}
			{#if madeWith?.includes('Python')}
				<PythonIcon />
			{/if}
			<!-- TODO: JS	-->
		</div>

		<!-- TODO: move this in a way I can wrap everything else in an a tag -->
		<div>
			{#if youtube}
				<a href={youtube} target="_blank">
					<Icon icon="youtube" alt="Video Link" />
				</a>
			{/if}
			{#if github}
				<a href={github} target="_blank">
					<Icon icon="github" alt="Github Repo" />
				</a>
			{/if}
			{#if url}
				<a href={url} target="_blank">
					<Icon icon="link" alt="Project Link" />
				</a>
			{/if}
		</div>
	</div>

	<div class="test">
		<div
			class:green={status === 'Shipped'}
			class:yellow={status === 'In Development'}
			class:red={status === 'In Limbo'}
		>
			{status}
		</div>
		<div class:blue={type === 'Professional'} class:orange={type === 'Personal'}>{type}</div>
	</div>

	<!--{@render children?.()}-->
</div>

<style>
	.project {
		background: #201616;
		padding: 0.75rem;

		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		position: relative;
	}

	.footer {
		margin-top: auto;
		display: flex;
		justify-content: space-between;
	}

	.footer > div {
		display: flex;
		gap: 0.25rem;
	}

	.description {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.test {
		position: absolute;
		top: 0.5rem;
		right: -0.75rem;

		text-align: right;
		font-size: 0.9em;
	}

	.test > div {
		padding-inline: 0.25rem;
	}

	/* TODO: these should all be from a theme */

	.blue {
		background: #104db9;
	}

	.orange {
		background: #b95e10;
	}

	.red {
		background: #560808;
	}

	.green {
		background: #0b4f0b;
	}

	.yellow {
		background: #b0831a;
	}

	/* TODO: temp until better styles for links */
	a {
		color: white;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
