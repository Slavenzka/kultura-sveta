import { memo, PropsWithChildren } from 'react'
import css from './Heading.module.scss'
import classnames from 'classnames'
import { HeadingProps, HeadingTypes } from 'components/atoms/Heading/Heading.spec'

function Heading ({
  className,
  headingStyle = HeadingTypes.H2,
  headingType = HeadingTypes.H2,
  children,
  isCapitalized,
  ...props
}: PropsWithChildren<HeadingProps>) {
  const TagName = headingType ?? HeadingTypes.H2

  return (
    <TagName
      className={classnames(css.wrapper, className, css[headingStyle], {
        [css.wrapperCapitalized]: isCapitalized,
      })}
      {...props}
    >
      { children }
    </TagName>
  )
}

export default memo(Heading)
