import { AnswerItemType } from 'api/specs/answers.spec'
import {
  MapMarkerCoordsType,
} from 'components/molecules/MapMarkerRequest/MapMarkerRequest.spec'

export interface FilterMapMarkerType {
  coord: MapMarkerCoordsType,
  color: string
}

export interface FilterProps {
  data: AnswerItemType[]
}
