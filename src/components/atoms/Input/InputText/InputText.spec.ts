import { HTMLProps, PropsWithChildren } from 'react'
import { PropsWithClassName } from 'specs/global.spec'
import { InputLabelProps } from 'components/atoms/InputLabel/InputLabel.spec'
import { FormElementErrorVariants } from 'components/atoms/FormElementError/FormElementError.spec'
import { InputHeights, InputTypes, InputVariants } from 'components/atoms/Input/Input.spec'

export interface InputTextProps extends
  Omit<HTMLProps<HTMLInputElement>, `label` | `ref`>,
  PropsWithChildren<PropsWithClassName>,
  Pick<InputLabelProps, `classNameLabel` | `isRequired` | `label`>
{
  type?: InputTypes,
  height?: InputHeights,
  variant?: InputVariants,
  error?: string,
  errorVariant?: FormElementErrorVariants,
  isLoading?: boolean,
  isDisabled?: boolean,
  ref?: (node: HTMLInputElement) => void
}
