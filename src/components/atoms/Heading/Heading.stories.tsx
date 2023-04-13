import Heading from 'components/atoms/Heading/Heading'
import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import { HeadingTypes } from 'components/atoms/Heading/Heading.spec'
import { StoriesExportObject } from 'stories/specs/index.spec'

const list = [
  ...Object.values(HeadingTypes).map(headingType => (
    {
      heading: headingType,
      component: (
        <Heading headingType={headingType} headingStyle={headingType}>
          Heading type {headingType}
        </Heading>
      ),
      code: (
        `
<Heading headingType={${headingType}} headingStyle={${headingType}}>
  Heading type ${headingType}
</Heading>
`
      )
    }
  ))
]

export const Usage = () => <ComponentRenderTemplateStory list={list} />

export default {
  title: `Components/Atoms/Heading`,
  component: Heading,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`Heading`}
      componentDescription={(
        <>
          Renders heading of various types from HeadingTypes enum and provides capability to pass inside any component.
        </>
      )}
      proptypesString={(
`
export enum HeadingTypes {
  H1 = \`h1\`,
  H2 = \`h2\`,
  H3 = \`h3\`,
  H4 = \`h4\`,
}

export interface HeadingProps extends PropsWithClassName {
  /*
  * Optional external class name, that would be added to heading
  */
  className?: string;
  /*
  * Triggers application of className corresponding to HeadingTypes enum
  */
  headingStyle?: HeadingTypes;
  /*
  * Triggers application of tag name from HeadingTypes enum
  */
  headingType?: HeadingTypes;
}
`
      )}
      defaultPropsString={(
`
Heading.defaultProps = {
  type: HeadingTypes.H2
}
`
      )}
    />
  )]
} as StoriesExportObject
