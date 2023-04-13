import { memo, useCallback } from 'react'
import css from 'components/atoms/ErrorIcon/ErrorIcon.module.scss'
import classnames from 'classnames'
import { PropsWithClassName } from 'specs/global.spec'
import { FormElementErrorProps } from 'components/atoms/FormElementError/FormElementError.spec'
import IconFormElementError from 'assets/icons/IconFormElementError'
import useVisibilityOnHover from 'hooks/ui/useVisibilityOnHover'
import Tooltip from 'components/atoms/Tooltip/Tooltip'
import usePopperProvider, { PopperProps } from 'hooks/ui/usePopperProvider'

type ErrorIconProps = PropsWithClassName & Pick<FormElementErrorProps, `message`> & Partial<PopperProps>

function ErrorIcon ({
  className,
  message,
  ...popperProps
}: ErrorIconProps) {
  const {
    isVisible,
    handleSetRef
  } = useVisibilityOnHover()

  const {
    setReferenceElement,
    ...restPopperProps
  } = usePopperProvider(popperProps)

  const setWrapperRef = useCallback((node: HTMLElement) => {
    handleSetRef(node)
    setReferenceElement(node)
  }, [handleSetRef, setReferenceElement])

  return (
    <span className={classnames(css.wrapper, className)} ref={setWrapperRef}>
      <IconFormElementError
        className={css.icon}
      />
      {isVisible && (
        <Tooltip {...restPopperProps}>
          {message}
        </Tooltip>
      )}
    </span>
  )
}

export default memo(ErrorIcon)
