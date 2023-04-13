import { DeviceTypes } from 'utils/const'

type ElasticConfigItemType = {
  baseSize: number;
  baseWidth: number;
  widthLimit: number;
}

type ElasticConfigType = Record<DeviceTypes, ElasticConfigItemType>

export interface StoreElasticSlice {
  deviceType: DeviceTypes | null;
  curFontSize: number;
  config: ElasticConfigType;
}
