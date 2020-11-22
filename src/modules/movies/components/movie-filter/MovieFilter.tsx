import React, { useCallback } from 'react';

import { Input, ToggleButton } from '@modules/shared/components';
import { MovieFilterType } from '@modules/movies/constants';
import { MovieFilterModel } from '@modules/movies/models';
import './MovieFilter.scss'

interface Props {
  moviesFilter: MovieFilterModel;
  onChangeFilter: (movieFilter: MovieFilterModel) => void
}

export const MovieFilter = (props: Props) => {
  const { moviesFilter, onChangeFilter } = props;

  const onChangeMovieSearch = (query: string): void => {
    onChangeFilter({
      watchStatus: moviesFilter.watchStatus,
      query
    });
  }

  const onChangeMovieWatchStatus = useCallback((watchStatus: boolean): void => {
    onChangeFilter({
      watchStatus: watchStatus,
      query: moviesFilter.query
    });
  }, [moviesFilter.query, onChangeFilter]);

  return (
    <div className="movie-filter">
      <ToggleButton
        className="movie-toggle-filter"
        buttons={MovieFilterType}
        value={moviesFilter.watchStatus}
        onChange={onChangeMovieWatchStatus}
      />
      <Input
        placeholder="Search My Movies"
        value={moviesFilter.query}
        onChange={onChangeMovieSearch}
      />
    </div>
  )
}
