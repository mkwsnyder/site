import type { Project } from '../types.js';

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/projects`);
	const projects: { path: string; meta: Project }[] = await response.json();

	return {
		projects,
	};
};
