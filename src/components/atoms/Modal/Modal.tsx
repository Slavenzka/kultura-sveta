import { memo, useCallback, useEffect, useMemo, useRef } from 'react'
import css from './Modal.module.scss'
import classnames from 'classnames'
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'
import { useSelector } from 'react-redux'
import { toggleModal } from 'store/actions'
import IconClose from 'assets/icons/IconClose'
import { RootReducerSlices } from 'store/utils/const'
import { RootState, useAppDispatch } from 'store/spec/global.spec'
import { ModalTypes } from 'components/atoms/Modal/Modal.spec'
import Map from 'components/atoms/Map/Map'
import { MapProps } from 'components/atoms/Map/Map.spec'
import ReactDOM from 'react-dom'
import ModalMessage from 'components/molecules/modals/ModalMessage/ModalMessage'
import { ModalMessageProps } from 'components/molecules/modals/ModalMessage/ModalMessage.spec'

function Modal ({
  children
}: {
  children?: JSX.Element
}) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const modal = useSelector((state: RootState) => state[RootReducerSlices.UI].modal)
  const dispatch = useAppDispatch()
  const { type, contentProps, options } = modal
  const {
    isCloseBtnRequired = true,
    isClickOutsideHandled = true,
    callbackOnClose,
    className,
    isContentOnly,
    ...extraOptions
  } = options ?? {}
  const isModalVisible = !!type || children

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
    if (!!isModalVisible && overlayRef.current) {
      disableBodyScroll(overlayRef.current, {
        reserveScrollBarGap: true,
      })
    } else {
      clearAllBodyScrollLocks()
    }
  }, [isModalVisible])

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

  const content = useMemo(() => {
    switch (type) {
      case ModalTypes.MESSAGE_ERROR: {
        return (
          <ModalMessage {...(contentProps as ModalMessageProps)} isError />
        )
      }
      case ModalTypes.MESSAGE_SUCCESS: {
        return (
          <ModalMessage {...(contentProps as ModalMessageProps)} />
        )
      }
      case ModalTypes.MAP: {
        return (
          <Map {...(contentProps as MapProps)} />
        )
      }
      default: return null
    }
  }, [type, contentProps])

  if (!isModalVisible) return null

  const modalNode = (
    <>
      <div
        className={classnames(css.wrapper, {
          [css.wrapperOpened]: isModalVisible,
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
          {children || content}
        </div>
      </div>
    </>
  )

  return ReactDOM.createPortal(modalNode, document.body)
}

export default memo(Modal)
