import React from 'react';

import { Movie } from '@modules/movies/models';
import { MOVIE_IMAGE_URL } from '@modules/movies/constants';
import { CoreUtil } from '@modules/core/utils';
import { Checkbox } from '@modules/shared/components';
import './MovieListItem.scss';

interface Props {
  movie: Movie;
  onSetWatchedMovie: (movieId: number) => void;
}

export const MovieListItem = (props: Props) => {
  const { movie, onSetWatchedMovie } = props;

  const runtimeValueRender = (runtime?: number): string => {
    return CoreUtil.isNil(runtime) ? 'Loading...' : `${runtime}m`;
  }

  return (
    <div className="movie-list-item">
      <div className="movie-poster">
        <img alt="Movie poster" src={`${MOVIE_IMAGE_URL}${movie.poster_path}`} />
      </div>
      <div className="movie-content">
        <div className="movie-description">
          <div>Year: {movie.release_date}</div>
          <div>Runtime: {runtimeValueRender(movie.runtime)}</div>
          <div>IMDB Score: {movie.vote_average}</div>
        </div>
        <Checkbox
          isChecked={movie.isWatched}
          title="Watched"
          onChange={() => onSetWatchedMovie(movie.id)}
        />
      </div>
    </div>
  )
}
