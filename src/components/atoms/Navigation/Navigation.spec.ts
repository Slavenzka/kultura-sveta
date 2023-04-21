import { PropsWithClassName } from 'specs/global.spec'

export interface NavigationItemType {
  label: string,
  url: string
}

export interface NavigationProps extends PropsWithClassName {
  config: NavigationItemType[]
}
