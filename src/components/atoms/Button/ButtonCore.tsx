import { ElementType, memo } from 'react'
import css from 'components/atoms/Button/ButtonCore.module.scss'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { ButtonCoreProps, ButtonTypes, ExtraProps } from 'components/atoms/Button/ButtonCore.spec'

function ButtonCore ({
  children,
  className,
  type = ButtonTypes.BUTTON,
  url,
  onClick,
  onMouseDown,
  onMouseUp,
  getRef,
  ...restProps
}: ButtonCoreProps): JSX.Element {
  const isHTML: boolean = Boolean(url) &&
    typeof url === `string` &&
    (url.includes(`http`) || url.includes(`mailto:`))

  const TagName: ElementType = url
    ? isHTML
      ? `a`
      : Link
    : `button`

  const extraProps: ExtraProps = TagName === `button`
    ? {
      type,
      onClick,
      onMouseDown,
      onMouseUp
    }
    : isHTML
      ? {
        href: url as string,
        rel: `noopener norefferer`,
        target: `_blank`
      }
      : {
        to: url as string
      }

  return (
    <TagName
      className={classnames(className, css.button)}
      ref={getRef}
      {...extraProps}
      {...restProps}
    >
      { children }
    </TagName>
  )
}

export default memo(ButtonCore)
