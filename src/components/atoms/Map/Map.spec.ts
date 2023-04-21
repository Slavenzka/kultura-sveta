import {
  MapMarkerRequestOnChangeType,
  MapMarkerRequestValueType
} from 'components/molecules/MapMarkerRequest/MapMarkerRequest.spec'

export interface MapProps {
  value: MapMarkerRequestValueType,
  onChange: MapMarkerRequestOnChangeType,
  isMultipleSelection?: boolean
}
