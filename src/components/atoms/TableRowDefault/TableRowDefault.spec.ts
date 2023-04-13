import { CSSProperties } from 'react'
import { TableColumnItemType } from 'components/molecules/Table/Table.spec'
import { ButtonClickHandlerType } from 'specs/global.spec'

export interface TableRowDefaultProps<D> {
  /*
  * External class name for each cell
  */
  cellClassName?: string;
  /*
  * Config of every row
  */
  columns: TableColumnItemType[];
  /*
  * Toggles specific styles for odd rows, e.g. special background color
  */
  isOdd?: boolean;
  /*
  * Row click handler is applied to row wrapper and triggers application of special clickable row styles
  */
  onClick?: ButtonClickHandlerType;
  /*
  * External class name for row wrapper
  */
  rowClassName?: string;
  /*
  * Data for current row
  */
  rowData: D;
  /*
  * Default style for the row depends upon the number of columns to form basic CSS grid
  */
  rowDefaultStyle?: CSSProperties;
}
