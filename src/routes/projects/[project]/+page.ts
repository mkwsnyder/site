export async function load({ params }) {
	const project = await import(`../${params.project}.md`);
	const { name, date, madeWith, description, status, type, url, github } = project.metadata;
	const content = project.default;

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
