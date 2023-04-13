import { ElementType, ReactNode } from 'react'

export interface PropsWithClassName {
  className?: string;
}

export type RefGetterType<T> = (node: T) => void
export type ButtonClickHandlerType = <T>(evt: T) => void

export interface PropsFormElement<ValueType, HandlerArgumentsType> {
  value: ValueType,
  onChange: (args: HandlerArgumentsType) => void;
  name?: string;
}

export interface RestPropsType {
  [key: string]: string | number | Date | null | ElementType | ReactNode | `<T>(arg: T) => void`;
}
