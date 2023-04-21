import { createAction } from '@reduxjs/toolkit'
import { LangOptions } from 'utils/const'
import { StoreModalStateType } from 'store/spec/ui.spec'

export const updateLang = createAction<LangOptions>(`UPDATE_LANG`)
export const setAuthVisibility = createAction<boolean>(`SET_AUTH_VISIBILITY`)
export const setAnsweredStatus = createAction<boolean>(`SET_PARTICIPATION_STATUS`)

export const toggleModal = createAction(`TOGGLE_MODAL`, function <T>(data: StoreModalStateType<T> | null) {
  return {
    payload: data
  }
})
