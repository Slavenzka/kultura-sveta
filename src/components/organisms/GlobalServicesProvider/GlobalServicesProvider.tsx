import 'normalize.css'
import 'styles/common.scss'
import { Provider } from 'react-redux'
import { store } from 'store/configureStore'
import Modal from 'components/atoms/Modal/Modal'
import { YMaps } from '@pbe/react-yandex-maps'
import { BrowserRouter } from 'react-router-dom'

function GlobalServicesProvider ({
  children
}: {
  children: JSX.Element
}) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <YMaps>
          <Modal />
          {children}
        </YMaps>
      </BrowserRouter>
    </Provider>
  )
}

export default GlobalServicesProvider
