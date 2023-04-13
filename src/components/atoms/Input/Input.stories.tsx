import { useState } from 'react'
import Input from 'components/atoms/Input/Input'
import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import { StoriesExportObject } from 'stories/specs/index.spec'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import { FormElementErrorVariants } from 'components/atoms/FormElementError/FormElementError.spec'
import { InputHeights } from 'components/atoms/Input/Input.spec'
import InputCheckbox from 'components/atoms/Input/InputCheckbox/InputCheckbox'

function InputController ({children}: {children: ({value, setValue}: {value: string, setValue: (value: string) => void}) => JSX.Element}) {
  const [value, setValue] = useState(``)

  return children({value, setValue})
}

const listDefaultRegular = [
  {
    heading: `Default state`,
    component: (
      <InputController>
        {({value, setValue}) => (
          <Input
            value={value}
            onChange={evt => setValue((evt.target as HTMLInputElement).value)}
            label={`Some text label`}
            name={`Test input`}
          />
        )}
      </InputController>
    ),
    code: (
`
<InputController>
  {({value, setValue}) => (
    <Input
      value={value}
      onChange={evt => setValue((evt.target as HTMLInputElement).value)}
      label={\`Some text label\`}
      name={\`Test input\`}
    />
  )}
</InputController>
`
    )
  },
  {
    heading: `Error state w/ string error`,
    component: (
      <InputController>
        {({value, setValue}) => (
          <Input
            value={value}
            onChange={evt => setValue((evt.target as HTMLInputElement).value)}
            label={`Some text label`}
            name={`Test input`}
            error={`Error message with some ridiculously long description `}
          />
        )}
      </InputController>
    ),
    code: (
`
<InputController>
  {({value, setValue}) => (
    <Input
      value={value}
      onChange={evt => setValue((evt.target as HTMLInputElement).value)}
      label={\`Some text label\`}
      name={\`Test input\`}
      error={\`Error message with some ridiculously long description \`}
    />
  )}
</InputController>
`
    )
  },
  {
    heading: `Error state w/ icon error`,
    component: (
      <InputController>
        {({value, setValue}) => (
          <Input
            value={value}
            onChange={evt => setValue((evt.target as HTMLInputElement).value)}
            label={`Some text label`}
            name={`Test input`}
            error={`Error message with some ridiculously long description `}
            errorVariant={FormElementErrorVariants.ICON}
          />
        )}
      </InputController>
    ),
    code: (
`
<InputController>
  {({value, setValue}) => (
    <Input
      value={value}
      onChange={evt => setValue((evt.target as HTMLInputElement).value)}
      label={\`Some text label\`}
      name={\`Test input\`}
      error={\`Error message with some ridiculously long description \`}
      errorVariant={FormElementErrorVariants.ICON}
    />
  )}
</InputController>
`
    )
  },
  {
    heading: `Disabled state`,
    component: (
      <InputController>
        {({value, setValue}) => (
          <Input
            value={value}
            onChange={evt => setValue((evt.target as HTMLInputElement).value)}
            label={`Some text label`}
            name={`Test input`}
            isDisabled
          />
        )}
      </InputController>
    ),
    code: (
`
<InputController>
  {({value, setValue}) => (
    <Input
      value={value}
      onChange={evt => setValue((evt.target as HTMLInputElement).value)}
      label={\`Some text label\`}
      name={\`Test input\`}
      isDisabled
    />
  )}
</InputController>
`
    )
  },
  {
    heading: `Loading state`,
    component: (
      <InputController>
        {({value, setValue}) => (
          <Input
            value={value}
            onChange={evt => setValue((evt.target as HTMLInputElement).value)}
            label={`Some text label`}
            name={`Test input`}
            isLoading
          />
        )}
      </InputController>
    ),
    code: (
`
<InputController>
  {({value, setValue}) => (
    <Input
      value={value}
      onChange={evt => setValue((evt.target as HTMLInputElement).value)}
      label={\`Some text label\`}
      name={\`Test input\`}
      isLoading
    />
  )}
</InputController>
`
    )
  },
]
const listDefaultSmall = [
  {
    heading: `Default state`,
    component: (
      <InputController>
        {({value, setValue}) => (
          <Input
            value={value}
            onChange={evt => setValue((evt.target as HTMLInputElement).value)}
            label={`Some text label`}
            name={`Test input`}
            height={InputHeights.SMALL}
          />
        )}
      </InputController>
    ),
    code: (
`
<InputController>
  {({value, setValue}) => (
    <Input
      value={value}
      onChange={evt => setValue((evt.target as HTMLInputElement).value)}
      label={\`Some text label\`}
      name={\`Test input\`}
      height={InputHeights.SMALL}
    />
  )}
</InputController>
`
    )
  },
  {
    heading: `Error state w/ string error`,
    component: (
      <InputController>
        {({value, setValue}) => (
          <Input
            value={value}
            onChange={evt => setValue((evt.target as HTMLInputElement).value)}
            label={`Some text label`}
            name={`Test input`}
            error={`Error message with some ridiculously long description `}
            height={InputHeights.SMALL}
          />
        )}
      </InputController>
    ),
    code: (
`
<InputController>
  {({value, setValue}) => (
    <Input
      value={value}
      onChange={evt => setValue((evt.target as HTMLInputElement).value)}
      label={\`Some text label\`}
      name={\`Test input\`}
      error={\`Error message with some ridiculously long description \`}
      height={InputHeights.SMALL}
    />
  )}
</InputController>
`
    )
  },
  {
    heading: `Error state w/ icon error`,
    component: (
      <InputController>
        {({value, setValue}) => (
          <Input
            value={value}
            onChange={evt => setValue((evt.target as HTMLInputElement).value)}
            label={`Some text label`}
            name={`Test input`}
            error={`Error message with some ridiculously long description `}
            errorVariant={FormElementErrorVariants.ICON}
            height={InputHeights.SMALL}
          />
        )}
      </InputController>
    ),
    code: (
`
<InputController>
  {({value, setValue}) => (
    <Input
      value={value}
      onChange={evt => setValue((evt.target as HTMLInputElement).value)}
      label={\`Some text label\`}
      name={\`Test input\`}
      error={\`Error message with some ridiculously long description \`}
      errorVariant={FormElementErrorVariants.ICON}
      height={InputHeights.SMALL}
    />
  )}
</InputController>
`
    )
  },
  {
    heading: `Disabled state`,
    component: (
      <InputController>
        {({value, setValue}) => (
          <Input
            value={value}
            onChange={evt => setValue((evt.target as HTMLInputElement).value)}
            label={`Some text label`}
            name={`Test input`}
            height={InputHeights.SMALL}
            isDisabled
          />
        )}
      </InputController>
    ),
    code: (
`
<InputController>
  {({value, setValue}) => (
    <Input
      value={value}
      onChange={evt => setValue((evt.target as HTMLInputElement).value)}
      label={\`Some text label\`}
      name={\`Test input\`}
      height={InputHeights.SMALL}
      isDisabled
    />
  )}
</InputController>
`
    )
  },
  {
    heading: `Loading state`,
    component: (
      <InputController>
        {({value, setValue}) => (
          <Input
            value={value}
            onChange={evt => setValue((evt.target as HTMLInputElement).value)}
            label={`Some text label`}
            name={`Test input`}
            height={InputHeights.SMALL}
            isLoading
          />
        )}
      </InputController>
    ),
    code: (
`
<InputController>
  {({value, setValue}) => (
    <Input
      value={value}
      onChange={evt => setValue((evt.target as HTMLInputElement).value)}
      label={\`Some text label\`}
      name={\`Test input\`}
      height={InputHeights.SMALL}
      isLoading
    />
  )}
</InputController>
`
    )
  },
]

const listDefaultLarge = [
  {
    heading: `Default state`,
    component: (
      <InputController>
        {({value, setValue}) => (
          <Input
            value={value}
            onChange={evt => setValue((evt.target as HTMLInputElement).value)}
            label={`Some text label`}
            name={`Test input`}
            height={InputHeights.LARGE}
          />
        )}
      </InputController>
    ),
    code: (
`
<InputController>
  {({value, setValue}) => (
    <Input
      value={value}
      onChange={evt => setValue((evt.target as HTMLInputElement).value)}
      label={\`Some text label\`}
      name={\`Test input\`}
      height={InputHeights.LARGE}
    />
  )}
</InputController>
`
    )
  },
  {
    heading: `Error state w/ string error`,
    component: (
      <InputController>
        {({value, setValue}) => (
          <Input
            value={value}
            onChange={evt => setValue((evt.target as HTMLInputElement).value)}
            label={`Some text label`}
            name={`Test input`}
            error={`Error message with some ridiculously long description `}
            height={InputHeights.LARGE}
          />
        )}
      </InputController>
    ),
    code: (
`
<InputController>
  {({value, setValue}) => (
    <Input
      value={value}
      onChange={evt => setValue((evt.target as HTMLInputElement).value)}
      label={\`Some text label\`}
      name={\`Test input\`}
      error={\`Error message with some ridiculously long description \`}
      height={InputHeights.LARGE}
    />
  )}
</InputController>
`
    )
  },
  {
    heading: `Error state w/ icon error`,
    component: (
      <InputController>
        {({value, setValue}) => (
          <Input
            value={value}
            onChange={evt => setValue((evt.target as HTMLInputElement).value)}
            label={`Some text label`}
            name={`Test input`}
            error={`Error message with some ridiculously long description `}
            errorVariant={FormElementErrorVariants.ICON}
            height={InputHeights.LARGE}
          />
        )}
      </InputController>
    ),
    code: (
`
<InputController>
  {({value, setValue}) => (
    <Input
      value={value}
      onChange={evt => setValue((evt.target as HTMLInputElement).value)}
      label={\`Some text label\`}
      name={\`Test input\`}
      error={\`Error message with some ridiculously long description \`}
      errorVariant={FormElementErrorVariants.ICON}
      height={InputHeights.LARGE}
    />
  )}
</InputController>
`
    )
  },
  {
    heading: `Disabled state`,
    component: (
      <InputController>
        {({value, setValue}) => (
          <Input
            value={value}
            onChange={evt => setValue((evt.target as HTMLInputElement).value)}
            label={`Some text label`}
            name={`Test input`}
            height={InputHeights.LARGE}
            isDisabled
          />
        )}
      </InputController>
    ),
    code: (
`
<InputController>
  {({value, setValue}) => (
    <Input
      value={value}
      onChange={evt => setValue((evt.target as HTMLInputElement).value)}
      label={\`Some text label\`}
      name={\`Test input\`}
      height={InputHeights.LARGE}
      isDisabled
    />
  )}
</InputController>
`
    )
  },
  {
    heading: `Loading state`,
    component: (
      <InputController>
        {({value, setValue}) => (
          <Input
            value={value}
            onChange={evt => setValue((evt.target as HTMLInputElement).value)}
            label={`Some text label`}
            name={`Test input`}
            height={InputHeights.LARGE}
            isLoading
          />
        )}
      </InputController>
    ),
    code: (
`
<InputController>
  {({value, setValue}) => (
    <Input
      value={value}
      onChange={evt => setValue((evt.target as HTMLInputElement).value)}
      label={\`Some text label\`}
      name={\`Test input\`}
      height={InputHeights.LARGE}
      isLoading
    />
  )}
</InputController>
`
    )
  },
]

const listCheckboxDefault = [
  {
    heading: `W/o label - unchecked`,
    component: (
      <InputCheckbox />
    ),
    code: (
`
<InputCheckbox />
`
    )
  },
  {
    heading: `W/o label - checked`,
    component: (
      <InputCheckbox checked />
    ),
    code: (
`
<InputCheckbox checked />
`
    )
  },
  {
    heading: `W/ label - unchecked`,
    component: (
      <InputCheckbox label={`Some checkbox label`} />
    ),
    code: (
`
<InputCheckbox label={\`Some checkbox label\`} />
`
    )
  },
  {
    heading: `W/ label - checked`,
    component: (
      <InputCheckbox
        label={`Some checkbox label`}
        checked
      />
    ),
    code: (
`
<InputCheckbox
  label={\`Some checkbox label\`}
  checked
/>
`
    )
  },
  {
    heading: `W/o label - error state`,
    component: (
      <InputCheckbox
        error={`Some error message`}
        checked
      />
    ),
    code: (
`
<InputCheckbox
  error={\`Some error message\`}
  checked
/>
`
    )
  },
  {
    heading: `W/ label - error state`,
    component: (
      <InputCheckbox
        label={`Some checkbox label`}
        error={`Some error message`}
        checked
      />
    ),
    code: (
`
<InputCheckbox
  label={\`Some checkbox label\`}
  error={\`Some error message\`}
  checked
/>
`
    )
  },
  {
    heading: `Disabled state`,
    component: (
      <InputCheckbox
        label={`Some checkbox label`}
        error={`Some error message`}
        isDisabled
        checked
      />
    ),
    code: (
`
<InputCheckbox
  label={\`Some checkbox label\`}
  error={\`Some error message\`}
  isDisabled
  checked
/>
`
    )
  },
]

export const VariantDefaultHeightSmall = () => <ComponentRenderTemplateStory list={listDefaultSmall} />
export const VariantDefaultHeightRegular = () => <ComponentRenderTemplateStory list={listDefaultRegular} />
export const VariantDefaultHeightLarge = () => <ComponentRenderTemplateStory list={listDefaultLarge} />
export const VariantCheckboxDefault = () => <ComponentRenderTemplateStory list={listCheckboxDefault} />

export default {
  title: `Components/Atoms/Input`,
  component: Input,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`Input`}
      componentDescription={(
        <>
          Renders input component of different type and configuration based
          on the props.
        </>
      )}
    />
  )]
} as StoriesExportObject
