import { memo, useCallback, useRef } from 'react'
import css from './Header.module.scss'
import Container from 'components/atoms/Container/Container'
import Button from 'components/atoms/Button/Button'
import IconUser from 'assets/icons/IconUser'
import Auth from 'components/molecules/Auth/Auth'
import useClickOutside from 'hooks/ui/useClickOutside'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'store/spec/global.spec'
import { RootReducerSlices } from 'store/utils/const'
import { setAuthVisibility } from 'store/actions'
import Navigation from 'components/atoms/Navigation/Navigation'
import { NAVIGATION_CONFIG } from 'components/molecules/Header/_assets/navigationConfig'
import { isDesktop } from 'react-device-detect'

function Header () {
  const isAuthVisible = useSelector((store: RootState) => store[RootReducerSlices.UI].isAuthVisible)
  const userData = useSelector((store: RootState) => store[RootReducerSlices.FIREBASE].user)
  const dispatch = useAppDispatch()
  const buttonRef = useRef<HTMLElement | null>(null)

  const setVisibility = useCallback((status: boolean) => {
    dispatch(setAuthVisibility(status))
  }, [dispatch])

  const toggleVisibility = useCallback(() => {
    dispatch(setAuthVisibility(!isAuthVisible))
  }, [dispatch, isAuthVisible])

  const handleClickButton = useCallback(() => {
    toggleVisibility()
  }, [toggleVisibility])

  const handleClickOutside = useCallback((evt: React.MouseEvent<HTMLElement>) => {
    const isButtonClicked = evt.target === buttonRef.current

    !isButtonClicked && setVisibility(false)
  }, [setVisibility])

  const {setTargetRef} = useClickOutside({
    handleClickOutside,
    isActive: isAuthVisible
  })

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
        {isDesktop && userData && (
          <Navigation
            config={NAVIGATION_CONFIG}
            className={css.navigation}
          />
        )}
        {isDesktop && (
          <div className={css.wrapperAuth}>
            <Button
              className={css.button}
              onClick={handleClickButton}
              getRef={(node: HTMLElement) => buttonRef.current = node}
            >
              <IconUser className={css.icon} />
            </Button>
            {isAuthVisible && (
              <Auth
                className={css.auth}
                getRef={setTargetRef}
              />
            )}
          </div>
        )}
      </Container>
    </header>
  )
}

export default memo(Header)
