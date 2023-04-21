import { memo, useMemo } from 'react'
import css from './MapMarkerRequest.module.scss'
import classnames from 'classnames'
import { MapMarkerRequestProps } from 'components/molecules/MapMarkerRequest/MapMarkerRequest.spec'
import InputLabel from 'components/atoms/InputLabel/InputLabel'
import Button from 'components/atoms/Button/Button'
import useModal from 'hooks/ui/useModal'

function MapMarkerRequest ({
  className,
  label,
  value,
  onChange,
  children
}: MapMarkerRequestProps) {
  const {showMapModal} = useModal()

  const content = useMemo(() => {
    const isEmpty = !value

    if (isEmpty) return (
      <Button
        className={css.button}
        onClick={() => showMapModal(value, onChange)}
      >
        + Выбрать место на карте
      </Button>
    )

    return (
      <div className={css.content}>
        <span className={css.address}>
          {JSON.stringify(value)}
        </span>
        <Button
          className={css.button}
          onClick={() => showMapModal(value, onChange)}
        >
          + Изменить выбранный адрес
        </Button>
      </div>
    )
  }, [value, showMapModal, onChange])

  return (
    <InputLabel
      label={label}
      TagName="div"
      className={classnames(css.wrapper, className)}
    >
      {content}
      {children}
    </InputLabel>
  )
}

export default memo(MapMarkerRequest)
