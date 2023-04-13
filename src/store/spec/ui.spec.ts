import { LangOptions } from 'utils/const'
import { ModalOptionsType } from 'components/atoms/Modal/Modal.spec'

export interface StoreModalStateType {
  content: JSX.Element | null,
  options: ModalOptionsType
}

export interface StoreUISlice {
  modal: StoreModalStateType,
  lang: LangOptions
}
