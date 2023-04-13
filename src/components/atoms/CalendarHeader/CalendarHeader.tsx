import { memo, useCallback, useMemo } from 'react'
import css from './CalendarHeader.module.scss'
import { CalendarHeaderProps } from './CalendarHeader.spec'
import { MONTHS } from 'utils/const'
import Button from 'components/atoms/Button/Button'
import classnames from 'classnames'
import IconCalendarArrow from 'assets/icons/IconCalendarArrow'
import SelectCustom from 'components/atoms/SelectCustomized/SelectCustomized'
import { getYearOptions, monthOptions } from 'utils/helpers'
import { SelectCustomOptionType } from 'components/atoms/SelectCustomized/SelectCustomized.spec'

function CalendarHeader ({
  areDropdownsRequired,
  changeMonth,
  changeYear,
  date,
  decreaseMonth,
  increaseMonth,
}: CalendarHeaderProps) {

  const getDateToRender = useCallback((date: Date) => {
    const month = date.getMonth()
    const year = date.getFullYear()

    return `${MONTHS[month]} ${year}`
  }, [])

  const dropdowns = useMemo(() => {
    if (!areDropdownsRequired) return null

    const selectedYear = date
      ? (new Date(date)).getFullYear()
      : null

    const selectedMonth = date
      ? MONTHS[date.getMonth()]
      : null

    return (
      <div className={css.selectionWrapper}>
        <SelectCustom
          value={selectedYear
            ? {
              label: `${selectedYear}`,
              value: `${selectedYear}`
            }
            : null
          }
          options={getYearOptions()}
          onChange={evt => {
            changeYear(Number((evt as SelectCustomOptionType).value))
          }}
          hideSelectedOptions
        />
        <SelectCustom
          value={{
            label: `${selectedMonth}`,
            value: `${selectedMonth}`
          }}
          options={monthOptions}
          onChange={evt => {
            changeMonth(MONTHS.indexOf((evt as SelectCustomOptionType).value as string))
          }}
          hideSelectedOptions
        />
      </div>
    )
  }, [date, areDropdownsRequired, changeMonth, changeYear])

  return (
    <div className={css.wrapper}>
      <Button
        className={css.button}
        onClick={decreaseMonth}
      >
        <IconCalendarArrow className={css.icon} />
      </Button>
      <span className={css.label}>
        {getDateToRender(date)}
      </span>
      <Button
        className={classnames(css.button, css.buttonNext)}
        onClick={increaseMonth}
      >
        <IconCalendarArrow className={css.icon} />
      </Button>
      {dropdowns}
    </div>
  )
}

export default memo(CalendarHeader)
