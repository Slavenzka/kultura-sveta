import { memo, ReactNode } from 'react'
import css from './Description.module.scss'
import classnames from 'classnames'
import { PropsWithClassName } from 'specs/global.spec'

function Description ({
  className,
  children
}: {
  children: ReactNode
} & PropsWithClassName) {
  return (
    <p className={classnames(css.wrapper, className)}>
      {children}
    </p>
  )
}

export default memo(Description)
