import { memo } from 'react'
import css from './Form.module.scss'
import classnames from 'classnames'
import { PropsWithClassName } from 'specs/global.spec'
import useManageForm, { FieldsData, Names } from 'hooks/form/useManageForm'
import { Controller } from 'react-hook-form'
import Input from 'components/atoms/Input/Input'
import Button from 'components/atoms/Button/Button'
import { ButtonHeights, ButtonVariants } from 'components/atoms/Button/Button.spec'
import { ButtonTypes } from 'components/atoms/Button/ButtonCore.spec'
import SelectCustomized from 'components/atoms/SelectCustomized/SelectCustomized'
import { SelectCustomOptionType } from 'components/atoms/SelectCustomized/SelectCustomized.spec'
import Datepicker from 'components/atoms/Datepicker/Datepicker'

function Form ({
  className
}: PropsWithClassName) {
  const {
    control,
    handleSubmitData,
  } = useManageForm()

  const {
    [Names.DATE]: {
      errorMessage: dateRequiredError,
      name: dateName,
      label: dateLabel,
    },
    [Names.OCCUPATION]: {
      errorMessage: occupationRequiredError,
      name: occupationName,
      label: occupationLabel,
    },
    [Names.WINTER]: {
      errorMessage: winterRequiredError,
      name: winterName,
      label: winterLabel,
    },
    [Names.GENDER]: {
      errorMessage: genderRequiredError,
      name: genderName,
      label: genderLabel,
      options: genderOptions
    },
  } = FieldsData

  return (
    <div className={classnames(css.wrapper, className)}>
      <form onSubmit={handleSubmitData}>
        <fieldset className={css.grid}>
          <Controller
            render={({field: {value, onChange, name}, fieldState: {error}}) => (
              <Input
                value={value as string}
                onChange={onChange}
                name={name}
                label={occupationLabel}
                error={error?.message}
              />
            )}
            name={occupationName}
            control={control}
            rules={{
              required: occupationRequiredError
            }}
          />
          <Controller
            render={({field: {value, onChange, name}, fieldState: {error}}) => (
              <Input
                value={value as string}
                onChange={onChange}
                name={name}
                label={winterLabel}
                error={error?.message}
              />
            )}
            name={winterName}
            control={control}
            rules={{
              required: winterRequiredError
            }}
          />
          <Controller
            render={({field: {value, onChange, name}, fieldState: {error}}) => (
              <SelectCustomized
                value={value as unknown as SelectCustomOptionType}
                onChange={onChange}
                label={genderLabel}
                placeholder={``}
                options={genderOptions}
                name={name}
                error={error?.message}
                isSearchable={false}
                hideSelectedOptions
              />
            )}
            name={genderName}
            control={control}
            rules={{
              required: genderRequiredError
            }}
          />
          <Controller
            render={({field: {value, onChange, name}, fieldState: {error}}) => (
              <Datepicker
                value={value}
                onChange={onChange}
              />
            )}
            name={dateName}
            control={control}
            rules={{
              required: genderRequiredError
            }}
          />
        </fieldset>
        <Button
          type={ButtonTypes.SUBMIT}
          className={css.button}
          variant={ButtonVariants.FILLED}
          height={ButtonHeights.REGULAR}
        >
          Отправить результаты
        </Button>
      </form>
    </div>
  )
}

export default memo(Form)
