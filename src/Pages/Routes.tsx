import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from 'Pages/HomePage/HomePage'
import { ElementType, ReactElement, useEffect, useMemo, useRef } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/spec/global.spec'
import { RootReducerSlices } from 'store/utils/const'
import Stats from 'Pages/Stats/Stats'

export const HOME_PAGE = `/`
export const STATS_PAGE = `/stats`

interface RoutesDescriptionItem {
  url: string,
  Component: ElementType,
  label?: string
}

type RoutesDescriptionType = RoutesDescriptionItem[]

export const RoutesDescription: RoutesDescriptionType = [
  {
    url: HOME_PAGE,
    Component: HomePage,
    label: `Home page`
  },
]

function AppRoutes () {
  const isAuthorized = useSelector((store: RootState) => store[RootReducerSlices.FIREBASE].user)
  const navigate = useNavigate()
  const isInitialRedirectDone = useRef(false)

  useEffect(() => {
    if (isAuthorized && !isInitialRedirectDone.current) {
      navigate(STATS_PAGE)
      isInitialRedirectDone.current = true
    }
  }, [navigate, isAuthorized])

  const routesList: ReactElement[] = useMemo(() => {
    const routesUnauthorized = RoutesDescription.map(({url, Component}, index) => (
      <Route
        path={isAuthorized ? url : `*`}
        element={<Component />}
        key={index}
      />
    ))

    const routesAuthorized = [
      <Route
        path={STATS_PAGE}
        element={<Stats />}
        key={STATS_PAGE}
      />
    ]

    return isAuthorized
      ? [...routesUnauthorized, ...routesAuthorized]
      : routesUnauthorized
  }, [isAuthorized])

  return (
    <Routes>
      { routesList }
    </Routes>
  )
}

export default AppRoutes
