import { createReducer } from '@reduxjs/toolkit'
import { LangOptions, LocalStorageProps } from 'utils/const'
import { setAnsweredStatus, setAuthVisibility, toggleModal, updateLang } from 'store/actions'
import { StoreUISlice } from 'store/spec/ui.spec'

const INITIAL_STATE: StoreUISlice<unknown> = {
  modal: {
    type: null,
    contentProps: null,
    options: {},
  },
  lang: LangOptions.UA,
  isAuthVisible: false,
  isAnswered: !!localStorage.getItem(LocalStorageProps.KS_IS_ANSWERED)
}

export const uiReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(toggleModal, (store, {payload}) => {
      const {type, contentProps, options} = payload ?? {}

      store.modal.type = type ?? null
      store.modal.contentProps = contentProps ?? null
      store.modal.options = options ?? {}
    })
    .addCase(updateLang, (store, {payload}) => {
      store.lang = payload
    })
    .addCase(setAuthVisibility, (store, {payload}) => {
      store.isAuthVisible = payload
    })
    .addCase(setAnsweredStatus, (store, {payload}) => {
      store.isAnswered = payload
    })
})
