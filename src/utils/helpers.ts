import { CALENDAR_START_YEAR, MONTHS } from 'utils/const'

export function throttle(func: (...args: any) => unknown, ms = 500): (...args: unknown[]) => unknown {
  let isThrottled = false,
    savedArgs: unknown[] | null,
    savedThis: unknown;

  function wrapper(...args: any) {
    if (isThrottled) { // (2)
      savedArgs = args;
      savedThis = null;
      return;
    }
    isThrottled = true;

    func.apply(null, [...args]); // (1)

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper
}

export const covertFileToBase64: (file: File) => Promise<string> = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result as string)
  reader.onerror = error => reject(error)
})

export function convertFileAndProcessEncoding (file: File): Promise<string> {
  return covertFileToBase64(file)
    .then(base64code => {
      const query = `;base64,`
      return base64code.slice(base64code.indexOf(query) + query.length)
    })
}

export function addZeroToSingleDigit (value: string | number): string | number {
  return !Number.isNaN(+value) && +value < 10
    ? `0${value}`
    : value
}

export function getFormattedDate (inputDate: number | Date | null, isTimeRequired?: boolean, divider = `.`) {
  if (!inputDate) return ``

  const date = new Date(inputDate)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  if (!isTimeRequired) {
    return `${addZeroToSingleDigit(day)}${divider}${addZeroToSingleDigit(month + 1)}${divider}${year}`
  }

  const hours = date.getHours()
  const minutes = date.getMinutes()

  return `${addZeroToSingleDigit(day)}${divider}${addZeroToSingleDigit(month + 1)}${divider}${year} ${addZeroToSingleDigit(hours)}:${addZeroToSingleDigit(minutes)}`
}

export const getYearOptions = () => {
  const currentYear = (new Date()).getFullYear()

  return new Array(currentYear - CALENDAR_START_YEAR + 1)
    .fill(``)
    .map((_, index) => ({
      label: `${currentYear - index}`,
      value: `${currentYear - index}`
    }))
}

export const monthOptions = new Array(MONTHS.length)
  .fill(``)
  .map((_, index) => ({
    label: MONTHS[index],
    value: MONTHS[index]
  }))
