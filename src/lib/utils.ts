export const fetchMarkdownProjects = async () => {
	const allProjectFiles = import.meta.glob('/src/routes/projects/*.md');
	const iterableProjectFiles = Object.entries(allProjectFiles);

	return await Promise.all(
		iterableProjectFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const projectPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: projectPath,
			};
		}),
	);
};

export function pageTitle(titles: string[]) {
	titles.push('msnyder.dev');
	return titles.join(' | ');
}
