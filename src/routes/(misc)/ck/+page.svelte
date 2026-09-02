<script lang="ts">
	import { pageTitle } from '$lib/utils';
	import { fly } from 'svelte/transition';

	let paused = $state(true);
	let currentTime = $state(0);

	function onclick() {
		paused = !paused;
		currentTime = 0;
	}
</script>

<audio loop bind:paused bind:currentTime>
	<source
		src="https://6tfv44zxmv.ufs.sh/f/m2Vjr4arYXupllflOAgJqby62neDIXRl4Hgu1o5ZWKc9fiML"
		type="audio/wav"
	/>
</audio>

<svelte:head>
	<title>{pageTitle('???')}</title>
</svelte:head>

<!-- <div class="text"> -->
{#if paused}
	<button class="text" {onclick} transition:fly={{ y: -20, duration: 500 }}>[ click me ]</button>
{:else}
	<button class="text" {onclick} transition:fly={{ y: 20, duration: 500 }}>
		[ headphones recommended ]
	</button>
{/if}

<!-- </div> -->

<style>
	.text {
		font-family: monospace;
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	button {
		background: none;
		border: none;
		padding: 1rem;
		cursor: pointer;
	}
</style>
