import { useCallback, useContext, useEffect } from 'react'
import { FirestoreContext } from 'components/providers/FirestoreProvider/FirestoreProvider'
import { RootState, useAppDispatch } from 'store/spec/global.spec'
import { fetchAnswers } from 'store/actions'
import { useSelector } from 'react-redux'
import { RootReducerSlices } from 'store/utils/const'

function useAnswers () {
  const {
    answers,
    isFetching,
    fetchError
  } = useSelector((store: RootState) => store[RootReducerSlices.FIREBASE])
  const firestore = useContext(FirestoreContext)
  const dispatch = useAppDispatch()

  const handleFetchAnswers = useCallback(() => {
    if (firestore) {
      dispatch(fetchAnswers(firestore))
    }
  }, [dispatch, firestore])

  useEffect(() => {
    if (!answers && !isFetching && !fetchError) {
      handleFetchAnswers()
    }
  }, [answers, isFetching, fetchError, handleFetchAnswers])

  return {
    data: answers,
    isFetching
  }
}

export default useAnswers
