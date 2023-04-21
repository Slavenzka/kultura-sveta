import { AnswerItemType } from 'api/specs/answers.spec'
import { FieldValues, useFieldArray, useForm, UseFormSetValue } from 'react-hook-form'
import { ConfirmationOptions, DominationOptions, FieldsData, ImpressionOptions, Names, PinColors } from 'utils/const'
import { getCheckboxBatteryDefaultOptions, resetFieldArray } from 'utils/helpers'
import { CheckboxBatteryItemType } from 'components/molecules/CheckboxBattery/CheckboxBattery.spec'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { FilterMapMarkerType } from 'components/molecules/Filter/Filter.spec'
import { MapMarkerCoordsType } from 'components/molecules/MapMarkerRequest/MapMarkerRequest.spec'

const FILTER_CONFIG = {
  [Names.EVENING_LOCATION]: {
    type: Names.EVENING_LOCATION,
    color: ``,
    label: `Популярные вечерние места`
  },
  [Names.FAVOURITE_NIGHT]: {
    type: Names.FAVOURITE_NIGHT,
    color: `purple`,
    label: `Места прогулок вечером`
  },
  [Names.FAVOURITE_DAY]: {
    type: Names.FAVOURITE_DAY,
    color: `orange`,
    label: `Места прогулок днем`
  },
}

function useManageFilter (data: AnswerItemType[]) {
  const [filterType, setFilterType] = useState(FILTER_CONFIG[Names.EVENING_LOCATION].type)
  const [filteredEveningData, setFiltereData] = useState<FilterMapMarkerType[] | null>(null)
  const [subcategoryType, setSubcategoryType] = useState(``)

  const switchFilterType = useCallback((type: string) => {
    setFilterType(type)
  }, [])

  const filteredData = useMemo(() => {
    if (filterType === Names.EVENING_LOCATION) return filteredEveningData

    if (filterType === Names.FAVOURITE_DAY) return data.reduce((total, item) => {
      const itemData = (item[Names.FAVOURITE_DAY] as MapMarkerCoordsType[]).map(coord => ({
        coord,
        color: FILTER_CONFIG[Names.FAVOURITE_DAY].color
      }))

      total = [...total, ...itemData]
      return total
    }, [] as FilterMapMarkerType[])

    if (filterType === Names.FAVOURITE_NIGHT) return data.reduce((total, item) => {
      const itemData = (item[Names.FAVOURITE_NIGHT] as MapMarkerCoordsType[]).map(coord => ({
        coord,
        color: FILTER_CONFIG[Names.FAVOURITE_NIGHT].color
      }))

      total = [...total, ...itemData]
      return total
    }, [] as FilterMapMarkerType[])
  }, [filterType, data, filteredEveningData])

  const impressionOptions = (FieldsData[Names.IMPRESSION].options as string[]).filter(item => item !== ImpressionOptions.DONT_CARE)
  const dominationOptions = (FieldsData[Names.DOMINATION].options as string[]).filter(item => item !== DominationOptions.DONT_CARE)
  const colorsOptions = (FieldsData[Names.COLORS].options as string[]).filter(item => item !== ConfirmationOptions.DONT_CARE)
  const safetyOptions = (FieldsData[Names.SAFETY].options as string[]).filter(item => item !== ConfirmationOptions.DUNNO)
  const orientationOptions = (FieldsData[Names.ORIENTATION].options as string[]).filter(item => item !== ConfirmationOptions.DUNNO)
  const lightningOptions = (FieldsData[Names.LIGHTNING].options as string[]).filter(item => item !== ConfirmationOptions.DUNNO)

  const impressionsDefaultValues = getCheckboxBatteryDefaultOptions(impressionOptions) as CheckboxBatteryItemType[]
  const dominationDefaultValues = getCheckboxBatteryDefaultOptions(dominationOptions)
  const colorsDefaultValues = getCheckboxBatteryDefaultOptions(colorsOptions)
  const safetyDefaultValues = getCheckboxBatteryDefaultOptions(safetyOptions)
  const orientationDefaultValues = getCheckboxBatteryDefaultOptions(orientationOptions)
  const lightningDefaultValues = getCheckboxBatteryDefaultOptions(lightningOptions)

  const {control, setValue, trigger, watch} = useForm({
    mode: `onChange`,
    defaultValues: {
      [Names.IMPRESSION]: impressionsDefaultValues,
      [Names.DOMINATION]: dominationDefaultValues,
      [Names.COLORS]: colorsDefaultValues,
      [Names.SAFETY]: safetyDefaultValues,
      [Names.ORIENTATION]: orientationDefaultValues,
      [Names.LIGHTNING]: lightningDefaultValues,
    }
  })

  useEffect(() => {
    const formState = watch()

    const selectedValues = Object.entries(formState).reduce((total, [name, fieldOptions]) => {
      if (fieldOptions.find(({value}) => !!value)) {
        total = {
          name,
          selectedItems: fieldOptions.filter(({value}) => !!value).map(({label}) => label)
        }

        return total
      }

      return total
    }, null as {
      name: string,
      selectedItems: string[]
    } | null)

    const updatedFilteredData = !selectedValues
      ? null
      : data
        .filter(item => {
          selectedValues.selectedItems.includes(item[selectedValues.name] as string)
        })
        .map(item => ({
          coord: JSON.parse(item[Names.EVENING_LOCATION] as string),
          color: `black`
        } as FilterMapMarkerType))

    setFiltereData(updatedFilteredData)
  }, [watch, data])

  const handleUpdateFilteredData = useCallback((name: string, options: CheckboxBatteryItemType[]) => {
    const selectedOptions = options.filter(({value}) => !!value).map(({label}) => label)

    const updatedFilteredData = !selectedOptions || selectedOptions.length === 0
      ? null
      : data
        .filter(item => {
          return selectedOptions.includes(item[name] as string)
        })
        .map(item => ({
          coord: item[Names.EVENING_LOCATION]?.[0] as MapMarkerCoordsType,
          color: PinColors[name][item[name] as string]
        } as FilterMapMarkerType))

    setFiltereData(updatedFilteredData)
  }, [data])

  const resetRemainingFields = useCallback((targetName: string, setValue: UseFormSetValue<FieldValues>) => {
    targetName !== Names.IMPRESSION && resetFieldArray(Names.IMPRESSION, impressionsDefaultValues, setValue)
    targetName !== Names.DOMINATION && resetFieldArray(Names.DOMINATION, dominationDefaultValues, setValue)
    targetName !== Names.COLORS && resetFieldArray(Names.COLORS, colorsDefaultValues, setValue)
    targetName !== Names.SAFETY && resetFieldArray(Names.SAFETY, safetyDefaultValues, setValue)
    targetName !== Names.ORIENTATION && resetFieldArray(Names.ORIENTATION, orientationDefaultValues, setValue)
    targetName !== Names.LIGHTNING && resetFieldArray(Names.LIGHTNING, lightningDefaultValues, setValue)
  }, [
    impressionsDefaultValues,
    dominationDefaultValues,
    colorsDefaultValues,
    safetyDefaultValues,
    orientationDefaultValues,
    lightningDefaultValues
  ])

  const {fields: fieldsImpression} = useFieldArray({
    name: Names.IMPRESSION,
    control,
    rules: {
      validate: value => {
        resetRemainingFields(Names.IMPRESSION, setValue)
        handleUpdateFilteredData(Names.IMPRESSION, value)
        setSubcategoryType(Names.IMPRESSION)
        return true
      }
    }
  })

  const {fields: fieldsDomination} = useFieldArray({
    name: Names.DOMINATION,
    control,
    rules: {
      validate: value => {
        resetRemainingFields(Names.DOMINATION, setValue)
        handleUpdateFilteredData(Names.DOMINATION, value)
        setSubcategoryType(Names.DOMINATION)
        return true
      }
    }
  })

  const {fields: fieldsColors} = useFieldArray({
    name: Names.COLORS,
    control,
    rules: {
      validate: value => {
        resetRemainingFields(Names.COLORS, setValue)
        handleUpdateFilteredData(Names.COLORS, value)
        setSubcategoryType(Names.COLORS)
        return true
      }
    }
  })

  const {fields: fieldsSafety} = useFieldArray({
    name: Names.SAFETY,
    control,
    rules: {
      validate: value => {
        resetRemainingFields(Names.SAFETY, setValue)
        handleUpdateFilteredData(Names.SAFETY, value)
        setSubcategoryType(Names.SAFETY)
        return true
      }
    }
  })

  const {fields: fieldsOrientation} = useFieldArray({
    name: Names.ORIENTATION,
    control,
    rules: {
      validate: value => {
        resetRemainingFields(Names.ORIENTATION, setValue)
        handleUpdateFilteredData(Names.ORIENTATION, value)
        setSubcategoryType(Names.ORIENTATION)
        return true
      }
    }
  })

  const {fields: fieldsLightning} = useFieldArray({
    name: Names.LIGHTNING,
    control,
    rules: {
      validate: value => {
        resetRemainingFields(Names.LIGHTNING, setValue)
        handleUpdateFilteredData(Names.LIGHTNING, value)
        setSubcategoryType(Names.LIGHTNING)
        return true
      }
    }
  })

  const legendData = useMemo(() => {
    if (!subcategoryType || filterType !== Names.EVENING_LOCATION) return null

    return PinColors[subcategoryType] as unknown as {[key: string]: string}
  }, [subcategoryType, filterType])

  return {
    control,
    setValue,
    trigger,
    fieldsImpression,
    fieldsDomination,
    fieldsColors,
    fieldsSafety,
    fieldsOrientation,
    fieldsLightning,
    filteredData,
    filterConfig: FILTER_CONFIG,
    filterType,
    switchFilterType,
    legendData
  }
}

export default useManageFilter
