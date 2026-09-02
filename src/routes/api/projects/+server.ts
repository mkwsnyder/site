import type { Project } from '$lib/types';
import { fetchMarkdownPages } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allProjects = await fetchMarkdownPages<Project>('projects');

	const sortedProjects = allProjects.sort((a, b) => {
		return Date.parse(b.date) - Date.parse(a.date);
	});

	return json(sortedProjects);
};
