import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaHotjar} from 'react-icons/fa'
import {IoLogoGameControllerB} from 'react-icons/io'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatch from '../../Context/contextVideo'

import {
  HeadControl,
  OrderList,
  List,
  ListName,
  ContactSection,
  Contact,
  ImageLogoCon,
  Image,
  Description,
} from './style'

import './index.css'

const HeadControls = () => (
  <NxtWatch.Consumer>
    {value => {
      const {theme, changeIcon, themeActive} = value
      const icon = '#ff0b37'

      return (
        <HeadControl bgTheme={theme}>
          <OrderList>
            <Link to="/" className="link" onClick={() => changeIcon('HOME')}>
              <List bgTheme={theme}>
                <AiFillHome color={themeActive === 'HOME' ? icon : ''} />
                <ListName>Home</ListName>
              </List>
            </Link>
            <Link
              to="/trending"
              className="link"
              onClick={() => changeIcon('TREND')}
            >
              <List bgTheme={theme}>
                <FaHotjar color={themeActive === 'TREND' ? icon : ''} />
                <ListName>Trending</ListName>
              </List>
            </Link>
            <Link
              to="/gaming"
              className="link"
              onClick={() => changeIcon('GAME')}
            >
              <List bgTheme={theme}>
                <IoLogoGameControllerB
                  color={themeActive === 'GAME' ? icon : ''}
                />
                <ListName>Gaming</ListName>
              </List>
            </Link>
            <Link
              to="/saved-videos"
              className="link"
              onClick={() => changeIcon('SAVED')}
            >
              <List bgTheme={theme}>
                <MdPlaylistAdd color={themeActive === 'SAVED' ? icon : ''} />
                <ListName>Saved videos</ListName>
              </List>
            </Link>
          </OrderList>
          <ContactSection bgTheme={theme}>
            <Contact>CONTACT US</Contact>
            <ImageLogoCon>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                alt="facebook logo"
              />
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ImageLogoCon>
            <Description>
              Enjoy! Now to see your channels and recommendations!
            </Description>
          </ContactSection>
        </HeadControl>
      )
    }}
  </NxtWatch.Consumer>
)

export default HeadControls
