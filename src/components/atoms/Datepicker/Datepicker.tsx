import {
  Dispatch,
  ForwardedRef,
  forwardRef,
  Fragment,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import css from './Datepicker.module.scss'
import Input from 'components/atoms/Input/Input'
import classnames from 'classnames'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { DateInputType, DatepickerProps, DatepickerVariants } from './Datepicker.spec'
import CalendarHeader from 'components/atoms/CalendarHeader/CalendarHeader'
import { WeekDaysLocale } from 'utils/const'
import { getFormattedDate } from 'utils/helpers'

const Datepicker = forwardRef(({
  areDropdownsRequired = true,
  className,
  error,
  extraBlock,
  InputComponent,
  isCloseOnSelect = true,
  isCloseOnClickOutside = true,
  isDisabled,
  isHoursPickRequired = true,
  isMinutesPickRequired = true,
  inputValueFormatter,
  label,
  onChange,
  value,
  renderCustomTrigger,
  variant = DatepickerVariants.DEFAULT,
  ...props
}: DatepickerProps, ref: ForwardedRef<Dispatch<SetStateAction<boolean>>>) => {
  const [open, setOpen] = useState(false)

  const isSingleTimepicker = isHoursPickRequired && !isMinutesPickRequired
  const isNotTimepicker = !isHoursPickRequired

  const inputValue = useMemo(() => {
    if (inputValueFormatter) return inputValueFormatter(value)

    return getFormattedDate(value, !isNotTimepicker)
  }, [value, inputValueFormatter, isNotTimepicker])

  const DateInput: DateInputType = useCallback(({value, onClick, label}) => {
    if (renderCustomTrigger) return renderCustomTrigger({onClick})

    const inputProps = {
      error,
      onClick,
      value,
      label
    }

    if (InputComponent === Fragment) return <Fragment />

    if (InputComponent) {
      return (
        <InputComponent
          {...inputProps}
        />
      )
    }

    return (
      <Input
        {...inputProps}
        label={label}
        readOnly
      />
    )
  }, [InputComponent, error, renderCustomTrigger])

  useEffect(() => {
    // ref is used to lift the setOpenStatus function for DateRangePickerWithControls
    if (ref && typeof ref === `function`) {
      ref(setOpen)
    }
  }, [ref])

  return (
    <div
      className={classnames(css.wrapper, className, {
        [css.wrapperDisabled]: isDisabled,
        [css.wrapperSingleTimepicker]: isSingleTimepicker,
        [css.wrapperNoTimepicker]: isNotTimepicker,
        [css.wrapperSingleDate]: variant === DatepickerVariants.SINGLE_DATE
      })}
    >
      {InputComponent !== Fragment && (
        <DateInput
          onClick={() => {
            setOpen(prevState => !prevState)
          }}
          value={inputValue}
          label={label}
        />
      )}
      <DatePicker
        open={open}
        selected={value ? new Date(value) : null}
        customInput={<Fragment />}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        onChange={(evt: Date) => {
          onChange(+evt)
          isCloseOnSelect && setOpen(false)
        }}
        onClickOutside={() => {
          isCloseOnClickOutside && setOpen(false)
        }}
        renderCustomHeader={props => (
          <CalendarHeader
            areDropdownsRequired={areDropdownsRequired}
            {...props}
          />
        )}
        showPopperArrow={false}
        popperPlacement={'top'}
        popperModifiers={[
          {
            name: 'offset',
            options: {
              offset: ({ placement }) => {
                const isTopPosition = placement === 'top' || placement === `top-start` || placement === `top-end`

                if (isTopPosition) {
                  return [0, 30];
                }

                return [0, 10];
              },
            },
          },
        ]}
        disabledKeyboardNavigation
        formatWeekDay={date => {
          return WeekDaysLocale[date]
        }}
        calendarStartDay={1}
        // Adding additional span for styling
        renderDayContents={(day) => {
          return (
            <span className="react-datepicker__day--wrapper">
              {day}
            </span>
          )
        }}
        {...props}
      >
        {extraBlock}
      </DatePicker>
    </div>
  )
})

export default Datepicker
