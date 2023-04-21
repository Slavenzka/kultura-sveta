import { MapMarkerCoordsType } from 'components/molecules/MapMarkerRequest/MapMarkerRequest.spec'

export interface AnswerItemType {
  [key: string]: string | null | MapMarkerCoordsType[]
}
