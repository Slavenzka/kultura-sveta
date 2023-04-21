import { HOME_PAGE, STATS_PAGE } from 'Pages/Routes'
import { NavigationItemType } from 'components/atoms/Navigation/Navigation.spec'

export const NAVIGATION_CONFIG: NavigationItemType[] = [
  {
    label: `Анкета`,
    url: HOME_PAGE
  },
  {
    label: `Статистика`,
    url: STATS_PAGE
  },
]
