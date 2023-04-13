import { ElementType, ReactNode } from 'react'
import { PropsWithClassName } from 'specs/global.spec'

export enum InputLabelVariants {
  DEFAULT = `DEFAULT`,
  DARK = `DARK`,
  IMAGE_DEFAULT = `IMAGE_DEFAULT`,
}

export interface InputLabelProps extends PropsWithClassName {
  /*
  * External class name for label span containing text
  */
  classNameLabel?: string;
  /*
  * Toggles application of "required" styles
  */
  isRequired?: boolean;
  /*
  * Toggles application of "disabled" styles
  */
  isDisabled?: boolean;
  /*
  * Toggles application of "error" styles
  */
  isError?: boolean;
  /*
  * Toggles application of "required" styles
  */
  label?: string | ReactNode;
  /*
  * Toggles style presets
  */
  variant?: InputLabelVariants;
  TagName?: ElementType
}
