import { error } from '@sveltejs/kit';
import { homeUrl } from './constants';

type MarkdownModule = {
	// mdsvex's default export is rendered directly by the page, so leave it loose.
	default: any;
	metadata: Record<string, any>;
};

// Vite only accepts a static literal here, so glob every markdown route once and
// filter it down per request instead of building the pattern from `route`.
const markdownFiles = import.meta.glob<MarkdownModule>('/md/**/*.md');

/**
 * A page can live directly in its route folder (`projects/monocle.md`) or in a
 * folder of its own (`projects/monocle/monocle.md`) so that images and other
 * assets can sit next to it. Both resolve to the same `/projects/monocle` URL.
 */
function candidatePaths(route: string, slug: string) {
	return [`/md/${route}/${slug}.md`, `/md/${route}/${slug}/${slug}.md`];
}

/** The URL slug for a markdown file, or null if it isn't one of the two layouts above. */
function slugFor(route: string, filePath: string) {
	const segments = filePath.slice(`/md/${route}/`.length, -'.md'.length).split('/');

	if (segments.length === 1) return segments[0];
	if (segments.length === 2 && segments[0] === segments[1]) return segments[0];

	return null;
}

export async function fetchMarkdownPages<T>(route: string, includeContent = false): Promise<T[]> {
	const prefix = `/md/${route}/`;

	const pages = Object.entries(markdownFiles)
		.filter(([path]) => path.startsWith(prefix))
		.map(([path, resolver]) => ({ slug: slugFor(route, path), resolver }))
		.filter((page) => page.slug !== null);

	return await Promise.all(
		pages.map(async ({ slug, resolver }) => {
			const { metadata, default: content } = await resolver();

			return {
				...metadata,
				path: `/${route}/${slug}`,
				...(includeContent && { content }),
			} as T;
		}),
	);
}

export async function fetchMarkdownPage(route: string, slug: string) {
	const path = candidatePaths(route, slug).find((candidate) => candidate in markdownFiles);

	if (!path) error(404, `No page found at /${route}/${slug}`);

	return await markdownFiles[path]();
}

export function pageTitle(titles: string[] | string) {
	if (typeof titles == 'string') return [titles, homeUrl].join(' | ');
	return [...titles, homeUrl].join(' | ');
}
