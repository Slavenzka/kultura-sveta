import { useState } from 'react'
import { usePopper } from 'react-popper'

export enum PopperPlacementTypes {
  AUTO = `auto`,
  AUTO_START = `auto-start`,
  AUTO_END = `auto-end`,
  TOP = `top`,
  TOP_START = `top-start`,
  TOP_END = `top-end`,
  BOTTOM = `bottom`,
  BOTTOM_START = `bottom-start`,
  BOTTOM_END = `bottom-end`,
  RIGHT = `right`,
  RIGHT_START = `right-start`,
  RIGHT_END = `right-end`,
  LEFT = `left`,
  LEFT_START = `left-start`,
  LEFT_END = `left-end`,
}

export interface PopperProps {
  placement?: PopperPlacementTypes,
  offset?: [number, number]
}

function usePopperProvider ({
  placement = PopperPlacementTypes.AUTO,
  offset = [0, 5]
}: PopperProps = {}) {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null)
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: arrowElement,
        },
      },
      {
        name: `offset`,
        options: {
          offset
        }
      }
    ],
    placement,
  })

  return {
    setReferenceElement,
    setPopperElement,
    setArrowElement,
    popperProps: {
      style: styles.popper,
      ...attributes.popper
    },
    arrowProps: {
      style: styles.arrow
    }
  }
}

export default usePopperProvider
