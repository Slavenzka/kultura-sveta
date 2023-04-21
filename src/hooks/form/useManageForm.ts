import { useCallback } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { getCheckboxBatteryDefaultOptions, stringifyCoords, validateCheckboxBattery } from 'utils/helpers'
import { CheckboxBatteryItemType } from 'components/molecules/CheckboxBattery/CheckboxBattery.spec'
import { AnswerItemType } from 'api/specs/answers.spec'
import { FieldsData, Names } from 'utils/const'
import useFirebase from 'hooks/firebase/useFirebase'

function useManageForm () {
  const colorsDefaultValues = getCheckboxBatteryDefaultOptions(FieldsData[Names.COLORS].options as string[])
  const impressionsDefaultValues = getCheckboxBatteryDefaultOptions(FieldsData[Names.IMPRESSION].options as string[])
  const dominationDefaultValues = getCheckboxBatteryDefaultOptions(FieldsData[Names.DOMINATION].options as string[])
  const safetyDefaultValues = getCheckboxBatteryDefaultOptions(FieldsData[Names.SAFETY].options as string[])
  const orientationDefaultValues = getCheckboxBatteryDefaultOptions(FieldsData[Names.ORIENTATION].options as string[])
  const lightningDefaultValues = getCheckboxBatteryDefaultOptions(FieldsData[Names.LIGHTNING].options as string[])

  const {control, handleSubmit, formState, setValue, trigger} = useForm({
    defaultValues: {
      [Names.AGE]: null,
      [Names.REGION]: null,
      [Names.EVENING_LOCATION]: null,
      [Names.IMPRESSION]: impressionsDefaultValues,
      [Names.DOMINATION]: dominationDefaultValues,
      [Names.COLORS]: colorsDefaultValues,
      [Names.SAFETY]: safetyDefaultValues,
      [Names.ORIENTATION]: orientationDefaultValues,
      [Names.LIGHTNING]: lightningDefaultValues,
      [Names.FAVOURITE_NIGHT]: null,
      [Names.FAVOURITE_DAY]: null,
      [Names.AGREEMENT]: false,
    },
    shouldFocusError: true
  })

  const {fields: fieldsImpression} = useFieldArray({
    name: Names.IMPRESSION,
    control,
    rules: {
      validate: value => validateCheckboxBattery(value, FieldsData[Names.IMPRESSION].errorMessage)
    }
  })

  const {fields: fieldsDomination} = useFieldArray({
    name: Names.DOMINATION,
    control,
    rules: {
      validate: value => validateCheckboxBattery(value, FieldsData[Names.DOMINATION].errorMessage)
    }
  })

  const {fields: fieldsColors} = useFieldArray({
    name: Names.COLORS,
    control,
    rules: {
      validate: value => validateCheckboxBattery(value, FieldsData[Names.COLORS].errorMessage)
    }
  })

  const {fields: fieldsSafety} = useFieldArray({
    name: Names.SAFETY,
    control,
    rules: {
      validate: value => validateCheckboxBattery(value, FieldsData[Names.SAFETY].errorMessage)
    }
  })

  const {fields: fieldsOrientation} = useFieldArray({
    name: Names.ORIENTATION,
    control,
    rules: {
      validate: value => validateCheckboxBattery(value, FieldsData[Names.ORIENTATION].errorMessage)
    }
  })

  const {fields: fieldsLightning} = useFieldArray({
    name: Names.LIGHTNING,
    control,
    rules: {
      validate: value => validateCheckboxBattery(value, FieldsData[Names.LIGHTNING].errorMessage)
    }
  })

  const {
    handleSubmitData: saveData,
    isSubmitting
  } = useFirebase()

  const handleSubmitData = useCallback(data => {
    const {
      [Names.AGE]: age,
      [Names.REGION]: region,
      [Names.EVENING_LOCATION]: eveningLocation,
      [Names.IMPRESSION]: impression,
      [Names.DOMINATION]: domination,
      [Names.COLORS]: colors,
      [Names.SAFETY]: safety,
      [Names.ORIENTATION]: orientation,
      [Names.LIGHTNING]: lightning,
      [Names.FAVOURITE_NIGHT]: favouritePlacesNight,
      [Names.FAVOURITE_DAY]: favouritePlacesDay,
    } = data

    const dataToSubmit: AnswerItemType = {
      [Names.AGE]: age.value,
      [Names.REGION]: region.value,
      [Names.EVENING_LOCATION]: `${stringifyCoords(eveningLocation)}`,
      [Names.IMPRESSION]: ((impression as CheckboxBatteryItemType[]).find(({value}) => value) as CheckboxBatteryItemType).label,
      [Names.DOMINATION]: ((domination as CheckboxBatteryItemType[]).find(({value}) => value) as CheckboxBatteryItemType).label,
      [Names.COLORS]: ((colors as CheckboxBatteryItemType[]).find(({value}) => value) as CheckboxBatteryItemType).label,
      [Names.SAFETY]: ((safety as CheckboxBatteryItemType[]).find(({value}) => value) as CheckboxBatteryItemType).label,
      [Names.ORIENTATION]: ((orientation as CheckboxBatteryItemType[]).find(({value}) => value) as CheckboxBatteryItemType).label,
      [Names.LIGHTNING]: ((lightning as CheckboxBatteryItemType[]).find(({value}) => value) as CheckboxBatteryItemType).label,
      [Names.FAVOURITE_NIGHT]: `${stringifyCoords(favouritePlacesNight)}`,
      [Names.FAVOURITE_DAY]: `${stringifyCoords(favouritePlacesDay)}`,
    }

    saveData(dataToSubmit)
  }, [saveData])

  return {
    control,
    setValue,
    trigger,
    handleSubmitData: handleSubmit(handleSubmitData),
    colorsOptions: fieldsColors,
    colorsErrorMessage: formState.errors[Names.COLORS]?.root?.message,
    impressionOptions: fieldsImpression,
    impressionErrorMessage: formState.errors[Names.IMPRESSION]?.root?.message,
    dominationOptions: fieldsDomination,
    dominationErrorMessage: formState.errors[Names.DOMINATION]?.root?.message,
    safetyOptions: fieldsSafety,
    safetyErrorMessage: formState.errors[Names.SAFETY]?.root?.message,
    orientationOptions: fieldsOrientation,
    orientationErrorMessage: formState.errors[Names.ORIENTATION]?.root?.message,
    lightningOptions: fieldsLightning,
    lightningErrorMessage: formState.errors[Names.LIGHTNING]?.root?.message,
    isSubmitting
  }
}

export default useManageForm
