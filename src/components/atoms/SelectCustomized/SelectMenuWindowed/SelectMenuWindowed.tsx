import { memo } from 'react'
import { MenuListProps } from 'react-select'
import { useSelector } from 'react-redux'
import { RootState } from 'store/spec/global.spec'
import { RootReducerSlices } from 'store/utils/const'
import WindowedList from 'components/atoms/WindowedList/WindowedList'

const VISIBLE_ROWS_QTY = 8
const ROW_HEIGHT = 40

function SelectMenuWindowed ({
  children,
  innerProps,
}: MenuListProps) {
  const fontSize = useSelector((store: RootState) => store[RootReducerSlices.ELASTIC].curFontSize)

  if (!Array.isArray(children)) return (
    <div>
      No options available
    </div>
  )

  const actualRowHeight = ROW_HEIGHT * fontSize / 10

  return (
    <WindowedList
      itemSize={actualRowHeight}
      height={actualRowHeight * VISIBLE_ROWS_QTY}
      itemCount={children.length}
    >
      {({style, index}) => (
        <div style={style} {...innerProps}>
          {children[index]}
        </div>
      )}
    </WindowedList>
  )
}

export default memo(SelectMenuWindowed)
