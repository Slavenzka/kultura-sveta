import { memo } from 'react'
import css from './Auth.module.scss'
import classnames from 'classnames'
import { PropsWithClassName } from 'specs/global.spec'
import Heading from 'components/atoms/Heading/Heading'
import { HeadingTypes } from 'components/atoms/Heading/Heading.spec'
import useAuth from 'hooks/auth/useAuth'
import { Controller } from 'react-hook-form'
import Input from 'components/atoms/Input/Input'
import { InputHeights, InputTypes } from 'components/atoms/Input/Input.spec'
import Button from 'components/atoms/Button/Button'
import { ButtonTypes } from 'components/atoms/Button/ButtonCore.spec'
import { ButtonHeights, ButtonVariants } from 'components/atoms/Button/Button.spec'
import useFirebase from 'hooks/firebase/useFirebase'
import FormElementError from 'components/atoms/FormElementError/FormElementError'

function Auth ({
  className,
  getRef
}: {
  getRef?: (evt: HTMLElement | null) => void
} & PropsWithClassName) {
  const {isLoading} = useFirebase()

  const {
    control,
    handleSubmit,
    submitData,
    names,
    globalError,
    clearGlobalError
  } = useAuth()

  return (
    <div className={classnames(css.wrapper, className)} ref={getRef}>
      <Heading
        headingStyle={HeadingTypes.H3}
        className={css.heading}
      >
        Вход в систему
      </Heading>
      <form onSubmit={handleSubmit(submitData)}>
        <fieldset className={css.grid}>
          <Controller
            render={({field: {name, value, onChange}, fieldState: {error}}) => (
              <Input
                value={value}
                onChange={evt => {
                  onChange(evt)
                  clearGlobalError()
                }}
                name={name}
                error={error && error.type !== `auth` ? error.message : undefined}
                placeholder={`Введите логин`}
                height={InputHeights.SMALL}
              />
            )}
            name={names.LOGIN}
            control={control}
            rules={{
              required: `Введите логин`
            }}
          />
          <Controller
            render={({field: {name, value, onChange}, fieldState: {error}}) => (
              <Input
                value={value}
                onChange={evt => {
                  onChange(evt)
                  clearGlobalError()
                }}
                name={name}
                error={error && error.type !== `auth` ? error.message : undefined}
                placeholder={`Введите пароль`}
                height={InputHeights.SMALL}
                type={InputTypes.PASSWORD}
              />
            )}
            name={names.PASSWORD}
            control={control}
            rules={{
              required: `Введите пароль`
            }}
          />
        </fieldset>
        <Button
          variant={ButtonVariants.FILLED}
          height={ButtonHeights.SMALL}
          type={ButtonTypes.SUBMIT}
          className={css.button}
          isLoading={isLoading}
        >
          Войти
        </Button>
        {globalError && (
          <FormElementError
            message={globalError}
            className={css.error}
          />
        )}
      </form>
    </div>
  )
}

export default memo(Auth)
