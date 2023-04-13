import { PropsWithClassName } from 'specs/global.spec'
import { InputLabelProps, InputLabelVariants } from 'components/atoms/InputLabel/InputLabel.spec'
import { PropsWithChildren } from 'react'

export interface FormElementTemplateProps extends
  PropsWithChildren<PropsWithClassName>,
  Omit<InputLabelProps, `variant`>
{
  inputLabelVariant?: InputLabelVariants,
  isRequired?: boolean,
}
