import { memo, useMemo } from 'react'
import css from './ModalMessage.module.scss'
import { ModalMessageProps } from 'components/molecules/modals/ModalMessage/ModalMessage.spec'
import Heading from 'components/atoms/Heading/Heading'
import Button from 'components/atoms/Button/Button'
import useModal from 'hooks/ui/useModal'
import { HeadingTypes } from 'components/atoms/Heading/Heading.spec'
import IconSuccess from 'assets/icons/IconSuccess'
import { ButtonHeights, ButtonVariants } from 'components/atoms/Button/Button.spec'
import IconError from 'assets/icons/IconError'

function ModalMessage ({
  heading,
  description,
  isError
}: ModalMessageProps) {
  const {closeModal} = useModal()

  const icon = useMemo(() => isError
    ? <IconError className={css.icon} />
    : <IconSuccess className={css.icon} />
    , [isError])

  return (
    <div className={css.wrapper}>
      {icon}
      <div className={css.content}>
        <Heading
          className={css.heading}
          headingStyle={HeadingTypes.H3}
        >
          {heading}
        </Heading>
        <p
          className={css.description}
          dangerouslySetInnerHTML={{__html: description}}
        />
        <Button
          onClick={closeModal}
          variant={ButtonVariants.FILLED}
          height={ButtonHeights.REGULAR}
          className={css.button}
        >
          Ок
        </Button>
      </div>
    </div>
  )
}

export default memo(ModalMessage)
