<script lang="ts">
	import { pageTitle } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>{pageTitle([data.name, 'Projects'])}</title>
</svelte:head>

<h1>{data.name}</h1>

<p>
	<a href="/projects">back</a>
</p>

<div><b>Date (approx):</b> {data.date}</div>
<div><b>Status:</b> {data.status}</div>
<div><b>Description:</b> {data.description}</div>
<div><b>Made with:</b> {data.madeWith}</div>
<div><b>Type:</b> {data.type}</div>

{#if data.url}
	<div><b>URL:</b> <a href={data.url} target="_blank">{data.url}</a></div>
{/if}

{#if data.github}
	<div><b>GitHub Repo:</b> <a href={data.github} target="_blank">{data.github}</a></div>
{/if}

<!-- :P -->
<p>&nbsp;</p>

<p>
	<i>{data?.description}</i>
</p>

{@render data.content()}

<p>
	<i>More details to come later.</i>
</p>

<style>
</style>
