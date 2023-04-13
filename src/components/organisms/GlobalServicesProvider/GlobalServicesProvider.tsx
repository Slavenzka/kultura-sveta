import 'normalize.css'
import 'styles/common.scss'
import { Provider } from 'react-redux'
import { store } from 'store/configureStore'
import { BrowserRouter } from 'react-router-dom'

function GlobalServicesProvider ({
  children
}: {
  children: JSX.Element
}) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  )
}

export default GlobalServicesProvider
