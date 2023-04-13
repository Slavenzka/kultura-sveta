import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import { StoriesExportObject } from 'stories/specs/index.spec'
import { CustomRowRendererProps, TableConfigType } from 'components/molecules/Table/Table.spec'
import Table from 'components/molecules/Table/Table'
import WindowedList from 'components/atoms/WindowedList/WindowedList'
import TableRowDefault, { DEFAULT_ROW_HEIGHT } from 'components/atoms/TableRowDefault/TableRowDefault'
import ScrollableTableWrapper from 'components/organisms/ScrollableTableWrapper/ScrollableTableWrapper'
import { Provider } from 'react-redux'
import { store } from 'store/configureStore'
import css from 'stories/styles/modules/TableRowDefault.module.scss'

const CustomRowsWrapper = ({data, ...props}: CustomRowRendererProps<RowDataType>) => (
  <WindowedList
    height={DEFAULT_ROW_HEIGHT * 5}
    itemCount={18}
    itemSize={DEFAULT_ROW_HEIGHT}
  >
    {({style, index}) => (
      <div style={style}>
        <TableRowDefault
          rowData={data[index]}
          isOdd={index % 2 !== 0}
          {...props}
        />
      </div>
    )}
  </WindowedList>
)

const tableConfig: TableConfigType<RowDataType> = {
  columns: [
    {
      label: `Имя`,
      value: `name`,
    },
    {
      label: `Фамилия`,
      value: `surname`
    },
    {
      label: `Дата рождения`,
      value: `birthday`,
    },
    {
      label: `Админ`,
      value: `isAdmin`,
      adapter: function (rowData) {
        return rowData[this.value as string]
          ? `Админ`
          : `Не админ`
      }
    },
  ]
}

const tableConfigCustomRow: TableConfigType<RowDataType> = {
  columns: [
    {
      label: `Имя`,
      value: `name`,
    },
    {
      label: `Фамилия`,
      value: `surname`
    },
    {
      label: `Дата рождения`,
      value: `birthday`,
    },
    {
      label: `Админ`,
      value: `isAdmin`,
      adapter: function (rowData) {
        return rowData[this.value as string]
          ? `Админ`
          : `Не админ`
      }
    },
  ],
  row: {
    CustomRow: ({rowData, isOdd}) => (
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          backgroundColor: isOdd ? `gray` : `white`
        }}
      >
        <div>
          {(rowData as RowDataType).name + ` ` + (rowData as RowDataType).surname}
        </div>
        <div>
          {` was born on `}
        </div>
        <div>
          {(rowData as RowDataType).birthday}
        </div>
      </div>
    )
  }
}

const tableConfigRowCellCustomClassName: TableConfigType<RowDataType> = {
  columns: [
    {
      label: `Имя`,
      value: `name`,
    },
    {
      label: `Фамилия`,
      value: `surname`
    },
    {
      label: `Дата рождения`,
      value: `birthday`,
    },
    {
      label: `Админ`,
      value: `isAdmin`,
      adapter: function (rowData) {
        return rowData[this.value as string]
          ? `Админ`
          : `Не админ`
      }
    },
  ],
  row: {
    cellClassName: css.highlight
  }
}

const tableConfigCellCustomClassName: TableConfigType<RowDataType> = {
  columns: [
    {
      label: `Имя`,
      value: `name`,
    },
    {
      label: `Фамилия`,
      value: `surname`
    },
    {
      label: `Дата рождения`,
      value: `birthday`,
      className: css.cellBirthday
    },
    {
      label: `Админ`,
      value: `isAdmin`,
      adapter: function (rowData) {
        return rowData[this.value as string]
          ? `Админ`
          : `Не админ`
      }
    },
  ]
}

const tableConfigRowCustomClassName: TableConfigType<RowDataType> = {
  columns: [
    {
      label: `Имя`,
      value: `name`,
    },
    {
      label: `Фамилия`,
      value: `surname`
    },
    {
      label: `Дата рождения`,
      value: `birthday`,
    },
    {
      label: `Админ`,
      value: `isAdmin`,
      adapter: function (rowData) {
        return rowData[this.value as string]
          ? `Админ`
          : `Не админ`
      }
    },
  ],
  row: {
    className: css.highlight
  }
}

const tableConfigWithCellAdapter: TableConfigType<RowDataType> = {
  columns: [
    {
      label: `Имя`,
      value: `name`,
    },
    {
      label: `Фамилия`,
      value: `surname`
    },
    {
      label: `Дата рождения`,
      value: `birthday`,
      adapter: function (rowData) {
        const value = rowData[this.value as string]

        return (
          <button
            onClick={() => alert(`My birthday is ${value}`)}
            style={{width: `100%`, overflow: `hidden`, textOverflow: `ellipsis`}}
          >
            {value}
          </button>
        )
      }
    },
    {
      label: `Админ`,
      value: `isAdmin`,
      adapter: function (rowData) {
        return rowData[this.value as string]
          ? `Админ`
          : `Не админ`
      }
    },
  ]
}

const tableConfigWithCustomRowsRenderer: TableConfigType<RowDataType> = {
  columns: [
    {
      label: `Имя`,
      value: `name`,
    },
    {
      label: `Фамилия`,
      value: `surname`
    },
    {
      label: `Дата рождения`,
      value: `birthday`,
    },
    {
      label: `Админ`,
      value: `isAdmin`,
      adapter: function (rowData) {
        return rowData[this.value as string]
          ? `Админ`
          : `Не админ`
      }
    },
  ],
  customRowRenderer: CustomRowsWrapper
}

interface RowDataType {
  name: string,
  surname: string,
  birthday: string,
  isAdmin: boolean
}

const tableData = [
  {
    name: `Ivan`,
    surname: `Romanov`,
    birthday: new Date(1983, 0, 30).toISOString(),
    isAdmin: true
  },
  {
    name: `Anna`,
    surname: `Romanova`,
    birthday: new Date(1984, 10, 13).toISOString(),
    isAdmin: false
  },
  {
    name: `Fyodor`,
    surname: `Romanov`,
    birthday: new Date(2010, 11, 5).toISOString(),
    isAdmin: false
  },
  {
    name: `Ivan1`,
    surname: `Romanov`,
    birthday: new Date(1983, 0, 30).toISOString(),
    isAdmin: true
  },
  {
    name: `Anna1`,
    surname: `Romanova`,
    birthday: new Date(1984, 10, 13).toISOString(),
    isAdmin: false
  },
  {
    name: `Fyodor1`,
    surname: `Romanov`,
    birthday: new Date(2010, 11, 5).toISOString(),
    isAdmin: false
  },
  {
    name: `Ivan2`,
    surname: `Romanov`,
    birthday: new Date(1983, 0, 30).toISOString(),
    isAdmin: true
  },
  {
    name: `Anna2`,
    surname: `Romanova`,
    birthday: new Date(1984, 10, 13).toISOString(),
    isAdmin: false
  },
  {
    name: `Fyodor2`,
    surname: `Romanov`,
    birthday: new Date(2010, 11, 5).toISOString(),
    isAdmin: false
  },
  {
    name: `Ivan3`,
    surname: `Romanov`,
    birthday: new Date(1983, 0, 30).toISOString(),
    isAdmin: true
  },
  {
    name: `Anna3`,
    surname: `Romanova`,
    birthday: new Date(1984, 10, 13).toISOString(),
    isAdmin: false
  },
  {
    name: `Fyodor3`,
    surname: `Romanov`,
    birthday: new Date(2010, 11, 5).toISOString(),
    isAdmin: false
  },
  {
    name: `Ivan4`,
    surname: `Romanov`,
    birthday: new Date(1983, 0, 30).toISOString(),
    isAdmin: true
  },
  {
    name: `Anna4`,
    surname: `Romanova`,
    birthday: new Date(1984, 10, 13).toISOString(),
    isAdmin: false
  },
  {
    name: `Fyodor4`,
    surname: `Romanov`,
    birthday: new Date(2010, 11, 5).toISOString(),
    isAdmin: false
  },
  {
    name: `Ivan5`,
    surname: `Romanov`,
    birthday: new Date(1983, 0, 30).toISOString(),
    isAdmin: true
  },
  {
    name: `Anna5`,
    surname: `Romanova`,
    birthday: new Date(1984, 10, 13).toISOString(),
    isAdmin: false
  },
  {
    name: `Fyodor5`,
    surname: `Romanov`,
    birthday: new Date(2010, 11, 5).toISOString(),
    isAdmin: false
  },
]

const listDefault = [
  {
    heading: `Simple table w/o customization`,
    component: (
      <Table
        tableConfig={tableConfig}
        data={tableData}
      />
    ),
    code: (
`
const tableConfig: TableConfigType<RowDataType> = {
  columns: [
    {
      label: \`Имя\`,
      value: \`name\`
    },
    {
      label: \`Фамилия\`,
      value: \`surname\`
    },
    {
      label: \`Дата рождения\`,
      value: \`birthday\`
    },
    {
      label: \`Админ\`,
      value: \`isAdmin\`,
      adapter: function (rowData) {
        return rowData[this.value as string]
          ? \`Админ\`
          : \`Не админ\`
      }
    }
  ]
}

<Table
  tableConfig={tableConfig}
  data={tableData}
/>
`
    )
  },
  {
    heading: `Simple table w/ scrollable rows wrapper`,
    component: (
      <Provider store={store}>
        <Table
          tableConfig={{
            customWrapper: {
              Component: ScrollableTableWrapper,
              options: {
                role: `rowgroup`
              }
            },
            ...tableConfig
          }}
          data={tableData}
        />
      </Provider>
    ),
    code: (
`
const tableConfig: TableConfigType<RowDataType> = {
  columns: [
    {
      label: \`Имя\`,
      value: \`name\`
    },
    {
      label: \`Фамилия\`,
      value: \`surname\`
    },
    {
      label: \`Дата рождения\`,
      value: \`birthday\`
    },
    {
      label: \`Админ\`,
      value: \`isAdmin\`,
      adapter: function (rowData) {
        return rowData[this.value as string]
          ? \`Админ\`
          : \`Не админ\`
      }
    }
  ]
}

<Provider store={store}>
  <Table
    tableConfig={{
      customWrapper: {
        Component: ScrollableTableWrapper,
        options: {
          role: \`rowgroup\`
        }
      },
      ...tableConfig
    }}
    data={tableData}
  />
</Provider>
`
    )
  },
  {
    heading: `Simple table w/ cell adapter`,
    component: (
      <Table
        tableConfig={tableConfigWithCellAdapter}
        data={tableData}
      />
    ),
    code: (
`
const tableConfigWithCellAdapter: TableConfigType<RowDataType> = {
  columns: [
    {
      label: \`Имя\`,
      value: \`name\`
    },
    {
      label: \`Фамилия\`,
      value: \`surname\`
    },
    {
      label: \`Дата рождения\`,
      value: \`birthday\`,
      adapter: function (rowData) {
        const value = rowData[this.value as string]
        
        return (
          <button
            onClick={() => alert(\`My birthday is {value}\`)}
          >
            {value}
          </button>
        )
      }
    },
    {
      label: \`Админ\`,
      value: \`isAdmin\`,
      adapter: function (rowData) {
        return rowData[this.value as string]
          ? \`Админ\`
          : \`Не админ\`
      }
    }
  ]
}

<Table
  tableConfig={tableConfigWithCellAdapter}
  data={tableData}
/>
`
    )
  },
  {
    heading: `Simple table w/ custom row click handler`,
    component: (
      <Table
        tableConfig={{
          row: {
            onClick: rowData => alert(`Clicked row ${(rowData as RowDataType).name}`)
          },
          ...tableConfigWithCellAdapter
        }}
        data={tableData}
      />
    ),
    code: (
`
const tableConfigWithCellAdapter: TableConfigType<RowDataType> = {
  columns: [
    {
      label: \`Имя\`,
      value: \`name\`
    },
    {
      label: \`Фамилия\`,
      value: \`surname\`
    },
    {
      label: \`Дата рождения\`,
      value: \`birthday\`,
      adapter: function (rowData) {
        const value = rowData[this.value as string]

        return (
          <button
            onClick={() => alert(\`My birthday is {value}\`)}
            style={{width: \`100%\`, overflow: \`hidden\`, textOverflow: \`ellipsis\`}}
          >
            {value}
          </button>
        )
      }
    },
    {
      label: \`Админ\`,
      value: \`isAdmin\`,
      adapter: function (rowData) {
        return rowData[this.value as string]
          ? \`Админ\`
          : \`Не админ\`
      }
    }
  ]
}

<Table
  tableConfig={{
    row: {
      onClick: rowData => alert(\`Clicked row {(rowData as RowDataType).name}\`)
    },
    ...tableConfigWithCellAdapter
  }}
  data={tableData}
/>
`
    )
  },
  {
    heading: `Table w/ custom rows renderer`,
    component: (
      <Table
        tableConfig={tableConfigWithCustomRowsRenderer}
        data={tableData}
      />
    ),
    code: (
`
const CustomRowsWrapper = ({data, ...props}: CustomRowRendererProps<RowDataType>) => (
  <WindowedList
    height={DEFAULT_ROW_HEIGHT * 5}
    itemCount={18}
    itemSize={DEFAULT_ROW_HEIGHT}
  >
    {({style, index}) => (
      <div style={style}>
        <TableRowDefault
          rowData={data[index]}
          isOdd={index % 2 === 0}
          {...props}
        />
      </div>
    )}
  </WindowedList>
)

const tableConfigWithCustomRowsRenderer: TableConfigType<RowDataType> = {
  columns: [
    {
      label: \`Имя\`,
      value: \`name\`
    },
    {
      label: \`Фамилия\`,
      value: \`surname\`
    },
    {
      label: \`Дата рождения\`,
      value: \`birthday\`
    },
    {
      label: \`Админ\`,
      value: \`isAdmin\`,
      adapter: function (rowData) {
        return rowData[this.value as string]
          ? \`Админ\`
          : \`Не админ\`
      }
    }
  ],
  customRowRenderer: CustomRowsWrapper
}

<Table
  tableConfig={tableConfigWithCustomRowsRenderer}
  data={tableData}
/>
`
    )
  },
  {
    heading: `Simple table w/ custom column cells class name`,
    component: (
      <Table
        tableConfig={tableConfigCellCustomClassName}
        data={tableData}
      />
    ),
    code: (
      `
const tableConfigCellCustomClassName: TableConfigType<RowDataType> = {
  columns: [
    {
      label: \`Имя\`,
      value: \`name\`
    },
    {
      label: \`Фамилия\`,
      value: \`surname\`
    },
    {
      label: \`Дата рождения\`,
      value: \`birthday\`,
      className: css.cellBirthday
    },
    {
      label: \`Админ\`,
      value: \`isAdmin\`,
      adapter: function (rowData) {
        return rowData[this.value as string]
          ? \`Админ\`
          : \`Не админ\`
      }
    }
  ]
}

<Table
  tableConfig={tableConfigCellCustomClassName}
  data={tableData}
/>
`
    )
  },
  {
    heading: `Simple table w/ custom row class name`,
    component: (
      <Table
        tableConfig={tableConfigRowCustomClassName}
        data={tableData}
      />
    ),
    code: (
      `
const tableConfigRowCustomClassName: TableConfigType<RowDataType> = {
  columns: [
    {
      label: \`Имя\`,
      value: \`name\`
    },
    {
      label: \`Фамилия\`,
      value: \`surname\`
    },
    {
      label: \`Дата рождения\`,
      value: \`birthday\`
    },
    {
      label: \`Админ\`,
      value: \`isAdmin\`,
      adapter: function (rowData) {
        return rowData[this.value as string]
          ? \`Админ\`
          : \`Не админ\`
      }
    }
  ],
  row: {
    className: css.highlight
  }
}

<Table
  tableConfig={tableConfigRowCustomClassName}
  data={tableData}
/>
`
    )
  },
  {
    heading: `Simple table w/ custom row cell class name`,
    component: (
      <Table
        tableConfig={tableConfigRowCellCustomClassName}
        data={tableData}
      />
    ),
    code: (
`
const tableConfigRowCustomClassName: TableConfigType<RowDataType> = {
  columns: [
    {
      label: \`Имя\`,
      value: \`name\`
    },
    {
      label: \`Фамилия\`,
      value: \`surname\`
    },
    {
      label: \`Дата рождения\`,
      value: \`birthday\`
    },
    {
      label: \`Админ\`,
      value: \`isAdmin\`,
      adapter: function (rowData) {
        return rowData[this.value as string]
          ? \`Админ\`
          : \`Не админ\`
      }
    }
  ],
  row: {
    className: css.highlight
  }
}

<Table
  tableConfig={tableConfigRowCustomClassName}
  data={tableData}
/>
`
    )
  },
  {
    heading: `Simple table w/ custom rows`,
    component: (
      <Table
        tableConfig={tableConfigCustomRow}
        data={tableData}
      />
    ),
    code: (
`
const tableConfigCustomRow: TableConfigType<RowDataType> = {
  columns: [
    {
      label: \`Имя\`,
      value: \`name\`
    },
    {
      label: \`Фамилия\`,
      value: \`surname\`
    },
    {
      label: \`Дата рождения\`,
      value: \`birthday\`
    },
    {
      label: \`Админ\`,
      value: \`isAdmin\`,
      adapter: function (rowData) {
        return rowData[this.value as string]
          ? \`Админ\`
          : \`Не админ\`
      }
    }
  ],
  row: {
    CustomRow: ({rowData, isOdd}) => (
      <div
        style={{
          display: \`flex\`,
          justifyContent: \`space-between\`,
          backgroundColor: isOdd ? \`gray\` : \`white\`
        }}
      >
        <div>
          {(rowData as RowDataType).name + \` \` + (rowData as RowDataType).surname}
        </div>
        <div>
          {\` was born on \`}
        </div>
        <div>
          {(rowData as RowDataType).birthday}
        </div>
      </div>
    )
  }
}

<Table
  tableConfig={tableConfigCustomRow}
  data={tableData}
/>
`
    )
  },
]

export const VariantDefault = () => <ComponentRenderTemplateStory list={listDefault} />

export default {
  title: `Components/Molecules/Table`,
  component: Table,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName="Table"
      componentDescription={(
        <>
          Renders customizable table. Not compatible with standard html table layout
          due to inner wrappers for scrolling customization and other purposes.
        </>
      )}
      proptypesString={(
`
export enum TableVariants {
  DEFAULT = \`DEFAULT\`,
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

export type CustomRowRendererProps<D> = Omit<TableRowDefaultProps<D>, \`rowData\` | \`isOdd\`> & {
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
`
      )}
    />
  )]
} as StoriesExportObject
