import { SelectCustomOptionType } from 'components/atoms/SelectCustomized/SelectCustomized.spec'
import { useState } from 'react'
import SelectCustomized from 'components/atoms/SelectCustomized/SelectCustomized'
import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import { StoriesExportObject } from 'stories/specs/index.spec'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import SelectMenuWindowed from 'components/atoms/SelectCustomized/SelectMenuWindowed/SelectMenuWindowed'
import { DropdownIndicatorProps, OptionProps } from 'react-select'
import { Provider } from 'react-redux'
import { store } from 'store/configureStore'
import IconFormElementError from 'assets/icons/IconFormElementError'
import css from 'stories/styles/modules/SelectCustomized.module.scss'
import classnames from 'classnames'
import { FormElementErrorVariants } from 'components/atoms/FormElementError/FormElementError.spec'

function SelectController ({
  children
}: {
  children: (
    value: SelectCustomOptionType | null,
    setValue: (option: SelectCustomOptionType | null) => void,
    options: SelectCustomOptionType[],
  ) => JSX.Element
}) {
  const options: SelectCustomOptionType[] = [
    {
      label: `First`,
      value: `i3242fg`,
      data: {
        test: 12345
      }
    },
    {
      label: `Second`,
      value: `dsfdssdf32r2`,
      data: {
        test: 678
      }
    },
    {
      label: `Third`,
      value: `muahahah324234`,
      data: {
        test: 90
      }
    },
  ]

  const [value, setValue] = useState<SelectCustomOptionType | null>(options[0])

  const onChange = (option: unknown) => setValue(option as SelectCustomOptionType | null)

  return children(value, onChange, options)
}

function SelectControllerLongOptions ({
  children
}: {
  children: (
    value: SelectCustomOptionType | null,
    setValue: (option: SelectCustomOptionType | null) => void,
    options: SelectCustomOptionType[],
  ) => JSX.Element
}) {
  const options = new Array(1000).fill(``).map((_, index) => ({
    label: `${index}`,
    value: index
  }))

  const [value, setValue] = useState<SelectCustomOptionType | null>(options[0])

  const onChange = (option: unknown) => setValue(option as SelectCustomOptionType | null)

  return children(value, onChange, options)
}

function CustomDropdownIndicator ({innerProps}: DropdownIndicatorProps) {
  return (
    <div {...innerProps}>
      <IconFormElementError data-select-indicator="true" />
    </div>
  )
}

function CustomOptionComponent ({innerProps, children, isSelected}: OptionProps) {
  return (
    <div
      className={classnames(css.option, {
        [css.optionSelected]: isSelected
      })}
      {...innerProps}
    >
      {`Option value: ${children}`}
    </div>
  )
}

const listDefault = [
  {
    heading: `Default state`,
    component: (
      <SelectController>
        {(value, onChange, options) => (
          <SelectCustomized
            value={value}
            onChange={onChange}
            options={options}
            label={`Some select label`}
          />
        )}
      </SelectController>
    ),
    code: (
`
<SelectController>
  {(value, onChange, options) => (
    <SelectCustomized
      value={value}
      onChange={onChange}
      options={options}
      label={\`Some select label\`}
    />
  )}
</SelectController>
`
    )
  },
  {
    heading: `Default state w/o label`,
    component: (
      <SelectController>
        {(value, onChange, options) => (
          <SelectCustomized
            value={value}
            onChange={onChange}
            options={options}
          />
        )}
      </SelectController>
    ),
    code: (
`
<SelectController>
  {(value, onChange, options) => (
    <SelectCustomized
      value={value}
      onChange={onChange}
      options={options}
    />
  )}
</SelectController>
`
    )
  },
  {
    heading: `Disabled state`,
    component: (
      <SelectController>
        {(value, onChange, options) => (
          <SelectCustomized
            value={value}
            onChange={onChange}
            options={options}
            label={`Some select label`}
            isDisabled
          />
        )}
      </SelectController>
    ),
    code: (
`
<SelectController>
  {(value, onChange, options) => (
    <SelectCustomized
      value={value}
      onChange={onChange}
      options={options}
      label={\`Some select label\`}
      isDisabled
    />
  )}
</SelectController>
`
    )
  },
  {
    heading: `Loading state`,
    component: (
      <SelectController>
        {(value, onChange, options) => (
          <SelectCustomized
            value={value}
            onChange={onChange}
            options={options}
            label={`Some select label`}
            isLoading
          />
        )}
      </SelectController>
    ),
    code: (
`
<SelectController>
  {(value, onChange, options) => (
    <SelectCustomized
      value={value}
      onChange={onChange}
      options={options}
      label={\`Some select label\`}
      isLoading
    />
  )}
</SelectController>
`
    )
  },
  {
    heading: `State with windowed long list`,
    component: (
      <Provider store={store}>
        <SelectControllerLongOptions>
          {(value, onChange, options) => (
            <SelectCustomized
              value={value}
              onChange={onChange}
              options={options}
              label={`Some select label`}
              customComponents={{
                MenuList: SelectMenuWindowed
              }}
            />
          )}
        </SelectControllerLongOptions>
      </Provider>
    ),
    code: (
`
function SelectMenuWindowed<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> ({
  children,
  innerProps,
}: MenuListProps<Option, IsMulti, Group>) {
  const fontSize = useSelector((store: RootState) => store[RootReducerSlices.ELASTIC].curFontSize)

  if (!Array.isArray(children)) return (
    <div>
      No options available
    </div>
  )

  const actualRowHeight = ROW_HEIGHT * fontSize / 10

  return (
    <WindowedList
      itemSize={actualRowHeight}
      height={actualRowHeight * VISIBLE_ROWS_QTY}
      itemCount={children.length}
    >
      {({style, index}) => (
        <div style={style} {...innerProps}>
          {children[index]}
        </div>
      )}
    </WindowedList>
  )
}

<Provider store={store}>
  <SelectControllerLongOptions>
    {(value, onChange, options) => (
      <SelectCustomized
        value={value}
        onChange={onChange}
        options={options}
        label={\`Some select label\`}
        customComponents={{
          MenuList: SelectMenuWindowed
        }}
      />
    )}
  </SelectControllerLongOptions>
</Provider>
`
    )
  },
  {
    heading: `State with custom dropdown indicator`,
    component: (
      <SelectController>
        {(value, onChange, options) => (
          <SelectCustomized
            value={value}
            onChange={onChange}
            options={options}
            label={`Some select label`}
            customComponents={{
              DropdownIndicator: CustomDropdownIndicator
            }}
          />
        )}
      </SelectController>
    ),
    code: (
`
function CustomDropdownIndicator ({innerProps}: DropdownIndicatorProps) {
  return (
    <div {...innerProps}>
      <IconFormElementError data-select-indicator="true" />
    </div>
  )
}

<SelectController>
  {(value, onChange, options) => (
    <SelectCustomized
      value={value}
      onChange={onChange}
      options={options}
      label={\`Some select label\`}
      customComponents={{
        DropdownIndicator: CustomDropdownIndicator
      }}
    />
  )}
</SelectController>
`
    )
  },
  {
    heading: `State w/ custom option component`,
    component: (
      <SelectController>
        {(value, onChange, options) => (
          <SelectCustomized
            value={value}
            onChange={onChange}
            options={options}
            label={`Some select label`}
            customComponents={{
              Option: CustomOptionComponent
            }}
          />
        )}
      </SelectController>
    ),
    code: (
      `
function CustomOptionComponent ({innerProps, children, isSelected}: OptionProps) {
  return (
    <div
      className={classnames(css.option, {
        [css.optionSelected]: isSelected
      })}
      {...innerProps}
    >
      {\`Option value: {children}\`}
    </div>
  )
}

<SelectController>
  {(value, onChange, options) => (
    <SelectCustomized
      value={value}
      onChange={onChange}
      options={options}
      label={\`Some select label\`}
      customComponents={{
        Option: CustomOptionComponent
      }}
    />
  )}
</SelectController>
`
    )
  },
  {
    heading: `State with string error`,
    component: (
      <SelectController>
        {(value, onChange, options) => (
          <SelectCustomized
            value={value}
            onChange={onChange}
            options={options}
            error={`Some error message for select component`}
          />
        )}
      </SelectController>
    ),
    code: (
      `
<SelectController>
  {(value, onChange, options) => (
    <SelectCustomized
      value={value}
      onChange={onChange}
      options={options}
      error={\`Some error message for select component\`}
    />
  )}
</SelectController>
`
    )
  },
  {
    heading: `State with icon error`,
    component: (
      <SelectController>
        {(value, onChange, options) => (
          <SelectCustomized
            value={value}
            onChange={onChange}
            options={options}
            error={`Some error message for select component`}
            errorVariant={FormElementErrorVariants.ICON}
          />
        )}
      </SelectController>
    ),
    code: (
      `
<SelectController>
  {(value, onChange, options) => (
    <SelectCustomized
      value={value}
      onChange={onChange}
      options={options}
      error={\`Some error message for select component\`}
      errorVariant={FormElementErrorVariants.ICON}
    />
  )}
</SelectController>
`
    )
  },
]

export const VariantDefault = () => <ComponentRenderTemplateStory list={listDefault} />

export default {
  title: `Components/Atoms/SelectCustomized`,
  component: SelectCustomized,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`SelectCustomized`}
      componentDescription={(
        <>
          Renders customizable select component that accepts standard react-select
          props
        </>
      )}
      proptypesString={(
`
export enum SelectVariants {
  DEFAULT = \`DEFAULT\`,
}

export interface SelectCustomOptionType {
  label: string,
  value: string,
  data?: unknown
}

export interface SelectCustomizedProps extends
  PropsWithClassName,
  FormElementTemplateProps,
  Omit<PublicBaseSelectProps<SelectCustomOptionType, boolean, GroupBase<SelectCustomOptionType>>,
    \`onChange\` | \`inputValue\` | \`onInputChange\` | \`onMenuClose\` | \`onMenuOpen\`
  >,
  Partial<Pick<PublicBaseSelectProps<SelectCustomOptionType, boolean, GroupBase<SelectCustomOptionType>>,
    \`inputValue\` | \`onInputChange\` | \`onMenuClose\` | \`onMenuOpen\`
  >>
{
  variant?: SelectVariants,
  isDisabled?: boolean,
  isLoading?: boolean,
  error?: string,
  errorVariant?: FormElementErrorVariants,
  customComponents?:  Partial<typeof components>,
  onChange:(option: SelectCustomOptionType | null) => void
}
`
      )}
      references={[
        {
          label: `react-select`,
          url: `https://react-select.com/home`
        }
      ]}
    />
  )]
} as StoriesExportObject
