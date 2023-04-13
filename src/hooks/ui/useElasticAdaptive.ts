import { isBrowser, isMobileOnly, isTablet } from 'react-device-detect'
import { setDeviceType, setFontSize } from 'store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { throttle } from 'utils/helpers'
import { DeviceTypes } from 'utils/const'
import { RootState } from 'store/spec/global.spec'
import { RootReducerSlices } from 'store/utils/const'

function useElasticAdaptive () {
  const state = useSelector((state: RootState) => state[RootReducerSlices.ELASTIC].config)
  const type = useSelector((state: RootState) => state[RootReducerSlices.ELASTIC].deviceType)
  const dispatch = useDispatch()

  useEffect(() => {
    const handler = throttle(changeSize) as () => void

    getDeviceType()
    type && changeSize()
    window.addEventListener('resize', handler)
    window.addEventListener('orientationchange', handler)

    return () => {
      window.removeEventListener('resize', handler)
      window.removeEventListener('orientationchange', handler)
    }
  })

  const getDeviceType = () => {
    if (isBrowser) {
      dispatch(setDeviceType(DeviceTypes.DESKTOP))
    }

    if (isTablet || isMobileOnly) {
      dispatch(setDeviceType(DeviceTypes.ADAPTIVE))
    }
  }

  const changeSize = () => {
    const width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth
    getDeviceType()
    if (type) {
      const html = document.documentElement
      const {widthLimit, baseWidth} = state[type]
      const {baseSize} = state[type]
      let actualWidth = width

      if (widthLimit) {
        actualWidth = Math.min(width, widthLimit)
      }

      const currentSize = actualWidth / (baseWidth as number) * baseSize
      dispatch(setFontSize(currentSize))
      html.style.fontSize = currentSize + 'px'
    }
  }

  return {
    type
  }
}

export default useElasticAdaptive
