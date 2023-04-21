import { memo, useMemo } from 'react'
import css from './MapResults.module.scss'
import classnames from 'classnames'
import { MapResultsValueItem } from 'components/atoms/MapResults/MapResults.spec'
import { Map, Clusterer, Placemark, YMaps } from '@pbe/react-yandex-maps'
import Legend from 'components/atoms/Legend/Legend'

function MapResults ({
  className,
  data,
  isClustered,
  legendData
}: MapResultsValueItem) {
  const placemarks = useMemo(() => {
    if (!data || data.length === 0) return null

    return data.map(({coord, color}) => (
      <Placemark
        defaultGeometry={coord}
        options={{
          iconColor: color
        }}
        key={`${color}-${coord}`}
      />
    ))
  }, [data])

  const content = isClustered
    ? (
      <Clusterer
        options={{
          clusterIconLayout: `default#pieChart`,
          clusterIconPieChartRadius: 25,
          clusterIconPieChartCoreRadius: 15,
          clusterIconPieChartStrokeWidth: 3,
          hasBalloon: false,
          clusterHideIconOnBalloonOpen: false,
          geoObjectHideIconOnBalloonOpen: false,
          groupByCoordinates: false,
          clusterDisableClickZoom: true,
          gridSize: 80
        }}
      >
        {placemarks}
      </Clusterer>
    )
    : placemarks

  return (
    <div className={classnames(css.wrapper, className)}>
      <YMaps>
        <Map
          defaultState={{ center: [55.75, 37.57], zoom: 9 }}
          width="100%"
          height="90vh"
          modules={[
            'layout.PieChart'
          ]}
        >
          {content}
        </Map>
      </YMaps>
      {legendData && (
        <Legend
          data={legendData}
          className={css.legend}
        />
      )}
    </div>
  )
}

export default memo(MapResults)
