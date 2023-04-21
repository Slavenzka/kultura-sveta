import { memo } from 'react'
import css from './Description.module.scss'
import classnames from 'classnames'
import { PropsWithClassName } from 'specs/global.spec'

function Description ({
  className,
  children
}: {
  children: string
} & PropsWithClassName) {
  return (
    <p className={classnames(css.wrapper, className)} dangerouslySetInnerHTML={{__html: children}} />
  )
}

export default memo(Description)
