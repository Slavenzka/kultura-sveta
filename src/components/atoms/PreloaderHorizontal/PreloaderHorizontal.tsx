import { memo } from 'react'
import css from './PreloaderHorizontal.module.scss'
import classnames from 'classnames'
import { PropsWithClassName } from 'specs/global.spec'

function PreloaderHorizontal ({
  className
}: PropsWithClassName) {
  return (
    <div className={classnames(css.wrapper, className)}>
      <div className={css.preloader} />
    </div>
  )
}

export default memo(PreloaderHorizontal)
