import { memo } from 'react'
import css from './InputCheckbox.module.scss'
import { InputCheckboxProps } from 'components/atoms/Input/InputCheckbox/InputCheckbox.spec'
import FormElementTemplate from 'components/templates/FormElementTemplate/FormElementTemplate'
import { InputVariants } from 'components/atoms/Input/Input.spec'
import classnames from 'classnames'
import IconCheck from 'assets/icons/IconCheck'
import FormElementError from 'components/atoms/FormElementError/FormElementError'
import { PopperPlacementTypes } from 'hooks/ui/usePopperProvider'

function InputCheckbox ({
  className,
  label,
  classNameLabel,
  isRequired,
  variant = InputVariants.CHECKBOX_DEFAULT,
  error,
  checked,
  isLoading,
  isDisabled,
  ...rest
}: InputCheckboxProps) {
  const isDefault = variant === InputVariants.CHECKBOX_DEFAULT
  const isCheckboxRequired = true

  const labelProps = {
    label,
    isRequired
  }

  return (
    <FormElementTemplate
      className={classnames(className, {
        [css.wrapperChecked]: checked,
        [css.wrapperDefault]: isDefault,
        [css.wrapperError]: !!error,
        [css.wrapperDisabled]: isDisabled
      })}
      classNameLabel={classnames(classNameLabel, css.label)}
      {...labelProps}
    >
      {checked && isCheckboxRequired && <IconCheck className={css.icon} />}
      <input
        checked={checked}
        type="checkbox"
        className={css.input}
        {...rest}
      />
      {error && (
        <FormElementError
          className={css.error}
          message={error}
          placement={PopperPlacementTypes.BOTTOM}
        />
      )}
    </FormElementTemplate>
  )
}

export default memo(InputCheckbox)
