import { PropsWithClassName } from 'specs/global.spec'
import { Control, FieldValues, UseFormSetValue, UseFormTrigger } from 'react-hook-form'

export interface CheckboxBatteryItemType {
  id?: number | string,
  label: string,
  value: boolean,
  isCustom?: boolean
}

export interface CheckboxBatteryProps extends PropsWithClassName {
  label: string,
  options: CheckboxBatteryItemType[],
  control: Control,
  namespace: string,
  groupErrorMessage?: string,
  isSingleSelection?: boolean,
  setValue?: UseFormSetValue<FieldValues>,
  trigger: UseFormTrigger<FieldValues>,
}
