<script lang="ts">
	import Breakout from '$lib/components/breakout/Breakout.svelte';
	import Shelf from '$lib/components/Shelf.svelte';
	import type { FavoriteMeta } from '$lib/types.js';
	import { pageTitle } from '$lib/utils.js';
	import type { Snippet } from 'svelte';

	let { data } = $props();
	const { games, books, movies, shows, albums } = $derived(data.favorites);

	// let activeContent: Snippet = $state();

	// function setActive(s: Snippet) {
	// 	activeContent = s;
	// }

	const media: { name: string; color: string; favorites: FavoriteMeta[] }[] = $derived([
		{
			name: 'Games',
			color: '#cb5d5d',
			favorites: games,
		},
		{
			name: 'Books',
			color: '#684379',
			favorites: books,
		},
		{
			name: 'Movies',
			color: '#4e64ba',
			favorites: movies,
		},
		{
			name: 'Shows',
			color: '#60af60',
			favorites: shows,
		},
		{
			name: 'Albums',
			color: '#ada45b',
			favorites: albums,
		},
	]);
</script>

<svelte:head>
	<title>{pageTitle('Favorites')}</title>
</svelte:head>

<!-- <div style="background: purple">hey</div>
<div class="breakout" style="background: red">hey</div>
<div class="breakout-big" style="background: yellow">hey</div>
<div class="full-width" style="background: green">hey</div> -->

<!-- <h2>Games</h2> -->

<p>
	These are some of my favorite media, be it games, books, movies, etc. I've limited myself to a top
	3 in each category. They are ordered.
</p>

<Breakout>
	<div class="shelves">
		{#each media as collection}
			<Shelf {...collection} />
		{/each}
	</div>
</Breakout>

<!-- <Breakout>
	<Shelf name="Games" favorites={games} />
</Breakout> -->

<!-- <hr /> -->

<!-- <h2>Books</h2> -->

<!-- <Breakout>
	<Shelf name="Books" favorites={books} />
</Breakout> -->

<!-- <hr /> -->

<!-- <h2>Movies</h2> -->

<!-- <Breakout>
	<Shelf name="Movies" favorites={movies} />
</Breakout> -->

<!-- <hr /> -->

<!-- <h2>Shows</h2> -->

<!-- <Breakout>
	<Shelf name="Shows" favorites={shows} />
</Breakout> -->

<!-- <h2>Music</h2> -->

<!-- <Breakout>
	<Shelf name="Music" favorites={albums} />
</Breakout> -->

<style>
	.shelves {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	/*.shelf {
		display: grid;
		gap: 0.5rem;
		padding: 0.5rem;
		grid-template-columns: 1fr 1fr 1fr;

		background: #222;
	}*/
</style>
