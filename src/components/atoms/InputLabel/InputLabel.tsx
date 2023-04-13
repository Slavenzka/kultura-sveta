import { memo, PropsWithChildren } from 'react'
import css from './InputLabel.module.scss'
import classnames from 'classnames'
import { decode } from 'he'
import { InputLabelProps, InputLabelVariants } from 'components/atoms/InputLabel/InputLabel.spec'

function InputLabel ({
  children,
  className,
  classNameLabel,
  label,
  variant = InputLabelVariants.DEFAULT,
  TagName = `label`,
  isRequired,
  isDisabled,
  isError,
}: PropsWithChildren<InputLabelProps>) {
  const isStringLabel = typeof label === `string`
  const isImageInputLabel = variant === InputLabelVariants.IMAGE_DEFAULT

  if (isImageInputLabel) {
    TagName = isDisabled
      ? `div`
      : TagName

    return (
      <TagName
        className={classnames(css.wrapperImageDefault, className, {
          [css.wrapperDisabled]: isDisabled,
          [css.wrapperError]: isError
        })}
      >
        <span className={css.label}>
          { label }
        </span>
          <span className={css.content}>
          { children }
        </span>
      </TagName>
    )
  }

  return (
    <TagName
      className={classnames(css.wrapper, className, {
        [css.wrapperDark]: variant === InputLabelVariants.DARK,
        [css.wrapperDisabled]: isDisabled,
      })}
    >
      <span
        className={classnames(css.label, classNameLabel)}
      >
        {isStringLabel
          ? decode(isRequired
            ? label + `*`
            : label
          )
          : label
        }
      </span>
      { children }
    </TagName>
  )
}

export default memo(InputLabel)
