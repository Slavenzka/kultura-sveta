import { RefGetterType } from 'specs/global.spec'
import { DataHTMLAttributes, LegacyRef } from 'react'

export interface IconProps extends DataHTMLAttributes<SVGSVGElement> {
  // Class name for icon styling
  className?: string;
  // Ref setter
  ref?: LegacyRef<SVGSVGElement> | RefGetterType<SVGSVGElement>;
  isOutline?: boolean
}
