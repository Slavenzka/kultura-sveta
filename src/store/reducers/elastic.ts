import { createReducer } from '@reduxjs/toolkit'
import { DeviceTypes } from 'utils/const'
import { setDeviceType, setFontSize } from 'store/actions'
import { StoreElasticSlice } from 'store/spec/elastic.spec'

const INITIAL_STATE: StoreElasticSlice = {
  deviceType: null,
  config: {
    [DeviceTypes.DESKTOP]: {
      baseSize: 10,
      baseWidth: +process.env.REACT_APP_BASE_WIDTH_DESKTOP! as number,
      widthLimit: +process.env.REACT_APP_WIDTH_LIMIT_DESKTOP! as number
    },
    [DeviceTypes.ADAPTIVE]: {
      baseSize: 10,
      baseWidth: +process.env.REACT_APP_BASE_WIDTH_ADAPTIVE! as number,
      widthLimit: +process.env.REACT_APP_WIDTH_LIMIT_ADAPTIVE! as number
    }
  },
  curFontSize: 10
}

export const elasticReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(setFontSize, (store, {payload}) => {
      store.curFontSize = payload
    })
    .addCase(setDeviceType, (store, {payload}) => {
      store.deviceType = payload
    })
})
