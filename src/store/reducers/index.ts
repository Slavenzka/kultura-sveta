import { RootReducerSlices } from 'store/utils/const'
import { elasticReducer } from 'store/reducers/elastic'
import { uiReducer } from 'store/reducers/ui'

const rootReducer = {
  [RootReducerSlices.ELASTIC]: elasticReducer,
  [RootReducerSlices.UI]: uiReducer,
}

export default rootReducer
