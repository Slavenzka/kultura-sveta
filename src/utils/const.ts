import { SelectCustomOptionType } from 'components/atoms/SelectCustomized/SelectCustomized.spec'

export enum DeviceTypes {
  DESKTOP = 'DESKTOP',
  ADAPTIVE = 'ADAPTIVE'
}

export enum LangOptions {
  UA = `УКР`,
  RU = `РУС`,
}

export const CALENDAR_START_YEAR = 2000

export const MONTHS = [
  `Январь`,
  `Февраль`,
  `Март`,
  `Апрель`,
  `Май`,
  `Июнь`,
  `Июль`,
  `Август`,
  `Сентябрь`,
  `Октябрь`,
  `Ноябрь`,
  `Декабрь`
]

export enum WeekDaysLocale {
  Sunday = `Вск`,
  Monday = `Пнд`,
  Tuesday = `Втр`,
  Wednesday = `Срд`,
  Thursday = `Чтв`,
  Friday = `Птн`,
  Saturday = `Сбт`
}

export const LocalStorageProps = {
  IS_HINT_CONFIRMED: `IS_HINT_CONFIRMED`,
  KS_IS_ANSWERED: `KS_IS_ANSWERED`
}

export const Collections = {
  ANSWERS: `ANSWERS`
}

export const Names = {
  AGE: `AGE`,
  REGION: `REGION`,
  EVENING_LOCATION: `EVENING_LOCATION`,
  IMPRESSION: `IMPRESSION`,
  DOMINATION: `DOMINATION`,
  COLORS: `COLORS`,
  SAFETY: `SAFETY`,
  ORIENTATION: `ORIENTATION`,
  LIGHTNING: `LIGHTNING`,
  FAVOURITE_NIGHT: `FAVOURITE_NIGHT`,
  FAVOURITE_DAY: `FAVOURITE_DAY`,
  AGREEMENT: `AGREEMENT`,
  DATE: `DATE`,
  OCCUPATION: `OCCUPATION`,
  WINTER: `WINTER`,
  GENDER: `GENDER`,
  REASON: `REASON`,
  MAP: `MAP`
}

export enum ImpressionOptions {
  BRIGHT = `ярко`,
  DARK = `темно`,
  MEDIUM = `в меру светло`,
  DONT_CARE = `не обращаю внимания`,
}

export enum DominationOptions {
  WARM = `тёплый свет`,
  COLD = `холодный свет`,
  MIXED = `смешанное освещение`,
  DONT_CARE = `не обращаю внимания`,
}

export enum ConfirmationOptions {
  YES = `да`,
  NO = `нет`,
  DONT_CARE = `не обращаю внимания`,
  DUNNO = `не могу сказать`
}

export enum LightningOptions {
  COMFORT = `комфортное`,
  DISCOMFORT = `дискомфортное`,
  DUNNO = `не могу сказать`,
}

export const PinColors = {
  [Names.IMPRESSION]: {
    [ImpressionOptions.BRIGHT]: `silver`,
    [ImpressionOptions.DARK]: `black`,
    [ImpressionOptions.MEDIUM]: `gray`,
  },
  [Names.DOMINATION]: {
    [DominationOptions.WARM]: `yellow`,
    [DominationOptions.COLD]: `blue`,
    [DominationOptions.MIXED]: `gray`,
  },
  [Names.COLORS]: {
    [ConfirmationOptions.YES]: `green`,
    [ConfirmationOptions.NO]: `red`,
  },
  [Names.SAFETY]: {
    [ConfirmationOptions.YES]: `green`,
    [ConfirmationOptions.NO]: `red`,
  },
  [Names.ORIENTATION]: {
    [ConfirmationOptions.YES]: `green`,
    [ConfirmationOptions.NO]: `red`,
  },
  [Names.LIGHTNING]: {
    [LightningOptions.COMFORT]: `green`,
    [LightningOptions.DISCOMFORT]: `red`,
  },
}

export const FieldsData = {
  [Names.AGE]: {
    name: Names.AGE,
    label: `Ваш возраст`,
    errorMessage: `Пожалуйста, выберите Ваш возраст`,
    options: [
      {
        label: `до 18 лет`,
        value: `[0, 17]`
      },
      {
        label: `от 18 до 35 лет`,
        value: `[18, 34]`
      },
      {
        label: `от 35 до 55 лет`,
        value: `[35, 55]`
      },
      {
        label: `старше 55 лет`,
        value: `[55, 100]`
      },
    ] as SelectCustomOptionType[]
  },
  [Names.REGION]: {
    name: Names.REGION,
    label: `В каком районе Вы живёте?`,
    errorMessage: `Пожалуйста, выберите район Вашего проживания`,
    options: [
      {
        label: `Москва, ВАО`,
        value: `ВАО`
      },
      {
        label: `Москва, ЮВАО`,
        value: `ЮВАО`
      },
      {
        label: `Москва, ЮАО`,
        value: `ЮАО`
      },
      {
        label: `Москва, ЮЗАО`,
        value: `ЮЗАО`
      },
      {
        label: `Москва, ЗАО`,
        value: `ЗАО`
      },
      {
        label: `Москва, СЗАО`,
        value: `СЗАО`
      },
      {
        label: `Москва, САО`,
        value: `САО`
      },
      {
        label: `Москва, ЦАО`,
        value: `ЦАО`
      },
      {
        label: `Новая Москва`,
        value: `Новая Москва`
      },
      {
        label: `Подмосковье, но часто бываю в Москве`,
        value: `Подмосковье, но часто бываю в Москве`
      },
    ] as SelectCustomOptionType[]
  },
  [Names.EVENING_LOCATION]: {
    name: Names.EVENING_LOCATION,
    label: `В каком районе Москвы вы чаще бываете по вечерам? Расскажите про освещение там.`,
    errorMessage: `Пожалуйста, выберите метку в районе, где вы чаще всего бываете по вечерам`
  },
  [Names.IMPRESSION]: {
    name: Names.IMPRESSION,
    label: `Общее впечатление от освещения`,
    labelFilter: `Выберите, какие отклики с общим впечатлением от освещения следует показать на карте`,
    errorMessage: `Пожалуйста, поделитесь своим впечатлением`,
    options: [
      ImpressionOptions.BRIGHT,
      ImpressionOptions.DARK,
      ImpressionOptions.MEDIUM,
      ImpressionOptions.DONT_CARE,
    ]
  },
  [Names.DOMINATION]: {
    name: Names.DOMINATION,
    label: `В освещении района преобладает:`,
    labelFilter: `Выберите, какие отклики с впечатлением от теплоты освещения следует показать на карте`,
    errorMessage: `Пожалуйста, поделитесь своим впечатлением`,
    options: [
      DominationOptions.WARM,
      DominationOptions.COLD,
      DominationOptions.MIXED,
      DominationOptions.DONT_CARE,
    ]
  },
  [Names.COLORS]: {
    name: Names.COLORS,
    label: `В освещении улиц используется цветной свет?`,
    labelFilter: `Выберите, какие ответы об использользовании цветного освещения показать`,
    errorMessage: `Пожалуйста, поделитесь своим впечатлением`,
    options: [
      ConfirmationOptions.YES,
      ConfirmationOptions.NO,
      ConfirmationOptions.DONT_CARE,
    ]
  },
  [Names.SAFETY]: {
    name: Names.SAFETY,
    label: `Свет помогает вам чувствовать себя безопасно там?`,
    labelFilter: `Выберите, какие ответы об эффекте безопасности освещения показать`,
    errorMessage: `Пожалуйста, поделитесь своим впечатлением`,
    options: [
      ConfirmationOptions.YES,
      ConfirmationOptions.NO,
      ConfirmationOptions.DUNNO,
    ]
  },
  [Names.ORIENTATION]: {
    name: Names.ORIENTATION,
    label: `Освещение помогает вам ориентироваться в пространстве/находить нужные места и пути к ним?`,
    labelFilter: `Выберите, какие ответы о помощи в ориентировании в пространстве и на местности показать`,
    errorMessage: `Пожалуйста, поделитесь своим впечатлением`,
    options: [
      ConfirmationOptions.YES,
      ConfirmationOptions.NO,
      ConfirmationOptions.DUNNO,
    ]
  },
  [Names.LIGHTNING]: {
    name: Names.LIGHTNING,
    label: `Как вы охарактеризуете освещение в районе?`,
    labelFilter: `Выберите, какие ответы о комфорте освещения показать`,
    errorMessage: `Пожалуйста, поделитесь своим впечатлением`,
    options: [
      LightningOptions.COMFORT,
      LightningOptions.DISCOMFORT,
      LightningOptions.DUNNO,
    ]
  },
  [Names.FAVOURITE_NIGHT]: {
    name: Names.FAVOURITE_NIGHT,
    label: `Назовите места в Москве (улицы, скверы, парки, набережные, площади и т.п.), которые вы выбираете для вечерних прогулок и отдыха`,
    errorMessage: `Пожалуйста, выберите хотя бы одно любимое место вечерней Москвы`
  },
  [Names.FAVOURITE_DAY]: {
    name: Names.FAVOURITE_DAY,
    label: `Назовите, пожалуйста, места в Москве (улицы, скверы, парки, набережные, площади и т.п.), которые вы выбираете для прогулок и отдыха днем`,
    errorMessage: `Пожалуйста, выберите хотя бы одно любимое место дневной Москвы`
  },
  [Names.AGREEMENT]: {
    name: Names.AGREEMENT,
    label: `Я выражаю согласие с обработкой предоставленных мной персональных данных`,
    errorMessage: `Для сохранения данных анкеты, пожалуйста, согласитесь с обработкой предоставленных сведений`
  },
}
