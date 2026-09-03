import type { Snippet } from 'svelte';

type MarkdownEntry = {
	content: Snippet;
	path: string;
};

export type Project = MarkdownEntry & {
	name: string;
	date: string;
	url?: string;
	github?: string;
	description: string;
	status: 'In Development' | 'Shipped' | 'On Hold';
	madeWith: string[];
	type: 'Personal' | 'School' | 'Work' | 'Open Source' | 'Other';
};

export type FavoriteMeta = MarkdownEntry & {
	name: string;
	description: string;
	creator: string;
	year: string;
	link?: string;
	placement: number;
	image: string;
};
