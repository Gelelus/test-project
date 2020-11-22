import React, { useCallback, useEffect, useReducer, useState } from 'react';

import { MovieFilter, MovieFinder, MovieList } from '@modules/movies/components';
import { MovieService } from '@modules/movies/services';
import { Movie, MovieFilterModel } from '@modules/movies/models';
import { MovieFilterType } from '@modules/movies/constants';
import { CoreUtil } from '@modules/core/utils';
import { initialState, moviesReducer } from '@modules/movies/store/reducers';
import { addNewMovie, changeMovieWatchStatus, saveMovies, updateMovieRuntime } from '@modules/movies/store/actions';
import './MoviesPage.scss';

export const MoviesPage = () => {
  const [{ movies }, dispatch] = useReducer(moviesReducer, initialState);
  const [moviesFilter, changeMoviesFilter] = useState<MovieFilterModel>({
    query: '',
    watchStatus: MovieFilterType[0].value,
  });

  useEffect(() => {
    MovieService.getMovies().then(movies => dispatch(saveMovies(movies)));
  }, []);

  // With redux flow - part of the logic will be moved into the side effects layer
  const onSelectMovie = useCallback(async (movie: Movie) => {
    const requestedMovie = await MovieService.getMovieById(movie.id);
    dispatch(updateMovieRuntime(requestedMovie.id, requestedMovie.runtime));
  }, []);

  // With redux flow - part of the logic will be moved into the side effects layer
  const onFindMovie = useCallback(async (movieTitle: string) => {
    const movie = await MovieService.getMovieByTitle(movieTitle);
    dispatch(addNewMovie(movie));
  }, []);

  const onSetWatchedMovies = useCallback((movieId: number) => {
    dispatch(changeMovieWatchStatus(movieId));
  }, []);

  // In case of redux - it will be a selector.
  const getFilteredMovies = useCallback(() => {
    const { watchStatus, query } = moviesFilter;
    return movies.filter(movie => {
      return !!movie.isWatched === watchStatus &&
        CoreUtil.isContainsIgnoringCase(movie.title, query)
    });
  }, [movies, moviesFilter]);

  return (
    <div className="movies-page">
      <MovieFinder onFindMovie={onFindMovie} />
      <MovieFilter moviesFilter={moviesFilter} onChangeFilter={changeMoviesFilter} />
      <MovieList
        movies={getFilteredMovies()}
        onSelectMovie={onSelectMovie}
        onSetWatchedMovies={onSetWatchedMovies}
      />
    </div>
  );
}
