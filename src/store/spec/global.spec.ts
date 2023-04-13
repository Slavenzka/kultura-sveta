import { useDispatch } from 'react-redux'
import { store } from 'store/configureStore'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
