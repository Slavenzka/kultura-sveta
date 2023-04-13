import { memo, useMemo } from 'react'
import css from './TableStatus.module.scss'
import { TableStatusProps } from './TableStatus.spec'
import classnames from 'classnames'
import IconSpinner from 'assets/icons/IconSpinner'
import IconFormElementError from 'assets/icons/IconFormElementError'
import { useSelector } from 'react-redux'
import { RootState } from 'store/spec/global.spec'
import { RootReducerSlices } from 'store/utils/const'
import PreloaderHorizontal from 'components/atoms/PreloaderHorizontal/PreloaderHorizontal'

const TABLE_STATUS_MESSAGE_HEIGHT = 100

function TableStatus ({
  className,
  isLoading,
  errorMessage,
  emptyDataMessage,
  dataLength
}: TableStatusProps) {
  const fontSize = useSelector((store: RootState) => store[RootReducerSlices.ELASTIC].curFontSize)
  const isNoData = dataLength === null || dataLength === undefined
  const isEmptyData = dataLength === 0
  const isLoadingNext = isLoading && !isNoData && !isEmptyData

  const content = useMemo(() => {
    if (isLoading && isNoData) return <IconSpinner className={css.iconSpinner} />

    if (isLoadingNext) return <PreloaderHorizontal className={css.preloaderHorizontal} />

    if (errorMessage) {
      return (
        <div className={css.wrapperError}>
          <IconFormElementError className={css.iconError} />
          <span
            className={css.errorMessage}
            dangerouslySetInnerHTML={{ __html: errorMessage }}
          />
        </div>
      )
    }

    return emptyDataMessage
  }, [
    isLoading,
    isLoadingNext,
    errorMessage,
    isNoData,
    isEmptyData,
    emptyDataMessage,
  ])

  if (!isLoading && !isEmptyData && !errorMessage) return null

  return (
    <div
      className={classnames(css.wrapper, className, {
        [css.wrapperReset]: isLoadingNext
      })}
      style={className || isLoadingNext
        ? {}
        : {
          height: `${TABLE_STATUS_MESSAGE_HEIGHT * fontSize / 10}px`
        }
      }
    >
      {content}
    </div>
  )
}

export default memo(TableStatus)
