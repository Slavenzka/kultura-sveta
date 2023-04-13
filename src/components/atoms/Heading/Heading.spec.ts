import { PropsWithClassName } from 'specs/global.spec'

export enum HeadingTypes {
  H1 = `h1`,
  H2 = `h2`,
  H3 = `h3`,
  H4 = `h4`,
}

export interface HeadingProps extends PropsWithClassName {
  /*
  * Triggers application of className corresponding to HeadingTypes enum
  */
  headingStyle?: HeadingTypes;
  /*
  * Triggers application of tag name from HeadingTypes enum
  */
  headingType?: HeadingTypes;
  isCapitalized?: boolean;
}
