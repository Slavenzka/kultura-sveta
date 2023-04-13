import { ElementType } from 'react'
import { PropsWithClassName } from 'specs/global.spec'
import { ButtonCoreProps } from 'components/atoms/Button/ButtonCore.spec'

export enum ButtonVariants {
  DEFAULT = `DEFAULT`,
  STRING = `STRING`,
  FILLED = `FILLED`
}

export enum ButtonHeights {
  TINY = `TINY`,
  SMALL = `SMALL`,
  REGULAR = `REGULAR`,
  LARGE = `LARGE`,
  DEFAULT = `DEFAULT`
}

export interface ButtonProps extends
  PropsWithClassName,
  ButtonCoreProps
{
  /*
  * Triggers button height style presets
  */
  height?: ButtonHeights;
  /*
  * A way to provide icon component for ButtonVariants.ICON render with style presets for both button and rendered icon
  */
  IconComponent?: ElementType;
  /*
  * Triggers custom button variant to render through the switch statement
  */
  variant?: ButtonVariants;
  /*
  * Adds styling for the disabled state of the button
  */
  isDisabled?: boolean;
  /*
  * Adds styling for the loading state of the button
  */
  isLoading?: boolean;
}
