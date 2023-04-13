import { createAction } from '@reduxjs/toolkit'
import { LangOptions } from 'utils/const'
import { ModalOptionsType } from 'components/atoms/Modal/Modal.spec'

export const updateLang = createAction<LangOptions>(`UPDATE_LANG`)

export const toggleModal = createAction(`TOGGLE_MODAL`, function (content: JSX.Element | null, options?: ModalOptionsType) {
  return {
    payload: {
      content,
      options
    }
  }
})
