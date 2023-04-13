import FormElementError from 'components/atoms/FormElementError/FormElementError'
import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import { StoriesExportObject } from 'stories/specs/index.spec'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import { FormElementErrorVariants } from 'components/atoms/FormElementError/FormElementError.spec'
import css from 'stories/styles/modules/FormElementError.module.scss'
import { PopperPlacementTypes } from 'hooks/ui/usePopperProvider'

const listDefault = [
  {
    heading: `Default state with string message`,
    component: (
      <FormElementError
        message={`Some error message`}
      />
    ),
    code: (
      `
<FormElementError
  message={\`Default state with string message\`}
/>
`
    )
  },
  {
    heading: `Default state w/ JSX as message`,
    component: (
      <FormElementError
        message={(
          <div style={{color: `purple`}}>Some JSX with error details</div>
        )}
      />
    ),
    code: (
      `
<FormElementError
  message={(
    <div style={{color: \`purple\`}}>Some JSX with error details</div>
  )}
/>
`
    )
  },
]

const listIcon = [
  {
    heading: `Default state with string message`,
    component: (
      <FormElementError
        message={`Some error message`}
        variant={FormElementErrorVariants.ICON}
        className={css.errorIcon}
      />
    ),
    code: (
      `
<FormElementError
  message={\`Some error message\`}
  variant={FormElementErrorVariants.ICON}
  className={css.errorIcon}
/>
`
    )
  },
  {
    heading: `Default state w/ customized tooltip position`,
    component: (
      <FormElementError
        message={`Some error message`}
        variant={FormElementErrorVariants.ICON}
        className={css.errorIcon}
        placement={PopperPlacementTypes.BOTTOM_END}
        offset={[0, 20]}
      />
    ),
    code: (
      `
<FormElementError
  message={\`Some error message\`}
  variant={FormElementErrorVariants.ICON}
  className={css.errorIcon}
  placement={PopperPlacementTypes.BOTTOM_END}
  offset={[0, 20]}
/>
`
    )
  },
  {
    heading: `Default state with JSX message`,
    component: (
      <FormElementError
        message={(
          <div
            style={{
              padding: `1rem`,
              color: `purple`
            }}
          >
            Some JSX with message details inside
          </div>
        )}
        variant={FormElementErrorVariants.ICON}
        className={css.errorIcon}
      />
    ),
    code: (
      `
<FormElementError
  message={(
    <div
      style={{
        padding: \`1rem\`,
        color: \`purple\`
      }}
    >
      Some JSX with message details inside
    </div>
  )}
  variant={FormElementErrorVariants.ICON}
  className={css.errorIcon}
/>
`
    )
  },
]

export const VariantDefault = () => <ComponentRenderTemplateStory list={listDefault} />
export const VariantIcon = () => <ComponentRenderTemplateStory list={listIcon} />

export default {
  title: `Components/Atoms/FormElementError`,
  component: FormElementError,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`FormElementError`}
      componentDescription={(
        <>
          Renders error message for the form elements
        </>
      )}
      proptypesString={(
`
export interface PopperProps {
  placement?: PopperPlacementTypes,
  offset?: [number, number]
}

export type FormElementErrorMessageType = string | ReactNode

export interface FormElementErrorProps extends
  PropsWithClassName,
  Partial<PopperProps>
{
  variant?: FormElementErrorVariants,
  message: FormElementErrorMessageType
}
`
      )}
    />
  )]
} as StoriesExportObject
