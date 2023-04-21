import { memo, useEffect, useMemo, useState } from 'react'
import css from './Navigation.module.scss'
import classnames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { NavigationProps } from 'components/atoms/Navigation/Navigation.spec'

function Navigation ({
  className,
  config
}: NavigationProps) {
  const {pathname} = useLocation()
  const [wrapperRef, setWrapperRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (wrapperRef) {
      wrapperRef.animate([
        {opacity: 0},
        {opacity: 1}
      ], {
        duration: 1000,
        fill: `forwards`
      })
    }
  }, [wrapperRef])

  const items = useMemo(() => {
    return config.map(({url, label}, index) => (
      <li
        className={classnames(css.item, {
          [css.itemActive]: url === pathname
        })}
        key={index}
      >
        <Link
          className={css.link}
          to={url}
        >
          {label}
        </Link>
      </li>
    ))
  }, [config, pathname])

  return (
    <nav className={classnames(css.wrapper, className)} ref={setWrapperRef}>
      <ul className={css.list}>
        {items}
      </ul>
    </nav>
  )
}

export default memo(Navigation)
