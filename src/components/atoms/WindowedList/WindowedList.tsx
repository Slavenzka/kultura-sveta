import { memo } from 'react'
import { FixedSizeList as List } from 'react-window'
import { WindowedListProps } from './WindowedList.spec'

function WindowedList ({
  height,
  width = `100%`,
  itemCount,
  itemSize,
  children,
  wrapperRef
}: WindowedListProps) {
  return (
    <List
      height={height}
      itemCount={itemCount}
      itemSize={itemSize}
      width={width}
      outerRef={wrapperRef}
    >
      {({index, style}) => children({index, style})}
    </List>
  )
}

export default memo(WindowedList)
