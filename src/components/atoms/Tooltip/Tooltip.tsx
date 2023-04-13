import { memo, PropsWithChildren } from 'react'
import css from 'components/atoms/Tooltip/Tooltip.module.scss'
import classnames from 'classnames'
import { TooltipProps, TooltipVariants } from 'components/atoms/Tooltip/Tooltip.spec'

function Tooltip ({
  className,
  popperProps,
  setPopperElement,
  arrowProps,
  setArrowElement,
  variant,
  children
}: PropsWithChildren<TooltipProps>) {
  return (
    <div
      className={classnames(css.wrapper, className, {
        [css.wrapperDefault]: variant === TooltipVariants.DEFAULT,
      })}
      ref={setPopperElement}
      {...popperProps}
    >
      <div className={css.content}>
        {children}
      </div>
      <div
        className={css.arrow}
        ref={setArrowElement}
        {...arrowProps}
      />
    </div>
  )
}

export default memo(Tooltip)
