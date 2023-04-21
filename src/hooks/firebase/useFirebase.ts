import { useCallback, useContext } from 'react'
import { RootState, useAppDispatch } from 'store/spec/global.spec'
import { logInUser, submitAnswer } from 'store/actions'
import { useSelector } from 'react-redux'
import { RootReducerSlices } from 'store/utils/const'
import { FirestoreContext } from 'components/providers/FirestoreProvider/FirestoreProvider'
import { AnswerItemType } from 'api/specs/answers.spec'
import { Firestore } from 'firebase/firestore'

function useFirebase () {
  const firestore = useContext(FirestoreContext)
  const isLoading = useSelector((store: RootState) => store[RootReducerSlices.FIREBASE].isLoggingIn)
  const isSubmitting = useSelector((store: RootState) => store[RootReducerSlices.FIREBASE].isSubmitting)
  const dispatch = useAppDispatch()

  const handleSignIn = useCallback((authData: {[key: string]: string}, onError: () => void) => {
    dispatch(logInUser({
      email: authData.email,
      password: authData.password,
      onError
    }))
  }, [dispatch])

  const handleSubmitData = useCallback((data: AnswerItemType) => {
    if (firestore) {
      dispatch(submitAnswer({
        firestore,
        ...data
      } as AnswerItemType & {firestore: Firestore}))
    }
  }, [dispatch, firestore])

  return {
    firestore,
    handleSignIn,
    isLoading,
    handleSubmitData,
    isSubmitting
  }
}

export default useFirebase
