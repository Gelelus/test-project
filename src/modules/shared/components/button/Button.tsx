import React from 'react';

import './Button.scss';

interface Props {
  title: string;
  onClick: () => void;
}

export const Button = (props: Props) => {
  const { title, onClick } = props;

  return (
    <button className="btn" onClick={onClick}>
      {title}
    </button>
  );
}
