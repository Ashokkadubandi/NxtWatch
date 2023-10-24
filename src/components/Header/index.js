import {IoMoonOutline} from 'react-icons/io5'
import {AiOutlineBars} from 'react-icons/ai'
import {BiExit} from 'react-icons/bi'
import NxtWatch from '../../Context/contextVideo'

// IoMoonOutline

import {MobileHead, ControlFlex, HeadLogo, LargeWidth, LogOut} from './style'

const Header = () => (
  <NxtWatch.Consumer>
    {value => {
      const {theme, changeTheme} = value
      const Logo = theme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const OnclickChange = () => {
        changeTheme()
      }

      return (
        <>
          <MobileHead bgTheme={theme}>
            <HeadLogo src={Logo} alt="website logo" />
            <ControlFlex bgTheme={theme}>
              <IoMoonOutline onClick={OnclickChange} />
              <AiOutlineBars />
              <BiExit />
            </ControlFlex>
          </MobileHead>
          <LargeWidth bgTheme={theme}>
            <HeadLogo src={Logo} alt="website logo" />
            <ControlFlex bgTheme={theme}>
              <IoMoonOutline onClick={OnclickChange} />
              <AiOutlineBars />
              <LogOut type="button" bgTheme={theme}>
                Logout
              </LogOut>
            </ControlFlex>
          </LargeWidth>
        </>
      )
    }}
  </NxtWatch.Consumer>
)

export default Header
