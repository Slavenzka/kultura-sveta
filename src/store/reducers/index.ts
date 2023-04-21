import { RootReducerSlices } from 'store/utils/const'
import { elasticReducer } from 'store/reducers/elastic'
import { uiReducer } from 'store/reducers/ui'
import { firebaseReducer } from 'store/reducers/firebaseReducer'

const rootReducer = {
  [RootReducerSlices.ELASTIC]: elasticReducer,
  [RootReducerSlices.UI]: uiReducer,
  [RootReducerSlices.FIREBASE]: firebaseReducer,
}

export default rootReducer
