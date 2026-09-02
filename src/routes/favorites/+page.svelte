<script lang="ts">
	import Breakout from '$lib/components/breakout/breakout.svelte';
	import Favorite from '$lib/components/Favorite.svelte';

	let { data } = $props();
</script>

<!-- <div style="background: purple">hey</div>
<div class="breakout" style="background: red">hey</div>
<div class="breakout-big" style="background: yellow">hey</div>
<div class="full-width" style="background: green">hey</div> -->

<h2>Games</h2>

<Breakout>
	<div class="shelf">
		{#each data.favorites.games as game}
			<Favorite {...game} />
		{/each}
	</div>
</Breakout>

<!-- <hr /> -->

<h2>Books</h2>

<Breakout>
	<div class="shelf">
		{#each data.favorites.books as book}
			<Favorite {...book} />
		{/each}
	</div>
</Breakout>

<!-- <hr /> -->

<h2>Movies</h2>

<Breakout>
	<div class="shelf">
		{#each data.favorites.movies as movie}
			<Favorite {...movie} />
		{/each}
	</div>
</Breakout>

<!-- <hr /> -->

<h2>Shows</h2>

<Breakout>
	<div class="shelf">
		{#each data.favorites.shows as show}
			<Favorite {...show} />
		{/each}
	</div>
</Breakout>

<style>
	.shelf {
		display: grid;
		gap: 0.5rem;
		padding: 0.5rem;
		grid-template-columns: 1fr 1fr 1fr;

		background: #222;
	}
</style>
