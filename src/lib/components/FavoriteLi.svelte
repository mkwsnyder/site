<script lang="ts">
	import type { FavoriteMeta } from '$lib/types';

	interface Props {
		favorite: FavoriteMeta;
		setActiveFavorite: (favorite: FavoriteMeta) => void;
		// index: number;
	}

	const { favorite, setActiveFavorite }: Props = $props();

	const { name, image } = $derived(favorite);

	function onclick() {
		setActiveFavorite(favorite);
	}

	function onkeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === '') {
			e.preventDefault();
			onclick();
		}
	}
</script>

<div>
	<!-- <a href={path}>{name}</a> -->
	<div class="pointer" {onclick} {onkeydown} role="button" tabindex="0">
		<img alt={name} src={image} />
	</div>

	<!-- {@render content()} -->
</div>

<style>
	.pointer {
		cursor: pointer;
	}

	img {
		box-shadow: 0px 2px 10px -3px rgba(0, 0, 0, 1);

		transition:
			transform 0.2s cubic-bezier(0, 0, 0, 1),
			box-shadow 0.4s cubic-bezier(0, 0, 0, 1);
	}

	img:hover {
		transform: scale(103%);
		box-shadow: 0px 2px 30px 2px rgba(0, 0, 0, 1);
	}
</style>
