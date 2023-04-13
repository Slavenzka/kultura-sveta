import { Route, Routes } from 'react-router-dom'
import HomePage from 'Pages/HomePage/HomePage'
import { ElementType, useMemo } from 'react'

export const HOME_PAGE = `/`

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
  const routesList = useMemo(() => {
    return RoutesDescription.map(({url, Component}, index) => (
      <Route
        path={url}
        element={<Component />}
        key={index}
      />
    ))
  }, [])

  return (
    <Routes>
      { routesList }
    </Routes>
  )
}

export default AppRoutes
