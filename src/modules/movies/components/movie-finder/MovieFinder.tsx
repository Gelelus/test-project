import React, { useCallback, useState } from 'react';

import { Button, Input } from '@modules/shared/components';
import { MOVIE_TITLE_NOT_ALLOWED_CHARS } from '@modules/movies/constants';
import './MovieFinder.scss';

interface Props {
  onFindMovie: (value: string) => void;
}

export const MovieFinder = (props: Props) => {
  const { onFindMovie } = props;
  const [movieToFind, setMovieToFind] = useState('');

  const onFindMoveBtnClick = useCallback((): void => {
    if (!movieToFind) {
      return;
    }

    onFindMovie(movieToFind);
  }, [movieToFind, onFindMovie]);

  return (
    <div className="movie-finder">
      <Input
        notAllowedChars={MOVIE_TITLE_NOT_ALLOWED_CHARS}
        placeholder="Add Movie to Unwatched"
        value={movieToFind}
        onChange={setMovieToFind}
      />
      <Button title="Add" onClick={onFindMoveBtnClick} />
    </div>
  )
};
