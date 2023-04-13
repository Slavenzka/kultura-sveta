import { PropsWithClassName } from 'specs/global.spec'
import { HTMLProps } from 'react'
import { InputLabelProps } from 'components/atoms/InputLabel/InputLabel.spec'
import { InputVariants } from 'components/atoms/Input/Input.spec'

export interface InputCheckboxProps extends
  Omit<HTMLProps<HTMLInputElement>, `label` | `ref` | `value`>,
  PropsWithClassName,
  Pick<InputLabelProps, `classNameLabel` | `isRequired` | `label`>
{
  checked?: boolean,
  variant?: InputVariants,
  isLoading?: boolean,
  isDisabled?: boolean,
  error?: string,
  ref?: (node: HTMLInputElement) => void
}
