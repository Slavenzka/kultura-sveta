import rootReducer from 'store/reducers'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [`FIREBASE_INIT`, `TOGGLE_MODAL`]
    }
  })
})
