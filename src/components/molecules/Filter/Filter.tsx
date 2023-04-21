import { memo } from 'react'
import css from './Filter.module.scss'
import classnames from 'classnames'
import { AnswerItemType } from 'api/specs/answers.spec'
import useManageFilter from 'hooks/form/useManageFilter'
import CheckboxBattery from 'components/molecules/CheckboxBattery/CheckboxBattery'
import { FieldValues, UseFormSetValue } from 'react-hook-form'
import { FieldsData, Names } from 'utils/const'
import { PropsWithClassName } from 'specs/global.spec'
import MapResults from 'components/atoms/MapResults/MapResults'
import Button from 'components/atoms/Button/Button'

function Filter ({data, className}: {data: AnswerItemType[]} & PropsWithClassName) {
  const {
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
    filterConfig,
    filterType,
    switchFilterType,
    legendData
  } = useManageFilter(data)

  const isClusteredFilter = filterType === Names.EVENING_LOCATION

  return (
    <div className={classnames(css.wrapper, className)}>
      <div className={css.controls}>
        {Object.values(filterConfig).map(({type, label}, index) => (
          <Button
            onClick={() => switchFilterType(type)}
            className={classnames(css.button, {
              [css.buttonActive]: type === filterType
            })}
            key={index}
          >
            {label}
          </Button>
        ))}
      </div>
      {isClusteredFilter && (
        <>

          <CheckboxBattery
            label={FieldsData[Names.IMPRESSION].labelFilter as string}
            control={control}
            namespace={FieldsData[Names.IMPRESSION].name}
            options={fieldsImpression}
            setValue={setValue as unknown as UseFormSetValue<FieldValues>}
            trigger={trigger}
            className={css.item}
          />
          <CheckboxBattery
            label={FieldsData[Names.DOMINATION].labelFilter as string}
            control={control}
            namespace={FieldsData[Names.DOMINATION].name}
            options={fieldsDomination}
            setValue={setValue as unknown as UseFormSetValue<FieldValues>}
            trigger={trigger}
            className={css.item}
          />
          <CheckboxBattery
            label={FieldsData[Names.COLORS].labelFilter as string}
            control={control}
            namespace={FieldsData[Names.COLORS].name}
            options={fieldsColors}
            setValue={setValue as unknown as UseFormSetValue<FieldValues>}
            trigger={trigger}
            className={css.item}
          />
          <CheckboxBattery
            label={FieldsData[Names.SAFETY].labelFilter as string}
            control={control}
            namespace={FieldsData[Names.SAFETY].name}
            options={fieldsSafety}
            setValue={setValue as unknown as UseFormSetValue<FieldValues>}
            trigger={trigger}
            className={css.item}
          />
          <CheckboxBattery
            label={FieldsData[Names.ORIENTATION].labelFilter as string}
            control={control}
            namespace={FieldsData[Names.ORIENTATION].name}
            options={fieldsOrientation}
            setValue={setValue as unknown as UseFormSetValue<FieldValues>}
            trigger={trigger}
            className={css.item}
          />
          <CheckboxBattery
            label={FieldsData[Names.LIGHTNING].labelFilter as string}
            control={control}
            namespace={FieldsData[Names.LIGHTNING].name}
            options={fieldsLightning}
            setValue={setValue as unknown as UseFormSetValue<FieldValues>}
            trigger={trigger}
            className={css.item}
          />
        </>
      )}
      <MapResults
        className={css.map}
        data={filteredData}
        isClustered={isClusteredFilter}
        legendData={legendData}
      />
    </div>
  )
}

export default memo(Filter)
