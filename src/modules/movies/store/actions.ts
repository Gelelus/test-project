import { Action, Movie } from '@modules/movies/models';

export enum MovieActionTypes {
  SAVE_MOVIES = '[Movies] Save List Of Movies',
  UPDATE_MOVIE_RUNTIME = '[Movies] Update Movie Runtime',
  ADD_NEW_MOVIE = '[Movies] Add New Movie',
  CHANGE_MOVIE_WATCH_STATUS = '[Movies] Change Movie Watch Status'
}

export function saveMovies(movies: Movie[]): Action {
  return {
    type: MovieActionTypes.SAVE_MOVIES,
    payload: {
      movies
    }
  }
}

export function updateMovieRuntime(movieId: number, runtime: number): Action {
  return {
    type: MovieActionTypes.UPDATE_MOVIE_RUNTIME,
    payload: {
      movieId,
      runtime
    }
  }
}

export function addNewMovie(movie: Movie): Action {
  return {
    type: MovieActionTypes.ADD_NEW_MOVIE,
    payload: {
      movie
    }
  }
}

export function changeMovieWatchStatus(movieId: number): Action {
  return {
    type: MovieActionTypes.CHANGE_MOVIE_WATCH_STATUS,
    payload: {
      movieId
    }
  }
}
