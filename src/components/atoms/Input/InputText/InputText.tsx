import { memo } from 'react'
import css from './InputText.module.scss'
import classnames from 'classnames'
import { InputTextProps } from 'components/atoms/Input/InputText/InputText.spec'
import { InputHeights, InputVariants } from 'components/atoms/Input/Input.spec'
import FormElementTemplate from 'components/templates/FormElementTemplate/FormElementTemplate'
import IconSpinner from 'assets/icons/IconSpinner'
import FormElementError from 'components/atoms/FormElementError/FormElementError'
import { PopperPlacementTypes } from 'hooks/ui/usePopperProvider'
import { FormElementErrorVariants } from 'components/atoms/FormElementError/FormElementError.spec'

function InputText ({
  className,
  variant = InputVariants.DEFAULT,
  height = InputHeights.REGULAR,
  isRequired,
  classNameLabel,
  label,
  error,
  errorVariant,
  isDisabled,
  isLoading,
  children,
  TagName = `input`,
  ...restProps
}: InputTextProps) {
  const isIconError = errorVariant === FormElementErrorVariants.ICON
  const isTextarea = variant === InputVariants.TEXTAREA

  const variantClassName = classnames({
    [css.wrapperDefault]: variant === InputVariants.DEFAULT || isTextarea
  })

  const heightClassName = classnames({
    [css.wrapperSmall]: height === InputHeights.SMALL,
    [css.wrapperRegular]: height === InputHeights.REGULAR,
    [css.wrapperLarge]: height === InputHeights.LARGE,
  })

  return (
    <FormElementTemplate
      className={classnames(variantClassName, heightClassName, className, {
        [css.wrapperError]: !isIconError && error,
        [css.wrapperIconError]: isIconError,
        [css.wrapperDisabled]: isDisabled,
        [css.wrapperLoading]: isLoading,
        [css.wrapperTextarea]: isTextarea
      })}
      classNameLabel={classnames(css.label, classNameLabel)}
      label={label}
      isRequired={isRequired}
      isDisabled={isDisabled}
      isError={Boolean(error)}
    >
      <TagName
        className={css.input}
        {...restProps}
      />
      {isLoading && <IconSpinner className={css.spinner} />}
      {children}
      {error && (
        <FormElementError
          className={classnames(css.error, {
            [css.errorIcon]: isIconError
          })}
          message={error}
          variant={errorVariant}
          placement={PopperPlacementTypes.BOTTOM}
        />
      )}
    </FormElementTemplate>
  )
}

export default memo(InputText)
