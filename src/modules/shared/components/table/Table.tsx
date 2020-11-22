import React, { useState } from 'react';

import './Table.scss';

interface Props {
  data: any[];
  render: (item: any) => JSX.Element;
  rowKeyProperty: string
  rowTitleProperty: string;
  onRowClick: (item: any) => void
}

export const Table = (props: Props) => {
  const { data, rowKeyProperty, render, rowTitleProperty, onRowClick } = props;
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});

  const onRowHeaderClick = (item: any): void => {
    const rowIdValue = item[rowKeyProperty];
    setExpandedRows(state => {
      return {
        ...state,
        [rowIdValue]: !state[rowIdValue]
      }
    });
    onRowClick(item);
  }

  const rowsRender = (): JSX.Element[] => {
    return data.map(item => {
      const rowId = item[rowKeyProperty];

      return (
        <tr key={rowId} className={expandedRows[rowId] ? 'expanded' : ''}>
          <td className={`expandable-row-${rowId}`}>
            <div className="row-header" onClick={() => onRowHeaderClick(item)}>
              <i className="icon icon-chevron" />
              <div className="row-title">{item[rowTitleProperty]}</div>
            </div>
            <div className={`expanded-content`}>
              {render(item)}
            </div>
          </td>
        </tr>
      )
    })
  }

  return (
    <table className="table">
      <tbody>
      {rowsRender()}
      </tbody>
    </table>
  )
}
