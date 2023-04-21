import { FilterMapMarkerType } from 'components/molecules/Filter/Filter.spec'
import { PropsWithClassName } from 'specs/global.spec'

export interface MapResultsValueItem extends PropsWithClassName {
  data?: FilterMapMarkerType[] | null,
  isClustered: boolean,
  legendData?: {[key: string]: string} | null
}
