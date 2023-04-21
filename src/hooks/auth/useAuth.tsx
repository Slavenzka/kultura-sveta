import { useForm } from 'react-hook-form'
import { useCallback, useState } from 'react'
import useFirebase from 'hooks/firebase/useFirebase'

const AuthFormNames = {
  LOGIN: `email`,
  PASSWORD: `password`
}

function useAuth () {
  const [globalError, setGlobalError] = useState(``)

  const {control, handleSubmit} = useForm({
    mode: `onChange`,
    defaultValues: {
      [AuthFormNames.LOGIN]: `lightningculture@gmail.com`,
      [AuthFormNames.PASSWORD]: `Qwerty123`
    }
  })

  const {handleSignIn} = useFirebase()

  const submitData = useCallback(data => {
    const {
      [AuthFormNames.LOGIN]: email,
      [AuthFormNames.PASSWORD]: password
    } = data

    handleSignIn({email, password}, () => {
      setGlobalError(`Неверные реквизиты для входа`)
    })
  }, [handleSignIn])

  const clearGlobalError = useCallback(() => {
    setGlobalError(``)
  }, [])

  return {
    control,
    submitData,
    handleSubmit,
    names: AuthFormNames,
    globalError,
    clearGlobalError
  }
}

export default useAuth
