<script lang="ts">
	import SvelteIcon from '$lib/components/icons/SvelteIcon.svelte';
	import TypeScriptIcon from '$lib/components/icons/TypeScriptIcon.svelte';
	import ReactIcon from '$lib/components/icons/ReactIcon.svelte';
	import NextJSIcon from '$lib/components/icons/NextJSIcon.svelte';
	import PythonIcon from '$lib/components/icons/PythonIcon.svelte';
	import LinkIcon from '$lib/components/icons/LinkIcon.svelte';
	import YoutubeIcon from '$lib/components/icons/YoutubeIcon.svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import ThreeJSLogo from '$lib/components/icons/ThreeJSLogo.svelte';
	import JavaScriptLogo from '$lib/components/icons/JavaScriptLogo.svelte';
	import ReleasedIcon from '$lib/components/icons/ReleasedIcon.svelte';
	import ConstructionIcon from '$lib/components/icons/ConstructionIcon.svelte';
	import BlockIcon from '$lib/components/icons/BlockIcon.svelte';
	import WorkIcon from '$lib/components/icons/WorkIcon.svelte';
	import StarIcon from '$lib/components/icons/StarIcon.svelte';
	import Ribbon from '$lib/components/Ribbon.svelte';

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

	const colorType = (type === 'Professional' ? 'blue' : 'orange')
	const colorStatus = (status === 'Shipped' ? 'green' : status === 'In Development' ? 'yellow' : 'red')
</script>

<div class="project {className}">
	<a class="body" href={path} data-sveltekit-preload-data="hover">
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
			{#if madeWith?.includes('Next.js')}
				<NextJSIcon />
			{/if}
			{#if madeWith?.includes('Python')}
				<PythonIcon />
			{/if}
			{#if madeWith?.includes('Three.js')}
				<ThreeJSLogo stroke="white" />
			{/if}
			{#if madeWith?.includes('JavaScript')}
				<JavaScriptLogo />
			{/if}
			<!-- TODO: JS	-->
		</div>

		<!-- TODO: move this in a way I can wrap everything else in an a tag -->
		<div>
			{#if youtube}
				<a href={youtube} target="_blank">
					<YoutubeIcon alt="Video Link" />
				</a>
			{/if}
			{#if github}
				<a href={github} target="_blank">
					<GithubIcon alt="Github Repo" />
				</a>
			{/if}
			{#if url}
				<a href={url} target="_blank">
					<LinkIcon alt="Project Link" />
				</a>
			{/if}
		</div>
	</div>

	<!--	<div class="test">-->
	<!--		<div-->
	<!--			class:green={status === 'Shipped'}-->
	<!--			class:yellow={status === 'In Development'}-->
	<!--			class:red={status === 'In Limbo'}-->
	<!--		>-->
	<!--			{#if status === 'Shipped'}-->
	<!--				<ReleasedIcon />-->
	<!--			{/if}-->
	<!--			{#if status === 'In Development'}-->
	<!--				<ConstructionIcon />-->
	<!--			{/if}-->
	<!--			{#if status === 'In Limbo'}-->
	<!--				<BlockIcon />-->
	<!--			{/if}-->
	<!--		</div>-->
	<!--		<div class:blue={type === 'Professional'} class:orange={type === 'Personal'}>-->
	<!--			{#if type === 'Professional'}-->
	<!--				<WorkIcon />-->
	<!--			{/if}-->
	<!--			{#if type === 'Personal'}-->
	<!--				<StarIcon />-->
	<!--			{/if}-->
	<!--		</div>-->
	<!--	</div>-->

<!--	<div class="ribbons">-->
		<Ribbon color={colorType}>
			{#snippet hidden()}
				{type}
			{/snippet}

			{#if type === 'Professional'}
				<WorkIcon height={24} />
			{/if}
			{#if type === 'Personal'}
				<StarIcon height={24} />
			{/if}
		</Ribbon>

		<Ribbon color={colorStatus} second>
			{#snippet hidden()}
				{status}
			{/snippet}

			{#if status === 'Shipped'}
				<ReleasedIcon height={24} />
			{/if}
			{#if status === 'In Development'}
				<ConstructionIcon height={24} />
			{/if}
			{#if status === 'In Limbo'}
				<BlockIcon height={24} />
			{/if}
		</Ribbon>
<!--	</div>-->

	<!--{@render children?.()}-->
</div>

<style>
	.project {
		background: #222;
		padding: 0.75rem;
		border-radius: 0.25rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;
		position: relative;

		height: 100%; /* parent is a div for animate:flip */
	}

	.body {
		padding-right: 1.5rem;
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

	.ribbons {
		/*position: absolute;*/
		/*top: 0;*/
		/*right: 0;*/
	}

	.test {
		display: none;

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
