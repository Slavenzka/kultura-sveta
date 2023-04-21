import { StoreFirebaseSlice } from 'store/spec/firebase.spec'
import { createReducer } from '@reduxjs/toolkit'
import { fetchAnswers, logInUser, setLoggingInStatus, submitAnswer } from 'store/actions'
import { AnswerItemType } from 'api/specs/answers.spec'

const INITIAL_STATE: StoreFirebaseSlice = {
  user: null,
  isLoggingIn: false,
  isSubmitting: false,
  isFetching: false,
  fetchError: null,
  answers: null
}

export const firebaseReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(setLoggingInStatus, (store, {payload}) => {
      store.isLoggingIn = payload
    })
    .addCase(logInUser.pending, store => {
      store.isLoggingIn = true
    })
    .addCase(logInUser.fulfilled, (store, {payload}) => {
      store.user = payload as {email: string}
      store.isLoggingIn = false
    })
    .addCase(logInUser.rejected, store => {
      store.isLoggingIn = false
    })
    .addCase(submitAnswer.pending, store => {
      store.isSubmitting = true
    })
    .addCase(submitAnswer.fulfilled, store => {
      store.isSubmitting = false
    })
    .addCase(submitAnswer.rejected, store => {
      store.isSubmitting = false
    })
    .addCase(fetchAnswers.pending, store => {
      store.isFetching = true
    })
    .addCase(fetchAnswers.fulfilled, (store, {payload}) => {
      store.isFetching = false
      store.answers = payload as AnswerItemType[]
    })
    .addCase(fetchAnswers.rejected, (store, {payload}) => {
      store.isFetching = false
      store.fetchError = payload as string
    })
})
