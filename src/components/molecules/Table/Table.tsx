import { memo, useCallback, useMemo, useRef } from 'react'
import css from './Table.module.scss'
import classnames from 'classnames'
import {
  LabelAdapterArgs,
  TableProps,
  TableVariants
} from './Table.spec'
import TableRowDefault from 'components/atoms/TableRowDefault/TableRowDefault'

function Table <D extends any[]>({
  className,
  data,
  tableConfig,
  variant = TableVariants.DEFAULT,
  isWithoutHeadings
}: TableProps<D>) {
  const {
    row: {
      className: rowExternalClass,
      cellClassName,
      onClick,
      CustomRow
    } = {},
    columns,
    customWrapper,
    customRowRenderer
  } = tableConfig

  const isRevealAnimationRequired = useRef(true)

  const TableRowsWrapper = customWrapper?.Component ?? `div`
  const tableRowsWrapperProps = customWrapper?.options ?? {
    className: css.rowsWrapper
  }
  const rowClassName = rowExternalClass ?? css.row
  const isNoDataAvailable = !Array.isArray(data) || data.length === 0

  const rowDefaultStyle = useMemo(() => {
    return rowExternalClass
      ? {}
      : {
        display: `grid`,
        gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`
      }
  }, [rowExternalClass, columns])

  const renderHeadings = useCallback(() => {
    const headingCells = columns.map(({label, labelAdapter, headingClassName, ...restItem}, index) => (
      <div
        className={classnames(css.heading, cellClassName, headingClassName)}
        key={index}
        role="columnheader"
      >
        {labelAdapter
          ? labelAdapter({label} as LabelAdapterArgs)
          : label
        }
      </div>
    ))

    return (
      <>
        <div
          className={classnames(css.rowHeading, css.row, rowClassName)}
          style={rowDefaultStyle}
          role="row"
        >
          {headingCells}
        </div>
      </>
    )
  }, [
    columns,
    rowClassName,
    cellClassName,
    rowDefaultStyle,
  ])

  const renderRows = useCallback((data: D[] | null) => {
    if (!data) return null

    const commonProps = {
      columns,
      onClick,
      rowDefaultStyle,
      cellClassName,
      rowClassName: classnames(rowClassName, css.row, {
        [css.rowClickable]: onClick,
        [css.wrapperReady]: isRevealAnimationRequired
      }),
      data
    }

    if (customRowRenderer) return customRowRenderer(commonProps)

    isRevealAnimationRequired.current = false

    return data.map((rowData, index) => {
      const RowComponent = CustomRow ?? TableRowDefault

      return (
        <RowComponent
          rowData={rowData}
          isOdd={index % 2 !== 0}
          key={index}
          {...commonProps}
        />
      )
    })
  }, [
    cellClassName,
    columns,
    CustomRow,
    onClick,
    rowClassName,
    rowDefaultStyle,
  ])

  return (
    <div
      className={classnames(className, {
        [css.wrapper]: variant === TableVariants.DEFAULT,
        [css.wrapperEmpty]: isNoDataAvailable
      })}
      role="table"
    >
      {!isWithoutHeadings && renderHeadings()}
      {Array.isArray(data) && data.length > 0 && (
        <TableRowsWrapper {...tableRowsWrapperProps}>
          {renderRows(data)}
        </TableRowsWrapper>
      )}
    </div>
  )
}

export default memo(Table)
