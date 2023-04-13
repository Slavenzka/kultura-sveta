import { CSSProperties, Ref } from 'react'
import { FixedSizeListProps } from 'react-window'
import { PropsWithClassName } from 'specs/global.spec'

export type WindowedListRenderFn = ({
  style, index
}: {
  style: CSSProperties,
  index: number
}) => JSX.Element

export interface WindowedListProps extends
  PropsWithClassName,
  Pick<FixedSizeListProps, `height` | `itemCount` | `itemSize` | `itemData`>,
  Partial<Pick<FixedSizeListProps, `width`>>
{
  children: WindowedListRenderFn,
  wrapperRef?: Ref<HTMLElement | null>
}
