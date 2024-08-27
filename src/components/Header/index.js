import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoMoonOutline} from 'react-icons/io5'
import {AiOutlineBars} from 'react-icons/ai'
import {BiExit} from 'react-icons/bi'
import NxtWatch from '../../Context/contextVideo'

// IoMoonOutline

import {
  BarTheme,
  MobileHead,
  ControlFlex,
  HeadLogo,
  LargeWidth,
  ProfileImg,
  ThemeBtn,
  LogOut,
  PopupContainer,
  PopupCard,
  PopAlert,
  PopBtn,
  PopBtnCon,
  BarRoute,
  Bars,
} from './style'

import './index.css'

const Header = props => {
  const logoutAccount = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const RenderPopDesign = theme => (
    <Popup
      trigger={
        <LogOut type="button" bgTheme={theme}>
          Logout
        </LogOut>
      }
      modal
    >
      {close => (
        <PopupContainer>
          <PopupCard bgTheme={theme}>
            <PopAlert bgTheme={theme}>Are you sure want to logout</PopAlert>
            <PopBtnCon>
              <PopBtn type="button" onClick={() => close()}>
                Cancel
              </PopBtn>
              <PopBtn type="button" onClick={logoutAccount}>
                Confirm
              </PopBtn>
            </PopBtnCon>
          </PopupCard>
        </PopupContainer>
      )}
    </Popup>
  )

  const NavigateToHome = () => {
    const {history} = props
    history.replace('/')
  }

  const renderBarLinks = (is, theme) =>
    is && (
      <BarRoute bgTheme={theme}>
        <Link to="/" className="links">
          <Bars bgTheme={theme}>Home</Bars>
        </Link>
        <Link to="/trending" className="links">
          <Bars bgTheme={theme}>Trending</Bars>
        </Link>
        <Link to="/gaming" className="links">
          <Bars bgTheme={theme}>Gaming</Bars>
        </Link>
        <Link to="/saved-videos" className="links">
          <Bars bgTheme={theme}>Saved</Bars>
        </Link>
      </BarRoute>
    )
  const getBarOutlineData = () => (
    <NxtWatch.Consumer>
      {value => {
        const {changeBar} = value

        return (
          <>
            <button type="button" onClick={changeBar}>
              <AiOutlineBars />
            </button>
          </>
        )
      }}
    </NxtWatch.Consumer>
  )

  return (
    <NxtWatch.Consumer>
      {value => {
        const {theme, changeTheme, hide} = value
        const Logo = theme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const OnclickChange = () => {
          changeTheme()
        }

        return (
          <>
            <BarTheme bgTheme={theme}>
              <MobileHead bgTheme={theme}>
                <HeadLogo
                  src={Logo}
                  alt="website logo"
                  onClick={NavigateToHome}
                />
                <ControlFlex bgTheme={theme}>
                  <ThemeBtn
                    type="button"
                    data-testid="theme"
                    onClick={OnclickChange}
                    bgTheme={theme}
                  >
                    <IoMoonOutline size="25px" />
                  </ThemeBtn>
                  {getBarOutlineData()}
                  <BiExit />
                </ControlFlex>
              </MobileHead>
              {renderBarLinks(hide, theme)}
            </BarTheme>
            <LargeWidth bgTheme={theme}>
              <HeadLogo
                src={Logo}
                alt="website logo"
                onClick={NavigateToHome}
              />
              <ControlFlex bgTheme={theme}>
                <ThemeBtn type="button" onClick={OnclickChange} bgTheme={theme}>
                  <IoMoonOutline size="30px" />
                </ThemeBtn>
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                {RenderPopDesign(theme)}
              </ControlFlex>
            </LargeWidth>
          </>
        )
      }}
    </NxtWatch.Consumer>
  )
}

export default withRouter(Header)
