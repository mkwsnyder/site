import type { GalleryMeta } from '$lib/types';
import { fetchMarkdownPages } from '$lib/utils';

export async function load() {
	const pages = await fetchMarkdownPages<GalleryMeta>('gallery', true);

	const sortedPages = pages.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { gallery: sortedPages };
}
