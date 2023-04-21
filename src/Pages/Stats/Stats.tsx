import { memo, useMemo } from 'react'
import css from './Stats.module.scss'
import useAnswers from 'hooks/firebase/useAnswers'
import IconSpinner from 'assets/icons/IconSpinner'
import Container from 'components/atoms/Container/Container'
import Filter from 'components/molecules/Filter/Filter'
import Heading from 'components/atoms/Heading/Heading'

function Stats () {
  const {data, isFetching} = useAnswers()

  const content = useMemo(() => {
    if (isFetching) return (
      <IconSpinner className={css.spinner} />
    )

    console.log(data)

    if (Array.isArray(data) && data.length > 0) {
      return (
        <>
          <Heading>
            Просмотр результатов
          </Heading>
          <Filter
            data={data}
            className={css.filter}
          />
        </>
      )
    }

    return (
      <div className={css.empty}>
        На текущий момент результаты опроса отсутствуют
      </div>
    )
  }, [isFetching, data])

  return (
    <section>
      <Container className={css.wrapper}>
        {content}
      </Container>
    </section>
  )
}

export default memo(Stats)
