import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import {
  MapMarkerRequestOnChangeType,
  MapMarkerRequestValueType
} from 'components/molecules/MapMarkerRequest/MapMarkerRequest.spec'
import { toggleModal } from 'store/actions'
import { ModalTypes } from 'components/atoms/Modal/Modal.spec'
import { ModalMessageProps } from 'components/molecules/modals/ModalMessage/ModalMessage.spec'

function useModal () {
  const dispatch = useDispatch()

  const showMapModal = useCallback((value: MapMarkerRequestValueType, onChange: MapMarkerRequestOnChangeType, isMultipleSelection?: boolean) => {
    dispatch(toggleModal({
      type: ModalTypes.MAP,
      contentProps: {
        value,
        onChange,
        isMultipleSelection
      }
    }))
  }, [dispatch])

  const showSuccessModal = useCallback((data: ModalMessageProps) => {
    dispatch(toggleModal({
      type: ModalTypes.MESSAGE_SUCCESS,
      contentProps: data
    }))
  }, [dispatch])

  const closeModal = useCallback(() => {
    dispatch(toggleModal(null))
  }, [dispatch])

  return {
    showMapModal,
    showSuccessModal,
    closeModal
  }
}

export default useModal
