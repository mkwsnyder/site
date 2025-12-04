export type Project = {
	name: string;
	date?: Date;
	url?: string;
	github?: string;
	description: string;
	status: 'In Development' | 'Shipped' | 'On Hold';
	madeWith: string[];
	type: 'Personal' | 'School' | 'Work' | 'Open Source' | 'Other';
};
