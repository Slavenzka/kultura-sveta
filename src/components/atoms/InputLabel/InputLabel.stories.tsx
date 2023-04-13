import InputLabel from 'components/atoms/InputLabel/InputLabel'
import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import { StoriesExportObject } from 'stories/specs/index.spec'
import { InputLabelVariants } from 'components/atoms/InputLabel/InputLabel.spec'

const listDefault = [
  {
    heading: `Default state`,
    component: (
      <InputLabel label={`Label text`}>
        <div>Some wrapped component</div>
      </InputLabel>
    ),
    code: (
`
<InputLabel label={\`Label text\`}>
  <span>Some wrapped component</span>
</InputLabel>
`
    )
  },
  {
    heading: `Required state`,
    component: (
      <InputLabel label={`Label text`} isRequired>
        <div>Some wrapped component</div>
      </InputLabel>
    ),
    code: (
`
<InputLabel label={\`Label text\`} isRequired>
  <span>Some wrapped component</span>
</InputLabel>
`
    )
  },
  {
    heading: `Wrapper custom tag name`,
    component: (
      <InputLabel label={`Label text`} TagName={`div`}>
        <div>Some wrapped component</div>
      </InputLabel>
    ),
    code: (
`
<InputLabel label={\`Label text\`}  TagName={\`div\`}>
  <span>Some wrapped component</span>
</InputLabel>
`
    )
  },
  {
    heading: `Non-string label prop value`,
    component: (
      <InputLabel
        label={(
          <>
            <span style={{color: `green`}}>Label text</span>
            <span style={{color: `red`}}>Additional element</span>
          </>
        )}
      >
        <div>Some wrapped component</div>
      </InputLabel>
    ),
    code: (
`
<InputLabel
  label={(
    <>
      <span style={{color: \`green\`}}>Label text</span>
      <span style={{color: \`red\`}}>Additional element</span>
    </>
  )}
>
  <div>Some wrapped component</div>
</InputLabel>
`
    )
  },
]

const listBlack = [
  {
    heading: `Default state`,
    component: (
      <InputLabel
        label={`Label text`}
        variant={InputLabelVariants.DARK}
      >
        <div>Some wrapped component</div>
      </InputLabel>
    ),
    code: (
`
<InputLabel
  label={\`Label text\`}
  variant={InputLabelVariants.DARK}
>
  <span>Some wrapped component</span>
</InputLabel>
`
    )
  },
  {
    heading: `Required state`,
    component: (
      <InputLabel
        label={`Label text`}
        variant={InputLabelVariants.DARK}
        isRequired
      >
        <div>Some wrapped component</div>
      </InputLabel>
    ),
    code: (
`
<InputLabel
  label={\`Label text\`}
  variant={InputLabelVariants.DARK}
  isRequired
>
  <span>Some wrapped component</span>
</InputLabel>
`
    )
  },
  {
    heading: `Wrapper custom tag name`,
    component: (
      <InputLabel
        label={`Label text`}
        TagName={`div`}
        variant={InputLabelVariants.DARK}
      >
        <div>Some wrapped component</div>
      </InputLabel>
    ),
    code: (
`
<InputLabel
  label={\`Label text\`} 
  TagName={\`div\`}
  variant={InputLabelVariants.DARK}
>
  <span>Some wrapped component</span>
</InputLabel>
`
    )
  },
  {
    heading: `Non-string label prop value`,
    component: (
      <InputLabel
        label={(
          <>
            <span style={{color: `green`}}>Label text</span>
            <span style={{color: `red`}}>Additional element</span>
          </>
        )}
        variant={InputLabelVariants.DARK}
      >
        <div>Some wrapped component</div>
      </InputLabel>
    ),
    code: (
`
<InputLabel
  label={(
    <>
      <span style={{color: \`green\`}}>Label text</span>
      <span style={{color: \`red\`}}>Additional element</span>
    </>
  )}
  variant={InputLabelVariants.DARK}
>
  <div>Some wrapped component</div>
</InputLabel>
`
    )
  },
]

const listImageDefault = [
  {
    heading: `Initial state`,
    component: (
      <InputLabel
        label={(
          <>
            <span>Some image input label</span>
            <span>Additional content with acceptable file extensions or something</span>
          </>
        )}
        variant={InputLabelVariants.IMAGE_DEFAULT}
      >
        {`Input component is usually rendered here`}
      </InputLabel>
    ),
    code: (
`
<InputLabel
  label={(
    <>
      <span>Some image input label</span>
      <span>Additional content with acceptable file extensions or something</span>
    </>
  )}
  variant={InputLabelVariants.IMAGE_DEFAULT}
>
  {\`Input component is usually rendered here\`}
</InputLabel>
`
    )
  },
  {
    heading: `Disabled state`,
    component: (
      <InputLabel
        label={(
          <>
            <span>Some image input label</span>
            <span>Additional content with acceptable file extensions or something</span>
          </>
        )}
        variant={InputLabelVariants.IMAGE_DEFAULT}
        isDisabled
      >
        {`Input component is usually rendered here`}
      </InputLabel>
    ),
    code: (
`
<InputLabel
  label={(
    <>
      <span>Some image input label</span>
      <span>Additional content with acceptable file extensions or something</span>
    </>
  )}
  variant={InputLabelVariants.IMAGE_DEFAULT}
  isDisabled
>
  {\`Input component is usually rendered here\`}
</InputLabel>
`
    )
  },  {
    heading: `Error state`,
    component: (
      <InputLabel
        label={(
          <>
            <span>Some image input label</span>
            <span>Additional content with acceptable file extensions or something</span>
          </>
        )}
        variant={InputLabelVariants.IMAGE_DEFAULT}
        isError
      >
        {`Input component is usually rendered here`}
      </InputLabel>
    ),
    code: (
`
<InputLabel
  label={(
    <>
      <span>Some image input label</span>
      <span>Additional content with acceptable file extensions or something</span>
    </>
  )}
  variant={InputLabelVariants.IMAGE_DEFAULT}
  isError
>
  {\`Input component is usually rendered here\`}
</InputLabel>
`
    )
  },
]

export const VariantDefault = () => <ComponentRenderTemplateStory list={listDefault} />
export const VariantDark = () => <ComponentRenderTemplateStory list={listBlack} />
export const VariantImageDefault = () => <ComponentRenderTemplateStory list={listImageDefault} />

export default {
  title: `Components/Atoms/InputLabel`,
  component: InputLabel,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`InputLabel`}
      componentDescription={(
        <>
          Renders a wrapper for child component that behaves like label if
          other tag type is not specified via props.
        </>
      )}
      proptypesString={(
`
  export enum InputLabelVariants {
  DEFAULT = \`DEFAULT\`,
  DARK = \`DARK\`
}

export interface InputLabelProps extends PropsWithClassName {
  /*
  * External class name for label span containing text
  */
  classNameLabel?: string;
  /*
  * Toggles application of "required" styles
  */
  isRequired?: boolean;
  /*
  * Toggles application of "required" styles
  */
  label?: string | ReactNode;
  /*
  * Toggles style presets
  */
  variant?: InputLabelVariants;
  TagName?: ElementType
}
`
      )}
      defaultPropsString={(
`
InputLabel.defaultProps = {
  variant: InputLabelVariants.DEFAULT,
  TagName: \`label\`
}
`
      )}
    />
  )]
} as StoriesExportObject
