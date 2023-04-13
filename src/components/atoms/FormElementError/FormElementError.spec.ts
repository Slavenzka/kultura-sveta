import { PropsWithClassName } from 'specs/global.spec'
import { ReactNode } from 'react'
import { PopperProps } from 'hooks/ui/usePopperProvider'

export enum FormElementErrorVariants {
  DEFAULT = `DEFAULT`,
  ICON = `ICON`
}

export type FormElementErrorMessageType = string | ReactNode

export interface FormElementErrorProps extends
  PropsWithClassName,
  Partial<PopperProps>
{
  variant?: FormElementErrorVariants,
  message: FormElementErrorMessageType
}
