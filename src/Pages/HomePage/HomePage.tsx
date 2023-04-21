import { memo } from 'react'
import css from './HomePage.module.scss'
import Heading from 'components/atoms/Heading/Heading'
import Description from 'components/atoms/Description/Description'
import Container from 'components/atoms/Container/Container'
import ContentFrame from 'components/atoms/ContentFrame/ContentFrame'
import Form from 'components/molecules/Form/Form'
import { useSelector } from 'react-redux'
import { RootState } from 'store/spec/global.spec'
import { RootReducerSlices } from 'store/utils/const'
import classnames from 'classnames'

function HomePage () {
  const isAnswered = useSelector((store: RootState) => store[RootReducerSlices.UI].isAnswered)

  if (isAnswered) return (
    <section>
      <Container>
        <ContentFrame className={classnames(css.content, css.participant)}>
          <Description>
            Спасибо Вам за&nbsp;участие, принятое в&nbsp;нашем опросе! Ваше мнение позволит нам сосредоточить
            свое внимание на&nbsp;наиболее актуальных для жителей и&nbsp;гостей столицы вопросах, связанных
            со&nbsp;световой средой Москвы.
          </Description>
        </ContentFrame>
      </Container>
    </section>
  )

  return (
    <section>
      <Container>
        <Heading>
          Световая среда Москвы
        </Heading>
        <ContentFrame className={css.content}>
          <Description>
            Здравствуйте! Вас приветствует команда бюро светодизайна &quot;Культура света&quot;.
            Пожалуйста, ответьте на&nbsp;несколько наших вопросов о&nbsp;городском освещении Москвы.
            Нам&nbsp;&mdash; световым дизайнерам и&nbsp;исследователям световой среды
            города&nbsp;&mdash; необходима эта информация, чтобы сделать вечернюю Москву
            комфортней и&nbsp;привлекательней для всех.
          </Description>
        </ContentFrame>
        <Form className={css.form} />
      </Container>
    </section>
  )
}

export default memo(HomePage)
