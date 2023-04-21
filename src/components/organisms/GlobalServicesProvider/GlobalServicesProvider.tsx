import 'normalize.css'
import 'styles/common.scss'
import { Provider } from 'react-redux'
import { store } from 'store/configureStore'
import { HashRouter } from 'react-router-dom'
import Modal from 'components/atoms/Modal/Modal'
import { YMaps } from '@pbe/react-yandex-maps'

function GlobalServicesProvider ({
  children
}: {
  children: JSX.Element
}) {
  return (
    <Provider store={store}>
      <HashRouter>
        <YMaps>
          <Modal />
          {children}
        </YMaps>
      </HashRouter>
    </Provider>
  )
}

export default GlobalServicesProvider
