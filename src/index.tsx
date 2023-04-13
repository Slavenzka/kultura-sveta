import React from 'react'
import ReactDOM from 'react-dom'
import ViewSwitcher from 'components/organisms/ViewSwitcher/ViewSwitcher'
import GlobalServicesProvider from 'components/organisms/GlobalServicesProvider/GlobalServicesProvider'

const root = document.getElementById('root')

const application = (
  <GlobalServicesProvider>
    <ViewSwitcher />
  </GlobalServicesProvider>
)

ReactDOM.render(application, root)
