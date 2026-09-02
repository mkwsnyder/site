import type { Favorite } from '$lib/types.js';
import { fetchMarkdownPages } from '$lib/utils';

async function category(name: string) {
	const pages = await fetchMarkdownPages<Favorite>(`favorites/${name}`, true);

	return pages
		.sort((a, b) => a.placement - b.placement)
		.map((page) => ({ ...page, path: page.path.replace(`/${name}`, '') }));
}

export const load = async () => {
	const [games, books, movies, shows] = await Promise.all([
		category('games'),
		category('books'),
		category('movies'),
		category('shows'),
	]);

	return {
		favorites: { games, books, movies, shows },
	};
};
