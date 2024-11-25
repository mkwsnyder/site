<script lang="ts">
	import type { LayoutData } from './$types';
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	const duration = 150;
	const distance = 20;
</script>

<svelte:head>
	<title>msnyder.dev</title>
</svelte:head>

<div>
	<a href="/" data-sveltekit-preload-data="hover">msnyder.dev</a>
</div>

{#key data.currentRoute}
	<div
		class="content-grid"
		in:fly={{ duration, delay: duration, x: -distance }}
		out:fly={{ duration, x: distance }}
	>
		{@render children()}
	</div>
{/key}

<!--<div class="hide">-->
<!--	<div id="test">-->
<!--		{#each Array(100) as _}-->
<!--			this site isn't done yet.&nbsp;-->
<!--		{/each}-->
<!--	</div>-->
<!--</div>-->

<!--<div class="fake-body"></div>-->

<style>
	/*.hide {*/
	/*	height: 0;*/
	/*	overflow: hidden;*/
	/*}*/

	/*#test {*/
	/*	text-wrap: nowrap;*/
	/*	font-size: 2em;*/
	/*	font-weight: bolder;*/
	/*	color: #131111;*/
	/*}*/

	/*.fake-body {*/
	/*	position: absolute;*/
	/*	inset: -30vh 30vh 30vw -30vw;*/
	/*	transform: rotate(10deg);*/
	/*	background-image: -moz-element(#test); !* why are you allowed to do this lol *!*/
	/*	background-repeat: repeat;*/
	/*	height: 160dvh;*/
	/*	width: 160dvw;*/
	/*	z-index: -1;*/
	/*}*/

	/*:global(body) {*/
	/*	overflow: hidden;*/
	/*}*/

	/* this is the secret sauce */
	/* reference: https://www.youtube.com/watch?v=c13gpBrnGEw */
	:global(.content-grid) {
		--padding-inline: 2rem;
		--content-max-width: 70ch;
		--breakout-max-width: 80ch;
		--breakout-big-max-width: 120rem;

		--breakout-size: calc((var(--breakout-max-width) - var(--content-max-width)) / 2);
		--breakout-big-size: calc(
			(var(--breakout-big-max-width) - var(--content-max-width) - (var(--breakout-size) * 2)) / 2
		);

		display: grid;

		grid-template-columns:
			[full-start]
			minmax(var(--padding-inline), 1fr)
			[breakout-big-start]
			minmax(0, var(--breakout-big-size))
			[breakout-start]
			minmax(0, var(--breakout-size))
			[content-start]
			min(100% - (var(--padding-inline) * 2), var(--content-max-width))
			[content-end]
			minmax(0, var(--breakout-size))
			[breakout-end]
			minmax(0, var(--breakout-big-size))
			[breakout-big-end]
			minmax(var(--padding-inline), 1fr)
			[full-end];
	}

	:global(.content-grid > :not(.breakout, .breakout-big, .full-width)),
	:global(.bread > :not(.breakout, .breakout-big, .full-width)) {
		grid-column: content;
	}

	:global(.content-grid > .breakout) {
		grid-column: breakout;
	}

	:global(.content-grid > .breakout-big) {
		grid-column: breakout-big;
	}

	:global(.content-grid > .full-width) {
		grid-column: full;

		display: grid;
		grid-template-columns: inherit;
	}
</style>
