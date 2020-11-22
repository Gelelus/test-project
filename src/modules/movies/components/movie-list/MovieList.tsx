import React from 'react';

import { Table } from '@modules/shared/components';
import { Movie } from '@modules/movies/models';
import { MovieListItem } from '@modules/movies/components';
import './MovieList.scss';

interface Props {
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
  onSetWatchedMovies: (movieId: number) => void;
}

export const MovieList = (props: Props) => {
  const { movies, onSelectMovie, onSetWatchedMovies } = props;

  return <div className="movie-list">
    <Table
      data={movies}
      rowKeyProperty="id"
      rowTitleProperty="title"
      render={(movie: Movie) => <MovieListItem onSetWatchedMovie={onSetWatchedMovies} movie={movie} />}
      onRowClick={(movie: Movie) => onSelectMovie(movie)}
    />
  </div>
}
