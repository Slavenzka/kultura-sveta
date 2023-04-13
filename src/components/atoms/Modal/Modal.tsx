import { memo, useCallback, useEffect, useRef } from 'react'
import css from './Modal.module.scss'
import classnames from 'classnames'
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'
import { useSelector } from 'react-redux'
import { toggleModal } from 'store/actions'
import IconClose from 'assets/icons/IconClose'
import { RootReducerSlices } from 'store/utils/const'
import { RootState, useAppDispatch } from 'store/spec/global.spec'

function Modal ({
  children
}: {
  children: JSX.Element
}) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const modal = useSelector((state: RootState) => state[RootReducerSlices.UI].modal)
  const dispatch = useAppDispatch()
  const { content, options = {} } = modal
  const {
    isCloseBtnRequired = true,
    isClickOutsideHandled = true,
    callbackOnClose,
    className,
    isContentOnly,
    ...extraOptions
  } = options

  const handleCloseModal = useCallback(() => {
    dispatch(toggleModal(null))
    callbackOnClose && callbackOnClose()
  }, [dispatch, callbackOnClose])

  const handleEscPress = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        handleCloseModal()
      }
    },
    [handleCloseModal]
  )

  const handleClickOutside = useCallback(
    (evt: MouseEvent) => {
      if (overlayRef.current && evt.target === overlayRef.current) {
        handleCloseModal()
      }
    },
    [handleCloseModal]
  )

  useEffect(() => {
    if (!!content && overlayRef.current) {
      disableBodyScroll(overlayRef.current, {
        reserveScrollBarGap: true,
      })
    } else {
      clearAllBodyScrollLocks()
    }
  }, [content])

  useEffect(() => {
    document.addEventListener('keydown', handleEscPress)

    if (isClickOutsideHandled) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('keydown', handleEscPress)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [handleEscPress, handleClickOutside, isClickOutsideHandled])

  return (
    <>
      <div
        className={classnames(css.wrapper, {
          [css.wrapperOpened]: !!content,
        })}
        ref={overlayRef}
      >
        <div
          className={classnames(css.content, className, {
            [css.contentOnly]: isContentOnly
          })}
          role={`dialog`}
          {...extraOptions}
        >
          {isCloseBtnRequired && (
            <button
              className={css.button}
              onClick={handleCloseModal}
              type='button'
            >
              <IconClose className={css.icon} />
              Close modal
            </button>
          )}
          {content}
        </div>
      </div>
      { children }
    </>
  )
}

export default memo(Modal)
