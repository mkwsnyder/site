<script lang="ts">
	import BreakoutBig from '$lib/components/breakout/BreakoutBig.svelte';
	import BreakoutFull from '$lib/components/breakout/BreakoutFull.svelte';

	let { data } = $props();

	const { gallery } = $derived(data);

	console.log('data', gallery);
</script>

<p>Coming soon&trade;</p>

<BreakoutBig>testing</BreakoutBig>
