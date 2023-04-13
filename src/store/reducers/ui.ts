import { createReducer } from '@reduxjs/toolkit'
import { LangOptions } from 'utils/const'
import { toggleModal, updateLang } from 'store/actions'
import { StoreUISlice } from 'store/spec/ui.spec'

const INITIAL_STATE: StoreUISlice = {
  modal: {
    content: null,
    options: {},
  },
  lang: LangOptions.UA
}

export const uiReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(toggleModal, (store, {payload}) => {
      const {content, options = {}} = payload

      store.modal.content = content
      store.modal.options = options
    })
    .addCase(updateLang, (store, {payload}) => {
      store.lang = payload
    })
})
