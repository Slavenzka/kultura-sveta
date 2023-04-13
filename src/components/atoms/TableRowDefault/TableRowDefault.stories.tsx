import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import TableRowDefault from 'components/atoms/TableRowDefault/TableRowDefault'
import { StoriesExportObject } from 'stories/specs/index.spec'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import { TableColumnItemType } from 'components/molecules/Table/Table.spec'
import css from 'stories/styles/modules/TableRowDefault.module.scss'

const defaultRowConfig: TableColumnItemType[] = [
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

const defaultRowConfigCustomClassName: TableColumnItemType[] = [
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

interface RowDataType {
  name: string,
  surname: string,
  birthday: string,
  isAdmin: boolean
}

const rowData: RowDataType = {
  name: `Ivan`,
  surname: `Romanov`,
  birthday: new Date(1983, 0, 30).toISOString(),
  isAdmin: true
}

const list = [
  {
    heading: `Even row style`,
    component: (
      <TableRowDefault
        rowData={rowData}
        rowDefaultStyle={{
          gridTemplateColumns: `repeat(${defaultRowConfig.length}, minmax(0, 1fr))`
        }}
        columns={defaultRowConfig}
      />
    ),
    code: (
`
const defaultRowConfig: TableColumnItemType[] = [
  {
    label: \`Имя\`,
    value: \`name\`,
    adapter: function (rowData) {
      return (
        <>
          {rowData[this.value as string]}
          <button onClick={() => alert(\`Hahaha clicked\`)}>
            Click me
          </button>
        </>
      )
    }
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

<TableRowDefault
  "rowData={rowData}"
  columns={defaultRowConfig}
  rowDefaultStyle={{
    "gridTemplateColumns: \`repeat({defaultRowConfig.length}, minmax(0, 1fr))\`"
  }}
/>
`
    )
  },
  {
    heading: `Odd row style`,
    component: (
      <TableRowDefault
        rowData={rowData}
        columns={defaultRowConfig}
        rowDefaultStyle={{
          gridTemplateColumns: `repeat(${defaultRowConfig.length}, minmax(0, 1fr))`
        }}
        isOdd
      />
    ),
    code: (
`
<TableRowDefault
  rowData={rowData}
  columns={defaultRowConfig}
  rowDefaultStyle={{
    gridTemplateColumns: \`repeat(${defaultRowConfig.length}, minmax(0, 1fr))\`
  }}
  isOdd
/>
`
    )
  },
  {
    heading: `Custom cell class name`,
    component: (
      <TableRowDefault
        rowData={rowData}
        columns={defaultRowConfigCustomClassName}
        rowDefaultStyle={{
          gridTemplateColumns: `repeat(${defaultRowConfig.length}, minmax(0, 1fr))`
        }}
        isOdd
      />
    ),
    code: (
`
const defaultRowConfigCustomClassName: TableColumnItemType[] = [
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

<TableRowDefault
  "rowData={rowData}"
  columns={defaultRowConfigCustomClassName}
  rowDefaultStyle={{
    "gridTemplateColumns: repeat({defaultRowConfig.length}, minmax(0, 1fr))"
  }}
  isOdd
/>
`
    )
  },
  {
    heading: `Row click handler`,
    component: (
      <TableRowDefault
        rowData={rowData}
        columns={defaultRowConfig}
        rowDefaultStyle={{
          gridTemplateColumns: `repeat(${defaultRowConfig.length}, minmax(0, 1fr))`
        }}
        onClick={evt => {
          alert(`Clicked row for ${(evt as RowDataType).name}`)
        }}
      />
    ),
    code: (
      `
<TableRowDefault
  rowData={rowData}
  columns={defaultRowConfig}
  rowDefaultStyle={{
    gridTemplateColumns: \`repeat({defaultRowConfig.length}, minmax(0, 1fr))\`
  }}
  onClick={evt => {
    alert(\`Clicked row for {(evt as RowDataType).name}\`)
  }}
/>
`
    )
  },
]

export const VariantDefault = () => <ComponentRenderTemplateStory list={list} />

export default {
  title: `Components/Atoms/TableRowDefault`,
  component: TableRowDefault,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName="TableRowDefault"
      componentDescription={(
        <>
          Renders table row with default styling
        </>
      )}
    />
  )]
} as StoriesExportObject
