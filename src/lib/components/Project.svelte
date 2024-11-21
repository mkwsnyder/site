<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";

	interface Props {
		name: string;
		description: string;
		link?: string;
		github?: string;
		youtube?: string;
		class?: string;
	}

	const { name, description, link, github, youtube, class: className }: Props = $props();
</script>

<div class="project {className}">
	{name}
	{description}
	{link}
	{github}

	<div class="links">
    {#if link}
      <a href={link} target="_blank">
				<Icon icon="link" alt="Project Link" />
<!--        <LinkIcon2 />-->
      </a>
    {/if}
		{#if github}
			<a href={github} target="_blank">
				<Icon icon="github" alt="Github Repo" />
<!--				<GithubIcon />-->
			</a>
		{/if}
		{#if youtube}
			<a href={youtube} target="_blank">
				<Icon icon="youtube" alt="Video Link" />
<!--				<YoutubeIcon />-->
			</a>
		{/if}
		<!--    <LinkIcon />-->
		<!--    <GithubIcon />-->
	</div>
	<!--{@render children?.()}-->
</div>

<style>


	.project {
		background: rebeccapurple;
		padding: 1rem;

		position: relative;
	}

	.links {
		position: absolute;
		right: 0.25rem;
		bottom: 0.25rem;
		display: flex;
		gap: 0.25rem;
	}
</style>
