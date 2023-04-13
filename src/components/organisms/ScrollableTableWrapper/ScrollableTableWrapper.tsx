import { memo, useEffect, useRef } from 'react'
import css from './ScrollableTableWrapper.module.scss'
import classnames from 'classnames'
import { useSelector } from 'react-redux'
import { PropsWithClassName } from 'specs/global.spec'
import { RootState } from 'store/spec/global.spec'
import { RootReducerSlices } from 'store/utils/const'
import { DEFAULT_ROW_HEIGHT } from 'components/atoms/TableRowDefault/TableRowDefault'

const MIN_VISIBLE_ROW_QTY = 6

function ScrollableTableWrapper ({
  className,
  children,
}: {
  children?: JSX.Element[],
} & PropsWithClassName) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const fontSize = useSelector((store: RootState) => store[RootReducerSlices.ELASTIC].curFontSize)

  useEffect(() => {
    const wrapper = wrapperRef.current

    if (!wrapper || !children || children.length === 0) {
      return
    }

    const rowHeight = DEFAULT_ROW_HEIGHT * fontSize / 10
    const viewportHeight = document.documentElement.clientHeight
    const contentOffsetTop = wrapper.getBoundingClientRect().top
    const calculatedRowsQty = Math.floor((viewportHeight - contentOffsetTop) / rowHeight)
    const totalRowsCount = Math.min(calculatedRowsQty, children.length)

    if (calculatedRowsQty < MIN_VISIBLE_ROW_QTY && children.length >= MIN_VISIBLE_ROW_QTY) {
      wrapper.style.height = `${MIN_VISIBLE_ROW_QTY * rowHeight}px`
      return
    }

    if (children && children.length >= calculatedRowsQty) {
      wrapper.style.height = `${totalRowsCount * rowHeight}px`
    } else {
      wrapper.style.height = `auto`
    }
  }, [children, fontSize])

  return (
    <div
      className={classnames(css.wrapper, className)}
      ref={wrapperRef}
    >
      <div className={css.content}>
        {children}
      </div>
    </div>
  )
}

export default memo(ScrollableTableWrapper)
