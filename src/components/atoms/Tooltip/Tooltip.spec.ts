import usePopperProvider from 'hooks/ui/usePopperProvider'
import { PropsWithClassName } from 'specs/global.spec'

export enum TooltipVariants {
  DEFAULT = `DEFAULT`,
}

export interface TooltipProps extends
  Omit<ReturnType<typeof usePopperProvider>, `setReferenceElement`>,
  PropsWithClassName
{
  variant?: TooltipVariants,
}
