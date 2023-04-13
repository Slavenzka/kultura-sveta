import { PropsWithClassName } from 'specs/global.spec'
import { FormElementTemplateProps } from 'components/templates/FormElementTemplate/FormElementTemplate.spec'
import { PublicBaseSelectProps } from 'react-select/base'
import { components, GroupBase } from 'react-select'
import { FormElementErrorVariants } from 'components/atoms/FormElementError/FormElementError.spec'

export enum SelectVariants {
  DEFAULT = `DEFAULT`,
}

export interface SelectCustomOptionType {
  label: string,
  value: string | number,
  data?: unknown
}

export interface SelectCustomizedProps extends
  PropsWithClassName,
  FormElementTemplateProps,
  Omit<PublicBaseSelectProps<SelectCustomOptionType, boolean, GroupBase<SelectCustomOptionType>>, `onChange` | `inputValue` | `onInputChange` | `onMenuClose` | `onMenuOpen`>,
  Partial<Pick<PublicBaseSelectProps<SelectCustomOptionType, boolean, GroupBase<SelectCustomOptionType>>, `inputValue` | `onInputChange` | `onMenuClose` | `onMenuOpen`>>
{
  variant?: SelectVariants,
  isDisabled?: boolean,
  isLoading?: boolean,
  error?: string,
  errorVariant?: FormElementErrorVariants,
  customComponents?:  Pick<Partial<typeof components>, any>,
  onChange:(option: SelectCustomOptionType | null) => void
}
