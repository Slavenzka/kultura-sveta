import { memo } from 'react'
import css from './Legend.module.scss'
import classnames from 'classnames'
import { PropsWithClassName } from 'specs/global.spec'

function Legend ({
  className,
  data
}: {
  data: {[key: string]: string}
} & PropsWithClassName) {
  return (
    <dl className={classnames(css.wrapper, className)}>
      {Object.entries(data).map(([answer, color], index) => (
        <div className={css.item} key={`${answer}-${color}-${index}`}>
          <dt className={css.color} style={{backgroundColor: `${color}`}} />
          <dd className={css.answer}>
            {answer}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export default memo(Legend)
