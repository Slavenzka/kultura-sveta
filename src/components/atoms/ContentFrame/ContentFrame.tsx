import { memo, ReactNode } from 'react'
import css from './ContentFrame.module.scss'
import classnames from 'classnames'
import { PropsWithClassName } from 'specs/global.spec'

function ContentFrame ({
  className,
  children
}: {
  children: ReactNode
} & PropsWithClassName) {
  return (
    <div className={classnames(css.wrapper, className)}>
      {children}
    </div>
  )
}

export default memo(ContentFrame)
