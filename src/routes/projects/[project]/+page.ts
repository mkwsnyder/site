export async function load({ params }) {
	const project = await import(`../${params.project}.svx`);
	const { title, date } = project.metadata;
	const content = project.default;

	return {
		content,
		title,
		date,
	};
}
