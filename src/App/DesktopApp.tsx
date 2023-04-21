import { memo } from 'react'
import Routes from 'Pages/Routes'
import Heading from 'components/atoms/Heading/Heading'
import { HeadingTypes } from 'components/atoms/Heading/Heading.spec'
import Header from 'components/molecules/Header/Header'
import FirestoreProvider from 'components/providers/FirestoreProvider/FirestoreProvider'
import Footer from 'components/molecules/Footer/Footer'

function DesktopApp () {
  return (
    <FirestoreProvider>
      <div style={{display: `flex`, flexDirection: `column`, minHeight: `100vh`}}>
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
        <Footer />
      </div>
    </FirestoreProvider>
  )
}

export default memo(DesktopApp)
