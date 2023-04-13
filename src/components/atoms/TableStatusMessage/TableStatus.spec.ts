import { PropsWithClassName } from 'specs/global.spec'

export interface TableStatusProps extends PropsWithClassName {
  errorMessage?: string,
  emptyDataMessage?: string,
  isLoading?: boolean,
  dataLength?: number | null
}
