import { InputTextProps } from 'components/atoms/Input/InputText/InputText.spec'
import { InputCheckboxProps } from 'components/atoms/Input/InputCheckbox/InputCheckbox.spec'

export enum InputVariants {
  DEFAULT = `DEFAULT`,
  CHECKBOX_DEFAULT = `CHECKBOX_DEFAULT`,
  CHECKBOX_SWITCH = `CHECKBOX_SWITCH`,
  SEARCH = `SEARCH`,
  CALENDAR_DEFAULT = `CALENDAR_DEFAULT`,
  PASSWORD = `PASSWORD`,
  TEXTAREA = `TEXTAREA`
}

export enum InputTypes {
  TEXT = `text`,
  NUMBER = `number`,
  TEL = `tel`,
  EMAIL = `email`,
  CHECKBOX = `checkbox`,
  PASSWORD = `password`
}

export enum InputHeights {
  AUTO = `AUTO`,
  SMALL = `SMALL`,
  REGULAR = `REGULAR`,
  LARGE = `LARGE`
}

export type InputProps = InputTextProps | InputCheckboxProps
