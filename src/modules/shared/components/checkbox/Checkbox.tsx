import React from 'react';

import './Checkbox.scss';

interface Props {
  title: string;
  isChecked?: boolean;
  onChange: () => void;
}

export const Checkbox = (props: Props) => {
  const { title, isChecked, onChange } = props;

  return (
    <label className="checkbox">
      <input
        checked={isChecked}
        type="checkbox"
        onChange={onChange}
      />
      <span className="checkbox-title">{title}</span>
      <div className="checkbox-body"></div>
    </label>
  )
}
