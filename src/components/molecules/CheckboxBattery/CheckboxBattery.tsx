import { memo, useCallback, useState } from 'react'
import css from './CheckboxBattery.module.scss'
import classnames from 'classnames'
import InputLabel from 'components/atoms/InputLabel/InputLabel'
import {
  CheckboxBatteryItemType,
  CheckboxBatteryProps
} from 'components/molecules/CheckboxBattery/CheckboxBattery.spec'
import Input from 'components/atoms/Input/Input'
import { InputVariants } from 'components/atoms/Input/Input.spec'
import { Controller } from 'react-hook-form'
import FormElementError from 'components/atoms/FormElementError/FormElementError'
import Button from 'components/atoms/Button/Button'

function CheckboxBattery ({
  className,
  label,
  options,
  control,
  namespace,
  groupErrorMessage,
  isSingleSelection,
  setValue,
  trigger,
}: CheckboxBatteryProps) {
  const [isOtherVisible, setOtherVisibility] = useState(false)
  const otherOption = options.find(({isCustom}) => isCustom)
  const otherOptionId = otherOption
    ? (otherOption as CheckboxBatteryItemType).id
    : null

  const onSingleSelectionChange = useCallback((updatedValue: CheckboxBatteryItemType) => {
    if (isSingleSelection && setValue) {
      options.forEach(({id, label, isCustom}, index) => {
        if (id === updatedValue.id) return null

        if (isCustom) {
          return setValue(`${namespace}.${index}`, {
            id,
            label: ``,
            value: false,
            isCustom: true
          })
        }

        setValue(`${namespace}.${index}`, {
          id,
          label: label,
          value: false
        })
      })
    }
  }, [isSingleSelection, setValue, options, namespace])

  return (
    <InputLabel
      className={classnames(css.wrapper, className)}
      label={label}
      TagName="div"
    >
      {options.filter(({isCustom}) => !isCustom).map((item, index) => (
        <Controller
          render={({field: {value, onChange}}) => (
            <Input
              checked={value.value}
              label={value.label}
              onChange={() => {
                const updatedValue = {
                  ...item,
                  value: !value.value
                }

                onChange(updatedValue)
                trigger(namespace)
                isSingleSelection && onSingleSelectionChange(updatedValue)
              }}
              variant={InputVariants.CHECKBOX_DEFAULT}
              className={css.item}
            />
          )}
          control={control}
          name={`${namespace}.${index}`}
          key={index}
        />
      ))}
      {otherOptionId && !isOtherVisible && (
        <Button
          onClick={() => setOtherVisibility(true)}
          className={css.button}
        >
          + Другой вариант
        </Button>
      )}
      {otherOptionId && isOtherVisible && (
        <Controller
          render={({field: {value, onChange, name}}) => (
            <>
              <Input
                value={value.label as string}
                onChange={evt => {
                  const updatedLabel = (evt.target as HTMLInputElement).value

                  const updatedValue = updatedLabel
                    ? {
                      ...otherOption,
                      label: updatedLabel,
                      value: true,
                    }
                    : {
                      ...otherOption,
                      label: ``,
                      value: false,
                    }

                  onChange(updatedValue)
                  trigger(namespace)
                  isSingleSelection && onSingleSelectionChange(updatedValue)
                }}
                name={name}
                className={css.input}
                placeholder={`Введите свой вариант ответа`}
              />
            </>
          )}
          name={`${namespace}.${options.length - 1}`}
          control={control}
          key={otherOptionId}
        />
      )}
      {groupErrorMessage && (
        <FormElementError
          message={groupErrorMessage}
          className={css.error}
        />
      )}
    </InputLabel>
  )
}

export default memo(CheckboxBattery)
