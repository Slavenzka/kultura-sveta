import { PropsWithClassName } from 'specs/global.spec'
import { ReactNode } from 'react'

export type MapMarkerCoordsType = [number, number]
export type MapMarkerRequestValueType = MapMarkerCoordsType[] | null

export type MapMarkerRequestOnChangeType = (value: MapMarkerRequestValueType) => void

export interface MapMarkerRequestProps extends PropsWithClassName {
  label: string,
  value: MapMarkerRequestValueType,
  onChange: MapMarkerRequestOnChangeType,
  children?: ReactNode
}
