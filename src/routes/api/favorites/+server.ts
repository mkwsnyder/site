export const prerender = true; // this shouldn't be necessary, and yet here we are

import type { Favorite } from '$lib/types';
import { fetchMarkdownPages } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const games = await fetchMarkdownPages<Favorite>('favorites/games');
	const books = await fetchMarkdownPages<Favorite>('favorites/books');
	const movies = await fetchMarkdownPages<Favorite>('favorites/movies');
	const shows = await fetchMarkdownPages<Favorite>('favorites/shows');

	const sortedGames = games
		.sort((a, b) => {
			return a.placement - b.placement;
		})
		.map((game) => ({ ...game, path: game.path.replace('/games', '') }));

	const sortedBooks = books
		.sort((a, b) => {
			return a.placement - b.placement;
		})
		.map((book) => ({ ...book, path: book.path.replace('/books', '') }));

	const sortedMovies = movies
		.sort((a, b) => {
			return a.placement - b.placement;
		})
		.map((movie) => ({ ...movie, path: movie.path.replace('/movies', '') }));

	const sortedShows = shows
		.sort((a, b) => {
			return a.placement - b.placement;
		})
		.map((show) => ({ ...show, path: show.path.replace('/shows', '') }));

	return json({ games: sortedGames, books: sortedBooks, movies: sortedMovies, shows: sortedShows });
};
