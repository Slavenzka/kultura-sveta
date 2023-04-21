import { PropsWithClassName } from 'specs/global.spec'
import { MouseEventHandler, ReactNode } from 'react'

export enum ButtonTypes {
  BUTTON = `button`,
  SUBMIT = `submit`
}

export interface ExtraButtonProps {
  type: ButtonTypes,
  onClick?: MouseEventHandler,
  onMouseUp?: MouseEventHandler;
  onMouseDown?: MouseEventHandler;
}

interface ExtraRouterLinkProps {
  to: string
}

interface ExtraLinkProps {
  href: string;
  rel: `noopener norefferer`,
  target: `_blank`
}

export type ExtraProps = ExtraButtonProps | ExtraRouterLinkProps | ExtraLinkProps

export interface ButtonCoreProps extends PropsWithClassName {
  children: ReactNode,
  type?: ButtonTypes,
  /*
  * Triggers render of a link instead of a button
  */
  url?: string,
  onClick?: MouseEventHandler,
  onMouseUp?: MouseEventHandler;
  onMouseDown?: MouseEventHandler;
  tabIndex?: string;
  getRef?: (node: HTMLElement) => void
}
