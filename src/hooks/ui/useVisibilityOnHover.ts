import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'

function useVisibilityOnHover () {
  const [isVisible, setVisibilityStatus] = useState(false)
  const nodeRef = useRef<ReactNode | null>(null)

  const handleSetRef = useCallback((node: ReactNode) => {
    nodeRef.current = node
  }, [])

  useEffect(() => {
    function showError () {
      setVisibilityStatus(true)
    }

    function hideError () {
      setVisibilityStatus(false)
    }

    if (nodeRef.current) {
      (nodeRef.current as HTMLElement).addEventListener(`mouseenter`, showError);
      (nodeRef.current as HTMLElement).addEventListener(`mouseleave`, hideError);
    }

    return function () {
      if (nodeRef.current) {
        (nodeRef.current as HTMLElement).removeEventListener(`mouseenter`, showError);
        (nodeRef.current as HTMLElement).removeEventListener(`mouseleave`, hideError);
      }
    }
  }, [])

  return {
    isVisible,
    handleSetRef
  }
}

export default useVisibilityOnHover
