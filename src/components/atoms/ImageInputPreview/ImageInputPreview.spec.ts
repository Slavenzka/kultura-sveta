import { ElementType } from 'react'
import { PropsWithClassName, ButtonClickHandlerType } from 'specs/global.spec'

export enum ImageInputVariants {
  DEFAULT = `DEFAULT`
}

export interface ImageInputPreviewProps extends PropsWithClassName {
  /*
  * Optional click handler for the image, e.g. modal with full screen view toggle or smth similar
  */
  handleClickPreview?: ButtonClickHandlerType,
  /*
  * Base64 encoded image without metadata description, e.g. "data:image/jpeg;base64,"
  */
  image: string,
  /*
  * Image file extension for metadata generation, e.g. "data:image/jpeg;base64,"
  */
  imageType?: string,
  /*
  * Content of alt property of the image tag
  */
  name: string,
  /*
  * Optional click handler for delete file button. Button won't be rendered if no handler provided
  */
  onDelete?: ButtonClickHandlerType,
  /*
  * Tag name for the wrapper tag of the component
  */
  TagName?: ElementType,
  /*
  * Defines style presets for specific enum value
  */
  variant?: ImageInputVariants
}

export interface ExtraPropsTypes {
  onClick?: ButtonClickHandlerType
}
