import { memo } from 'react'
import css from './ImageInputPreview.module.scss'
import classnames from 'classnames'
import Button from 'components/atoms/Button/Button'
import IconClose from 'assets/icons/IconClose'
import { ExtraPropsTypes, ImageInputPreviewProps, ImageInputVariants } from './ImageInputPreview.spec'

function ImageInputPreview ({
  className,
  handleClickPreview,
  image,
  imageType = `jpeg`,
  name,
  onDelete,
  TagName = `li`,
  variant = ImageInputVariants.DEFAULT
}: ImageInputPreviewProps) {
  const isFullBase64 = image.includes(`data:image/`)

  const imageSource = isFullBase64
    ? image
    : `data:image/${imageType};base64, ${image}`

  const extraProps: Partial<ExtraPropsTypes> = handleClickPreview
    ? {onClick: handleClickPreview}
    : {}

  return (
    <TagName
      className={classnames(css.wrapper, className, {
        [css.wrapperDefault]: variant === ImageInputVariants.DEFAULT
      })}
    >
      <img
        src={imageSource}
        className={classnames(css.image, {
          [css.imageClickable]: Boolean(handleClickPreview)
        })}
        alt={name}
        {...extraProps}
      />
      <span className={css.name}>
        {name}
      </span>
      {onDelete && (
        <Button
          className={css.button}
          onClick={onDelete}
        >
          <IconClose className={css.icon} />
          Remove image file
        </Button>
      )}
    </TagName>
  )
}

export default memo(ImageInputPreview)
