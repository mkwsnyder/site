import { fetchMarkdownPage } from '$lib/utils';

export async function load({ params }) {
	const { default: content, metadata } = await fetchMarkdownPage('projects', params.project);
	const { name, date, madeWith, description, status, type, url, github } = metadata;

	return {
		content,
		name,
		date,
		madeWith,
		description,
		status,
		type,
		url,
		github,
	};
}
