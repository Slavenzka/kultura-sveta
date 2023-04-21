import { memo, useCallback } from 'react'
import css from './SelectCustomized.module.scss'
import classnames from 'classnames'
import {
  SelectCustomizedProps,
  SelectCustomOptionType,
  SelectVariants
} from 'components/atoms/SelectCustomized/SelectCustomized.spec'
import { FormElementErrorVariants } from 'components/atoms/FormElementError/FormElementError.spec'
import FormElementTemplate from 'components/templates/FormElementTemplate/FormElementTemplate'
import { InputLabelVariants } from 'components/atoms/InputLabel/InputLabel.spec'
import Select, { components } from 'react-select'
import FormElementError from 'components/atoms/FormElementError/FormElementError'
import { PopperPlacementTypes } from 'hooks/ui/usePopperProvider'
import IconSpinner from 'assets/icons/IconSpinner'
import IconArrowDropdown from 'assets/icons/IconArrowDropdown'

function SelectCustomized ({
  variant = SelectVariants.DEFAULT,
  label,
  inputLabelVariant = InputLabelVariants.DEFAULT,
  isRequired,
  isDisabled,
  isLoading,
  error,
  errorVariant = FormElementErrorVariants.DEFAULT,
  customComponents,
  onChange,
  ...restProps
}: SelectCustomizedProps) {
  const DropdownIndicatorDefault = useCallback(({innerProps}) => {
    if (isLoading) {
      return (
        <IconSpinner
          {...innerProps}
          className={css.spinner}
        />
      )
    }

    return (
      <IconArrowDropdown
        {...innerProps}
        className={css.arrow}
      />
    )

  }, [isLoading])

  return (
    <FormElementTemplate
      label={label}
      inputLabelVariant={inputLabelVariant}
      isRequired={isRequired}
      className={classnames(css.wrapper, {
        [css.wrapperDefault]: variant === SelectVariants.DEFAULT,
        [css.wrapperDisabled]: isDisabled,
        [css.wrapperLoading]: isLoading,
        [css.wrapperError]: Boolean(error),
        [css.wrapperErrorIcon]: Boolean(error) && errorVariant === FormElementErrorVariants.ICON
      })}
      classNameLabel={css.label}
    >
      <Select
        className={css.select}
        components={{
          ...components,
          DropdownIndicator: DropdownIndicatorDefault,
          ...(customComponents ?? {})
        }}
        onChange={evt => onChange(evt as SelectCustomOptionType | null)}
        classNamePrefix="select"
        isDisabled={isDisabled}
        {...restProps}
      />
      {error && (
        <FormElementError
          className={classnames(css.error, {
            [css.errorIcon]: errorVariant === FormElementErrorVariants.ICON
          })}
          message={error}
          variant={errorVariant}
          placement={PopperPlacementTypes.BOTTOM}
        />
      )}
    </FormElementTemplate>
  )
}

export default memo(SelectCustomized)
