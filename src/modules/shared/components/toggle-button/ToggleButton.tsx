import React from 'react';

import { ToggleButtonModel } from '@modules/shared/models';
import './ToggleButton.scss';

interface Props {
  buttons: ToggleButtonModel[];
  className: string;
  value: boolean;
  onChange: (value: boolean) => void
}

export const ToggleButton = (props: Props) => {
  const { buttons, className, value, onChange } = props;

  const buttonsRender = (): JSX.Element[] => {
    return buttons.map(button => {
      return (
        <label className={`container ${className}`} key={button.name}>
          <input
            type="radio"
            name={button.name}
            checked={button.value === value}
            onChange={() => onChange(button.value)}
          />
          <i className={`icon ${button.icon}`} />
          <span className="button-title">{button.title}</span>
          <div className="selection-indicator"></div>
        </label>
      )
    })
  }

  return (
    <div className="toggle-button">
      {buttonsRender()}
    </div>
  )
}
