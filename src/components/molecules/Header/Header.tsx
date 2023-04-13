import { memo } from 'react'
import css from './Header.module.scss'
import Container from 'components/atoms/Container/Container'
import Button from 'components/atoms/Button/Button'
import IconUser from 'assets/icons/IconUser'

function Header () {
  return (
    <header className={css.header}>
      <Container className={css.wrapper}>
        <a
          href="https://kulturasveta.ru/"
          className={css.logo}
          target="_blank"
          rel="noopener norefferer noreferrer"
        >
          {`Перейти на сайт "Культура Света"`}
        </a>
        <Button
          className={css.button}
          onClick={() => alert(`Auth would be here`)}
        >
          <IconUser className={css.icon} />
        </Button>
      </Container>
    </header>
  )
}

export default memo(Header)
