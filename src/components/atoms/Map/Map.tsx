import { memo, useCallback, useEffect, useState } from 'react'
import css from './Map.module.scss'
import { Map, Placemark } from '@pbe/react-yandex-maps'
import {
  MapMarkerRequestValueType
} from 'components/molecules/MapMarkerRequest/MapMarkerRequest.spec'
import Button from 'components/atoms/Button/Button'
import { ButtonHeights, ButtonVariants } from 'components/atoms/Button/Button.spec'
import useModal from 'hooks/ui/useModal'
import { LocalStorageProps } from 'utils/const'
import IconPinDelete from 'assets/icons/IconPinDelete'
import { MapProps } from 'components/atoms/Map/Map.spec'
import { isDesktop } from 'react-device-detect'

function MapSelection ({
  value,
  onChange,
  isMultipleSelection
}: MapProps) {
  const isHintConfirmed = localStorage.getItem(LocalStorageProps.IS_HINT_CONFIRMED)
  const [mapRef, setMapRef] = useState<ymaps.Map | null>(null)
  const [pin, setPin] = useState<MapMarkerRequestValueType>(value)
  const [isHintVisible, setHintVisibility] = useState(isMultipleSelection && !isHintConfirmed)

  const {closeModal} = useModal()

  const handleClickHint = useCallback(() => {
    localStorage.setItem(LocalStorageProps.IS_HINT_CONFIRMED, `true`)
    setHintVisibility(false)
  }, [])

  const getMapRef = useCallback((map: ymaps.Map) => {
    setMapRef(map)
  }, [])

  const handlePinInstance = useCallback((evt: ymaps.Map) => {
    const handleClickPin = (pinEvent: object | ymaps.IEvent<object, object>) => {
      const [targetX, targetY] = (pinEvent as ymaps.IEvent).get(`target`).geometry.getCoordinates()

      setPin(prev => prev ? prev.filter(([x, y]) => x !== targetX && y !== targetY) : null)
      evt.events.remove([`click`], handleClickPin)
    }

    isMultipleSelection && evt && evt.events.add([`click`], handleClickPin)
  }, [isMultipleSelection])

  useEffect(() => {
    if (mapRef) {
      mapRef.cursors.push(`arrow`)
      const events = mapRef.events

      if (isMultipleSelection) {
        events.add(`click`, function (e) {
          const coords = e.get(`coords`)
          setPin(prev => prev ? [...prev, coords] : [coords])
        })
      } else {
        events.add(`click`, function (e) {
          setPin(null)
          const coords = e.get(`coords`)
          setPin([coords])
        })
      }
    }
  }, [mapRef, onChange, isMultipleSelection])

  return (
    <div className={css.wrapper}>
      <Map
        defaultState={{ center: [55.75, 37.57], zoom: 11 }}
        width={isDesktop ? "90vw" : "100vw"}
        height={isDesktop ? "90vh" : "100vh"}
        instanceRef={getMapRef}
      >
        {pin && pin.length > 0 && pin.map(coords => (
          <Placemark
            defaultGeometry={coords}
            instanceRef={handlePinInstance}
            key={`${coords}`}
          />
        ))}
      </Map>
      {pin && pin.length > 0 && (
        <div className={css.controls}>
          <Button
            onClick={() => {
              closeModal()
            }}
            variant={ButtonVariants.STRING}
            height={ButtonHeights.REGULAR}
            className={css.buttonCancel}
          >
            Отменить
          </Button>
          <Button
            onClick={() => {
              onChange(pin)
              closeModal()
            }}
            variant={ButtonVariants.FILLED}
            height={ButtonHeights.REGULAR}
          >
            Сохранить
          </Button>
        </div>
      )}
      {isHintVisible && (
        <div className={css.wrapperHint}>
          <IconPinDelete className={css.iconPin} />
          <span className={css.hint}>
            Вы можете удалить поставленную отметку, повторно
            кликнув по ней
          </span>
          <Button
            variant={ButtonVariants.FILLED}
            className={css.buttonHint}
            onClick={handleClickHint}
          >
            Понятно!
          </Button>
        </div>
      )}
    </div>
  )
}

export default memo(MapSelection)
