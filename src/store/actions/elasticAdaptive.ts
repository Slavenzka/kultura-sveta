import { DeviceTypes } from 'utils/const'
import { createAction } from '@reduxjs/toolkit'

export const setFontSize = createAction<number>(`SET_CURRENT_FONT_SIZE`)
export const setDeviceType = createAction<DeviceTypes>(`SET_USER_DEVICE_TYPE`)
