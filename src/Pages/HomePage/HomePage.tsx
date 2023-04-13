import { memo } from 'react'
import css from './HomePage.module.scss'
import Heading from 'components/atoms/Heading/Heading'
import Description from 'components/atoms/Description/Description'
import Container from 'components/atoms/Container/Container'
import ContentFrame from 'components/atoms/ContentFrame/ContentFrame'
import Form from 'components/molecules/Form/Form'

function HomePage () {
  return (
    <section>
      <Container>
        <Heading>
          Световая среда Москвы
        </Heading>
        <ContentFrame className={css.content}>
          <Description>
            Здравствуйте! Пожалуйста, ответьте на несколько наших вопросов об
            освещении города Москвы. Нам - световым дизайнерам и исследователям
            качества света - необходима эта информация, чтобы сделать вечернюю
            среду города лучше.
          </Description>
        </ContentFrame>
        <Form className={css.form} />
      </Container>
    </section>
  )
}

export default memo(HomePage)
