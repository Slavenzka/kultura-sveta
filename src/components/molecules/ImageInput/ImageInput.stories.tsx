import ImageInput from 'components/molecules/ImageInput/ImageInput'
import { useState } from 'react'
import { ImageInputValueItem } from 'components/molecules/ImageInput/ImageInput.spec'
import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import { StoriesExportObject } from 'stories/specs/index.spec'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'

function ImageInputDemo ({
  children
}: {
  children: ({
    value,
    onChange
  }: {
    value: ImageInputValueItem[],
    onChange: (value: ImageInputValueItem[]) => void
  }) => JSX.Element}
) {
  const [value, setValue] = useState<ImageInputValueItem[]>([])

  return children({
    value,
    onChange: setValue
  })
}

const list = [
  {
    heading: `Initial state`,
    component: (
      <ImageInputDemo>
        {props => (
          <ImageInput {...props} />
        )}
      </ImageInputDemo>
    ),
    code: (
`
<ImageInputDemo>
  {props => (
    <ImageInput {...props} />
  )}
</ImageInputDemo>
`
    )
  }
]

export const Usage = () => <ComponentRenderTemplateStory list={list} />

export default {
  title: `Components/Molecules/ImageInput`,
  component: ImageInput,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName="ImageInput"
      componentDescription={(
        <>
          Renders controlled image input
        </>
      )}
    />
  )]
} as StoriesExportObject
