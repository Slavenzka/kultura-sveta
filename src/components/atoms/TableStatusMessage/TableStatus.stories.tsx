import TableStatusMessage from 'components/atoms/TableStatusMessage/TableStatus'
import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import { StoriesExportObject } from 'stories/specs/index.spec'
import { Provider } from 'react-redux'
import { store } from 'store/configureStore'
import css from 'stories/styles/modules/TableStatusMessage.module.scss'

const list = [
  {
    heading: `API loading initial`,
    component: (
      <TableStatusMessage isLoading />
    ),
    code: (
`
<TableStatusMessage isLoading />
`
    )
  },
  {
    heading: `API loading with existing data`,
    component: (
      <TableStatusMessage
        dataLength={10}
        isLoading
      />
    ),
    code: (
`
<TableStatusMessage
  dataLength={10}
  isLoading
/>
`
    )
  },
  {
    heading: `API error`,
    component: (
      <TableStatusMessage errorMessage={`Some message providing user friendly description of api error`} />
    ),
    code: (
`
<TableStatusMessage
  errorMessage={\`Some message providing user friendly description of api error\`}
/>
`
    )
  },
  {
    heading: `Empty data`,
    component: (
      <TableStatusMessage
        dataLength={0}
        emptyDataMessage={`Some message providing user friendly statement that no data is available`}
      />
    ),
    code: (
`
<TableStatusMessage
  dataLength={0}
  emptyDataMessage={\`Some message providing user friendly statement that no data is available\`}
/>
`
    )
  },
  {
    heading: `Additional class name`,
    component: (
      <TableStatusMessage
        className={css.wrapper}
        isLoading
      />
    ),
    code: (
`
.wrapper {
  height: 25rem;
  background-color: lightcoral;
}

<TableStatusMessage
  className={css.wrapper}
  isLoading
/>
`
    )
  },
]

export const Usage = () => (
  <Provider store={store}>
    <ComponentRenderTemplateStory list={list} />
  </Provider>
)

export default {
  title: `Components/Atoms/TableStatusMessage`,
  component: TableStatusMessage,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName="TableStatusMessage"
      componentDescription={(
        <>
          Renders one of three possible table statuses: api loading, api error, empty data
        </>
      )}
      proptypesString={(
`
export interface TableStatusProps extends PropsWithClassName {
  errorMessage?: string,
  emptyDataMessage?: string,
  isLoading?: boolean,
  dataLength?: number | null
}
`
      )}
    />
  )]
} as StoriesExportObject
