<script lang="ts">
	import type { FavoriteMeta } from '$lib/types';
	import LinkIcon from './icons/LinkIcon.svelte';

	let { name, description, creator, year, link, placement, image, content }: FavoriteMeta =
		$props();
</script>

<div class="metadata">
	<h3>{name}</h3>
	<div class="smaller">
		<div class="entry">
			<span class="fine">Creator:</span><span class="bold">{creator}</span>
		</div>
		<div class="entry">
			<span class="fine">Year:</span><span class="bold">{year}</span>
		</div>
		{#if link}
			<!-- <div class="entry"> -->
			<a href={link} target="_blank">
				<LinkIcon size="sm" />
				<!-- </div> -->
			</a>
		{/if}
	</div>
</div>

{@render content()}

<style>
	.metadata {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.smaller {
		display: flex;
		flex-direction: row;
		gap: 2.5rem;
	}

	.entry {
		height: 100%;
		display: flex;
		gap: 0.5rem;
	}

	.fine {
		font-weight: 300;
	}

	.bold {
		font-weight: bold;
	}
</style>
