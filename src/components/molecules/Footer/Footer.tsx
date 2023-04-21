import { memo } from 'react'
import css from './Footer.module.scss'
import Container from 'components/atoms/Container/Container'

function Footer () {
  return (
    <footer className={css.wrapper}>
      <Container className={css.container}>
        <span className={css.label}>
          Created by
        </span>
        <a
          href="https://slavenzka.github.io/portfolio/"
          className={css.link}
          target="_blank"
          rel="noopener norefferer noreferrer"
        >
          slavenzka
        </a>
      </Container>
    </footer>
  )
}

export default memo(Footer)
