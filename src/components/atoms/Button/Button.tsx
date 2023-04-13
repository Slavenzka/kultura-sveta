import { memo, PropsWithChildren } from 'react'
import css from './Button.module.scss'
import classnames from 'classnames'
import { ButtonHeights, ButtonProps, ButtonVariants } from 'components/atoms/Button/Button.spec'
import ButtonDefault from 'components/atoms/Button/ButtonCore'
import IconSpinner from 'assets/icons/IconSpinner'

function Button ({
  className,
  height = ButtonHeights.DEFAULT,
  variant = ButtonVariants.DEFAULT,
  isDisabled,
  isLoading,
  children,
  ...restProps
}: PropsWithChildren<ButtonProps>) {
  const heightClassName = classnames({
    [css.buttonHeightTiny]: height === ButtonHeights.TINY,
    [css.buttonHeightSmall]: height === ButtonHeights.SMALL,
    [css.buttonHeightRegular]: height === ButtonHeights.REGULAR,
    [css.buttonHeightLarge]: height === ButtonHeights.LARGE,
  })

  const classNamesExtended = classnames(className, {
    [css.buttonLoading]: isLoading,
    [css.buttonDisabled]: isDisabled
  })

  const buttonContentWithLoader = isLoading
    ? (
      <>
        <IconSpinner className={css.spinner} />
        {children}
      </>
    )
    : children

  switch (variant) {
    case ButtonVariants.FILLED: {
      return (
        <ButtonDefault
          className={classnames(css.buttonFilled, heightClassName, className)}
          {...restProps}
        >
          {buttonContentWithLoader}
        </ButtonDefault>
      )
    }
    case ButtonVariants.STRING: {
      return (
        <ButtonDefault
          className={classnames(css.buttonString, classNamesExtended)}
          {...restProps}
        >
          {buttonContentWithLoader}
        </ButtonDefault>
      )
    }
    default: {
      return (
        <ButtonDefault
          className={classnames(className, classNamesExtended)}
          {...restProps}
        >
          {buttonContentWithLoader}
        </ButtonDefault>
      )
    }
  }
}

export default memo(Button)
