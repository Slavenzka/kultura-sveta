import { memo } from 'react'
import css from './Form.module.scss'
import classnames from 'classnames'
import { PropsWithClassName } from 'specs/global.spec'
import useManageForm from 'hooks/form/useManageForm'
import { Controller, FieldValues, UseFormSetValue } from 'react-hook-form'
import Input from 'components/atoms/Input/Input'
import Button from 'components/atoms/Button/Button'
import { ButtonHeights, ButtonVariants } from 'components/atoms/Button/Button.spec'
import { ButtonTypes } from 'components/atoms/Button/ButtonCore.spec'
import SelectCustomized from 'components/atoms/SelectCustomized/SelectCustomized'
import { SelectCustomOptionType } from 'components/atoms/SelectCustomized/SelectCustomized.spec'
import { InputVariants } from 'components/atoms/Input/Input.spec'
import CheckboxBattery from 'components/molecules/CheckboxBattery/CheckboxBattery'
import { CheckboxBatteryItemType } from 'components/molecules/CheckboxBattery/CheckboxBattery.spec'
import { MapMarkerRequestValueType } from 'components/molecules/MapMarkerRequest/MapMarkerRequest.spec'
import useModal from 'hooks/ui/useModal'
import IconMap from 'assets/icons/IconMap'
import { getMapPickerValue } from 'utils/helpers'
import { FieldsData, Names } from 'utils/const'

function Form ({
  className
}: PropsWithClassName) {
  const {
    control,
    setValue,
    trigger,
    handleSubmitData,
    impressionOptions,
    impressionErrorMessage,
    dominationOptions,
    dominationErrorMessage,
    colorsOptions,
    colorsErrorMessage,
    safetyOptions,
    safetyErrorMessage,
    orientationOptions,
    orientationErrorMessage,
    lightningOptions,
    lightningErrorMessage,
    isSubmitting
  } = useManageForm()

  const {showMapModal} = useModal()

  const {
    [Names.AGE]: {
      errorMessage: ageRequiredError,
      name: ageName,
      label: ageLabel,
      options: ageOptions
    },
    [Names.REGION]: {
      errorMessage: regionRequiredError,
      name: regionName,
      label: regionLabel,
      options: regionOptions
    },
    [Names.EVENING_LOCATION]: {
      errorMessage: eveningLocationRequiredError,
      name: eveningLocationName,
      label: eveningLocationLabel,
    },
    [Names.IMPRESSION]: {
      name: impressionName,
      label: impressionLabel,
    },
    [Names.DOMINATION]: {
      name: dominationName,
      label: dominationLabel,
    },
    [Names.COLORS]: {
      name: colorsName,
      label: colorsLabel,
    },
    [Names.SAFETY]: {
      name: safetyName,
      label: safetyLabel,
    },
    [Names.ORIENTATION]: {
      name: orientationName,
      label: orientationLabel,
    },
    [Names.LIGHTNING]: {
      name: lightningName,
      label: lightningLabel,
    },
    [Names.FAVOURITE_NIGHT]: {
      errorMessage: favouriteNightLocationRequiredError,
      name: favouriteNightLocationName,
      label: favouriteNightLocationLabel,
    },
    [Names.FAVOURITE_DAY]: {
      errorMessage: favouriteDayLocationRequiredError,
      name: favouriteDayLocationName,
      label: favouriteDayLocationLabel,
    },
    [Names.AGREEMENT]: {
      errorMessage: agreementRequiredError,
      name: agreementName,
      label: agreementLabel,
    },
  } = FieldsData

  return (
    <div className={classnames(css.wrapper, className)}>
      <form onSubmit={handleSubmitData}>
        <fieldset className={css.containerDouble}>
          <Controller
            render={({field: {value, onChange, name}, fieldState: {error}}) => (
              <SelectCustomized
                value={value as unknown as SelectCustomOptionType}
                onChange={onChange}
                label={ageLabel}
                placeholder={``}
                options={ageOptions as SelectCustomOptionType[]}
                name={name}
                error={error?.message}
                isSearchable={false}
                hideSelectedOptions
              />
            )}
            name={ageName}
            control={control}
            rules={{
              required: ageRequiredError
            }}
          />
          <Controller
            render={({field: {value, onChange, name}, fieldState: {error}}) => (
              <SelectCustomized
                value={value as unknown as SelectCustomOptionType}
                onChange={onChange}
                label={regionLabel}
                placeholder={``}
                options={regionOptions as SelectCustomOptionType[]}
                name={name}
                error={error?.message}
                isSearchable={false}
                hideSelectedOptions
              />
            )}
            name={regionName}
            control={control}
            rules={{
              required: regionRequiredError
            }}
          />
        </fieldset>
        <fieldset className={css.containerSingle}>
          <Controller
            render={({field: {value, onChange, name}, fieldState: {error}}) => (
              <Input
                value={getMapPickerValue(value as MapMarkerRequestValueType, true)}
                onChange={onChange}
                onClick={() => showMapModal(value as MapMarkerRequestValueType, onChange)}
                name={name}
                label={eveningLocationLabel}
                placeholder={`Нажмите для перехода к карте`}
                className={css.inputMap}
                error={error?.message}
              >
                <IconMap
                  className={classnames(css.iconMap, {
                    [css.iconMapError]: error?.message
                  })}
                />
              </Input>
            )}
            name={eveningLocationName}
            control={control}
            rules={{
              required: eveningLocationRequiredError
            }}
          />
          <CheckboxBattery
            label={impressionLabel}
            control={control}
            namespace={impressionName}
            options={impressionOptions as CheckboxBatteryItemType[]}
            groupErrorMessage={impressionErrorMessage}
            setValue={setValue as unknown as UseFormSetValue<FieldValues>}
            trigger={trigger}
            className={css.checkboxGroup}
            isSingleSelection
          />
          <CheckboxBattery
            label={dominationLabel}
            control={control}
            namespace={dominationName}
            options={dominationOptions as CheckboxBatteryItemType[]}
            groupErrorMessage={dominationErrorMessage}
            setValue={setValue as unknown as UseFormSetValue<FieldValues>}
            trigger={trigger}
            isSingleSelection
          />
          <CheckboxBattery
            label={colorsLabel}
            control={control}
            namespace={colorsName}
            options={colorsOptions as CheckboxBatteryItemType[]}
            groupErrorMessage={colorsErrorMessage}
            setValue={setValue as unknown as UseFormSetValue<FieldValues>}
            trigger={trigger}
            isSingleSelection
          />
          <CheckboxBattery
            label={safetyLabel}
            control={control}
            namespace={safetyName}
            options={safetyOptions as CheckboxBatteryItemType[]}
            groupErrorMessage={safetyErrorMessage}
            setValue={setValue as unknown as UseFormSetValue<FieldValues>}
            trigger={trigger}
            isSingleSelection
          />
          <CheckboxBattery
            label={orientationLabel}
            control={control}
            namespace={orientationName}
            options={orientationOptions as CheckboxBatteryItemType[]}
            groupErrorMessage={orientationErrorMessage}
            setValue={setValue as unknown as UseFormSetValue<FieldValues>}
            trigger={trigger}
            isSingleSelection
          />
          <CheckboxBattery
            label={lightningLabel}
            control={control}
            namespace={lightningName}
            options={lightningOptions as CheckboxBatteryItemType[]}
            groupErrorMessage={lightningErrorMessage}
            setValue={setValue as unknown as UseFormSetValue<FieldValues>}
            trigger={trigger}
            isSingleSelection
          />
        </fieldset>
        <fieldset className={classnames(css.containerDouble, css.containerMaps)}>
          <Controller
            render={({field: {value, onChange, name}, fieldState: {error}}) => (
              <Input
                value={getMapPickerValue(value as MapMarkerRequestValueType, true)}
                onChange={onChange}
                onClick={() => showMapModal(value as MapMarkerRequestValueType, onChange, true)}
                name={name}
                label={favouriteDayLocationLabel}
                placeholder={`Нажмите для перехода к карте`}
                className={css.inputMap}
                error={error?.message}
              >
                <IconMap
                  className={classnames(css.iconMap, {
                    [css.iconMapError]: error?.message
                  })}
                />
              </Input>
            )}
            name={favouriteDayLocationName}
            control={control}
            rules={{
              required: favouriteDayLocationRequiredError
            }}
          />
          <Controller
            render={({field: {value, onChange, name}, fieldState: {error}}) => (
              <Input
                value={getMapPickerValue(value as MapMarkerRequestValueType, true)}
                onChange={onChange}
                onClick={() => showMapModal(value as MapMarkerRequestValueType, onChange, true)}
                name={name}
                label={favouriteNightLocationLabel}
                placeholder={`Нажмите для перехода к карте`}
                className={css.inputMap}
                error={error?.message}
              >
                <IconMap
                  className={classnames(css.iconMap, {
                    [css.iconMapError]: error?.message
                  })}
                />
              </Input>
            )}
            name={favouriteNightLocationName}
            control={control}
            rules={{
              required: favouriteNightLocationRequiredError
            }}
          />
        </fieldset>
        <Controller
          render={({field: {value, onChange, name}, fieldState: {error}}) => (
            <Input
              checked={!!value}
              onChange={onChange}
              name={name}
              label={agreementLabel}
              className={css.agreement}
              variant={InputVariants.CHECKBOX_DEFAULT}
              error={error?.message}
            />
          )}
          name={agreementName}
          control={control}
          rules={{
            required: agreementRequiredError
          }}
        />
        <Button
          type={ButtonTypes.SUBMIT}
          className={css.button}
          variant={ButtonVariants.FILLED}
          height={ButtonHeights.REGULAR}
          isLoading={isSubmitting}
        >
          Отправить результаты
        </Button>
      </form>
    </div>
  )
}

export default memo(Form)
