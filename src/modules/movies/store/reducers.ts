import { Action, Movie } from '@modules/movies/models';
import { MovieActionTypes } from './actions';
import { CoreUtil } from '@modules/core/utils';

export type State = {
  movies: Movie[];
}

export const initialState: State = {
  movies: []
};


export function moviesReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case MovieActionTypes.SAVE_MOVIES:
      return {
        movies: action.payload.movies
      };
    case MovieActionTypes.UPDATE_MOVIE_RUNTIME: {
      const { movieId, runtime } = action.payload;
      const movies = CoreUtil.updateArrayLikeState(state.movies, movieId, () => ({
        runtime
      }));

      return {
        movies
      };
    }
    case MovieActionTypes.ADD_NEW_MOVIE: {
      const { movie } = action.payload;

      if (!movie) {
        return state;
      }

      const isDuplicate = state.movies.find(_movie => _movie.id === movie.id);

      if (isDuplicate) {
        return state;
      }

      return {
        movies: [...state.movies, movie]
      };
    }
    case MovieActionTypes.CHANGE_MOVIE_WATCH_STATUS: {
      const { movieId } = action.payload;
      const movies = CoreUtil.updateArrayLikeState(state.movies, movieId, (movie: Movie) => ({
        isWatched: !movie.isWatched
      }));

      return {
        movies
      };
    }
    default:
      return initialState;
  }
}
