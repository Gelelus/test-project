import { HttpClient } from '@modules/core/utils';
import { Movie } from '../models';

export class MovieService {
  // In case of adding Resources for each service - it can be moved in that class
  private static serviceAPIEndpoint = 'https://api.themoviedb.org/3/';

  static getMovies(): Promise<Movie[]> {
    // In case of adding Resources for each service - HttpClient should moved in that class
    return HttpClient.GET(`${MovieService.serviceAPIEndpoint}movie/top_rated`)
      .then(response => response.results);
  }

  static getMovieById(movieId: number): Promise<Movie> {
    return HttpClient.GET(`${MovieService.serviceAPIEndpoint}movie/${movieId}`);
  }

  static getMovieByTitle(movieTitle: string): Promise<Movie> {
    return HttpClient.GET(`${MovieService.serviceAPIEndpoint}search/movie`, { query: movieTitle })
      .then(response => response.results[0]);
  }
}
