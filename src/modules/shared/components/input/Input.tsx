import React, { ChangeEvent, KeyboardEvent } from 'react';

import './Input.scss';

interface Props {
  placeholder?: string;
  notAllowedChars?: string
  value: string;
  onChange: (value: string) => void;
}

export const Input = (props: Props) => {
  const { placeholder, value, onChange, notAllowedChars = '' } = props;

  const onKeyPressChecker = (event: KeyboardEvent<HTMLInputElement>): void => {
    const isCharNotAllowed = notAllowedChars.includes(event.key);

    if (isCharNotAllowed) {
      event.preventDefault();
    }
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  return (
    <div className="input-control">
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChangeInput}
        onKeyDown={onKeyPressChecker}
      />
    </div>
  )
}
