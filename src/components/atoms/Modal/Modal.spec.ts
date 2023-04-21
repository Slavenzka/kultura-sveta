import { PropsWithClassName } from 'specs/global.spec'

export enum ModalTypes {
  MAP = `MAP`,
  MESSAGE_SUCCESS = `MESSAGE_SUCCESS`,
  MESSAGE_ERROR = `MESSAGE_ERROR`
}

export interface ModalOptionsType extends PropsWithClassName {
  isCloseBtnRequired?: boolean;
  isClickOutsideHandled?: boolean;
  callbackOnClose?: <Arguments>(...args: Arguments[]) => void;
  isContentOnly?: boolean;
}
