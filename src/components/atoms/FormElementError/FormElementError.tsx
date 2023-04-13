import { memo } from 'react'
import css from 'components/atoms/FormElementError/FormElementError.module.scss'
import {
  FormElementErrorProps,
  FormElementErrorVariants
} from 'components/atoms/FormElementError/FormElementError.spec'
import classnames from 'classnames'
import ErrorIcon from 'components/atoms/ErrorIcon/ErrorIcon'

function FormElementError ({
  className,
  variant = FormElementErrorVariants.DEFAULT,
  message,
  ...rest
}: FormElementErrorProps) {
  const isIcon = variant === FormElementErrorVariants.ICON

  if (isIcon) {
    return (
      <ErrorIcon
        message={message}
        className={className}
        {...rest}
      />
    )
  }

  const errorMessage = typeof message === `string`
    ? <span dangerouslySetInnerHTML={{__html: message}} />
    : <>{message}</>

  return (
    <span
      className={classnames(css.wrapper, className)}
    >
      {errorMessage}
    </span>
  )
}

export default memo(FormElementError)
