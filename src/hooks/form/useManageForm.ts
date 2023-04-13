import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { SelectCustomOptionType } from 'components/atoms/SelectCustomized/SelectCustomized.spec'

export const Names = {
  DATE: `DATE`,
  OCCUPATION: `OCCUPATION`,
  WINTER: `WINTER`,
  GENDER: `GENDER`
}

export const FieldsData = {
  [Names.DATE]: {
    name: Names.DATE,
    label: `Дата заполнения`,
    errorMessage: `Пожалуйста, выберите дату`
  },
  [Names.OCCUPATION]: {
    name: Names.OCCUPATION,
    label: `Ваш род занятий`,
    errorMessage: `Пожалуйста, укажите Ваш род занятий`
  },
  [Names.OCCUPATION]: {
    name: Names.OCCUPATION,
    label: `Ваш род занятий`,
    errorMessage: `Пожалуйста, укажите Ваш род занятий`
  },
  [Names.WINTER]: {
    name: Names.WINTER,
    label: `Сколько времени Вы проводите на улице зимой?`,
    errorMessage: `Пожалуйста, поделитесь хотя бы ориентировочной оценкой`
  },
  [Names.GENDER]: {
    name: Names.GENDER,
    label: `Ваш пол`,
    errorMessage: `Пожалуйста, укажите Ваш пол`,
    options: [
      {
        label: `Мужской`,
        value: `male`
      },
      {
        label: `Женский`,
        value: `female`
      },
    ] as SelectCustomOptionType[]
  },
}

function useManageForm () {
  const {control, handleSubmit} = useForm({
    defaultValues: {
      [Names.DATE]: null,
      [Names.OCCUPATION]: ``,
      [Names.WINTER]: ``,
      [Names.GENDER]: null
    }
  })

  const handleSubmitData = useCallback(data => {
    console.log(data)
  }, [])

  return {
    control,
    handleSubmitData: handleSubmit(handleSubmitData),
  }
}

export default useManageForm
