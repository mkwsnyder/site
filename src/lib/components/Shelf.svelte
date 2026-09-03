<script lang="ts">
	import type { FavoriteMeta } from '$lib/types';
	import type { Snippet } from 'svelte';
	import FavoriteLi from './FavoriteLi.svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import FavoriteContent from './FavoriteContent.svelte';
	import { quintOut } from 'svelte/easing';

	interface Props {
		name: string;
		color: string;
		favorites: FavoriteMeta[];
	}

	const { name, color, favorites }: Props = $props();

	// let activeSnippet: Snippet | undefined = $state();

	let activeFavorite: FavoriteMeta | undefined = $state();
	// let previousIndex: number = $state(0);
	let height = $state(0);
	let direction = $state(1);

	function setActiveFavorite(favorite: FavoriteMeta) {
		// console.log(favorite, activeFavorite);
		if (activeFavorite === undefined || favorite.name !== activeFavorite.name) {
			// previousIndex = activeFavorite?.placement ?? 0;
			direction = (activeFavorite?.placement ?? 0) > favorite.placement ? -1 : 1;
			activeFavorite = favorite;
		} else activeFavorite = undefined;
	}

	function paneOut(node: Element, { closing }: { closing: boolean }) {
		return closing ? { duration: 250 } : fly(node, { x: 10 * direction, duration: 200 });
	}

	// function setActiveSnippet(snippet: Snippet) {
	// 	if (activeSnippet === undefined || snippet !== activeSnippet) activeSnippet = snippet;
	// 	else activeSnippet = undefined;
	// }
</script>

<div class="shelf" style="background: {color};">
	<h2 class="title">{name}</h2>

	<div class="shelf-content">
		{#each favorites as favorite (favorite.name)}
			<FavoriteLi {favorite} {setActiveFavorite} />
		{/each}
	</div>
	<!-- {#if activeFavorite?.content}
		<!-- TODO: slide or fade between favorites -->
	<!-- <div class="active-area" transition:slide={{ axis: 'y' }}>
			{#key activeFavorite.name}
				<div
					in:fly={{
						x: -10 * (previousIndex > activeFavorite.placement ? -1 : 1),
						duration: 200,
						delay: 200,
					}}
					out:fly={{ x: 10 * (previousIndex > activeFavorite.placement ? -1 : 1), duration: 200 }}
					bind:clientHeight={h}
					style="height: {h}px;"
				>
					{@render activeFavorite.content()}
				</div>
			{/key}
		</div>
	{/if} -->

	<div class="active-area" style="height: {activeFavorite?.content ? height : 0}px">
		{#if activeFavorite?.content}
			{#key activeFavorite.name}
				<div
					class="pane"
					in:fly={{ x: -10 * direction, duration: 200, delay: 200 }}
					out:paneOut|global={{ closing: activeFavorite === undefined }}
					bind:clientHeight={height}
				>
					<!-- in:fly={{
						x: -10 * (previousIndex > activeFavorite.placement ? -1 : 1),
						duration: 200,
						delay: 200,
					}}
					out:fly={{ x: 10 * (previousIndex > activeFavorite.placement ? -1 : 1), duration: 200 }} -->
					<!-- {@render activeFavorite.content()} -->
					<FavoriteContent {...activeFavorite} />
				</div>
			{/key}
		{/if}
	</div>
</div>

<style>
	.shelf {
		display: flex;
		flex-direction: column;
		border-radius: 0.25rem;
		/*gap: 0.5rem;*/

		/*background: #a55;*/
		padding: 1.25rem;
	}

	.title {
		margin-left: 1rem;
	}

	.shelf-content {
		display: grid;
		gap: 1.25rem;
		grid-template-columns: 1fr 1fr 1fr;
	}

	.active-area {
		/*display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;*/

		position: relative;
		overflow: hidden;
		transition: height 250ms ease-in-out;

		/*transition: height 2s ease;*/
	}

	.pane {
		/*grid-row: 1;
		grid-column: 1;*/
		padding-top: 1rem;

		position: absolute;
		inset: 0 0 auto 0;

		/*transition: height 2s ease;*/
	}
</style>
