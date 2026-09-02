import type { Project } from '$lib/types.js';

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/projects`);
	const projects: Project[] = await response.json();

	return {
		projects,
	};
};
