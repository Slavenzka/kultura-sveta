import { memo } from 'react'
import Routes from 'Pages/Routes'
import Heading from 'components/atoms/Heading/Heading'
import { HeadingTypes } from 'components/atoms/Heading/Heading.spec'
import Header from 'components/molecules/Header/Header'

function DesktopApp () {
  return (
    <>
      <Header />
      <main>
        <Heading
          headingStyle={HeadingTypes.H1}
          headingType={HeadingTypes.H1}
        >
          Анкета для сбора сведений о световой среде
        </Heading>
        <Routes />
      </main>
    </>
  )
}

export default memo(DesktopApp)
