<script lang="ts">
	import type { Favorite } from '$lib/types';

	const { name, description, path, placement, image, content }: Favorite = $props();
</script>

<div>
	<!-- <a href={path}>{name}</a> -->
	<img alt={name} src={image} />

	{@render content()}
</div>
