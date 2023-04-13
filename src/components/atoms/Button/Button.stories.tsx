import { ButtonVariants } from 'components/atoms/Button/Button.spec'
import Button from 'components/atoms/Button/Button'
import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import { StoriesExportObject } from 'stories/specs/index.spec'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import { BrowserRouter } from 'react-router-dom'

const listDefault = [
  {
    heading: `Default state`,
    component: (
      <Button onClick={() => alert(`Button clicked!`)}>
        Default button label
      </Button>
    ),
    code: (
      `
<Button onClick={() => alert(\`Button clicked!\`)}>
  Default button label
</Button>
      `
    )
  },
  {
    heading: `Loading state`,
    component: (
      <Button onClick={() => alert(`Button clicked!`)} isLoading>
        Default button label
      </Button>
    ),
    code: (
      `
<Button onClick={() => alert(\`Button clicked!\`)} isLoading>
  Default button label
</Button>
      `
    )
  },
  {
    heading: `Disabled state`,
    component: (
      <Button onClick={() => alert(`Button clicked!`)} isDisabled>
        Default button label
      </Button>
    ),
    code: (
      `
<Button onClick={() => alert(\`Button clicked!\`)} isDisabled>
  Default button label
</Button>
      `
    )
  },
]
const listString = [
  {
    heading: `Default state`,
    component: (
      <Button
        onClick={() => alert(`Button clicked!`)}
        variant={ButtonVariants.STRING}
      >
        Default button label
      </Button>
    ),
    code: (
      `
<Button
  onClick={() => alert(\`Button clicked!\`)}
  variant={ButtonVariants.STRING}
>
  Default button label
</Button>
      `
    )
  },
  {
    heading: `Loading state`,
    component: (
      <Button
        onClick={() => alert(`Button clicked!`)}
        variant={ButtonVariants.STRING}
        isLoading
      >
        Default button label
      </Button>
    ),
    code: (
      `
<Button
  onClick={() => alert(\`Button clicked!\`)}
  variant={ButtonVariants.STRING}
  isLoading
>
  Default button label
</Button>
      `
    )
  },
  {
    heading: `Disabled state`,
    component: (
      <Button
        onClick={() => alert(`Button clicked!`)}
        variant={ButtonVariants.STRING}
        isDisabled
      >
        Default button label
      </Button>
    ),
    code: (
      `
<Button
  onClick={() => alert(\`Button clicked!\`)}
  variant={ButtonVariants.STRING}
  isDisabled
>
  Default button label
</Button>
      `
    )
  },
  {
    heading: `Link state`,
    component: (
      <Button
        url={`http://google.com`}
        variant={ButtonVariants.STRING}
      >
        Default button label
      </Button>
    ),
    code: (
      `
<Button
  url={\`http://google.com\`}
  variant={ButtonVariants.STRING}
>
  Default button label
</Button>
      `
    )
  },
]

export const VariantDefault = () => <ComponentRenderTemplateStory list={listDefault} />
export const VariantString = () => (
  <BrowserRouter>
    <ComponentRenderTemplateStory list={listString} />
  </BrowserRouter>
)

export default {
  title: `Components/Atoms/Button`,
  component: Button,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`Button`}
      componentDescription={(
        <>
          Renders a button or a link depending on the set of received props.
        </>
      )}
      proptypesString={(
        `
export enum ButtonTypes {
  BUTTON = \`button\`,
  SUBMIT = \`submit\`
}

export enum ButtonVariants {
  DEFAULT = \`DEFAULT\`,
  STRING = \`STRING\`
}

export enum ButtonHeights {
  TINY = \`TINY\`,
  SMALL = \`SMALL\`,
  REGULAR = \`REGULAR\`,
  LARGE = \`LARGE\`,
  DEFAULT = \`DEFAULT\`
}

export interface ButtonCoreProps extends PropsWithClassName {
  children: ReactNode,
  type?: ButtonTypes,
  /*
  * Triggers render of a link instead of a button
  */
  url?: string,
  onClick?: MouseEventHandler,
  onMouseUp?: MouseEventHandler;
  onMouseDown?: MouseEventHandler;
  tabIndex?: string;
}

export interface ButtonProps extends
  PropsWithClassName,
  ButtonCoreProps
{
  /*
  * Triggers button height style presets
  */
  height?: ButtonHeights;
  /*
  * A way to provide icon component for ButtonVariants.ICON render with style presets for both button and rendered icon
  */
  IconComponent?: ElementType;
  /*
  * Triggers custom button variant to render through the switch statement
  */
  variant?: ButtonVariants;
  /*
  * Adds styling for the disabled state of the button
  */
  isDisabled?: boolean;
  /*
  * Adds styling for the loading state of the button
  */
  isLoading?: boolean;
}
`
      )}
      defaultPropsString={(
        `
ButtonDefault.defaultProps = {
  type: ButtonTypes.BUTTON
}

Button.defaultProps = {
  height: ButtonHeights.DEFAULT,
  variant: ButtonVariants.DEFAULT,
}
`
      )}
    />
  )]
} as StoriesExportObject
