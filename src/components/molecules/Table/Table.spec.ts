import { ButtonClickHandlerType, PropsWithClassName } from 'specs/global.spec'
import { ElementType, ReactNode } from 'react'
import { TableRowDefaultProps } from 'components/atoms/TableRowDefault/TableRowDefault.spec'

export enum TableVariants {
  DEFAULT = `DEFAULT`,
}

export interface LabelAdapterArgs {
  /*
  * Custom label content
  */
  label: string | JSX.Element;
}

export interface CellAdapterProps {
  isOdd: boolean
}

export type CustomRowRendererProps<D> = Omit<TableRowDefaultProps<D>, `rowData` | `isOdd`> & {
  data: D[]
}

export interface TableColumnItemType {
  /*
  * Class name for content cells in specific column
  */
  className?: string;
  /*
  * Heading for the column
  */
  label?: string | JSX.Element;
  /*
  * Contains the key of the data property from row data object to be used for cell generation
  */
  value?: string;
  /*
  * Class name for heading cells specifically
  */
  headingClassName?: string;
  /*
  * Replaces the content of table cell heading with custom entity
  */
  labelAdapter?: ({label}: LabelAdapterArgs) => ReactNode;
  /*
  * Replaces the content of table cell with custom entity
  */
  adapter?: <D>(rowData: D, {isOdd}: CellAdapterProps) => ReactNode;
}

export interface TableConfigType<D> {
  /*
  * Configuration of rows
  */
  row?: {
    /*
    * Row class name for every row in the table including headings. Default row styling
    * (display: grid, gridTemplateColumns: repeat(columnsQty, minmax(0, 1fr)) would be applied
    * if no className provided
    */
    className?: string;
    /*
    * Additional class name for every cell in the table for uniform styling of paddings, borders etc.
    */
    cellClassName?: string;
    /**
    * Click handler for row content. Triggers if evt.target.dataset.tableCell is existing to exclude
    * active elements inside cells etc.
    */
    onClick?: ButtonClickHandlerType;
    /*
    * React component that will be rendered instead of TableRowDefault with all TableRowDefault props. Table will be rendered
    * with divs instead of valid HTML table structure if this prop is provided.
    */
    CustomRow?: (props: TableRowDefaultProps<D>) => JSX.Element;
  };
  /*
  * Configuration of table headings, order and scope of data to be rendered in table and description
  * of custom elements and their logic to be rendered inside cell instead of simple strings with values
  */
  columns: TableColumnItemType[];
  /*
  * Additional wrapper for table rows, e.g. scrollable wrapper
  */
  customWrapper?: {
    Component: ElementType,
    options?: {
      [key: string]: string
    }
  }
  /*
  * Custom render function for all rows that receives the default row props
  */
  customRowRenderer?: (props: CustomRowRendererProps<D>) => JSX.Element | JSX.Element[] | null
}

export interface TableProps<D extends any[]> extends PropsWithClassName {
  /*
  * Main source of table customization and logic provision
  */
  tableConfig: TableConfigType<D[number]>;
  /*
  * Applies style presets
  */
  variant?: string;
  /*
  * An array of objects providing data for each row
  */
  data: D | null;
  /*
  * A flag to disable render of table headings in case of design requirements
  */
  isWithoutHeadings?: boolean;
}
