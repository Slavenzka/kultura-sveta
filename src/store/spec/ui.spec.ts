import { LangOptions } from 'utils/const'
import { ModalOptionsType, ModalTypes } from 'components/atoms/Modal/Modal.spec'

export interface StoreModalStateType<T> {
  type: ModalTypes | null,
  contentProps?: T,
  options?: ModalOptionsType
}

export interface StoreUISlice<T> {
  modal: StoreModalStateType<T>,
  lang: LangOptions,
  isAuthVisible: boolean,
  isAnswered: boolean
}
