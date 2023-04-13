import React, { memo, MouseEventHandler, useCallback, useMemo } from 'react'
import css from './TableRowDefault.module.scss'
import classnames from 'classnames'
import { TableRowDefaultProps } from './TableRowDefault.spec'
import { CellAdapterProps, TableColumnItemType } from 'components/molecules/Table/Table.spec'

export const DEFAULT_ROW_HEIGHT = 70

function TableRowDefault<D> ({
  cellClassName,
  columns = [],
  onClick,
  rowClassName,
  rowData,
  rowDefaultStyle = {},
  isOdd,
}: TableRowDefaultProps<D>) {
  const rowClickHandler: MouseEventHandler<HTMLDivElement> = useCallback(({target}) => {
    if (onClick) {
      const isRowClicked = target instanceof HTMLElement
        ? Boolean(target.dataset?.tableCell)
        : false

      if (isRowClicked) {
        onClick(rowData)
      }
    }
  }, [rowData, onClick])

  const rowCells = useMemo(() => columns.map((column, index) => {
    const {
      adapter,
      value,
      className
    } = column as TableColumnItemType

    return (
      <div
        className={classnames(css.cell, cellClassName, className)}
        data-table-cell="true"
        role="cell"
        key={index}
      >
        {adapter
          ? adapter.apply(column, [
            rowData as D,
            {isOdd} as CellAdapterProps
          ])
          : (
            <span>
              {rowData[value as string]}
            </span>
          )
        }
      </div>
    )
  }), [columns, rowData, cellClassName, isOdd])

  return (
    <div
      className={classnames(css.row, rowClassName, {
        [css.rowClickable]: Boolean(onClick),
        [css.rowOdd]: isOdd
      })}
      onClick={rowClickHandler}
      style={{
        height: `${DEFAULT_ROW_HEIGHT}px`,
        ...rowDefaultStyle
      }}
      role="row"
    >
      {rowCells}
    </div>
  )
}

export default memo(TableRowDefault)
